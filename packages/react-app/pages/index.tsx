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
  const buttons = [
    {"link" : "cocoons"},
    {"link" : "sponsors"},
    {"link" : "feed"},
  ];

  return (
    <AppLayout title="Cocoon Protocol" description="Cocoon Protocol">
      <Box sx={{ width: "100%" , display: 'grid'}}>
      <br/><br/><br/>
      <h1 className="titlex">🐛Cocoon🦋</h1>
      <p>what is this app??????????????</p>
<p>what is this app??????????????</p>
<p>what is this app??????????????</p>
<p>what is this app??????????????</p>
<br/>
      {buttons.map((object , i) =>
            <Button size="large" className=".MuiChip-root" sx={{width: "90%", zIndex: 1, left: "4%"}} href={String(object.link)}>View {object.link}</Button>
      )}
      <br/><br/><br/>
      {/* <Polling/> */}
      </Box>
    </AppLayout>
  );
}
