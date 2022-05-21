// @ts-nocheck
import React, {useState} from "react";
import { Tabs, Tab, Typography, Box, Button, TextField, Stack } from "@mui/material";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'
import { useContractKit } from "@celo-tools/use-contractkit";
import NearWalletSelector from "@near-wallet-selector/core";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { useRouter } from 'next/router'


export default function Cocoon() {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <Stack p={10} spacing={4}>
      <Typography variant="h4">
        Create a Cocoon
    </Typography>
    <Typography variant="body1">
        Create a cocoon for your community. Once you create it, it will be verified by our team and then you can start to onboard your members!
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
        Social Media
    </Typography>
    <Stack direction="row" spacing={4}>
    <Typography variant="body1">
        Add the links to your social media accounts.
    </Typography>
    <TextField id="filled-basic" label="Telegram" variant="filled" />
    <TextField id="filled-basic" label="Discord" variant="filled" />
    <TextField id="filled-basic" label="Twitter" variant="filled" />
    <TextField id="filled-basic" label="Instagram" variant="filled" />
    </Stack>
        <Button
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
<Typography variant="h5">
        Cocoon Logo
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
  onClick={() => router.push('/cocoon-home')}
>Submit</Button>
        </Stack>
        
  );
}
