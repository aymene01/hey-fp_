import { IdFunctor } from './modules/chap-1-Functor'

const Box = IdFunctor

const calculateAverage = (xs: number[]): number => {
	const sum = xs.reduce((acc, x) => acc + x)
	return sum / xs.length
}

const calculateAverageBonus = (average: number): number => average * 1.1

const calculateAverageFinal = () => {
	const average = calculateAverage([1, 2, 3])
	const averageBonus = calculateAverageBonus(average)
	return averageBonus
}
