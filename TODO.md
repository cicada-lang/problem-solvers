[cps] [subway] `defineStation`

[cps] [subway] `defineLine` -- take a ordered list of stations

[cps] [subway] define `bostonSubway`

[cps] [problem-space] [subway] `SubwayProblemSpace` & `createSubwayProblemSpace`

- Problem = `Station`

  这里读起来有点问题，
  因为 Station 本身不是问题，
  到达某个 Station 才是问题。

- Branch = `TakeLine: { oldStation, line, newStation }`

[cps] [problem-space] add debug options

[cps] [problem-space] 支持 domain-specific filtering

- 在 subway 问题中，可以定义一个 normal path 的概念，
  然后删除非 normal 的 path，所谓 normal path，
  即，没有在一条 line 上下车上车的现象的 path。

# later

[cps] 也许用深圳的地铁作为例子，并且写一个模仿《百度地图》的前端出来试试。

[cps] 实现第三章的代数例子

[cps] `problem-solver/` -- 用单个的 `Solver` class 来实现 -- 而不是 `ProblemSpace` + `Searching`

- 因为 `ProblemSpace` + `Searching` 这两个 class 看来太复杂了,
  比如 `searching.space.problemIsSolved(path.current)`
  v.s. `solver.problemIsSolved(path.current)`
