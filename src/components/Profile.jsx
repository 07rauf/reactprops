import './Profile.css'
import React from 'react'
import Name from './Name'
import Email from './Email'
import PersonalInfo  from './PersonalInfo'
import Address from './Address'


const Profile = () => {
  return (
    <div className='Profile'>
        
<Name name = 'Rauf'/>
<Email email = 'raufn759@gmail.com'/>
<Address address = 'Razin'/>
<PersonalInfo age = {19}  tehsil = 'ADNSU' />



    </div>
  )
}

export default Profile