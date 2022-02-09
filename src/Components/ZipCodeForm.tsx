import React, { useState } from 'react';
import '../Styles/ZipCodeForm.css';
import apiCalls from '../utilities/apiCalls';
import { ZipCodeSearch } from '../utilities/Types';


const ZipCodeForm = () => {

  const [zipCode, setZipCode] = useState<ZipCodeSearch['zipCode'] | 0 | null>(null)
  const [mileage, setMileage] = useState<ZipCodeSearch['mileage'] | 0 | null>(null)

  const getOpportunities = (e:React.MouseEvent) => {
    e.preventDefault()
    const test = apiCalls.loadEventsByZipCode(zipCode, mileage)
    console.log('test', test)
  }

  return (
    <form className="zip-code-form">
      <input
        type='number'
        name="zipCode"
        onChange={(e) => setZipCode(parseInt(e.target.value))}
      />
      <select
        name="mileage"
        placeholder="Within Miles"
        onChange={(e) => setMileage(parseInt(e.target.value))}>
        
        <option hidden>Within Miles</option>
        <option>5</option>
        <option>10</option>
        <option>20</option>
        <option>50</option>
      </select>
        <button data-cy='show-events-btn' onClick={(e) => getOpportunities(e)}>Show me Opportunities</button>
    </form>
  );
}

export default ZipCodeForm;