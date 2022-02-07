import React from 'react';
import '../Styles/SignIn.css';
import CreateEvent from './CreateEvent';

const SignIn = () => {
  return (
    <div>
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
        <CreateEvent  date={''} category={''} start_time={''} end_time={''} volunteers_needed={''} />
    </div>
  )
}

export default SignIn;