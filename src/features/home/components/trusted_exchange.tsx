import React, { ReactElement } from 'react';
import umbrella from '../../../assets/static/images/trusted-section.webp';

interface  ITrust{
  image:ReactElement;
  title: string;
  description: string
}
const information : ITrust[]  = [
  {
    image: <svg width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 12.002v48h60v-48H6zm7.5 21h-3v-9h3v9zM13.5 48h-3v-9h3v9zM51 24.007H37.5v8.25H51v-8.25z" fill="url(#paint0_linear_1288_32000)"/><path fillRule="evenodd" clipRule="evenodd" d="M12 18h48v36H12v-5.998h1.5v-9H12v-6h1.5v-9H12V18zm39 6.007H37.5v8.25H51v-8.25z" fill="url(#paint1_linear_1288_32000)"/><path opacity=".2" d="M33 2.625l2.625 2.625 2.625-2.625L35.625 0 33 2.625zM0 31.502l1.5 1.5 1.5-1.5-1.5-1.5-1.5 1.5zM49.5 69h3v-3h-3v3zm-39-35.997h3v-9h-3v9zM10.5 48h3v-9h-3v9z" fill="#76808F"/><path d="M57 48.006h-3v-24h3v24z" fill="url(#paint2_linear_1288_32000)"/><path d="M37.5 34.506h3v3h-3v-3z" fill="url(#paint3_linear_1288_32000)"/><path d="M51 34.506h-3v3h3v-3z" fill="url(#paint4_linear_1288_32000)"/><path d="M42.75 34.506h3v3h-3v-3z" fill="url(#paint5_linear_1288_32000)"/><path d="M40.5 39.759h-3v3h3v-3z" fill="url(#paint6_linear_1288_32000)"/><path d="M48 39.759h3v3h-3v-3z" fill="url(#paint7_linear_1288_32000)"/><path d="M45.75 39.759h-3v3h3v-3z" fill="url(#paint8_linear_1288_32000)"/><path d="M37.5 45.007h3v3h-3v-3z" fill="url(#paint9_linear_1288_32000)"/><path d="M51 45.007h-3v3h3v-3z" fill="url(#paint10_linear_1288_32000)"/><path d="M42.75 45.007h3v3h-3v-3z" fill="url(#paint11_linear_1288_32000)"/><defs><linearGradient id="paint0_linear_1288_32000" x1="6" y1="12.003" x2="66" y2="12.003" gradientUnits="userSpaceOnUse"><stop stopColor="#76808F"/><stop offset="1" stopColor="#929AA5"/></linearGradient><linearGradient id="paint1_linear_1288_32000" x1="36" y1="54" x2="36" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient><linearGradient id="paint2_linear_1288_32000" x1="46.688" y1="24.004" x2="46.688" y2="48.378" gradientUnits="userSpaceOnUse"><stop stopColor="#929AA5"/><stop offset="1" stopColor="#76808F"/></linearGradient><linearGradient id="paint3_linear_1288_32000" x1="46.688" y1="24.004" x2="46.688" y2="48.378" gradientUnits="userSpaceOnUse"><stop stopColor="#929AA5"/><stop offset="1" stopColor="#76808F"/></linearGradient><linearGradient id="paint4_linear_1288_32000" x1="46.688" y1="24.004" x2="46.688" y2="48.378" gradientUnits="userSpaceOnUse"><stop stopColor="#929AA5"/><stop offset="1" stopColor="#76808F"/></linearGradient><linearGradient id="paint5_linear_1288_32000" x1="46.688" y1="24.004" x2="46.688" y2="48.378" gradientUnits="userSpaceOnUse"><stop stopColor="#929AA5"/><stop offset="1" stopColor="#76808F"/></linearGradient><linearGradient id="paint6_linear_1288_32000" x1="46.688" y1="24.004" x2="46.688" y2="48.378" gradientUnits="userSpaceOnUse"><stop stopColor="#929AA5"/><stop offset="1" stopColor="#76808F"/></linearGradient><linearGradient id="paint7_linear_1288_32000" x1="46.688" y1="24.004" x2="46.688" y2="48.378" gradientUnits="userSpaceOnUse"><stop stopColor="#929AA5"/><stop offset="1" stopColor="#76808F"/></linearGradient><linearGradient id="paint8_linear_1288_32000" x1="46.688" y1="24.004" x2="46.688" y2="48.378" gradientUnits="userSpaceOnUse"><stop stopColor="#929AA5"/><stop offset="1" stopColor="#76808F"/></linearGradient><linearGradient id="paint9_linear_1288_32000" x1="46.688" y1="24.004" x2="46.688" y2="48.378" gradientUnits="userSpaceOnUse"><stop stopColor="#929AA5"/><stop offset="1" stopColor="#76808F"/></linearGradient><linearGradient id="paint10_linear_1288_32000" x1="46.688" y1="24.004" x2="46.688" y2="48.378" gradientUnits="userSpaceOnUse"><stop stopColor="#929AA5"/><stop offset="1" stopColor="#76808F"/></linearGradient><linearGradient id="paint11_linear_1288_32000" x1="46.688" y1="24.004" x2="46.688" y2="48.378" gradientUnits="userSpaceOnUse"><stop stopColor="#929AA5"/><stop offset="1" stopColor="#76808F"/></linearGradient></defs></svg>,
    title: 'Secure Asset Fund for Users (SAFU)',
    description: 'Binance stores 10% of all trading fees in a secure asset fund to protect a share of user funds.',
    
  },
  {
    image: <svg width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M66 57.002H6v-45h60v45zM25.875 25.395L15.75 36.002l10.125 10.606c5.592 5.858 14.658 5.858 20.25 0L56.25 36.002 46.125 25.395c-5.592-5.858-14.658-5.858-20.25 0z" fill="url(#paint0_linear_1288_32013)"/><path d="M1.5 55.5h69V60h-69v-4.5zM6 12h60v4.5H6V12z" fill="#76808F"/><path opacity=".2" d="M20.25 66L18 63.75 15.75 66 18 68.25 20.25 66zM3 25.5H0v3h3v-3z" fill="#76808F"/><circle opacity=".2" cx="41.25" cy="30.75" r="3.75" fill="#76808F"/><path d="M43.849 33.453a3.75 3.75 0 01-5.303-5.302 8.25 8.25 0 105.303 5.302z" fill="#76808F"/><path opacity=".2" d="M54 5.249l3 3 3-3-3-3-3 3z" fill="#76808F"/><defs><linearGradient id="paint0_linear_1288_32013" x1="36" y1="57.002" x2="36" y2="12.002" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient></defs></svg>,
    description: 'Personalized access control allows you to restrict devices and addresses that can access your account, for greater ease of mind.',
    title: 'Personalised Access Control'
  },
  {
    image: <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M63.333 70H10V33.333h53.333V47.5l4.167 4.167-4.167 4.166V70zM40 41.667v20h-6.667v-20H40z" fill="url(#paint0_linear_1288_31952)"/><path fillRule="evenodd" clipRule="evenodd" d="M60 63.333c6.444 0 11.667-5.223 11.667-11.666C71.667 45.223 66.444 40 60.001 40c-5.285 0-9.75 3.514-11.184 8.333H33.334v13.334h6.667V55h8.816c1.434 4.82 5.899 8.333 11.184 8.333zm-5-11.666l5 5 5-5-5-5-5 5z" fill="#76808F"/><path opacity=".2" d="M60 16.667L63.333 20l3.334-3.333-3.334-3.334L60 16.667zM70.834 66.25l2.083 2.083 2.084-2.083-2.084-2.083-2.083 2.083zM4.166 44.167h2.5v-2.5h-2.5v2.5z" fill="#76808F"/><path fillRule="evenodd" clipRule="evenodd" d="M36.667 15a9.167 9.167 0 00-9.166 9.167v9.166h-6.667v-9.166c0-8.745 7.089-15.834 15.833-15.834 8.745 0 15.834 7.09 15.834 15.834V25h-6.667v-.833A9.167 9.167 0 0036.667 15z" fill="#76808F"/><defs><linearGradient id="paint0_linear_1288_31952" x1="38.75" y1="70" x2="38.75" y2="33.333" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient></defs></svg>,
    description: 'Binance stores 10% of all trading fees in a secure asset fund to protect a share of user funds.',
    title: 'Secure Asset Fund for Users (SAFU)'
  }
]

export default function TrustedExchange() {
  return (
    <section className="trusted">
      <div className="container">
        <div className="trusted__heading flex">
          <h1>Your trusted crypto exchange</h1>
          <div className='flex gap-1'>
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="icon"><path fillRule="evenodd" clipRule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg>
          </div>
        </div>
        <p>Here at Binance, we are committed to user protection with strict protocols and industry-leading technical measures.</p>

        <div className="trusted__info information grid">
          <div className="information__image">
            <img src={umbrella} alt="Umbrella" />
          </div>
          <div className="information__content">
              {
                information.map((item, i) => (
                  <div key={i} className='flex gap-1 '>
                   <div className="image">
                    {item.image}
                   </div>
                    <div className="addition">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>


      </div>
    </section>
  )
}
