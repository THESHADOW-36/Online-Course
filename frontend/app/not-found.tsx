import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <Link href="/">Return to Homepage</Link>
    </div>
  )
}

export default NotFound