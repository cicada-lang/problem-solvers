export type Space<Node, Edge> = {
  name: string
  nodeIsEnd: (node: Node) => boolean
  nodeEqual: (left: Node, right: Node) => boolean
  sprout: (node: Node) => Array<[Edge, Node]>
}
