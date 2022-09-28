import React, {ReactElement} from 'react';
import Link from 'next/link';

export default function Home (): ReactElement {
  return (
    <div>
      <Link href='/cards'>
        <button>Start next set</button>
      </Link>
    </div>
  )
}