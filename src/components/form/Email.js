import React, { Fragment } from 'react'

const Email = props => {
  return (
    <Fragment>
      <label className='form-labels'>Email Address</label>
      <input type='text' placeholder='einstein@physics.com' className='form-inputs'/>
    </Fragment>
  )
}

export default Email
