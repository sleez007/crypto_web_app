import React from 'react'
import HeroImage from '../assets/static/images/hero.png';
import GoogleIcon from '../assets/static/images/google-icon.png';

const stats = [
    {
        title: '$38 billion',
        description: '24h trading volume on Binance exchange'
    },
    {
        title: '350+',
        description: 'Cryptocurrencies listed'
    },
    {
        title: '120 million',
        description: 'Registered users'
    },
    {
        title: '<0.10%',
        description: 'Lowest transaction fees'
    }
]

export default function Hero() {
  return (
    <main className='main'>
        <div className="container">
            <section className='hero grid'>
                <div className="hero__content">
                    <h1>Buy, trade, and hold 350+ cryptocurrencies on Binance</h1>
                    <div className="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="icon npx"><path d="M13.5 6.379V3h-3v3.379l-2.94-2.94-2.12 2.122L7.878 8H4v3h6.75V8h2.5v3H20V8h-3.879l2.44-2.44-2.122-2.12L13.5 6.378zM4 13.5V20h6.75v-6.5H4zM13.25 20H20v-6.5h-6.75V20z" fill="currentColor"></path></svg>
                        <p>Trade Bitcoin for free</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="icon"><path fillRule="evenodd" clipRule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg>
                    </div>
                    <div className="cta-wrap">
                        <button className='flex btn btn--primary btn--medium btn--full-width'>
                            <span className="material-icons"> person </span>
                            <span>Sign Up with Email or Phone</span>
                        </button>
                        <p className="cta-option flex gap-1"><span className='line' /> or continue with <span className='line' /></p>
                        <div className="cta-wrap__socials flex gap-1">
                            <button className="btn flex">
                                <img
                                    src={GoogleIcon}
                                    alt="Google Icon"
                                    height="15"
                                    width="15"
                                />
                                Google
                            </button>
                            <button className="btn flex">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0152 12.4689C13.771 13.0279 13.482 13.5424 13.1471 14.0155C12.6906 14.6604 12.3169 15.1068 12.0289 15.3547C11.5824 15.7616 11.104 15.97 10.5917 15.9818C10.224 15.9818 9.78048 15.8781 9.26423 15.6678C8.74628 15.4584 8.27029 15.3547 7.83506 15.3547C7.37861 15.3547 6.88906 15.4584 6.36543 15.6678C5.84101 15.8781 5.41854 15.9878 5.09553 15.9986C4.60429 16.0194 4.11465 15.8051 3.6259 15.3547C3.31395 15.0851 2.92377 14.6229 2.45636 13.9681C1.95485 13.2688 1.54255 12.458 1.21954 11.5336C0.873609 10.5351 0.700195 9.5682 0.700195 8.63213C0.700195 7.55987 0.934005 6.63506 1.40232 5.86007C1.77038 5.23757 2.26002 4.74652 2.87285 4.38604C3.48567 4.02556 4.14783 3.84186 4.86092 3.83011C5.2511 3.83011 5.76277 3.94971 6.39862 4.18476C7.03268 4.42061 7.4398 4.54021 7.6183 4.54021C7.75175 4.54021 8.20401 4.40036 8.97072 4.12156C9.69577 3.863 10.3077 3.75594 10.809 3.79811C12.1674 3.90675 13.188 4.4374 13.8667 5.39342C12.6518 6.12288 12.0508 7.14457 12.0628 8.45525C12.0737 9.47616 12.4475 10.3257 13.182 11.0003C13.5149 11.3133 13.8866 11.5553 14.3002 11.7272C14.2105 11.9849 14.1158 12.2318 14.0152 12.4689ZM10.8997 0.320091C10.8997 1.12027 10.6047 1.8674 10.0167 2.55894C9.30708 3.38104 8.44879 3.85608 7.51804 3.78112C7.50618 3.68512 7.4993 3.58409 7.4993 3.47792C7.4993 2.70975 7.83676 1.88765 8.43603 1.21547C8.73522 0.875136 9.11573 0.592152 9.57717 0.36641C10.0376 0.144037 10.4731 0.0210593 10.8828 0C10.8947 0.106972 10.8997 0.213951 10.8997 0.320081V0.320091Z" fill=""/>
                                </svg>
                                Apple
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hero__image">
                    <img src={HeroImage} alt="Hero cover" />
                </div>
            </section>
            <aside className='stats'>
                {
                    stats.map(stat => (
                        <div key={stat.title} className="stats__item">
                            <h1>{stat.title}</h1>
                            <p>{stat.description}</p>
                        </div>
                    ))
                }
            </aside>
        </div>
    </main>
  )
}