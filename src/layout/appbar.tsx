import React from 'react'

export default function Appbar() {
    const sidebarToggle = () => {
        document?.querySelector('body')?.classList.toggle('hide-sidbar');
    }
  return (
    <div className='appbar'>
        <div className="appbar__left flex gap-1">
            <i onClick={sidebarToggle} className='bx bx-menu' ></i>
            <h3>Dashboard</h3>
        </div>
        <div className="appbar__right">
            <div className='flex gap-1'>
                <div className='input_wrap flex gap-1'>
                    <span>
                        <i className='bx bx-search-alt'></i>
                    </span>
                    <input type="text" placeholder='Search...' />
                </div>
                <div>
                    <i className='bx bx-store-alt' ></i>
                </div>
            </div>
        </div>
    </div>
  )
}
