import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/message').then(res => setMessage(res.data.message))
    axios.get('http://localhost:8000/health').then(res => setStatus(res.data.status))
  }, [])

  return (
    <main>
      <h1>DevOps Assignment Frontend</h1>
      <p>Status: {status}</p>
      <p>Message: {message}</p>
    </main>
  )
}
