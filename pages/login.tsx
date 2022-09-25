import React from 'react';
import Link from 'next/link';

export default function Login(){
  return (
    <div>
      Login
      <form>
        <label htmlFor='email'>Email</label>
        <input name='email' type='text'/>
        <label htmlFor='password'>Password</label>
        <input name='password' type='text'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}