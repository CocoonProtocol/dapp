import React from 'react'
import { Button } from '@mui/material';

import transakSDK from '@transak/transak-sdk'

function Transak () {
    let settings = {
        apiKey: '62bcbb71-cd8f-434e-a003-550caae893d7',  
        environment: 'STAGING',
        hostURL: window.location.origin,
        widgetHeight: '625px',
        widgetWidth: '500px',
        defaultCryptoCurrency: 'NEAR', 
        walletAddress: '', 
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
        <div>
            <Button onClick={() => openTransak()}>Add Funds</Button>
        </div>
    )
}

export default Transak;