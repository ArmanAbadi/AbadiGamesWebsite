import React from 'react'

export default function Page() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="/nodefall/dist/index.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="NodeFall Game"
      />
    </div>
  )
}
