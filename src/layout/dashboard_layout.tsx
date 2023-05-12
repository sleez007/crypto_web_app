import React from 'react'
import Appbar from './appbar'
import { Outlet } from 'react-router-dom'

export default function Dashboardlayout() {
  return (
    <section className="dashboard">
        <aside className="dashboard__sidebar"></aside>
        <main className="dashboard__layout">
            <Appbar />
            <Outlet />
        </main>
    </section>
  )
}
