// @ts-nocheck
import * as React from "react";
import { Tabs, Tab, Typography, Box, Card, CardActions, Button, CardContent, Chip } from "@mui/material";
import deployedContracts from "@celo-progressive-dapp-starter/hardhat/deployments/hardhat_contracts.json";
import { useContractKit } from "@celo-tools/use-contractkit";
import { AccountInfo } from "@/components";
import AppLayout from "@/components/layout/AppLayout";
import { useRouter } from 'next/router'
import { oneOf } from "prop-types";
import { cocoons } from "@/components/cocoon_list.js"

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function App() {
  const router = useRouter()
  const { network } = useContractKit();


  return (
    <AppLayout title="Cocoon Protocol" description="Cocoon Protocol">
      <Box sx={{ width: "100%" , display: 'grid'}}>
      <br/><br/><br/>
      {cocoons.map((object , i) =>

        <Card sx={{ minWidth: 275, margin: "10px" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Activity level: {object.activityLevel}
            </Typography>
            <Typography variant="h5" component="div">
             {object.communityName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {object.comunityAttributes.map((attrs) => <Chip sx={{margin: "5px"}}label = {attrs} />)}
            </Typography>
            <Typography variant="body2">
              Members: {object.activeMembers}
            </Typography>
            <img src={object.icon}/>
          </CardContent>
          <CardActions>
            <Button size="large" sx={{width: "100%", zIndex: 1, backgroundColor: [object.colorx], color: [object.color]}} href={"cocoon/"+String(object.communityName)}>View {object.communityName} Cocoon</Button>
          </CardActions>
        </Card>
      )}
      <br/><br/><br/>
      {/* <Polling/> */}
      </Box>
    </AppLayout>
  );
}
