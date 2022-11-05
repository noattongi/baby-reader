import React, {useState} from 'react';
import Link from 'next/link';

export default function Login(){

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var loginData = {
      email: email,
      password: password,
    }
    console.log(loginData)
  }

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input name='email' type='text' onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor='password'>Password</label>
        <input name='password' type='text' onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
      <p>Don't have an account? <Link href='/signup'>Signup here</Link> </p>
    </div>
  )
}