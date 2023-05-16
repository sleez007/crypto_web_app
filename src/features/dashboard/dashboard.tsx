import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <div className="d-main grid">
        <div className="d-main__content">
          <div className="summary flex">
            {
              new Array(3).fill('').map(
                e => (
                  <div className="summary__card">
                    <div>
                      <p>Total Revenue</p>
                      <span></span>
                    </div>
                    <div>
                      <p>$4.00</p>
                      <span>+6.2%</span>
                    </div>
                  </div>
                )
              )
            }
          </div>
        </div>
        <aside className="d-main__aside">kbjb</aside>
      </div>
    </div>
  )
}
