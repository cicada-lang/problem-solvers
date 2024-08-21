import { type ProblemSpace } from "./ProblemSpace.js"

export function problemExpand<Operator, Problem>(
  solver: ProblemSpace<Problem, Operator>,
  problem: Problem,
): Array<[Operator, Problem]> {
  const operators = solver.validOperators(problem)
  return operators.map((operator) => [
    operator,
    solver.operatorApply(operator, problem),
  ])
}
