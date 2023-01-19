export type Sum = {
	x: number
	concat: (y: Sum) => Sum
	empty: () => Sum
	inspect: string
}

export type Product = {
	x: number
	concat: (y: Product) => Product
	empty: () => Product
	inspect: string
}

export type Any = {
	x: boolean
	concat: (y: Any) => Any
	empty: () => Any
	inspect: string
}
