import { ramify } from "./Path.js"
import { type Searching } from "./Searching.js"

export function breadthFirstExplore<Node, Edge>(
  searching: Searching<Node, Edge>,
): void {
  const path = searching.queue.shift()
  if (path === undefined) return

  if (searching.space.nodeIsSolved(path.current)) {
    searching.solved.push(path)
  } else {
    const newPaths = ramify(path)
    searching.queue.push(...newPaths)
  }
}
