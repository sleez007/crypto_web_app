import React from 'react';
import nft from '../../../assets/static/images/nft.webp';
import pay from '../../../assets/static/images/binance-pay.webp';
import binance from '../../../assets/static/images/binance-earn.webp';

export default function Explore() {
  return (
    <section className="explore">
      <div className="container">
        <h1>Explore endless possibilities with Binance</h1>

        <div className="grid wrp">
          <div className="explore__item info">
            <div className='info__image'>
              <img src={nft} alt='NFT' />
            </div>
            <div className='info__detail'>
              <h2>Dive into the world of NFTs</h2>
              <p>Open rare Mystery Boxes, explore IGOs, Fan Tokens, and more with Binance NFT.</p>
              <a href='/'>Learn More</a>
            </div>
            
          </div>
          <div className="explore__item info two">
            <div className='info__detail'>
              <h2>Grow your business with Binance Pay</h2>
              <p>Reach more customers as you pay and get paid in crypto with our borderless payment technology on Binance Pay & Binance Marketplace.</p>
                <a href='/'>Learn More</a>
            </div>
            <div className='info__image'>
              <img src={pay} alt='NFT' />
            </div>
          </div>
          <div className="explore__item info">
            <div className='info__image'>
            <img src={binance} alt='NFT' />
            </div>
            <div className='info__detail'>
              <h2>Binance Earn</h2>
              <p>Hold your crypto funds and start earning.</p>
              
              <a href='/'>Learn More</a>
            </div>
          </div>
        </div>
       <div className="explore__cta">
        <button className="btn btn--primary">Explore Now</button>
       </div>
      </div>
    </section>
  )
}
