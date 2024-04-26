'use client'
import React from 'react'
import { useAccount, useConnect } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'

const ConnectButton: React.FC = ({}) => {
  const { open } = useWeb3Modal()
  const { isConnected } = useAccount()

  return (
    <button
      onClick={() => open()}
    >
      {isConnected ? 'Connected' : 'Connect'}
    </button>
  )
}

export default ConnectButton
