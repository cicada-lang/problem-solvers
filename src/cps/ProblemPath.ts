import { type ProblemSpace } from "./ProblemSpace.js"

export type ProblemPath<Problem, Branch> = {
  prefix: Array<[Problem, Branch]>
  current: Problem
}

export function initialProblemPath<Problem, Branch>(
  problem: Problem,
): ProblemPath<Problem, Branch> {
  return {
    prefix: [],
    current: problem,
  }
}

export function extendProblemPath<Problem, Branch>(
  path: ProblemPath<Problem, Branch>,
  branch: Branch,
  problem: Problem,
): ProblemPath<Problem, Branch> {
  return {
    prefix: [...path.prefix, [path.current, branch]],
    current: problem,
  }
}

export function ramify<Branch, Problem>(
  space: ProblemSpace<Problem, Branch>,
  path: ProblemPath<Problem, Branch>,
): Array<ProblemPath<Problem, Branch>> {
  const branches = space.validBranches(path.current)
  return branches.map((branch) =>
    extendProblemPath(path, branch, space.branchApply(branch, path.current)),
  )
}
