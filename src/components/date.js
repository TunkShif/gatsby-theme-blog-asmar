import * as React from 'react'

const DateTime = ({date}) => {
  const formatDate = ([ year, month, day ]) => {
    let date = new Date(year, month - 1, day)
    let y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let m = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
    let d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return [y, m, d]
  }

  const [ year, month, day ] = formatDate(date.split("-"))

  return (
    <div>
      <div className="flex flex-col items-center justify-between pr-2 w-28 md:pr-4">
        <time className="mb-2 text-3xl font-bold text-gray-800 md:text-3xl" dateTime={date}>{day}</time>
        <time className="mt-2 text-lg font-medium text-gray-600 md:text-lg"  dateTime={date}>{month} {year}</time>
      </div>
    </div>
  )
}

export default DateTime