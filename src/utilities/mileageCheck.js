import React from "react"

const mileageCheck = (mileage) => {
    if (mileage) {
        if ( mileage === 5 || mileage === 10 || mileage === 20 || mileage === 50) {
            return true
        } else {
            return false
        }
    }
}

export default mileageCheck