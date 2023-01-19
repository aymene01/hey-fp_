import * as Types from './types'

const Product = (x: number): Types.Product => ({
	x,
	concat: ({ x: y }: { x: number }) => Product(x * y),
	empty: () => Product(1),
	inspect: `Product(${x})`,
})

const Sum = (x: number): Types.Sum => ({
	x,
	concat: ({ x: y }: { x: number }) => Sum(x + y),
	empty: () => Sum(0),
	inspect: `Sum(${x})`,
})

const Any = (x: boolean): Types.Any => ({
	x,
	concat: ({ x: y }: { x: boolean }) => Any(x || y),
	empty: () => Any(false),
	inspect: `Any(${x})`,
})
