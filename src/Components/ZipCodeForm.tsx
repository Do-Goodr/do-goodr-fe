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
        <h3 className='search-opp-title'>Search Volunteering Opportunities</h3>
      <div className='zip-miles'>
          <input
            placeholder='Enter Zip Code'
            name="zipCode"
            className='zip-input'
            onChange={(e) => setZipCode(parseInt(e.target.value))}
          />
          <select
            name="mileage"
            placeholder="Within Miles"
            className='mileage-input'
            onChange={(e) => setMileage(parseInt(e.target.value))}>  
            <option hidden>Within Miles</option>
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
      </div>
        <button data-cy='show-events-btn' onClick={(e) => getOpportunities(e)}>Show Opportunities</button>
    </form>
  );
}

export default ZipCodeForm;