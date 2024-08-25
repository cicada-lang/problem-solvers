import { type Space } from "../../solvers/cps"
import { type LineId, type StationId } from "./Subway.js"

export type TakeLine = {
  start: StationId
  line: LineId
  end: StationId
}

export type SubwaySpace = Space<StationId, TakeLine>

export function createSubwaySpace(initialStationId: StationId): SubwaySpace {
  return {
    name: "SubwaySpace",
    nodeIsEnd: (stationId) => stationId === initialStationId,
    nodeEqual: (left, right) => left === right,
    branch: (stationId) => {
      throw new Error("TODO")
    },
    edgeApply: (takeLine, stationId) => {
      throw new Error("TODO")
    },
  }
}
