---
title: Space and Searching v.s. Solver
date: 2024-08-25
---

在实现 Problem Space Model 的时候，
发现有两种组织 class 的方式：

- 一、用单个的 `Solver` class 来实现。
- 二、将 `Solver` 分解为 `ProblemSpace` + `Searching` 这两个 class 来实现。

对比二者的 API：

```typescript
solver.problemIsSolved(path.current)
searching.space.problemIsSolved(path.current)
```

一个 `Solver` class 的 API 更简单。
但是实际上描述一个问题空间的 interface 是 `ProblemSpace`，
而 `Searching` 是 search 运行是所需要的搜索状态。

书中的实现是只有 `ProblemSpace`，
search 函数的搜索状态没有作为一个 `Searching` class 暴露出来。

我将同时做出这两种风格的实现，作为一个 API 设计的练习。

我怀疑，Space + Searching 是更好的设计，
但是 Space 的所有 interface 好像都是为了 search 来服务的，
所以也许 Space 和 Space 应该合并为 Solver。
