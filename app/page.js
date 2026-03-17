
import Link from 'next/link'

export default function Page() {
  return (
    <main style={{padding:40, textAlign:'center'}}>
      <h1 style={{color:'#d63384'}}>Next.js Pastel Dashboard</h1>
      <p>Home page</p>

      <Link href="/dashboard" style={{
        background:'#ffb3d1',
        padding:'10px 20px',
        borderRadius:'10px',
        color:'white'
      }}>
        Go to Dashboard
      </Link>
    </main>
  )
}
