// @ts-nocheck
import * as React from "react";
import { Tabs, Tab, Typography, Box, Button } from "@mui/material";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'
import { useContractKit } from "@celo-tools/use-contractkit";
import NearWalletSelector from "@near-wallet-selector/core";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";

// const selector = await NearWalletSelector.init({
//   network: "testnet",
//   contractId: "guest-book.testnet",
//   wallets: [
//     setupNearWallet(),
//   ],
// });

const CoinbaseWallet = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    appName: "Web3-react Demo",
    supportedChainIds: [1, 3, 4, 5, 42],
   });
   
   const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
   });
   
   const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
   });

export default function Wallet() {

    const { activate, deactivate } = useWeb3React();
    // const { address, network, connect, destroy, kit } = useContractKit();

  return (
    <>
          <button onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</button>
<button onClick={() => { activate(WalletConnect) }}>Wallet Connect</button>
<button onClick={() => { activate(Injected) }}>Metamask</button>

<button onClick={deactivate}>Disconnect</button>
<Button
              color="inherit"
              variant="outlined"
              onClick={() => connect().catch(e => console.log(e))}
            >
              Celo Wallet
            </Button>
        </>
  );
}
