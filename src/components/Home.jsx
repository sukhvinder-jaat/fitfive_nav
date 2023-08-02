import React from 'react'
import { FitFive } from './FitFive'
import fit_img from '../assets/img/svg/fit_red.svg'
import {data} from './Help'
import { BlackNav } from './BlackNav'
export const Home = () => {
  return (
    <div>
      <BlackNav black="clr_red" bg_clr="bg_red" ><li className='fs_16 fw_500 text-white ff_poppins pointer'>Work</li></BlackNav>
          <FitFive fit_img={fit_img} product={data} fit_para="The body is a fascinatingly complex machine composed of different cells, each with its particular set of functions mediated by a centralized system, which is the brain. All cells interact to maintain a controlled and stable environment within the body. Any deviation from that balanced state will trigger bodily reactions to restore equilibrium in the short term otherwise the body will find a way to compensate for its ineffective restoration, leading ultimately to dysfunction, disease and undue tensions." hover_border="border-0"/>
    </div>
  )
}
