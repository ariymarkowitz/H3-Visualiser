// A Float32Array that grows as values are appended. Keeping one across
// rebuilds means its memory is only allocated once.
export class FloatBuffer {
  data = new Float32Array(1 << 16)
  length = 0

  clear() {
    this.length = 0
  }

  // Makes room for n more values and returns the array to write them into,
  // starting at index `length`. The caller advances `length`.
  reserve(n: number): Float32Array {
    const needed = this.length + n
    if (needed > this.data.length) {
      let capacity = this.data.length * 2
      while (capacity < needed) capacity *= 2
      const data = new Float32Array(capacity)
      data.set(this.data.subarray(0, this.length))
      this.data = data
    }
    return this.data
  }

  // A copy of the values written so far.
  toArray(): Float32Array {
    return this.data.slice(0, this.length)
  }
}
