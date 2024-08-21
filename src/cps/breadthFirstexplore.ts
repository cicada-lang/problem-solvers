import { ramify } from "./ProblemPath.js"
import { type Searching } from "./Searching.js"

export function breadthFirstexplore<Problem, Branch>(
  searching: Searching<Problem, Branch>,
): void {
  const path = searching.queue.shift()
  if (path === undefined) return

  if (searching.space.problemIsSolved(path.current)) {
    searching.solved.push(path)
  } else {
    const newPaths = ramify(searching.space, path)
    searching.queue.push(...newPaths)
  }
}
