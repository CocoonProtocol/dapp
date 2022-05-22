// @ts-nocheck
import * as React from "react";
import { Tabs, Tab, Typography, Box, Card, CardActions, Button, CardContent } from "@mui/material";
import deployedContracts from "@celo-progressive-dapp-starter/hardhat/deployments/hardhat_contracts.json";
import { useContractKit } from "@celo-tools/use-contractkit";
import { StorageContract, GreeterContract, AccountInfo } from "@/components";
import AppLayout from "@/components/layout/AppLayout";
import { useRouter } from 'next/router'







interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function App() {
  const router = useRouter()
  const { network } = useContractKit();
  const objects = ['this','that','there','why'];
  return (
    <AppLayout title="Cocoon Protocol" description="Cocoon Protocol">
      <Box sx={{ width: "100%" , display: 'grid'}}>
      <br/><br/><br/>
      {objects.map((object, i) =>

        <Card sx={{ minWidth: 275, margin: "10px" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              benevolent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{zindex: -1}}>Learn More</Button>
          </CardActions>
        </Card>

      )}

<<<<<<< Updated upstream

  return (
    <AppLayout title="Celo Starter" description="Celo Starter">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs variant="scrollable" scrollButtons allowScrollButtonsMobile value={value} onChange={handleChange} aria-label="basic tabs">
            <Tab label="Account" {...a11yProps(0)} />
            <Tab label="Storage" {...a11yProps(1)} />
            <Tab label="Greeter" {...a11yProps(2)} />
            {/* <Tab label="Wallet" {...a11yProps(3)} /> */}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AccountInfo></AccountInfo>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <StorageContract contractData={contracts?.Storage} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <GreeterContract contractData={contracts?.Greeter} />
        </TabPanel>
        {/* <TabPanel value={value} index={3}>
          <Wallet></Wallet>
        </TabPanel> */}
      </Box>
      <button type="button" onClick={() => router.push('/cocoon')}>
      Click me
    </button>
      <Polling/>
=======
      </Box>
>>>>>>> Stashed changes
    </AppLayout>
  );
}

function TabPanel(props: TabPanelProps) {
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
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
