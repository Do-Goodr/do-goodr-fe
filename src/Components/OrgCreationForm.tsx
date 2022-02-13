import React, { useState } from 'react';
import { CreateOrgDetails } from '../utilities/Types';
import  formatPhoneNumber  from '../utilities/formatPhoneNumber'
import apiCalls from '../utilities/apiCalls';

const OrgCreationForm = () => {

    const [name, setName] = useState<CreateOrgDetails['name']>()
    const [address, setAddress] = useState<CreateOrgDetails['address']>()
    const [phone, setPhone] = useState<CreateOrgDetails['phone']>('')
    const [email, setEmail] = useState<CreateOrgDetails['email']>()
    const [confirmation, setConfirmation] = useState<CreateOrgDetails['confirmation']>()

    const handleInput = (phone:string) => {
        const formattedNumber = formatPhoneNumber(phone)
        setPhone(formattedNumber)
    }

    const signUp = (e:React.MouseEvent) => {
        e.preventDefault()
        const newOrg = {
            name: name,
            address: address,
            phone: phone,
            email: email
        }
        apiCalls.postNewOrg(newOrg)
            .then(res => {
                if (res.ok) {
                    setConfirmation('SUCCESS! You are signed up!')
                } else {
                    setConfirmation('Please check your organization details to make sure all fields are filled in correctly')
                }
            })
    }

    return (
        <form>
            <label>Organization name
                <input type='text' data-cy='org-name-input' onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>Address
                <input type='text' data-cy='org-address-input' onChange={(e) => setAddress(e.target.value)}/>
            </label>
            <label>Phone Number
                <input type='text' data-cy='org-phone-input' onChange={(e) => handleInput(e.target.value)} value={phone}/>
            </label>
            <label>Email
                <input type='text' data-cy='org-email-input' onChange={(e) => setEmail(e.target.value)}/>
            </label>
            {!confirmation ? <button data-cy='create-org-signup-btn' onClick={(e) => signUp(e)}>Sign Up!</button> :
            <p data-cy='successful-signup'>{confirmation}</p>}
            
        </form>
    )

}

export default OrgCreationForm