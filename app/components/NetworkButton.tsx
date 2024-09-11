'use client'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useMemo } from 'react'
import { useAccount, useChains } from 'wagmi'


const NetworkButton = ({}) => {
  const { open } = useWeb3Modal()
  const { isConnected, chain } = useAccount()
  const chains = useChains()
  
  const isSupportedChain = useMemo(() => {
    return chains.some(c => c.id === chain?.id)
  }, [chain, chains])

  return (
    <button onClick={() => open({ view: 'Networks' })} disabled={!isConnected} style={{width: '100%'}}>
      {isSupportedChain ? `Using ${chain?.name}` : 'Select Chain'}
    </button>
  )
}

export default NetworkButton