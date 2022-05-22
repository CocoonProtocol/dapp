import React from "react";
import "@celo-tools/use-contractkit/lib/styles.css";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo-client";
import { Alfajores, ContractKitProvider } from "@celo-tools/use-contractkit";
import { AppProps } from "next/app";
import { CustomThemeProvider } from "@/contexts/userTheme";
import { Provider } from "react-redux"
import store from "@/state/index"
import AppUpdater from "@/state/app/updater"
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";
import '../public/styles.css'

function Updaters() {
  return (
    <>
      <AppUpdater />
    </>
  )
}

function getLibrary(provider) {
  return new Web3Provider(provider);
}

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <ContractKitProvider
          dapp={{
            name: "Cocoon Protocol Demo",
            description: "A demo DApp to showcase Cocoon Protocol",
            url: "https://cocoonprotocol.vercel.app",
            icon: "https://cocoonprotocol.vercel.app/favicon.ico",
          }}
          network={Alfajores}
          // networks={[Mainnet, Alfajores]}
        >
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Updaters/>
            <ApolloProvider client={client}>
            <Web3ReactProvider getLibrary={getLibrary}>
              <div suppressHydrationWarning>
                {typeof window === "undefined" ? null : (
                  <Component {...pageProps} />
                )}
              </div>
              </Web3ReactProvider>
            </ApolloProvider>
          </SnackbarProvider>
        </ContractKitProvider>
      </CustomThemeProvider>
    </Provider>
  );
}

export default MyApp;
