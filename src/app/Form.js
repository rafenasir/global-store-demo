import React from 'react'
import VerticalSpace from './VerticalSpace'

export default function Form () {
  return (
    <>
      <h1>Fill in with some data</h1>
      <form>
        <div className="form-item">
          <label htmlFor="name">First Name</label>
          <VerticalSpace height={5} />
          <input id="name" type="text" placeholder="Type in your name" />
        </div>

        <VerticalSpace height={5} />

        <div className="form-item">
          <label htmlFor="name">Last Name</label>
          <VerticalSpace height={5} />
          <input id="name" type="text" placeholder="Type in your name" />
        </div> 

        <VerticalSpace height={5} />

        <div className="form-item">
          <label htmlFor="age">Age</label>
          <VerticalSpace height={5} />
          <input id="age" type="number" placeholder="Type in your age" />
        </div>

        <VerticalSpace height={10} />

        <input type="submit" value="Save!" />
      </form>
    </>
  )
}
