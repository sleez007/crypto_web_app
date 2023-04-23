import React from 'react'
import HeroImage from '../assets/static/images/hero.png';

export default function Hero() {
  return (
    <section className='hero'>
        <div className="container grid">
            <div className="hero__detail">
                <h1>Buy, trade, and hold 350 cryptocurrencies on Binance</h1>
                <p className="flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="icon"><path d="M13.5 6.379V3h-3v3.379l-2.94-2.94-2.12 2.122L7.878 8H4v3h6.75V8h2.5v3H20V8h-3.879l2.44-2.44-2.122-2.12L13.5 6.378zM4 13.5V20h6.75v-6.5H4zM13.25 20H20v-6.5h-6.75V20z" fill="currentColor"></path></svg>
                    <span>Trade Bitcoin for free</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="icon"><path fillRule="evenodd" clipRule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg>
                </p>
                <div className="cta-wrap">
                    <button className='btn btn--primary btn--medium btn--full-width'>
                        <span>Sign Up with Email or Phone</span>
                    </button>
                    <p className="cta-option flex gap-1"><span className='line' /> or continue with <span className='line' /></p>
                </div>
            </div>
            <div className="hero__image">
                <img src={HeroImage} alt="Hero cover" />
            </div>
        </div>
    </section>
  )
}
