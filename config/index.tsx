import { authConnector } from '@web3modal/wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet, arbitrum, fantom } from 'wagmi/chains';
import { injected, safe, walletConnect } from 'wagmi/connectors';

// CHANGE THIS TO YOUR PROJECT ID
export const projectId = '84bbdd9b4b3a87e8e8fefb1eaad97e2e';

const metadata = {
  name: 'Test App',
  description: 'To test web3modal',
  url: 'https://gm.walletconnect.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, arbitrum, fantom] as const;

// Create wagmiConfig
export const config = createConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [fantom.id]: http(),
  },
  connectors: [
    walletConnect({
      projectId: projectId,
      metadata,
      showQrModal: false,
    }),
    injected({ shimDisconnect: true }),
    safe({ shimDisconnect: true, debug: true }),
    authConnector({
      chains,
      options: { projectId },
      email: true, // default to true
      socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
      showWallets: true, // default to true
      walletFeatures: true // default to true
    })
  ],
  ssr: true,
});
