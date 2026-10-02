'use client'

import { useState, useRef, useEffect } from 'react'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

function pad(n) {
  return String(n).padStart(2, '0')
}

function toISO(y, m, d) {
  return `${y}-${pad(m + 1)}-${pad(d)}`
}

function parseISO(str) {
  if (!str) return null
  const [y, m, d] = str.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export default function ThemedCalendar({ value, onChange, label, hint }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const today = new Date()
  const selected = parseISO(value)
  const [viewYear, setViewYear] = useState(selected?.getFullYear() || today.getFullYear())
  const [viewMonth, setViewMonth] = useState(selected?.getMonth() || today.getMonth())

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear(viewYear - 1)
    } else {
      setViewMonth(viewMonth - 1)
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear(viewYear + 1)
    } else {
      setViewMonth(viewMonth + 1)
    }
  }

  const firstDay = new Date(viewYear, viewMonth, 1).getDay()
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate()

  const cells = []
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, month: 'prev' })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, month: 'current' })
  }
  const remaining = 42 - cells.length
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, month: 'next' })
  }

  function handlePick(day, month) {
    let y = viewYear
    let m = viewMonth
    if (month === 'prev') {
      m = viewMonth - 1
      if (m < 0) { m = 11; y-- }
    } else if (month === 'next') {
      m = viewMonth + 1
      if (m > 11) { m = 0; y++ }
    }
    onChange(toISO(y, m, day))
    setOpen(false)
  }

  const displayValue = selected
    ? `${pad(selected.getDate())} ${MONTHS[selected.getMonth()].slice(0, 3)} ${selected.getFullYear()}`
    : ''

  const isToday = (d, m) =>
    m === 'current' &&
    d === today.getDate() &&
    viewMonth === today.getMonth() &&
    viewYear === today.getFullYear()

  const isSelected = (d, m) =>
    m === 'current' &&
    selected &&
    d === selected.getDate() &&
    viewMonth === selected.getMonth() &&
    viewYear === selected.getFullYear()

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left"
      >
        {label && (
          <div className="text-[11px] uppercase tracking-wider opacity-50 mb-1">
            {label}
          </div>
        )}
        <div
          className="text-base flex items-center gap-2"
          style={{ color: displayValue ? 'var(--text)' : '#999' }}
        >
          {displayValue || 'Select date'}
        </div>
        {hint && <div className="text-xs opacity-50 mt-1">{hint}</div>}
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 rounded-xl shadow-2xl bg-white z-50 overflow-hidden"
          style={{ border: '1px solid var(--muted)', width: '320px' }}
        >
          {/* Header with month/year dropdowns and arrows */}
          <div
            className="flex items-center justify-between px-3 py-3"
            style={{ background: 'var(--pine)', color: 'white' }}
          >
            <button
              type="button"
              onClick={prevMonth}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10"
            >
              ←
            </button>

            <div className="flex gap-2">
              <select
                value={viewMonth}
                onChange={(e) => setViewMonth(Number(e.target.value))}
                className="bg-white/10 text-white text-sm rounded-md px-2 py-1 outline-none cursor-pointer"
                style={{ backdropFilter: 'blur(4px)' }}
              >
                {MONTHS.map((m, i) => (
                  <option key={m} value={i} style={{ color: 'black' }}>
                    {m}
                  </option>
                ))}
              </select>

              <select
                value={viewYear}
                onChange={(e) => setViewYear(Number(e.target.value))}
                className="bg-white/10 text-white text-sm rounded-md px-2 py-1 outline-none cursor-pointer"
                style={{ backdropFilter: 'blur(4px)' }}
              >
                {Array.from({ length: 5 }, (_, i) => today.getFullYear() + i).map((y) => (
                  <option key={y} value={y} style={{ color: 'black' }}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={nextMonth}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10"
            >
              →
            </button>
          </div>

          {/* Day of week headers */}
          <div className="grid grid-cols-7 px-2 pt-3">
            {DAYS.map((d) => (
              <div
                key={d}
                className="text-center text-[10px] tracking-wider opacity-50 py-2"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7 gap-y-1 px-2 pb-3">
            {cells.map((cell, i) => {
              const selectedDay = isSelected(cell.day, cell.month)
              const todayDay = isToday(cell.day, cell.month)
              const otherMonth = cell.month !== 'current'

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handlePick(cell.day, cell.month)}
                  className="aspect-square flex items-center justify-center text-sm rounded-md transition-colors"
                  style={{
                    color: selectedDay
                      ? 'white'
                      : otherMonth
                      ? '#bbb'
                      : 'var(--text)',
                    background: selectedDay ? 'var(--pine)' : 'transparent',
                    border: todayDay && !selectedDay ? '1px solid var(--pine)' : '1px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!selectedDay) e.currentTarget.style.background = 'rgba(30, 77, 58, 0.08)'
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedDay) e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {cell.day}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}