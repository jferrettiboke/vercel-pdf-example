import { closeBrowser, createBrowserInstance } from "@/lib/puppeteer-utils";
import { processTemplate } from "@/lib/template";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  let browser = null;
  try {
    const template = req.nextUrl.searchParams.get("template");
    const data = req.nextUrl.searchParams.get("data");

    if (!template) {
      return NextResponse.json(
        { error: "Template parameter is required" },
        { status: 400 }
      );
    }

    let processedHtml: string;
    try {
      processedHtml = await processTemplate(template, data);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { error: `Template '${template}' not found` },
        { status: 404 }
      );
    }

    const { browser: browserInstance, page } = await createBrowserInstance();
    browser = browserInstance;

    // Set HTML content directly instead of navigating to a URL
    await page.setContent(processedHtml, {
      waitUntil: "networkidle0",
      timeout: 100000,
    });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "20px",
        bottom: "20px",
        left: "20px",
        right: "20px",
      },
    });

    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set("Content-Length", pdf.length.toString());
    headers.set("Content-Disposition", `inline; filename=${template}.pdf`);

    return new NextResponse(pdf, { status: 200, statusText: "OK", headers });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await closeBrowser(browser);
  }
}
