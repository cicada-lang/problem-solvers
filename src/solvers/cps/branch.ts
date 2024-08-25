import { type Path, extendPath, pathHasLoop } from "./Path.js"

export function branch<Edge, Node>(
  path: Path<Node, Edge>,
): Array<Path<Node, Edge>> {
  return path.space
    .sprout(path.current)
    .map(([edge, node]) => extendPath(path, edge, node))
    .filter((newPath) => !pathHasLoop(newPath))
}
