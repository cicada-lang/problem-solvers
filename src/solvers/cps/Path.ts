import { type Space } from "./Space.js"

// 假设我们用 (n) 来表示 Node，用 [e] 来表示 Edge，
// 那么形如 (n0) -> [e0] -> (n1) -> [e1] -> (n2) 的 Path，
// 会被实现为：
// - prefix: [[n0, e0], [n1, e1]]
// - current: n2

export type Path<Node, Edge> = {
  space: Space<Node, Edge>
  prefix: Array<[Node, Edge]>
  current: Node
}

export function initialPath<Node, Edge>(
  space: Space<Node, Edge>,
  node: Node,
): Path<Node, Edge> {
  return {
    space,
    prefix: [],
    current: node,
  }
}

export function extendPath<Node, Edge>(
  path: Path<Node, Edge>,
  edge: Edge,
  node: Node,
): Path<Node, Edge> {
  return {
    space: path.space,
    prefix: [...path.prefix, [path.current, edge]],
    current: node,
  }
}

export function pathHasLoop<Edge, Node>(path: Path<Edge, Node>): boolean {
  for (const [node, _edge] of path.prefix) {
    if (path.space.nodeEqual(node, path.current)) {
      return true
    }
  }

  return false
}

export function ramify<Edge, Node>(
  path: Path<Node, Edge>,
): Array<Path<Node, Edge>> {
  const edges = path.space.branch(path.current)
  const newPaths = edges.map((edge) =>
    extendPath(path, edge, path.space.edgeApply(edge, path.current)),
  )
  return newPaths.filter((newPath) => !pathHasLoop(newPath))
}
