export type LineId = string
export type StationId = string

export type Position = string

export type Line = {
  id: LineId
  stations: Array<StationId>
}

export type Station = {
  id: StationId
  lines: Set<LineId>
  position: Position
}

export type Subway = {
  name: string
  lineMap: Map<LineId, Line>
  stationMap: Map<StationId, Station>
}

export function createSubway(name: string): Subway {
  return {
    name,
    lineMap: new Map(),
    stationMap: new Map(),
  }
}
