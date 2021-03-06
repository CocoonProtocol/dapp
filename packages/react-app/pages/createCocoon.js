// @ts-nocheck
import React, {useState} from "react";
import { Tabs, Tab, Typography, Box, Button, TextField, Stack } from "@mui/material";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'
import { useContractKit } from "@celo-tools/use-contractkit";
import { useRouter } from 'next/router'
import AppLayout from "@/components/layout/AppLayout";


export default function Cocoon() {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <AppLayout>
    <Stack p={10} spacing={4}>
      <Typography variant="h4">
        Create a Cocoon
    </Typography>
    <Typography variant="body1">
        Create a cocoon for your community. Once you create it, it will be verified by our team and your members will be automatically verified.
    </Typography>
    <TextField id="filled-basic" label="Name of Cocoon" variant="filled" />
    <TextField
          id="filled-textarea"
          label="Description of Community"
          multiline
          variant="filled"
        />
           <TextField id="filled-basic" label="Community Email" variant="filled" />
           <Typography variant="h5">
        Contract Addresses
    </Typography>
           <Typography variant="body1">
        Select your chain and add the contract addresses that determine the whitelist for your cocoon. Anyone with an asset (NFT or token) from that contract is automatically whitelisted by Cocoon Protocol.
    </Typography>
    <Stack direction="row" spacing={2}>
    <TextField id="filled-basic" label="NFT Contract Address" variant="filled" />
    <TextField id="filled-basic" label="Token Contract Address" variant="filled" />
    </Stack>
        <Typography variant="h5">
        Social Media
    </Typography>
    <Typography variant="body1">
        Add the links to your social media accounts.
    </Typography>
    <Stack direction="row" spacing={2}>

    <TextField id="filled-basic" label="Telegram" variant="filled" />
    <TextField id="filled-basic" label="Discord" variant="filled" />
</Stack>
<Stack direction="row" spacing={2}>
<TextField id="filled-basic" label="Twitter" variant="filled" />
<TextField id="filled-basic" label="Instagram" variant="filled" />
  </Stack>
    <Typography variant="h5">
        Customize your Cocoon Page
    </Typography>
        <Button
        className="debutton"
  variant="filled"
  component="label"
>
  Upload Logo
  <input
    type="file"
    hidden
    onChange={(event) => {
      console.log(event.target.files[0]);
      setSelectedImage(event.target.files[0]);
    }}
  />
</Button>
<Typography variant="h6">
        Your Cocoon Logo
    </Typography>
{selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
  <Button
  variant="filled"
  component="label"
  className="debutton"
  onClick={() => router.push('/cocoon-home')}
>Submit</Button>
        </Stack>
        </AppLayout>
        
  );
}
