import { type Path } from "./Path.js"
import { type Space } from "./Space.js"

export type Searching<Problem, Branch> = {
  space: Space<Problem, Branch>
  problem: Problem
  queue: Array<Path<Problem, Branch>>
  solved: Array<Path<Problem, Branch>>
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
