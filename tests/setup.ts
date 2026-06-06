import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { JSDOM } from "jsdom";
import { fetch, Headers, Request, Response } from "undici";
import { afterEach, beforeEach, vi } from "vitest";

Object.assign(globalThis, {
  fetch: fetch as typeof globalThis.fetch,
  Headers: Headers as typeof globalThis.Headers,
  Request: Request as typeof globalThis.Request,
  Response: Response as typeof globalThis.Response,
});

function ensureWebStorage() {
  const storageWorks =
    typeof globalThis.localStorage?.clear === "function" &&
    typeof globalThis.sessionStorage?.clear === "function";

  if (storageWorks) return;

  const dom = new JSDOM("", { url: "http://localhost/" });
  vi.stubGlobal("localStorage", dom.window.localStorage);
  vi.stubGlobal("sessionStorage", dom.window.sessionStorage);
}

ensureWebStorage();

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});
