class Pair {
  /**
   *
   * @param {string} key
   * @param {string} val
   */
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}

class HashMap {
  constructor(capacity) {
    this.size = 0;
    this.capacity = capacity; // Capacity should be a prime number for optimization
    this.map = new Array(capacity).fill(null);
  }

  /**
   *
   * @param {string} key
   * @returns {number}
   */
  hash(key) {
    let index = 0;

    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
      // String.fromCharCode(ASCII value)
    }

    return index % this.capacity;
  }

  /**
   *
   * @param {string} key
   */

  get(key) {
    const index = this.hash(key);

    // We use linear probing for collisions
    while (this.map[index] !== null) {
      if (this.map[index].key == key) {
        return this.map[index].val;
      }
      index++;
      index = index % this.capacity;
    }

    return null;
  }

  put(key, val) {
    const index = this.hash(key);

    while (true) {
      if (this.map[index] == null) {
        this.map[index] = new Pair(key, val);
        this.size++;

        if (this.size >= Math.floor(this.capacity / 2)) {
          this.rehash();
        }
        return;
      } else if (this.map[index].key == key) {
        this.map[index].val = val;
        return;
      }

      index++;
      index = index % this.capacity;
    }
  }

  remove(key) {
    if (this.get(key) == null) {
      return;
    }

    const index = this.hash(key);

    while (true) {
      if (this.map[index].key == key) {
        this.map[index] = null;
        this.size--;
        return;
      }

      index++;

      index = index % this.capacity;
    }
  }

  rehash() {
    this.capacity *= 2;

    const newMap = new Array(this.capacity).fill(null);

    const oldMap = this.map;
    this.map = newMap;

    this.size = 0;

    for (let pair of oldMap) {
      if (pair) {
        this.put(pair.key, pair.val);
      }
    }
  }

  print() {
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i]) {
        console.log(this.map[i].key + " " + this.map[i].val);
      }
    }
  }
}
