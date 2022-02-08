import React, { useState } from 'react';
import '../Styles/Form.css';

const Form = () => {

  interface FormProps  {
    zipCode: number
  }

  // const [zipCode, setZipCode] = useState<FormProps>()
  return (
    <form className="Form">
      <input
        type='number'
        name="zipCode"
        // onChange={(e) => setZipCode(e.target.value)}
      />
      <select
        name="mileage"
        placeholder="Within Miles">
        <option hidden>Within Miles</option>
        <option>0 - 5</option>
        <option>6 - 10</option>
        <option>11 - 20</option>
        <option>21 - 50</option>
      </select>
        <button data-cy='show-events-btn'>Show me Opportunities</button>
    </form>
  );
}

export default Form;