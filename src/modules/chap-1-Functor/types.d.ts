export type Functor<T> = {
	map: <U>(f: (x: T) => U) => Functor<U>
	fold: <U>(f: (x: T) => U) => U
	chain: <U>(f: (x: T) => U) => U
	inspect: () => string
}