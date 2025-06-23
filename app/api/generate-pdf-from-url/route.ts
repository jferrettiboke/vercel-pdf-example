import {
  closeBrowser,
  createBrowserInstance,
  navigateToPage,
} from "@/lib/puppeteer-utils";
import { NextResponse } from "next/server";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  let browser = null;
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");

    if (!url) {
      return NextResponse.json(
        { error: "URL parameter is required" },
        { status: 400 }
      );
    }

    // Basic URL validation
    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        { error: "Invalid URL format" },
        { status: 400 }
      );
    }

    const { browser: browserInstance, page } = await createBrowserInstance();
    browser = browserInstance;

    await navigateToPage(page, url);

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    const headers = new Headers();

    headers.set("Content-Type", "application/pdf");
    headers.set("Content-Length", pdf.length.toString());
    headers.set("Content-Disposition", "inline; filename=generated.pdf");

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
