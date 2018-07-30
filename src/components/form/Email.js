import React, { Fragment } from 'react'

const Email = props => {
  return (
    <Fragment>
      <label className='form-labels'>Username</label>
      <input type='text' placeholder='Username' className='form-inputs'/>
    </Fragment>
  )
}

export default Email
