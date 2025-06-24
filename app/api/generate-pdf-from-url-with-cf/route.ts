import { generatePdfFromUrl } from "@/lib/pdf";
import { NextRequest } from "next/server";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  const forceDownload = req.nextUrl.searchParams.get("forceDownload");

  if (!url) {
    return new Response("URL parameter is required", { status: 400 });
  }

  const pdfBuffer = await generatePdfFromUrl(url);

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `${
        forceDownload ? "attachment" : "inline"
      }; filename="${url.split("/").pop()}.pdf"`,
    },
  });
}
