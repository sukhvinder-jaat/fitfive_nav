import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../assets/img/svg/nav_logo.svg'
import { Link } from 'react-router-dom'
export const BlackNav = ({children,bg_clr,black,none}) => {
  return (
          <div className={` ${bg_clr}`}>
              <Container>
                  <div className='d-flex align-items-center justify-content-between py-4'>
                      <span><img src={logo} alt="logo" className='w-100' /></span>
                      <ul className='mb-0 ps-0 d-flex align-items-center gap-5'>
                      <li> <Link className='fs_16 fw_500 text-white ff_poppin pointer' to="/">Home</Link></li>
                      <li> <Link className='fs_16 fw_500 text-white ff_poppin pointer' to="/about">About</Link></li>
                          <li className='fs_16 fw_500 text-white ff_poppins pointer'>Work</li>
                      <li className={`fs_16 fw_500 text-white ff_poppins pointer ${none}`}>All pages</li>
                      {/* <li className='fs_16 fw_500 text-white ff_poppins'>{children}</li> */}
                      {children}
                      </ul>
                      <div className='d-flex'>
                          <button className=' ff_poppins fw_500 fs_16 cart_btn bg-transparent text-white'>Cart</button>
                      <button className={` ff_poppins fw_500 fs_16 cart_btn bg-white ms-4 ${black}`}>All Pages</button>
                      </div>
                  </div>
              </Container>
          </div>
  )
}
