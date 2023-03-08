import React from 'react'

export default function DropdownMenuItem({ option, selected, onSelect }) {

  function select(evt) {
    onSelect(evt.target)
  }

  return (
    <li className={`dropdown__item ${selected === option ? 'dropdown__item_active' : ''}`}
      onClick={select}>{option}</li>
  )
}
