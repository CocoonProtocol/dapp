// @ts-nocheck
import * as React from "react";
import { Tabs, Tab, Typography, Box, Card, CardActions, Button, CardContent, Chip, Stack } from "@mui/material";
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
    {"link" : "cocoons",
      "name" : "view cocoons"
    },
    {"link" : "createCocoon",
      "name" : "create cocoon"
    },
    {"link" : "createCampaign",
      "name" : "create campaign"
    },
  ];

  return (
    <AppLayout title="Cocoon Protocol" description="Cocoon Protocol">
      <Box sx={{ width: "100%" , display: 'grid'}}>
      <br/><br/><br/>
      <h1 className="titlex">🐛Cocoon🦋</h1>
      <Stack px={50} justifyContent="center">
      <Typography variant="overline" display="block" gutterBottom>
        Cocoon Protocol is a dApp to generate sustainable income for web3 communities.<br/>
        Our platform allows sponsors to seamlessly connect with value-aligned organizations to attend events, hack on bounties, fulfill recruiting roles, and apply to scholarships all in one place.
      </Typography>
      </Stack>
      <br/>
      <Stack px={50}>
      {buttons.map((object , i) =>
            <Button size="large" className="debutton" sx={{width: "90%", zIndex: 1, left: "4%"}} href={String(object.link)}>{object.name}</Button>
      )}
      <br/><br/><br/>
      </Stack>
      {/* <Polling/> */}
      </Box>
    </AppLayout>
  );
}
