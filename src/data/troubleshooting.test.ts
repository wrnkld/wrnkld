import { test } from "node:test";
import { strict as assert } from "node:assert";
import { troubleshootingSankey } from "./troubleshooting";

test("PDF customer counts remain exact and conserve flow", () => {
  const links = troubleshootingSankey.links;
  assert.deepEqual(links.map((link) => link.value), [228, 242, 86, 52, 83, 21]);
  assert.equal(links.filter((link) => link.source === 0).reduce((sum, link) => sum + link.value, 0), 470);
  assert.equal(links.filter((link) => link.source === 2).reduce((sum, link) => sum + link.value, 0), 242);
});