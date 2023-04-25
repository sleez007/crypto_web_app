import React from 'react';
import HomeBanner from './components/home_banner'
import Hero from '../../components/Hero'
import PopularCoins from './components/popular_coins';
import TradeBanner from './components/trade_banner';

export default function home() {
  return (
    <>
        <HomeBanner />
        <Hero />
        <TradeBanner />
        <PopularCoins />
    </>
  )
}
