// @ts-nocheck
import * as React from "react";
import { Tabs, Tab, Typography, Box, Card, CardActions, Button, CardContent, Chip } from "@mui/material";
import deployedContracts from "@celo-progressive-dapp-starter/hardhat/deployments/hardhat_contracts.json";
import { useContractKit } from "@celo-tools/use-contractkit";
import { AccountInfo } from "@/components";
import AppLayout from "@/components/layout/AppLayout";
import { useRouter } from 'next/router'
import { oneOf } from "prop-types";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function App() {
  const router = useRouter()
  const { network } = useContractKit();
  const buttons = [{
    "communityName" : "Blu3 DAO",
    "activeMembers" : "679",
    "icon" : "blu3logo.png",
    "comunityAttributes" : ["womxn", "allies"] ,
    "activityLevel" : "High",
    "link":"https://blu3tofly.notion.site/blu3tofly/Blu3-DAO-Overview-Deliverables-95e78e4727174b399915ca42ef9cd608",
    "colorx": "#4EC4CC",
    "color": "#000"

},];

  return (
    <AppLayout title="Cocoon Protocol" description="Cocoon Protocol">
      <Box sx={{ width: "100%" , display: 'grid'}}>
      <br/><br/><br/>
      {buttons.map((object , i) =>
            <Button size="large" sx={{width: "100%", zIndex: 1, backgroundColor: [object.colorx], color: [object.color]}} href={"cocoon/"+String(object.communityName)}>View {object.communityName} Cocoon</Button>

      )}
      <br/><br/><br/>
      {/* <Polling/> */}
      </Box>
    </AppLayout>
  );
}
