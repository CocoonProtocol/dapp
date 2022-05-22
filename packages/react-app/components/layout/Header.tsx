// @ts-nocheck
import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { useContractKit } from "@celo-tools/use-contractkit";
import { truncateAddress, getWindowDimensions } from "@/utils";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useThemeContext } from "@/contexts/userTheme";
import { useRouter } from 'next/router'
import { CocoContext } from '../../components/layout/AppLayout';
import CountUp from 'react-countup';

export function Header() {
  const { coco, setCoco, handleCocoChange } = React.useContext(CocoContext);

  const { address, network, connect, destroy, kit } = useContractKit();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const { theme, setTheme } = useThemeContext();
  const router = useRouter()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ gap: { md: 2, xs: 0.5 } }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#3185fc", textShadow: "#FD96A9 .5px .5px .5px" }} >
            <a href="/">Cocoon</a>
          </Typography>

          <Chip
                label={<><span>$COCO:</span><CountUp start={coco} end={coco + 10}/></>}
                color="secondary"
              />
          {address && (
            <>
              <Chip
                label={truncateAddress(address)}
                color="info"
                onDelete={destroy}
                sx={{ mx: 1 }}
              />
            </>
          )}
          {!address && (
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => router.push('/wallet')}
            >
              Connect wallet
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
