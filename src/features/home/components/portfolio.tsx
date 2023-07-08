import React from 'react'
import mobile from '../../../assets/static/images/portfolio-section.webp'
export default function portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="grid">
          <div className="portfolio__image flex">
            <img src={mobile} alt="Phone" />
          </div>
          <div className="portfolio__content">
            <h1>Build your crypto portfolio</h1>
            <p>Start your first trade with these easy steps.</p>

            <div className="strength">
                <div className="strength__item flex gap-1">
                  <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".2" d="M55 6.667L58.333 10l3.334-3.333-3.334-3.334L55 6.667zM34.166 75.833l2.5 2.5 2.5-2.5-2.5-2.5-2.5 2.5zm-22.5-3.333h2.5V70h-2.5v2.5z" fill="#76808F"/><path fillRule="evenodd" clipRule="evenodd" d="M5 15h70v24.167h5V42.5H0v-3.333h5V15zm6.666 24.167h20V25.833h-20v13.334z" fill="#76808F"/><path opacity=".2" d="M5 40.833h70V65H5V40.833zm6.666-15h20v13.334h-20V25.833z" fill="#76808F"/><path d="M11.666 45.833v10h20v-10h-5.833L21.665 50 17.5 45.833h-5.833z" fill="url(#paint0_linear_1288_31969)"/><path d="M37.5 25.833h15.833v3.334H37.5v-3.334z" fill="url(#paint1_linear_1288_31969)"/><path d="M37.5 35.833h30.833v3.334H37.5v-3.334z" fill="url(#paint2_linear_1288_31969)"/><path fill="#76808F" d="M37.5 45.833h30.833v3.333H37.5zm0 6.667h30.833v3.333H37.5z"/><path d="M26.937 39.167a5.834 5.834 0 10-10.544 0h10.544z" fill="url(#paint3_linear_1288_31969)"/><path d="M21.735 42.5h-.14a5.414 5.414 0 00.14 0z" fill="url(#paint4_linear_1288_31969)"/><defs><linearGradient id="paint0_linear_1288_31969" x1="21.666" y1="45.833" x2="21.666" y2="55.833" gradientUnits="userSpaceOnUse"><stop stopColor="#929AA5"/><stop offset="1" stopColor="#76808F"/></linearGradient><linearGradient id="paint1_linear_1288_31969" x1="37.5" y1="32.5" x2="68.333" y2="32.5" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient><linearGradient id="paint2_linear_1288_31969" x1="37.5" y1="32.5" x2="68.333" y2="32.5" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient><linearGradient id="paint3_linear_1288_31969" x1="21.665" y1="30.834" x2="21.665" y2="42.501" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient><linearGradient id="paint4_linear_1288_31969" x1="21.665" y1="30.834" x2="21.665" y2="42.501" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient></defs></svg>
                  <div>
                    <h3>Verify Your Identity</h3>
                    <p>Complete the identity verification process to secure your account and transactions.</p>
                  </div>
                </div>

                <div className="strength__item flex gap-1">
                  <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".2" d="M55 6.667L58.333 10l3.334-3.333-3.334-3.334L55 6.667zM34.166 75.833l2.5 2.5 2.5-2.5-2.5-2.5-2.5 2.5zm-22.5-3.333h2.5V70h-2.5v2.5z" fill="#76808F"/><path fillRule="evenodd" clipRule="evenodd" d="M5 15h70v24.167h5V42.5H0v-3.333h5V15zm6.666 24.167h20V25.833h-20v13.334z" fill="#76808F"/><path opacity=".2" d="M5 40.833h70V65H5V40.833zm6.666-15h20v13.334h-20V25.833z" fill="#76808F"/><path d="M11.666 45.833v10h20v-10h-5.833L21.665 50 17.5 45.833h-5.833z" fill="url(#paint0_linear_1288_31969)"/><path d="M37.5 25.833h15.833v3.334H37.5v-3.334z" fill="url(#paint1_linear_1288_31969)"/><path d="M37.5 35.833h30.833v3.334H37.5v-3.334z" fill="url(#paint2_linear_1288_31969)"/><path fill="#76808F" d="M37.5 45.833h30.833v3.333H37.5zm0 6.667h30.833v3.333H37.5z"/><path d="M26.937 39.167a5.834 5.834 0 10-10.544 0h10.544z" fill="url(#paint3_linear_1288_31969)"/><path d="M21.735 42.5h-.14a5.414 5.414 0 00.14 0z" fill="url(#paint4_linear_1288_31969)"/><defs><linearGradient id="paint0_linear_1288_31969" x1="21.666" y1="45.833" x2="21.666" y2="55.833" gradientUnits="userSpaceOnUse"><stop stopColor="#929AA5"/><stop offset="1" stopColor="#76808F"/></linearGradient><linearGradient id="paint1_linear_1288_31969" x1="37.5" y1="32.5" x2="68.333" y2="32.5" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient><linearGradient id="paint2_linear_1288_31969" x1="37.5" y1="32.5" x2="68.333" y2="32.5" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient><linearGradient id="paint3_linear_1288_31969" x1="21.665" y1="30.834" x2="21.665" y2="42.501" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient><linearGradient id="paint4_linear_1288_31969" x1="21.665" y1="30.834" x2="21.665" y2="42.501" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient></defs></svg>
                  <div>
                    <h3>Verify Your Identity</h3>
                    <p>Complete the identity verification process to secure your account and transactions.</p>
                  </div>
                </div>

                <div className="strength__item flex gap-1">
                  <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".2" d="M55 6.667L58.333 10l3.334-3.333-3.334-3.334L55 6.667zM34.166 75.833l2.5 2.5 2.5-2.5-2.5-2.5-2.5 2.5zm-22.5-3.333h2.5V70h-2.5v2.5z" fill="#76808F"/><path fillRule="evenodd" clipRule="evenodd" d="M5 15h70v24.167h5V42.5H0v-3.333h5V15zm6.666 24.167h20V25.833h-20v13.334z" fill="#76808F"/><path opacity=".2" d="M5 40.833h70V65H5V40.833zm6.666-15h20v13.334h-20V25.833z" fill="#76808F"/><path d="M11.666 45.833v10h20v-10h-5.833L21.665 50 17.5 45.833h-5.833z" fill="url(#paint0_linear_1288_31969)"/><path d="M37.5 25.833h15.833v3.334H37.5v-3.334z" fill="url(#paint1_linear_1288_31969)"/><path d="M37.5 35.833h30.833v3.334H37.5v-3.334z" fill="url(#paint2_linear_1288_31969)"/><path fill="#76808F" d="M37.5 45.833h30.833v3.333H37.5zm0 6.667h30.833v3.333H37.5z"/><path d="M26.937 39.167a5.834 5.834 0 10-10.544 0h10.544z" fill="url(#paint3_linear_1288_31969)"/><path d="M21.735 42.5h-.14a5.414 5.414 0 00.14 0z" fill="url(#paint4_linear_1288_31969)"/><defs><linearGradient id="paint0_linear_1288_31969" x1="21.666" y1="45.833" x2="21.666" y2="55.833" gradientUnits="userSpaceOnUse"><stop stopColor="#929AA5"/><stop offset="1" stopColor="#76808F"/></linearGradient><linearGradient id="paint1_linear_1288_31969" x1="37.5" y1="32.5" x2="68.333" y2="32.5" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient><linearGradient id="paint2_linear_1288_31969" x1="37.5" y1="32.5" x2="68.333" y2="32.5" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient><linearGradient id="paint3_linear_1288_31969" x1="21.665" y1="30.834" x2="21.665" y2="42.501" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient><linearGradient id="paint4_linear_1288_31969" x1="21.665" y1="30.834" x2="21.665" y2="42.501" gradientUnits="userSpaceOnUse"><stop stopColor="#F0B90B"/><stop offset="1" stopColor="#F8D33A"/></linearGradient></defs></svg>
                  <div>
                    <h3>Verify Your Identity</h3>
                    <p>Complete the identity verification process to secure your account and transactions.</p>
                  </div>
                </div>

                <button className='btn btn--primary'>Get Started</button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
