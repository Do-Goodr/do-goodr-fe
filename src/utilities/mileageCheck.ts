import React from "react"

const mileageCheck = (mileage:number) => {
    if (mileage) {
        if ( mileage === 5 || mileage === 10 || mileage === 20 || mileage === 50) {
            return true
        } else {
            return false
        }
    }
}

export default mileageCheck