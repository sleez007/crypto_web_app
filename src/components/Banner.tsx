import React from 'react'

export default function Banner() {
  return (
    <section className="top-banner flex">
      <div className="top-banner__content">
        To see content specific to your location, we suggest 
        <span className="user-country">Nigeria</span>
        as your preferred country/region
      </div>
      <div className="top-banner__cta flex">
        <button className="btn btn--dark">Continue</button>
        <div className='cancel'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-i982lc"><path d="M13.4 12l6.6 6.6-1.4 1.4-6.6-6.6L5.4 20 4 18.6l6.6-6.6L4 5.4 5.4 4l6.6 6.6L18.6 4 20 5.4 13.4 12z" fill="currentColor"></path></svg>
        </div>
      </div>
    </section>
  );
}
