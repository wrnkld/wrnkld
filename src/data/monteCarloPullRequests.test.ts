/// <reference types="node" />
import { test } from "node:test";
import { strict as assert } from "node:assert";
import { pullRequests } from "./monteCarloPullRequests";

test("Shipping shows exactly ten distinct PRs", () => {
  assert.equal(pullRequests.length, 10);
  assert.equal(new Set(pullRequests.map((pr) => pr.title)).size, 10);
});

test("invented counts never receive fabricated GitHub PR identifiers", () => {
  assert.equal(pullRequests.filter((pr) => pr.illustrative).length, 9);
  for (const pr of pullRequests.filter((pr) => pr.illustrative)) {
    assert.equal(pr.id, null);
  }
});

test("retained tenth PR preserves its stored change counts", () => {
  const retained = pullRequests.find((pr) => pr.id === 15209);
  assert.ok(retained);
  assert.deepEqual([retained.files, retained.additions, retained.deletions], [16, 390, 279]);
});