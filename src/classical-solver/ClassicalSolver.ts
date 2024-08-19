export type ClassicalSolver<Problem, Operator> = {
  name: string
  problemIsSolution: (problem: Problem) => boolean
  problemEqual: (left: Problem, right: Problem) => boolean
  validOperators: (problem: Problem) => Array<Operator>
  operatorApply: (operator: Operator, problem: Problem) => Problem
}

function problemExpand<Operator, Problem>(
  solver: ClassicalSolver<Problem, Operator>,
  problem: Problem,
): Array<[Operator, Problem]> {
  return []
}
