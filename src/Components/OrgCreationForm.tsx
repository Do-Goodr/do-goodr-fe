import React, { useState } from 'react';
import { CreateOrgDetails } from '../utilities/Types';
import  formatPhoneNumber  from '../utilities/formatPhoneNumber'
import apiCalls from '../utilities/apiCalls';
import '../Styles/OrgCreationForm.css'

const OrgCreationForm: React.FC<{}> = () => {

    const [name, setName] = useState<CreateOrgDetails['name']>()
    const [address, setAddress] = useState<CreateOrgDetails['address']>()
    const [phone, setPhone] = useState<CreateOrgDetails['phone']>('')
    const [email, setEmail] = useState<CreateOrgDetails['email']>()
    const [confirmation, setConfirmation] = useState<CreateOrgDetails['confirmation']>()

    const handleInput = (phone:string) => {
        console.log(phone.length - 4)
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
        if (name && address && (phone.length - 4 === 10) && email?.includes('@') && !confirmation) {
            return <button className='create-org-signup-btn' data-cy='create-org-signup-btn' onClick={(e) => signUp(e)}>Sign Up!</button>
        } else {
            return <button disabled={true} data-cy='create-org-signup-btn' onClick={(e) => signUp(e)}>Sign Up!</button>
        }
    }

    return (
        <section className="org-form-container">
            <form className='create-org-form'>
                <label>Organization name
                    <input type='text' data-cy='org-name-input' placeholder='Ex: Ocean United' onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>Address
                    <input type='text' data-cy='org-address-input' placeholder='Format: 567 Nirvana Ave Seattle, WA  98101 ' onChange={(e) => setAddress(e.target.value)}/>
                </label>
                <label>Phone Number
                    <input type='text' data-cy='org-phone-input' placeholder='(555) 555-5555' onChange={(e) => handleInput(e.target.value)} value={phone}/>
                </label>
                <label>Email
                    <input type='text' data-cy='org-email-input' placeholder='Format: oceanunited@email.com' onChange={(e) => setEmail(e.target.value)}/>
                </label>
                {confirmation && 
                <div>
                    <p data-cy='successful-signup'>{confirmation}</p>
                    <button>Create Your First Event!</button>
                    <p>OR</p>
                    <button>I'll Do That</button>
                </div>}
                
            </form>
            <SubmitButton />
        </section>

    )

}

export default OrgCreationForm