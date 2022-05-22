// @ts-nocheck
import React, {useState} from "react";
import { Tabs, Tab, Typography, Box, Button, TextField, Stack, FormControl, InputLabel, Select, MenuItem, RadioGroup, FormLabel, FormControlLabel, Radio } from "@mui/material";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'
import { useContractKit } from "@celo-tools/use-contractkit";
import { useRouter } from 'next/router'
import AppLayout from '../components/layout/AppLayout'


export default function CreateCampaign() {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(null);
  return (
      <AppLayout>
    <Stack p={2} spacing={2}>
      <Typography variant="h4">
        Create a Campaign
    </Typography>
    <Typography variant="body1">
    The interests of everyone in the Web3 world can be super broad. How do you make sure your targeted audience for a campaign is the one that will actually want/need your product/ service?
That’s where Cocoon Project jumps in, we have targeted Web3 communities to make your job easier, we keep them engaged with our platform and provide you with their engagement stats and attendance to your events.
    </Typography>
    <TextField id="filled-basic" label="Name of Campaign" variant="filled" />
    <TextField
          id="filled-textarea"
          label="Description of Campaign"
          multiline
          variant="filled"
        />
    <Box sx={{ minWidth: 120 }}>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Campaign Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="event" control={<Radio />} label="Event" />
        <FormControlLabel value="bounty" control={<Radio />} label="Bounty" />
        <FormControlLabel value="job" control={<Radio />} label="Job" />
        <FormControlLabel value="scholarship" control={<Radio />} label="Scholarship" />
      </RadioGroup>
    </FormControl>
    </Box>
    <Box>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Campaign Length</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="event" control={<Radio />} label="1 week ($200)" />
        <FormControlLabel value="bounty" control={<Radio />} label="2 weeks ($350)" />
        <FormControlLabel value="job" control={<Radio />} label="1 month ($500)" />
      </RadioGroup>
    </FormControl>
    </Box>
    <Typography variant="h5">
        Customize your Campaign Page
    </Typography>
        <Button
  variant="filled"
  component="label"
>
  Upload Image
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
        Your Campaign Image
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
  onClick={() => router.push('/transak')}
>Continue to Payment</Button>
        </Stack>
        </AppLayout>
  );
}
