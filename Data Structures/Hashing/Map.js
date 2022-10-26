const names = ["alice", "brad", "collin", "brad", "dylan", "kim"];

// Javascript has built-in HashMap class
// Cannot contain duplicates
// Search => O(1)
// Insert => O(1)
// Remove => O(1)
const countMap = new Map();

for (let name of names) {
  // If countMap does not contain name
  if (!countMap.has(name)) {
    countMap.set(name, 1);
  } else {
    countMap.set(name, countMap.get(name) + 1);
  }
}
