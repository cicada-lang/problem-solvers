[cps] [refactoring] `ProblemPath` 保存它所属于的 space

- 这样是合理的，因为一个 Path 之后在某个 space 中才有意义，
  并且能大大简化 API -- `ramify` 只需要一个参数。

[cps] 实现第三章的地铁例子

[cps] 实现第三章的代数例子

[cps] [refactoring] 用单个的 `Solver` class 来实现 -- 而不是 `ProblemSpace` + `Searching`

- 因为 `ProblemSpace` + `Searching` 这两个 class 看来太复杂了,
  比如 `searching.space.problemIsSolved(path.current)`
  v.s. `solver.problemIsSolved(path.current)`
