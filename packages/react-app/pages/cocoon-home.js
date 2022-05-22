// @ts-nocheck
import React, {useState} from "react";
import { Tabs, Tab, Typography, Box, Button, TextField, Stack, IconButton } from "@mui/material";
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Telegram from '@mui/icons-material/Telegram';
import TitlebarImageList from "../components/TitleBarImageList";
import Image from 'next/image'
import blu3Logo from '../public/blu3logo.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CocoonHome() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack p={10} spacing={4} justifyContent="center" alignItems="center">
      <Image
        src={blu3Logo}
        alt="Picture of the author"
        width={100} 
        height={100} 
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <Typography variant="h4">
        Blu3 DAO Cocoon
    </Typography>
    <Typography variant="body1">
        Blu3 DAO empowers women, nonbinary, and allies to learn, earn, and play in the web3 space.
    </Typography>
    <Stack direction="row" spacing={2}>
    <Button variant="outlined" href="https://twitter.com/blu3dao" startIcon={<Instagram />}>
  Instagram
</Button>
<Button variant="outlined" href="https://instagram.com/blu3dao" startIcon={<Twitter />}>
  Twitter
</Button>
<Button variant="outlined" href="https://t.me/blu3dao" startIcon={<Telegram />}>
  Telegram
</Button>
</Stack>
<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Events" {...a11yProps(0)} />
          <Tab label="Bounties" {...a11yProps(1)} />
          <Tab label="Scholarships" {...a11yProps(2)} />
          <Tab label="Jobs" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
        <TitlebarImageList/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Coming soon!
      </TabPanel>
      <TabPanel value={value} index={2}>
      Coming soon!
      </TabPanel>
      <TabPanel value={value} index={3}>
      Coming soon!
      </TabPanel>
        </Stack>
        
  );
}
