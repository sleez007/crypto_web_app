import React from 'react'
import Appbar from './appbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'

export default function Dashboardlayout() {
  return (
    <section className="dashboard">
        <Sidebar />
        <main className="dashboard__layout">
            <Appbar />
            <Outlet />
        </main>
    </section>
  )
}
