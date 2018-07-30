import React from 'react'

const Carousel = props => {
  return (
    <ul className='carousel'>
      <input type='radio' id='1' name='activator' checked='checked' className='carousel_activator' />
      <input type='radio' id='2' name='activator' className='carousel_activator' />
      <input type='radio' id='3' name='activator' className='carousel_activator' />
      <div className='carousel_controls'>
        <label htmlFor='2' className='carousel_controls carousel_control_forward'></label>
        <label htmlFor='3' className='carousel_controls carousel_control_backward'></label>
      </div>
      <div className='carousel_controls'>
        <label htmlFor='3' className='carousel_controls carousel_control_forward'></label>
        <label htmlFor='1' className='carousel_controls carousel_control_backward'></label>
      </div>
      <div className='carousel_controls'>
        <label htmlFor='1' className='carousel_controls carousel_control_forward'></label>
        <label htmlFor='2' className='carousel_controls carousel_control_backward'></label>
      </div>
      <li className='carousel_slide'>
        <h1>1</h1>
      </li>
      <li className='carousel_slide'>
        <h1>2</h1>
      </li>
      <li className='carousel_slide'>
        <h1>3</h1>
      </li>
      <div className='carousel_indicators'>
        <label htmlFor='1' className='carousel_indicator'></label>
        <label htmlFor='2' className='carousel_indicator'></label>
        <label htmlFor='3' className='carousel_indicator'></label>
      </div>
    </ul>
  )
}

export default Carousel
