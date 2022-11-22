import React, {useState} from 'react';
import Link from 'next/link';

export default function Login(){

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //need to connect to server for login authentication
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var loginData = {
      email: email,
      password: password,
    }
    console.log(loginData)
  }

  return (
    <div style={container}>
      <div style={login}>
        <h2 style={header}>Login</h2>
        <form style={form} onSubmit={handleSubmit}>
          <label style={input_label} htmlFor='email'>Email</label>
          <input style={text_input} name='email' type='text' onChange={(e) => setEmail(e.target.value)}/>
          <label style={input_label} htmlFor='password'>Password</label>
          <input style={text_input} name='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
          <button style={button} type='submit'>Submit</button>
        </form>
        <p style={p}>Don&apos;t have an account? <a style={signup_link}><Link href='/signup'>Signup here</Link></a></p>
      </div>
    </div>
  )
}

const container: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'lightgrey',
  height: '100%',
}

const login: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '425px',
  width: '500px',
  paddingLeft: '70px',
  backgroundColor: 'white',
  borderRadius: '10px',
}

const header: React.CSSProperties = {
  marginTop: '30px',
  alignSelf: 'center',
  marginRight: '70px',
}

const form: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
}

const input_label: React.CSSProperties = {
  marginTop: '40px',
  marginBottom: '10px',
}

const text_input: React.CSSProperties = {
  borderWidth: '1px',
  borderColor: 'darkgrey',
  borderRadius: '5px',
  width: '360px',
  height: '35px'
}

const button: React.CSSProperties = {
  marginTop: '30px',
  borderRadius: '10px',
  backgroundColor: 'lightgreen',
  color: 'white',
  height: '40px',
  width: '90px',
  alignSelf: 'center',
}

const p: React.CSSProperties = {
  marginTop: '15px',
}

const signup_link: React.CSSProperties = {
  color: 'blue',
}