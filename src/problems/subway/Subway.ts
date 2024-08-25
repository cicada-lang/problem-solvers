export type LineId = string
export type StationId = string

export type Position = { x: number; y: number }

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

export function defineStation(
  subway: Subway,
  stationId: StationId,
  lines: Array<LineId>,
  position: Position,
): void {
  subway.stationMap.set(stationId, {
    id: stationId,
    lines: new Set(lines),
    position,
  })
}

export function defineLine(
  subway: Subway,
  lineId: LineId,
  stations: Array<StationId>,
): void {
  subway.lineMap.set(lineId, {
    id: lineId,
    stations,
  })
}
