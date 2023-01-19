import { Left as LeftType, Right as RightType } from './types'

const Left = <T>(value: T): LeftType<T> => ({
	map: <U>(f: (x: T) => U) => Left(value),
	fold: <U>(f: (x: T) => U, g: (x: T) => U) => f(value),
	chain: <U>(f: (x: T) => U) => Left(value),
	inspect: `Left(${value})`,
})

const Right = <T>(value: T): RightType<T> => ({
	map: <U>(f: (x: T) => U) => Right(f(value)),
	fold: <U>(f: (x: T) => U, g: (x: T) => U) => g(value),
	chain: <U>(f: (x: T) => U) => f(value),
	inspect: `Right(${value})`,
})

const fromNullable = <T>(value: T): LeftType<T> | RightType<T> =>
    value != null ? Right(value) : Left(value)

const tryCatch = <T>(f: () => T): LeftType<T> | RightType<T> => {
    try {
        return Right(f())
    } catch (e) {
        return Left(e)
    }
}

export {
    Left,
    Right,
    fromNullable,
    tryCatch,
}
