[cps] 实现第三章的地铁例子

[cps] add debug options

[cps] 实现第三章的代数例子

[cps] [refactoring] 用单个的 `Solver` class 来实现 -- 而不是 `ProblemSpace` + `Searching`

- 因为 `ProblemSpace` + `Searching` 这两个 class 看来太复杂了,
  比如 `searching.space.problemIsSolved(path.current)`
  v.s. `solver.problemIsSolved(path.current)`
