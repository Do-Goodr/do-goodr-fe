import React from 'react';
import '../Styles/Form.css';

const Form = () => {
  return (
    <form className="Form">
      <input
        type="text"
        name="zipCode"
        value=""
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
      <button data-cy='show-events-btn'>Show me Opportunies</button>
    </form>
  );
}

export default Form;