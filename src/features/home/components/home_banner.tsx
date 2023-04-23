import React from 'react'

export default function homeBanner() {
  return (
    <section className='banner flex'>
      <div className="banner__content flex gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="icon"><path d="M13.5 6.379V3h-3v3.379l-2.94-2.94-2.12 2.122L7.878 8H4v3h6.75V8h2.5v3H20V8h-3.879l2.44-2.44-2.122-2.12L13.5 6.378zM4 13.5V20h6.75v-6.5H4zM13.25 20H20v-6.5h-6.75V20z" fill="currentColor"></path></svg>
        <span>Register now — Get up to 100 USDT in trading fee rebate (for verified users)</span>     
      </div>
      <div className="banner__cta">
        <div className="btn btn--primary">Redeem Gift</div>
      </div>
    </section>
  )
}
