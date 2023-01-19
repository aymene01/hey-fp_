import { Functor } from './types'

export const Box = <T>(x: T): Functor<T> => ({
	map: <U>(f: (x: T) => U) => Box(f(x)),
	fold: <U>(f: (x: T) => U) => f(x),
	chain: <U>(f: (x: T) => U) => f(x),
	inspect: () => `Box(${x})`,
})