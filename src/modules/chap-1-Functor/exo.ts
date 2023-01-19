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

export const getNextCharForNumberStringFP = () => {}

// 2
const first = (xs: number[]): number  => xs[0];
const halfTheFirstLargeNumber = (xs: number[]): string => {
    const found = xs.filter(x => x >= 20);
    const answer = first(found) / 2;
    return `The answer is ${answer}`;
  };
  
export const halfTheFirstLargeNumberFP = () => {}

// 3
const percentToFloat = (str: string): number => {
    const replaced = str.replace('%', '')
    const number = parseFloat(replaced)
    return number * 0.01
}

export const percentToFloatFP = () => {}

// 4
const moneyToFloat = (str: string): number => {
    const replaced = str.replace('$', '')
    const number = parseFloat(replaced)
    return number
}

export const moneyToFloatFP = () => {}

// 5
const applyDiscount = (price: string, discount: string): number => {
    const cost = moneyToFloat(price)
    const savings = percentToFloat(discount)
    return cost - cost * savings
}

export const applyDiscountFP = () => {}