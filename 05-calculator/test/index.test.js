import { preview } from "vite";
import { afterAll, beforeAll, describe, test } from "vitest";
import { chromium } from "playwright";
import { expect } from "@playwright/test";

describe("Tests", async () => {
  let server;
  let browser;
  let page;

  beforeAll(async () => {
    server = await preview({
      preview: {
        port: 3000,
      },
    });
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    await new Promise((resolve, reject) => {
      server.httpServer.close((error) => {
        error ? reject(error) : resolve();
      });
    });
  });

  test("screen should be visible", async () => {
    await page.goto("http://localhost:3000");

    const screen = await page.locator(".screen");

    await expect(screen).toBeVisible();
  });
});
