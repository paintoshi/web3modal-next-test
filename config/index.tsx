import { createConfig, http } from 'wagmi';
import { mainnet, arbitrum } from 'wagmi/chains';
import { injected, safe, walletConnect } from 'wagmi/connectors';

export const projectId = 'YOUR_PROJECT_ID';

const metadata = {
  name: 'GM dApp',
  description: 'GM dApp is example dApp to test notifications with Web3Inbox',
  url: 'https://gm.walletconnect.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

// Create wagmiConfig
export const config = createConfig({
  chains: [mainnet, arbitrum],
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
  },
  connectors: [
    walletConnect({
      projectId: projectId,
      metadata,
      showQrModal: false,
    }),
    injected({ shimDisconnect: true }),
    safe({ shimDisconnect: true, debug: true }),
  ],
  ssr: true,
});
