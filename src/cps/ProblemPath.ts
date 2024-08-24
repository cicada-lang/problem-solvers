import { type ProblemSpace } from "./ProblemSpace.js"

// 假设我们用 (p) 来表示 Problem，用 [b] 来表示 Branch，
// 那么形如 (p0) -> [b0] -> (p1) -> [b1] -> (p2)
// 的 Path，会被实现为：
// - prefix: [[p0, b0], [p1, b1]]
// - current: p2

export type ProblemPath<Problem, Branch> = {
  space: ProblemSpace<Problem, Branch>
  prefix: Array<[Problem, Branch]>
  current: Problem
}

export function initialProblemPath<Problem, Branch>(
  space: ProblemSpace<Problem, Branch>,
  problem: Problem,
): ProblemPath<Problem, Branch> {
  return {
    space,
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
    space: path.space,
    prefix: [...path.prefix, [path.current, branch]],
    current: problem,
  }
}

export function problemPathHasLoop<Branch, Problem>(
  path: ProblemPath<Branch, Problem>,
): boolean {
  for (const [problem, _branch] of path.prefix) {
    if (path.space.problemEqual(problem, path.current)) {
      return true
    }
  }

  return false
}

export function ramify<Branch, Problem>(
  path: ProblemPath<Problem, Branch>,
): Array<ProblemPath<Problem, Branch>> {
  const branches = path.space.validBranches(path.current)
  const newPaths = branches.map((branch) =>
    extendProblemPath(
      path,
      branch,
      path.space.branchApply(branch, path.current),
    ),
  )
  return newPaths.filter((newPath) => !problemPathHasLoop(newPath))
}
