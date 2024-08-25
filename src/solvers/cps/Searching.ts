import { type Path } from "./Path.js"
import { type Space } from "./Space.js"

export type Searching<Node, Edge> = {
  space: Space<Node, Edge>
  node: Node
  queue: Array<Path<Node, Edge>>
  solved: Array<Path<Node, Edge>>
}

export function createSearching<Node, Edge>(
  space: Space<Node, Edge>,
  node: Node,
): Searching<Node, Edge> {
  return {
    space,
    node,
    queue: [],
    solved: [],
  }
}
