import { IdFunctor as Box } from './functor'

/*
Transform this functions to be written in a functional way
*/

// 1
const getNextCharForNumberString = (str: string): string => {
	const trimmed = str.trim()
	const number = parseInt(trimmed)
	const nextNumber = number + 1
	return String.fromCharCode(nextNumber)
}

// 2
const first = (xs: number[]): number => xs[0]

const halfTheFirstLargeNumber = (xs: number[]): string => {
	const found = xs.filter(x => x >= 20)
	const answer = first(found) / 2
	return `The answer is ${answer}`
}

export const halfTheFirstLargeNumberFP = () => {}

// 3
const percentToFloat = (str: string): number => {
	const replaced = str.replace('%', '')
	const number = parseFloat(replaced)
	return number * 0.01
}

export const percentToFloatFP = (str: string): number =>
	Box(str)
		.map(str => str.replace('%', ''))
		.fold(str => parseFloat(str) * 0.01)
// 4
const moneyToFloat = (str: string): number => {
	const replaced = str.replace('$', '')
	const number = parseFloat(replaced)
	return number
}

export const moneyToFloatFP = (str: string): number =>
	Box(str)
		.map(str => str.replace('$', ''))
		.fold(str => parseFloat(str))

// 5
const applyDiscount = (price: string, discount: string): number => {
	const cost = moneyToFloatFP(price)
	const savings = percentToFloatFP(discount)
	return cost - cost * savings
}

export const applyDiscountFP = (price: string, discount: string) =>
	Box(price)
		.map(moneyToFloatFP)
		.map(cost =>
			Box(discount)
				.map(percentToFloatFP)
				.map(savings => cost - cost * savings),
		)
