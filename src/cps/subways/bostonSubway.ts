import { createSubway, defineLine, defineStation } from "../subway/index.js"

export const bostonSubway = createSubway("boston-subway")

defineLine(bostonSubway, "red-line", [
  "south-station",
  "washington",
  "park-street",
  "kendall-square",
  "central-square",
  "harvard-square",
])

defineLine(bostonSubway, "green-line", [
  "boston-u",
  "copley-square",
  "park-street",
  "government-center",
  "haymarket",
  "north-station",
])

defineLine(bostonSubway, "orange-line", [
  "washington",
  "state",
  "haymarket",
  "north-station",
])

defineLine(bostonSubway, "blue-line", [
  "wood-island",
  "airport",
  "aquarium",
  "state",
  "government-center",
])

// prettier-ignore
{

  defineStation(bostonSubway, "airport", ["blue-line"], {x: 4.0, y: 1.0})
  defineStation(bostonSubway, "aquarium", ["blue-line"], {x: 3.75, y: 0.1})
  defineStation(bostonSubway, "wood-island", ["blue-line"], {x: 5.0, y: 2.0})
  defineStation(bostonSubway, "state", ["blue-line", "orange-line"], {x:3.1, y:-0.75})

  defineStation(bostonSubway, "park-street", ["green-line", "red-line"], {x: 2.5, y:-0.5})
  defineStation(bostonSubway, "government-center", ["green-line", "blue-line"], {x:2.9,y: -0.25})
  defineStation(bostonSubway, "copley-square", ["green-line"], {x:1.0, y: -1.0})
  defineStation(bostonSubway, "boston-u", ["green-line"], {x:-1.0, y:-1.0})
  defineStation(bostonSubway, "north-station", ["green-line", "orange-line"], {x:2.5, y:0.75})
  defineStation(bostonSubway, "haymarket", ["orange-line" ,"green-line"], {x: 2.75, y:0.5})

  defineStation(bostonSubway, "south-station", ["red-line"], {x: 3.0, y:-1.0})
  defineStation(bostonSubway, "washington", ["red-line", "orange-line"], {x:2.75, y:-0.75})
  defineStation(bostonSubway, "kendall-square", ["red-line"], {x:1.0, y:0.0})
  defineStation(bostonSubway, "central-square", ["red-line"], {x:-1.0, y:0.0})
  defineStation(bostonSubway, "harvard-square", ["red-line"], {x:-2.0, y:1.0})
}
