import { generatePdfFromHtml } from "@/lib/pdf";
import { renderTemplate, parseTemplateData } from "@/lib/template";
import { readFile } from "node:fs/promises";
import { NextRequest } from "next/server";
import { join } from "node:path";

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

    const templatePath = join(
      process.cwd(),
      "app/templates",
      `${template}.html`
    );
    const html = await readFile(templatePath, "utf8");

    // Parse template data from query parameter
    const templateData = parseTemplateData(data);

    // Render template with variables
    const processedHtml = renderTemplate(html, templateData);

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
