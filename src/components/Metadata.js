import React from 'react'

export const Metadata = () => {
  return (
    <div>
        <input type="number" /> Number of diners
        <input type="number" /> Number of days
        <input type="radio" id="1" name="number_of_portions" value="1" />
            <label for="1">1</label>
        <input type="radio" id="2" name="number_of_portions" value="2" />
            <label for="1">2</label>
    </div>
  )
}
