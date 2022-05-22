import React from 'react'
import { Button, Box, Typography } from '@mui/material';

import transakSDK from '@transak/transak-sdk'
import AppLayout from '../components/layout/AppLayout'

function Transak () {
    let settings = {
        apiKey: '62bcbb71-cd8f-434e-a003-550caae893d7',  
        environment: 'STAGING',
        hostURL: window.location.origin,
        widgetHeight: '625px',
        widgetWidth: '500px',
        defaultCryptoCurrency: 'NEAR', 
        walletAddress: '0xB8f39Ac360d40fCA632E03D13EBF28f265D726bC', 
        themeColor: '97F19B',
        fiatCurrency: 'USD', 
        email: '', 
        redirectURL: ''    
    };


    function openTransak() {
        const transak = new transakSDK(settings);
    
        transak.init();
    
        // To get all the events
        transak.on(transak.ALL_EVENTS, (data) => {
            console.log(data)
        });
    
        // This will trigger when the user closed the widget
        transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (eventData) => {
            console.log(eventData);
            transak.close();
        });
    
        // This will trigger when the user marks payment is made.
        transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
            console.log(orderData);
            window.alert("Payment Success")
            transak.close();
        });
    }
    
    return(
        <AppLayout>
            <Box sx={{ width: "100%" , display: 'grid'}} pt={30} justifyContent="center">
                <Typography variant="h5" pb={5}>Fund your Sponsor Account</Typography>
            <Button onClick={() => openTransak()}>Add Funds to Wallet</Button>
            </Box>
        </AppLayout>
    )
}

export default Transak;