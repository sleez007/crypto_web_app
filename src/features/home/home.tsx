import React from 'react';
import HomeBanner from './components/home_banner'
import Hero from '../../components/Hero'
import PopularCoins from './components/popular_coins';
import TradeBanner from './components/trade_banner';
import Portfolio from './components/portfolio';
import Dailytoken from './components/daily_tokens';

export default function home() {
  return (
    <>
        <HomeBanner />
        <Hero />
        <TradeBanner />
        <PopularCoins />
        <Portfolio />
        <Dailytoken />
    </>
  )
}
