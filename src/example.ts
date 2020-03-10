interface Concatanable<T> {
  concat: (b: Concatanable<T>) => this
}

export function concat<T, P extends T[] & Concatanable<T>> (a: P, b: P) : T[] {
  return a.concat(b)
}
