import { generatePdfFromHtml } from "@/lib/pdf";
import { processTemplate } from "@/lib/template";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const template = req.nextUrl.searchParams.get("template");
    const data = req.nextUrl.searchParams.get("data");
    const forceDownload = req.nextUrl.searchParams.get("forceDownload");

    if (!template) {
      return new Response("Template parameter is required", { status: 400 });
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

    const pdfBuffer = await generatePdfFromHtml(processedHtml);

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `${
          forceDownload ? "attachment" : "inline"
        }; filename="generated-from-html.pdf"`,
      },
    });
  } catch (error) {
    console.error("Error generating PDF from HTML:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
