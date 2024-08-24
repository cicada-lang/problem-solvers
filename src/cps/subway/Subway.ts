export type Line = string
export type Station = string

export type Subway = {
  lineMap: Map<Line, { stations: Array<Station> }>,
  stationMap: Map<Station, { lines: Array<Line> }>,
}
