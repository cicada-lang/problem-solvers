[cps] `breadthFirstExplore` -- 过滤掉带有 loop 的 path

[cps] 实现第三章的地铁例子
[cps] 实现第三章的代数例子

[cps] 用一个带有 `Searching` 内容的 `Solver` class 来实现

- 有 `ProblemSpace` + `Searching` 这两个 class 看来太复杂了,
  比如 `searching.space.problemIsSolved(path.current)`
  v.s. `solver.problemIsSolved(path.current)`

- 也许可以让 `ProblemPath` 保存它所属于的 space，
  这样是合理的，因为一个 Path 之后在某个 space 中才有意义，
  并且能大大简化 API -- `ramify` 只需要一个参数。
