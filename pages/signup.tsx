import React, {useState} from 'react';

export default function Signup () {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

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
    </div>
  )
}