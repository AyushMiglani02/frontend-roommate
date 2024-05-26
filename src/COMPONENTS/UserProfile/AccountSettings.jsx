import React from 'react'
import './AccountSettings.css'

const AccountSettings = () => {
  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Personal Information</h1>

      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Your Name <span>*</span></label>
          <input type='text' name='name' id='name' />
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Phone/Mobile <span>*</span></label>
          <input type='text' name='phone' id='phone' />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email <span>*</span></label>
          <input type='email' name='email' id='email' />
        </div>

        <div className='form-group'>
          <label htmlFor='sleepSchedule'>Sleep Schedule <span>*</span></label>
          <input type='text' name='sleepSchedule' id='sleepSchedule' />
        </div>

        <div className='form-group'>
          <label htmlFor='cleanLevel'>Clean Level <span>*</span></label>
          <select name='cleanLevel' id='cleanLevel'>
            <option value=''>Select</option>
            <option value='neat'>Neat</option>
            <option value='average'>Average</option>
            <option value='messy'>Messy</option>
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='studyTime'>Study Time <span>*</span></label>
          <input type='text' name='studyTime' id='studyTime' />
        </div>

        <div className='form-group'>
          <label htmlFor='noiseLevel'>Noise Level <span>*</span></label>
          <select name='noiseLevel' id='noiseLevel'>
            <option value=''>Select</option>
            <option value='quiet'>Quiet</option>
            <option value='moderate'>Moderate</option>
            <option value='loud'>Loud</option>
          </select>
        </div>
      </div>

      <button className='mainbutton1'>Save Changes</button>
    </div>
  )
}

export default AccountSettings
