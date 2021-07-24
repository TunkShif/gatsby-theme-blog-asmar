import React from 'react'

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
      <div className="flex flex-col items-center justify-between w-20 mr-2 md:w-28">
        <time className="mb-4 text-3xl font-bold text-gray-800 md:mb-5 md:text-4xl" dateTime={date}>{day}</time>
        <time className="mt-2 text-lg font-medium text-gray-600 md:mt-4 md:text-xl"  dateTime={date}>{month} {year}</time>
      </div>
    </div>
  )
}

export default DateTime