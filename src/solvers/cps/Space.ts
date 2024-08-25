export type Space<Node, Edge> = {
  name: string
  nodeIsEnd: (node: Node) => boolean
  nodeEqual: (left: Node, right: Node) => boolean
  branch: (node: Node) => Array<Edge>
  edgeApply: (edge: Edge, node: Node) => Node
}
