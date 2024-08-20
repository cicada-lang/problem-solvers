export type ClassicalSolver<Problem, Operator> = {
  name: string
  problemIsSolution: (problem: Problem) => boolean
  problemEqual: (left: Problem, right: Problem) => boolean
  validOperators: (problem: Problem) => Array<Operator>
  operatorApply: (operator: Operator, problem: Problem) => Problem
}
