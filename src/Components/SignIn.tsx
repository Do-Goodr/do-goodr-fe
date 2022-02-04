import React from 'react';
import '../Styles/SignIn.css';

const SignIn = () => {
  return (
    <form className="SignIn">
      <select
          name="organization"
          placeholder="Choose Organization">
          <option hidden>Choose Organization</option>
          <option>American Red Cross</option>
          <option>Farts McGee</option>
          <option>Food Bank</option>
        </select>
    </form>
  );
}

export default SignIn;