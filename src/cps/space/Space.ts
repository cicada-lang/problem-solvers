export type Space<Problem, Branch> = {
  name: string
  problemIsSolved: (problem: Problem) => boolean
  problemEqual: (left: Problem, right: Problem) => boolean
  validBranches: (problem: Problem) => Array<Branch>
  branchApply: (branch: Branch, problem: Problem) => Problem
}
