import React from 'react'

const formatZipCode = (zip:string) => {
    if (!zip) return zip
    const zipCode = zip.replace(/[^\d]/g, "")
    console.log(zipCode)
    return zipCode.slice(0, 5)
}

export default formatZipCode