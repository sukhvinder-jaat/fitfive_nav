import React from 'react'
import { BlackNav } from './BlackNav'
import { FitFive } from './FitFive'
import fit_img from '../assets/img/svg/green_logo.svg'
import {data2} from './Help'
export const About = () => {
  return (
      <div>
      <BlackNav black="clr_green" bg_clr="bg_green" none="d-none" ><li className='fs_16 fw_500 text-white ff_poppins pointer'>Project</li></BlackNav>
       <FitFive fit_img={ fit_img} product={data2} fit_para="What we eat impacts our health and well-being on a fundamental level." hover_border="border-0"/>
    </div>
  )
}
