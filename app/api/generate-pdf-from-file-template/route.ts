import { closeBrowser, createBrowserInstance } from "@/lib/puppeteer-utils";
import { parseTemplateData, renderTemplate } from "@/lib/template";
import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import { join } from "path";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  let browser = null;
  try {
    const { searchParams } = new URL(request.url);
    const template = searchParams.get("template");

    // Require template parameter
    if (!template) {
      return NextResponse.json(
        { error: "Template parameter is required" },
        { status: 400 }
      );
    }

    // Construct template path
    const templatePath = join(
      process.cwd(),
      "app/templates",
      `${template}.html`
    );

    // Read HTML template from file system
    let htmlContent: string;
    try {
      htmlContent = await readFile(templatePath, "utf-8");
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { error: `Template '${template}' not found` },
        { status: 404 }
      );
    }

    // Get optional data parameter for template interpolation
    const dataParam = searchParams.get("data");
    const templateData = parseTemplateData(dataParam);

    // Use template utility for interpolation
    const processedHtml = renderTemplate(htmlContent, templateData);

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
