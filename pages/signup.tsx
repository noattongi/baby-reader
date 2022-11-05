import React, {useState} from 'react';

export default function Signup () {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSignup = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    //check inputs for requirements
    //send post request
    //redirect to login page
  }

  return (
    <div>
      <label>
        Enter your email here
      </label>
      <input type='text' onChange={(e) => setEmail(e.target.value)}/>
      <label>
        Set your password
      </label>
      <input type='text' onChange={(e) => setPassword(e.target.value)} />
      <label>
        Confirm your password
      </label>
      <input type='text' onChange={(e) => setConfirmPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign up</button>
    </div>

  )
}