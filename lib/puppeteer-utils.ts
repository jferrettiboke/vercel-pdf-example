const localExecutablePath =
  process.platform === "win32"
    ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
    : process.platform === "linux"
    ? "/usr/bin/google-chrome"
    : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const remoteExecutablePath =
  "https://github.com/Sparticuz/chromium/releases/download/v137.0.1/chromium-v137.0.1-pack.x64.tar";

const isDev = process.env.NODE_ENV === "development";

export interface BrowserInstance {
  browser: any;
  page: any;
}

export async function createBrowserInstance(): Promise<BrowserInstance> {
  const chromium = require("@sparticuz/chromium-min");
  const puppeteer = require("puppeteer-core");

  const browser = await puppeteer.launch({
    args: isDev ? [] : chromium.args,
    defaultViewport: { width: 1920, height: 1080 },
    executablePath: isDev
      ? localExecutablePath
      : await chromium.executablePath(remoteExecutablePath),
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  return { browser, page };
}

export async function navigateToPage(
  page: any,
  url: string,
  options?: {
    waitUntil?: "networkidle0" | "networkidle2" | "domcontentloaded" | "load";
    timeout?: number;
  }
): Promise<void> {
  const defaultOptions = {
    waitUntil: "networkidle0" as const,
    timeout: 100000,
  };

  await page.goto(url, { ...defaultOptions, ...options });
  console.log("page title", await page.title());
}

export async function closeBrowser(browser: any): Promise<void> {
  if (browser) {
    await browser.close();
  }
}
