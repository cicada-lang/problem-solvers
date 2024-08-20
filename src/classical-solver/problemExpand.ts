import { type ClassicalSolver } from "./ClassicalSolver.js"

export function problemExpand<Operator, Problem>(
  solver: ClassicalSolver<Problem, Operator>,
  problem: Problem,
): Array<[Operator, Problem]> {
  const operators = solver.validOperators(problem)
  return operators.map((operator) => [
    operator,
    solver.operatorApply(operator, problem),
  ])
}
