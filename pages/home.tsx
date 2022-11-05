import React, {ReactElement, useEffect} from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function Home (): ReactElement {
  //state here for card sets and next set

  return (
    <div style={button_container_styles}>
      <Link href='/cards'>
        <button style={start_button_styles}>Start next set</button>
      </Link>
    </div>
  )
}

const button_container_styles: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}

const start_button_styles: React.CSSProperties = {
  backgroundColor: '#00d338',
  color: 'white',
  fontSize: '25px',
  marginTop: '40px',
  padding: '15px 25px',
  borderRadius: '25px'
}