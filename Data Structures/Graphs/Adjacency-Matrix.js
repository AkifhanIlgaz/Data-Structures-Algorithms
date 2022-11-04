// Row - Column
// grid[v1][v2] == 1 It means that there is an edge from v1 to v2
// grid[v2][v1] == 1 It means that there is an edge from v2 to v1
// Order is important
// But this type of representation isn't space efficient
// No matter how many edges we have, we need to use V^2 space to represent edges

let grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];
