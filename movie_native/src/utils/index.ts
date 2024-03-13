import {weekday} from '../constants'

export const generateDate = () => {
	const date = new Date()
	let weekdays = []

	for (let i = 0; i < 7; i++) {
		const tempDate = {
			date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
			day: weekday[new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDay()]
		}
		weekdays.push(tempDate)
	}

	return weekdays
}

export const generateSeats = () => {
	const numRow = 8
	let numColumn = 3
	let rowArray = []
	let start = 1
	let reachnine = false

	for (let i = 0; i < numRow; i++) {
		let columnArray = []
		for (let j = 0; j < numColumn; j++) {
			const seatObject = {
				number: start,
				taken: Boolean(Math.round(Math.random())),
				selected: false
			}

			columnArray.push(seatObject)
			start++
		}

		if (i == 3) {
			numColumn += 2
		}
		if (numColumn < 9 && !reachnine) {
			numColumn += 2
		} else {
			reachnine = true
			numColumn -= 2
		}

		rowArray.push(columnArray)
	}

	return rowArray
}
