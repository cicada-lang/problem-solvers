import { type ProblemPath } from "./ProblemPath.js"
import { type Space } from "./Space.js"

export type Searching<Problem, Branch> = {
  space: Space<Problem, Branch>
  problem: Problem
  queue: Array<ProblemPath<Problem, Branch>>
  solved: Array<ProblemPath<Problem, Branch>>
}

export function createSearching<Problem, Branch>(
  space: Space<Problem, Branch>,
  problem: Problem,
): Searching<Problem, Branch> {
  return {
    space,
    problem,
    queue: [],
    solved: [],
  }
}
