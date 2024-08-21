import { type ProblemSpace } from "./ProblemSpace.js"

export function problemExpand<Branch, Problem>(
  solver: ProblemSpace<Problem, Branch>,
  problem: Problem,
): Array<[Branch, Problem]> {
  const branches = solver.validBranches(problem)
  return branches.map((branch) => [
    branch,
    solver.branchApply(branch, problem),
  ])
}
