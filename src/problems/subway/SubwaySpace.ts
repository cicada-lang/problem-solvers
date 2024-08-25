import { type Space } from "../../solvers/cps"
import { type LineId, type Station, type StationId } from "./Subway.js"

export type TakeLine = {
  start: StationId
  line: LineId
  end: StationId
}

export type SubwaySpace = Space<Station, TakeLine>
