import React, { Component } from 'react'
import "./banner.css"
export class Banner extends Component {
  render() {
    return (
      <div className='banner w-75 m-auto mt-4'>
        <h2 className='fw-bold'>A warm welcome</h2>
        <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
        <button className='btn btn-primary'>Call to action</button>
      </div>
    )
  }
}

export default Banner