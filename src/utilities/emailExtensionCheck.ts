import React from 'react'

const emailExtensionCheck = (email:string) => {

    if (email) {
        if (email.includes('@') && email.includes('.com') || email.includes('.org') || email.includes('.gov') || email.includes('.edu') || email.includes('.net') ) {
        return true
        } else {
            return false
        }
    }
}

export default emailExtensionCheck