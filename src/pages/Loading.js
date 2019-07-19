import React from 'react'
import { Spin } from 'antd'

export default () => (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left:'50%',
      transform: ['translate(-50%)']
    }}
  >
    <Spin size="large" />
  </div>
)
