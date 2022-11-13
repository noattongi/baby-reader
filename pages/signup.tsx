import React, {useState} from 'react';
import {useRouter} from 'next/router';

export default function Signup () {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [emailWarning, setEmailWarning] = useState<boolean>(false);
  const [passwordWarning, setPasswordWarning] = useState<boolean>(false);
  const [passwordMatches, setPasswordMatches] = useState<boolean>(false);


  const validateEmail = (email: string) => {
    //will validate as long as it has characters in front of an '@' and ends with '.com'
    var match = email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (match && match[0] === email) {
      setEmailWarning(false);
      return true;
    } else {
      setEmailWarning(true);
      return false;
    }
  }

  const validatePassword = (pass: string) => {
    if (pass.length < 10) {
      setPasswordWarning(true);
      return false;
    } else {
      setPasswordWarning(false);
      return true;
    }
  }

  const checkPasswordsAreEqual = () => {
    if (password === confirmPassword) {
      setPasswordMatches(true);
      return true;
    } else {
      setPasswordMatches(false);
      return false;
    }
  }
  //README - This function needs post request to be added for user login data
  const handleSignup = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    //check inputs for requirements
    if (!validateEmail(email)) {
      alert('Enter a valid email');
      return;
    }
    if (!validatePassword(password)) {
      alert('Enter a valid password');
      return;
    }
    if (!checkPasswordsAreEqual()) {
      alert('The passwords do not match');
      return;
    }
    //reroute to login if all requirements are met
    router.push('/login');
  }

  return (
    <div style={container}>
      <div style={signup}>
        <h2 style={header}>Create a Baby Reader account</h2>
        <label style={input}>
          Email
        </label>
        <input style={text_input} type='text' onBlur={() => validateEmail(email)} onChange={(e) => setEmail(e.target.value)}/>
        {emailWarning && <label style={warning}>Invalid email</label>}
        <label style={input}>
          Password
        </label>
        <input style={text_input} type='password' onBlur={() => validatePassword(password)} onChange={(e) => setPassword(e.target.value)} />
        {passwordWarning && <label style={warning}>Password must be at least 10 characters long</label>}
        <label style={input}>
          Confirm password
        </label>
        <input style={text_input} type='password' onChange={(e) => setConfirmPassword(e.target.value)} />
        <button style={button} onClick={handleSignup}>Sign up</button>
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

const signup: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '500px',
  width: '500px',
  paddingLeft: '70px',
  backgroundColor: 'white',
  borderRadius: '10px',
}

const header: React.CSSProperties = {
  marginTop: '20px'
}

const input: React.CSSProperties = {
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
  marginTop: '50px',
  borderRadius: '10px',
  backgroundColor: 'lightgreen',
  color: 'white',
  height: '40px',
  width: '90px',
  alignSelf: 'center',
}

const warning: React.CSSProperties = {
  color: 'red',
  fontSize: '13px'
}