import { ramify } from "./ProblemPath.js"
import { type Searching } from "./Searching.js"

export function breadthFirstSearchStep<Problem, Branch>(
  searching: Searching<Problem, Branch>,
): void {
  const path = searching.queue.shift()
  if (path === undefined) return

  const newPaths = ramify(searching.space, path)
  for (const newPath of newPaths) {
    if (searching.space.problemIsSolved(newPath.current)) {
      searching.solved.push(newPath)
    } else {
      searching.queue.push(newPath)
    }
  }
}
