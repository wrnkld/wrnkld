/// <reference types="node" />
import { test } from "node:test";
import { strict as assert } from "node:assert";
import { customerFeedback, representativeFeedback, researchStats, researchStudies } from "./customerResearch";

test("full research includes 25 participants", () => {
  assert.equal(researchStats.participants, 25);
});

test("full research represents 18 companies", () => {
  assert.equal(researchStats.companies, 18);
});

test("full research includes 8 studies", () => {
  assert.equal(researchStats.studies, 8);
});

test("representative matrix retains ten original participants across all roles and studies", () => {
  assert.equal(representativeFeedback.length, 10);
  assert.equal(new Set(representativeFeedback.map((row) => row.customer)).size, 10);
  assert.deepEqual(new Set(representativeFeedback.map((row) => row.role)), new Set(customerFeedback.map((row) => row.role)));
  for (const study of researchStudies) {
    assert.ok(representativeFeedback.some((row) => row[study] === "Complete"));
  }
});