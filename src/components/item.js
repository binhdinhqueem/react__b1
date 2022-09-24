import React, { Component } from 'react'
import "./item.css"
export class Item extends Component {
  render() {
    return (
      <div className='w-75 m-auto'>
        <div className='item__content row text-center justify-content-center'>
          <div className='item col-3'>
            <div className='item__icon'>
              <i class="bi bi-collection-fill"></i>
            </div>
            <div className='item__text'>
              <h3>Fresh new layout</h3>
              <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
            </div>
          </div>
          <div className='item col-3'>
            <div className='item__icon'>
              <i class="bi bi-cloud-download"></i>
            </div>
            <div className='item__text'>
              <h3>Free to download</h3>
              <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
            </div>
          </div>
          <div className='item col-3'>
            <div className='item__icon'>
              <i class="bi bi-card-heading"></i>
            </div>
            <div className='item__text'>
              <h3>Jumbotron hero header</h3>
              <p>The heroic part of this template is the jumbotron hero header!</p>
            </div>
          </div>
          <div className='item col-3'>
            <div className='item__icon'>
              <i class="bi bi-bootstrap"></i>
            </div>
            <div className='item__text'>
              <h3>Feature boxes</h3>
              <p>We've created some custom feature boxes using Bootstrap icons!</p>
            </div>
          </div>
          <div className='item col-3'>
            <div className='item__icon'>
              <i class="bi bi-code"></i>
            </div>
            <div className='item__text'>
              <h3>Simple clean code</h3>
              <p>We keep our dependencies up to date and squash bugs as they come!</p>
            </div>
          </div>
          <div className='item col-3'>
            <div className='item__icon'>
              <i class="bi bi-patch-check"></i>
            </div>
            <div className='item__text'>
              <h3>A name you trust</h3>
              <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Item