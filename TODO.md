[cps] [refactoring] rename `ramify` to `branch` -- branch a path

[cps] [space] [subway] `createSubwaySpace`

- `branch` -- 找到一站相邻的点
- `edgeApply` -- 平凡的根据 edge 找到下一个节点

[cps] [space] add debug options

[cps] [space] 支持 domain-specific filtering

- 在 subway 问题中，可以定义一个 normal path 的概念，
  然后删除非 normal 的 path，所谓 normal path，
  即，没有在一条 line 上下车上车的现象的 path。

# later

[cps] [space] `Searching` 的 API 应该是 `take` 之类的。

[cps] 也许用深圳的地铁作为例子，并且写一个模仿《百度地图》的前端出来试试。

[cps] 实现第三章的代数例子
