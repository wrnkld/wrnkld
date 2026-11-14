/// <reference types="node" />
import { test } from "node:test";
import { strict as assert } from "node:assert";
import { pullRequests } from "./monteCarloPullRequests";

test("Shipping shows exactly ten distinct PRs", () => {
  assert.equal(pullRequests.length, 10);
  assert.equal(new Set(pullRequests.map((pr) => pr.title)).size, 10);
});

const suppliedRows = [
  [14352, 28, 1842, 936],
  [14354, 17, 1126, 584],
  [14586, 34, 2478, 1613],
  [17254, 42, 3184, 2267],
  [17226, 51, 2869, 1942],
  [15998, 39, 2651, 1738],
  [16365, 67, 1924, 2846],
  [17365, 46, 4218, 782],
  [16848, 23, 1476, 693],
  [15209, 16, 390, 279],
];

for (const [index, expected] of suppliedRows.entries()) {
  test(`PR #${expected[0]} matches Matthew's supplied identifier and counts`, () => {
    const pr = pullRequests[index];
    assert.ok(pr);
    assert.deepEqual([pr.id, pr.files, pr.additions, pr.deletions], expected);
    assert.equal(pr.illustrative, false);
  });
}

test("retained tenth PR preserves its stored change counts", () => {
  const retained = pullRequests.find((pr) => pr.id === 15209);
  assert.ok(retained);
  assert.deepEqual([retained.files, retained.additions, retained.deletions], [16, 390, 279]);
});