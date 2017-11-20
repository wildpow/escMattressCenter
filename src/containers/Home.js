import React from 'react'
import { getSiteProps } from 'react-static'
//
import logoImg from '../logo.svg'

export default getSiteProps(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
  </div>
))
