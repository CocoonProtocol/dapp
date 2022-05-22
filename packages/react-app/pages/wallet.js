// @ts-nocheck
import * as React from "react";
import { Tabs, Tab, Typography, Box, Button, Stack } from "@mui/material";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'
import AppLayout from '../components/layout/AppLayout'
import { useContractKit } from "@celo-tools/use-contractkit";
import { useRouter } from 'next/router'
import Image from 'next/image'

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
    const router = useRouter()

    const { active, chainId, account, activate } = useWeb3React();
    const { address, network, connect, destroy, kit } = useContractKit();
//https://wallet.testnet.near.org/
  return (
    <AppLayout>
        <Box sx={{ width: "100%" , display: 'grid'}}>
            
            <Stack p={40} gap={2}>
            <Typography variant="h5">
        Connect or Create your Wallet
    </Typography>
    <Typography variant="body1">
        The easiest way to get up an running with Cocoon is to create or login with Coinbase Wallet.
    </Typography>
            
          <Button
              color="inherit"
              variant="outlined" onClick={() => { activate(CoinbaseWallet) }}>
                  <img
              src="https://demo.storj-ipfs.com/ipfs/QmaaWoX3our4L3BK7YZM4ihvP1MdKhjaLSpaHb1QkZie58"
              alt="Metamask Logo"
              width="25px"
              height="25px"
              borderRadius="3px"/>
                  
                  Coinbase Wallet</Button>
<Button
              color="inherit"
              variant="outlined"
              onClick={() => connect().catch(e => console.log(e))}
            >
                <img
              src="https://demo.storj-ipfs.com/ipfs/QmXMivsC8eUT4KnaGLW425sdk1x5WcarswyBnnccpMbvU5"
              alt="Metamask Logo"
              width="25px"
              height="25px"
              borderRadius="3px"
            />
              Celo Wallet
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              href="https://wallet.testnet.near.org/"
            >
                <img
              src="https://demo.storj-ipfs.com/ipfs/QmWyaj25nhu7CYo8nMWPsXhh4oFWfXGywPfpfFk8Djn6dz"
              alt="Metamask Logo"
              width="25px"
              height="25px"
              borderRadius="3px"
            />
              NEAR Wallet
            </Button>
            <Button
              color="inherit"
              variant="outlined" onClick={() => { activate(WalletConnect) }}>
                  <img
              src="https://demo.storj-ipfs.com/ipfs/QmUm5zD77PiqVLAMTFtZFm4XpH32SJFPLS5c8b3QkCbUih"
              alt="Metamask Logo"
              width="25px"
              height="25px"
              borderRadius="3px"
            />Wallet Connect</Button>
<Button
              color="inherit"
              variant="outlined" onClick={() => { activate(Injected) }}>
                  <img
              src="https://demo.storj-ipfs.com/ipfs/QmahaYDBBLdcTYZGE4oaRSMTxRWHxwGZYB9W9qY4BZSekA"
              alt="Metamask Logo"
              width="25px"
              height="25px"
              borderRadius="3px"
            />
                  
                  Metamask</Button>
<Typography variant="h5">
        Wallet Info
    </Typography>
<div>{`Connection Status: ${active}`}</div>
    <div>{`Account: ${account}`}</div>
    <div>{`Network ID: ${chainId}`}</div>

    {active ? 
    <>
    <Typography variant="h5">
        You're connected! 
    </Typography>
    <Typography variant="body1">
    You can now continue to view and participate in the cocoons you are a part of based on the tokens/NFTs you hold, or create a campaign as a sponsor organization.
    </Typography>
    <Button
              color="inherit"
              variant="outlined" onClick={() => router.push('/cocoons')}>View your Cocoons</Button>
              <Button
              color="inherit"
              variant="outlined" onClick={() => router.push('/create-ad')}>Create a Campaign</Button>
              </>
              : null}
            </Stack>
            </Box>
            </AppLayout>
  );
}
