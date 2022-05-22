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

export function Header() {
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cocoon 🐛🦋
          </Typography>
          {network && <Chip label={network.name} color="secondary" />}
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
