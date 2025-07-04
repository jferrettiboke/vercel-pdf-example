import chromium from "@sparticuz/chromium-min";

chromium.setHeadlessMode = true;

const localExecutablePath = (() => {
  console.log("process.platform", process.platform);
  switch (process.platform) {
    case "win32":
      return "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
    case "linux":
      return "/usr/bin/google-chrome";
    case "darwin":
      return "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
    default:
      throw new Error(`Unsupported platform: ${process.platform}`);
  }
})();

const remoteExecutablePath =
  "https://github.com/Sparticuz/chromium/releases/download/v119.0.2/chromium-v119.0.2-pack.tar";

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
    headless:
      chromium.headless === "chrome-headless-shell"
        ? "shell"
        : chromium.headless,
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
