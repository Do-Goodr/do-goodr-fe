import React, { useState } from 'react';
import { OrgDetails } from '../utilities/Types';
import  formatPhoneNumber  from '../utilities/formatPhoneNumber'
import apiCalls from '../utilities/apiCalls';
import '../Styles/OrgCreationForm.css'
import emailExtensionCheck from '../utilities/emailExtensionCheck';

const OrgCreationForm: React.FC<{}> = () => {
    
    const [name, setName] = useState<OrgDetails['name']>('')
    const [address, setAddress] = useState<OrgDetails['address']>('')
    const [phone, setPhone] = useState<OrgDetails['phone']>('')
    const [email, setEmail] = useState<OrgDetails['email']>('')
    const [confirmation, setConfirmation] = useState<OrgDetails['confirmation']>('')


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
                    setConfirmation(`EXCELLENT! ${name} has been signed up successfully!`)
                } else {
                    setConfirmation('Please check your organization details to make sure all fields are filled in correctly')
                }
            })
    }

    const SubmitButton = () => {
        if (name && address && (phone.length - 4 === 10) && emailExtensionCheck(email) && !confirmation) {
            return <button className='create-org-signup-btn-enabled' data-cy='create-org-signup-btn' onClick={(e) => signUp(e)}>Sign Up!</button>
        } else {
            return <button className='create-org-signup-btn-disabled' disabled={true} data-cy='create-org-signup-btn' onClick={(e) => signUp(e)}>Sign Up!</button>
        }
    }

    return (
        <section className="org-form-container">
            <h2>Create your Organization Account</h2>
            {!confirmation && <form className='create-org-form'>
                <label>Organization name
                    <input type='text' className='org-name-input' data-cy='org-name-input' placeholder='Ex: Ocean United' onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>Address
                    <input type='text' className='org-address-input' data-cy='org-address-input' placeholder='Format: 567 Nirvana Ave Seattle, WA  98101 ' onChange={(e) => setAddress(e.target.value)}/>
                </label>
                <label>Phone Number
                    <input type='text' className='org-phone-input' data-cy='org-phone-input' placeholder='(555) 555-5555' onChange={(e) => handleInput(e.target.value)} value={phone}/>
                </label>
                <label>Email
                    <input type='text' className='org-email-input' data-cy='org-email-input' placeholder='Format: oceanunited@email.com' onChange={(e) => setEmail(e.target.value)}/>
                </label>
                
            <SubmitButton />
            </form>}
                {confirmation && 
                <div>
                    <p data-cy='successful-signup'>{confirmation}</p>
                    <button className='create-org-signup-btn-enabled'>Create Your First Event!</button>
                    <p>OR</p>
                    <button className='create-org-signup-btn-enabled'>I'll Do That</button>
                </div>}
        </section>

    )

}

export default OrgCreationForm