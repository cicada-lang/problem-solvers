import assert from "node:assert"
import test from "node:test"
import { add } from "./arithmetic.js"

test("generics / arithmetic / add", () => {
  assert.deepStrictEqual(add(1, 2), 3)
})
