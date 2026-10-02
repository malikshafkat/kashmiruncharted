'use client'

import { useState, useRef, useEffect } from 'react'

export default function ThemedDropdown({
  value,
  onChange,
  options,
  placeholder = 'Select',
  label,
  hint,
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

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
          className="text-base"
          style={{ color: value ? 'var(--text)' : '#999' }}
        >
          {value || placeholder}
        </div>
        {hint && <div className="text-xs opacity-50 mt-1">{hint}</div>}
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 w-full rounded-xl shadow-2xl bg-white py-2 z-50 max-h-72 overflow-y-auto"
          style={{ border: '1px solid var(--muted)' }}
        >
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt)
                setOpen(false)
              }}
              className="w-full text-left px-4 py-3 text-sm transition-colors hover:bg-black/5"
              style={{
                background: opt === value ? 'rgba(30, 77, 58, 0.08)' : 'transparent',
                color: opt === value ? 'var(--pine)' : 'var(--text)',
                fontWeight: opt === value ? 500 : 400,
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}