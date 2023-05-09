import React from 'react';
import HomeBanner from './components/home_banner'
import Hero from '../../components/Hero'
import PopularCoins from './components/popular_coins';
import TradeBanner from './components/trade_banner';
import Portfolio from './components/portfolio';
import Dailytoken from './components/daily_tokens';
import Explore from './components/explore';
import TrustedExchange from './components/trusted_exchange';
import TradeAnytime from './components/trade_anytime';
import Help from './components/help';
import EarnToday from './components/earn_today';

export default function home() {
  return (
    <>
        <HomeBanner />
        <Hero />
        <TradeBanner />
        <PopularCoins />
        <Portfolio />
        <Dailytoken />
        <Explore />
        <TrustedExchange />
        <TradeAnytime />
        <Help />
        <EarnToday />
    </>
  )
}
