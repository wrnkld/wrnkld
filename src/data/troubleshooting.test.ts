import { test, expect } from "bun:test";
import { troubleshootingSankey } from "./troubleshooting";

test("PDF customer counts remain exact and conserve flow", () => {
  const links = troubleshootingSankey.links;
  expect(links.map((link) => link.value)).toEqual([228, 242, 86, 52, 83, 21]);
  expect(links.filter((link) => link.source === 0).reduce((sum, link) => sum + link.value, 0)).toBe(470);
  expect(links.filter((link) => link.source === 2).reduce((sum, link) => sum + link.value, 0)).toBe(242);
});