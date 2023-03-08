import React from 'react'

export default function DropdownMenuItem({ option, selectedItem, onSelect }) {

  function select(evt) {
    onSelect(evt.target)
  }

  return (
    <li className={`dropdown__item ${selectedItem === option ? 'dropdown__item_active' : ''}`}
      onClick={select}>{option}</li>
  )
}
