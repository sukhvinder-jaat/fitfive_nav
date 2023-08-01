import React from 'react'
import { BlackNav } from './BlackNav'
import { Home } from './Home'

export const MyNav = () => {
  return (
      <div>
          <BlackNav black="text-black" bg_clr="bg-black"/>
          {/* <BlackNav black="clr_red" bg_clr="bg_red" ><li className='fs_16 fw_500 text-white ff_poppins pointer'>Work</li></BlackNav>
          <BlackNav black="clr_green" bg_clr="bg_green" none="d-none" ><li className='fs_16 fw_500 text-white ff_poppins pointer'>Project</li></BlackNav> */}
      <Home/>
    </div>
  )
}
