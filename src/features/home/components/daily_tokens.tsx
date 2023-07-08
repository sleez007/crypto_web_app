import React from 'react';
import btc from '../../../assets/static/images/btc.png';
// import busd from '../../../assets/static/images/busd.png';
// import gmt from '../../../assets/static/images/gmt.png';
// import bnb from '../../../assets/static/images/bnb.png';

interface ICatalog{
  image: string;
  title: string;
  subTitle: string;
  price: string;
  link?: string;
}
const catalogs: ICatalog[] = [
  {
    image: btc,
    title: 'USDT',
    subTitle: 'APR',
    price: '0.63%-200.37%'
  },
  {
    image: btc,
    title: 'USDT',
    subTitle: 'APR',
    price: '0.63%-200.37%'
  },
  {
    image: btc,
    title: 'USDT',
    subTitle: 'APR',
    price: '0.63%-200.37%'
  },
  {
    image: btc,
    title: 'USDT',
    subTitle: 'APR',
    price: '0.63%-200.37%'
  },
  {
    image: btc,
    title: 'USDT',
    subTitle: 'APR',
    price: '0.63%-200.37%'
  },
  {
    image: btc,
    title: 'USDT',
    subTitle: 'APR',
    price: '0.63%-200.37%'
  },
  {
    image: btc,
    title: 'USDT',
    subTitle: 'APR',
    price: '0.63%-200.37%'
  },
  {
    image: btc,
    title: 'USDT',
    subTitle: 'APR',
    price: '0.63%-200.37%'
  },
  {
    image: btc,
    title: 'USDT',
    subTitle: 'APR',
    price: '0.63%-200.37%'
  },
  {
    image: btc,
    title: 'USDT',
    subTitle: 'APR',
    price: '0.63%-200.37%'
  }

]

export default function Dailytoken() {
  return (
   <section className="token">
      <div className="container">
        <h1>Earn daily rewards on your idle tokens</h1>
        <p>Simple & Secure. Search popular coins and start earning.</p>

        <div className="token__catalog grid">
            {
              catalogs.map((item, index) => (
                <div key={index} className="catalog">
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.subTitle}</p>
                    <h2>{item.price}</h2>
                    <a className='fab' href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="icon"><path fillRule="evenodd" clipRule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg>
                    </a>
                </div>
              ))
            }
        </div>
      </div>
   </section>
  )
}
