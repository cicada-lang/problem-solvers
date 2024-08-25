---
title: Space and Searching v.s. Solver
date: 2024-08-25
---

在实现 Problem Space Model 的时候，
发现有两种组织 class 的方式：

一、用单个的 `Solver` class 来实现。

```typescript
export type Solver<Problem, Branch> = {
  name: string
  problemIsSolved: (problem: Problem) => boolean
  problemEqual: (left: Problem, right: Problem) => boolean
  validBranches: (problem: Problem) => Array<Branch>
  branchApply: (branch: Branch, problem: Problem) => Problem

  problem: Problem
  queue: Array<Path<Problem, Branch>>
  solved: Array<Path<Problem, Branch>>
}
```

二、将 `Solver` 分解为 `Space` + `Searching` 这两个 class 来实现。

```typescript
export type Space<Problem, Branch> = {
  name: string
  problemIsSolved: (problem: Problem) => boolean
  problemEqual: (left: Problem, right: Problem) => boolean
  validBranches: (problem: Problem) => Array<Branch>
  branchApply: (branch: Branch, problem: Problem) => Problem
}

export type Searching<Problem, Branch> = {
  space: Space<Problem, Branch>
  problem: Problem
  queue: Array<Path<Problem, Branch>>
  solved: Array<Path<Problem, Branch>>
}
```

对比二者的 API：

```typescript
solver.problemIsSolved(path.current)
searching.space.problemIsSolved(path.current)
```

一个 `Solver` class 的 API 更简单。
但是实际上描述一个问题空间的 interface 是 `Space`，
而 `Searching` 是 search 运行是所需要的搜索状态。

书中的实现是只有 `Space`，
search 函数的搜索状态没有作为一个 `Searching` class 暴露出来。

我怀疑，Space + Searching 是更好的设计，
但是 Space 的所有 interface 好像都是为了 search 来服务的，
所以也许 Space 和 Space 应该合并为 Solver。

另外，`Space<Problem, Branch>`
是否应该改为 `Space<Node, Edge>`？
此时可以说 `Space` 并不只是为 search 服务的，
而是代表了一个更一般的图论意义上的空间。
这样空间和搜索两部分 interface 看起来就相互独立了。
