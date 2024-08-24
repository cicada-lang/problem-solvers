export type Line = string
export type Station = string
export type Position = string


export type Subway = {
  name: string,
  lineMap: Map<
    Line,
    {
      stations: Array<Station>
    }
  >
  stationMap: Map<
    Station,
    {
      lines: Set<Line>
      position: Position
    }
  >
}

export function createSubway(name: string): Subway {
  return {
    name,
    lineMap: new Map(),
    stationMap: new Map(),
  }
}
