export type IdFunctorType<T> = {
	map: <U>(f: (x: T) => U) => IdFunctorType<U>
	fold: <U>(f: (x: T) => U) => U
	chain: <U>(f: (x: T) => U) => U
	inspect: () => string
}