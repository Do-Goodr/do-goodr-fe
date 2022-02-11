import React, { useState } from 'react';
import { CreateOrgDetails } from '../utilities/Types';
import  formatPhoneNumber  from '../utilities/formatPhoneNumber'

const OrgCreationForm: React.FC<{}> = () => {

    const [name, setName] = useState<CreateOrgDetails['name']>()
    const [address, setAddress] = useState<CreateOrgDetails['address']>()
    const [phone, setPhone] = useState<CreateOrgDetails['phone']>()
    const [email, setEmail] = useState<CreateOrgDetails['email']>()

    const handleInput = (phone:string) => {
        const formattedNumber = formatPhoneNumber(phone)
        setPhone(formattedNumber)
    }

    return (
        <form>
            <label>Organization name
                <input type='text' onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>Address
                <input type='text' onChange={(e) => setAddress(e.target.value)}/>
            </label>
            <label>Phone Number
                <input type='text' onChange={(e) => handleInput(e.target.value)} value={phone}/>
            </label>
            <label>Email
                <input type='text' onChange={(e) => setEmail(e.target.value)}/>
            </label>
        </form>
    )

}

export default OrgCreationForm