import { preview } from "vite";
import { afterAll, beforeAll, describe, test } from "vitest";
import { chromium } from "playwright";
import { expect } from "@playwright/test";

describe("Basic", async () => {
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

    await page.goto("http://localhost:3000");
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
    const screen = await page.locator(".screen");

    await expect(screen).toBeVisible();
  });

  test("keyboard should be visible", async () => {
    const keyboard = await page.locator(".keyboard");

    await expect(keyboard).toBeVisible();
  });

  test("percent should work", async () => {
    const lastOperation = await page.locator(".screen__last-operation");
    const currentOperation = await page.locator(".screen__current-operation");

    await page.click("[data-value=clearAll]");
    await page.click("[data-value=number1]");
    await page.click("[data-value=number0]");
    await page.click("[data-value=percent]");
    await page.click("[data-value=number1]");
    await page.click("[data-value=number0]");
    await page.click("[data-value=number0]");
    await page.click("[data-value=equals]");

    await expect(lastOperation).toHaveText("10 % 100");
    await expect(currentOperation).toHaveText("10");
  });

  test("divide should work", async () => {
    const lastOperation = await page.locator(".screen__last-operation");
    const currentOperation = await page.locator(".screen__current-operation");

    await page.click("[data-value=clearAll]");
    await page.click("[data-value=number4]");
    await page.click("[data-value=divide]");
    await page.click("[data-value=number2]");
    await page.click("[data-value=equals]");

    await expect(lastOperation).toHaveText("4 ÷ 2");
    await expect(currentOperation).toHaveText("2");
  });

  test("multiply should work", async () => {
    const lastOperation = await page.locator(".screen__last-operation");
    const currentOperation = await page.locator(".screen__current-operation");

    await page.click("[data-value=clearAll]");
    await page.click("[data-value=number2]");
    await page.click("[data-value=multiply]");
    await page.click("[data-value=number2]");
    await page.click("[data-value=equals]");

    await expect(lastOperation).toHaveText("2 × 2");
    await expect(currentOperation).toHaveText("4");
  });

  test("subtract should work", async () => {
    const lastOperation = await page.locator(".screen__last-operation");
    const currentOperation = await page.locator(".screen__current-operation");

    await page.click("[data-value=clearAll]");
    await page.click("[data-value=number4]");
    await page.click("[data-value=subtract]");
    await page.click("[data-value=number2]");
    await page.click("[data-value=equals]");

    await expect(lastOperation).toHaveText("4 − 2");
    await expect(currentOperation).toHaveText("2");
  });

  test("sum should work", async () => {
    const lastOperation = await page.locator(".screen__last-operation");
    const currentOperation = await page.locator(".screen__current-operation");

    await page.click("[data-value=clearAll]");
    await page.click("[data-value=number2]");
    await page.click("[data-value=sum]");
    await page.click("[data-value=number2]");
    await page.click("[data-value=equals]");

    await expect(lastOperation).toHaveText("2 + 2");
    await expect(currentOperation).toHaveText("4");
  });
});
