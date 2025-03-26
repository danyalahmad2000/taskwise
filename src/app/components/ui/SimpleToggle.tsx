import React, { useState } from 'react'
import { cn } from '@/lib/utils'

const SimpleToggle = ({
  onToggle,
}: {
  onToggle?: (toggled: boolean) => void
}) => {
  const [toggled, setToggled] = useState(false)

  const handleToggle = () => {
    const newState = !toggled
    setToggled(newState)
    if (onToggle) {
      onToggle(newState)
    }
  }

  return (
    <button
      className={`relative h-7 w-14 cursor-pointer rounded-full duration-200`}
      onClick={handleToggle}
      style={{
        backgroundColor: toggled ? '#000000' : '#ffffff',
      }}
    >
      <span
        className={cn(
          `absolute left-0 top-0 rounded-full bg-black shadow-lg transition-all duration-200`,
          toggled ? 'translate-x-7 transform' : 'translate-x-0 transform',
          toggled ? 'h-5 w-5 bg-white' : 'h-5 w-5',
          toggled ? 'm-1' : 'm-1',
        )}
      />
    </button>
  )
}

export default SimpleToggle