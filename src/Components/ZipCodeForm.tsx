import React, { useState } from 'react';
import '../Styles/ZipCodeForm.css';
import { ZipCodeSearch } from '../utilities/Types';
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import mileageCheck from '../utilities/mileageCheck';



const ZipCodeForm = () => {

  const [zipCode, setZipCode] = useState<ZipCodeSearch['zipCode'] | 0 | null>(null)
  const [mileage, setMileage] = useState<ZipCodeSearch['mileage'] | 0 | null>(null)
  let navigate = useNavigate()

  const getOpportunities = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate(`/results/${zipCode}/${mileage}`)
  }

  const SubmitButton = () => {
    if (zipCode && mileage && zipCode.toString().length === 5 && mileageCheck(mileage)) {
        return <button data-cy='show-events-btn' className='show-events-btn' onClick={(e) => getOpportunities(e)}>Show Opportunities</button>
    } else {
        return <button disabled={true} data-cy='show-events-btn' className='show-events-btn' onClick={(e) => getOpportunities(e)}>Show Opportunities</button>
    }
}

  return (
    <form className="zip-code-form">
      <Link to='/newevent' className='add-opp-btn'>Add Volunteer Opp</Link>
      <h3 className='search-opp-title'>Search Volunteering Opportunities</h3>
      <div className='zip-miles'>
        <input
          placeholder='Enter Zip Code'
          name="zipCode"
          className='zip-input'
          data-cy='zip-input'
          onChange={(e) => setZipCode(parseInt(e.target.value))}
        />
        <select
          name="mileage"
          placeholder="Within Miles"
          className='mileage-input'
          data-cy='mileage-input'
          onChange={(e) => setMileage(parseInt(e.target.value))}>
          <option hidden>Within Miles</option>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
        </select>
      </div>
      <SubmitButton />
    </form>
  );
}

export default ZipCodeForm;