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
  const cocoons = [{
    "communityName" : "Blu3 DAO",
    "activeMembers" : "679",
    "icon" : "blu3logo.png",
    "comunityAttributes" : ["womxn", "allies"] ,
    "activityLevel" : "High",
    "link":"https://blu3tofly.notion.site/blu3tofly/Blu3-DAO-Overview-Deliverables-95e78e4727174b399915ca42ef9cd608",
    "colorx": "#4EC4CC",
    "color": "#000"

},
{
    "communityName" : "Esquina De La Abuela",
    "activeMembers" : "209",
    "icon" : "eda.jpg",
    "comunityAttributes" : ["miami", "irl"] ,
    "activityLevel" : "Medium",
    "link":"https://esquinadeabuela.com/",
    "colorx": "#185860",
    "color": "#fff"

},
{
    "communityName" : "BluntDAO",
    "activeMembers" : "140",
    "icon" : "bluntdao.png",
    "comunityAttributes" : ["weed", "lol"] ,
    "activityLevel" : "High" ,
    "link":"https://www.bluntdao.com/",
    "colorx": "#4EC4CC",
    "color": "#000"
},{
  "communityName" : "ArchiDAO",
  "activeMembers" : "322",
  "icon" : "archidao.png",
  "comunityAttributes" : ["metaverse", "infrastructure"] ,
  "activityLevel" : "Medium",
  "link":"https://www.archidao.io/",
  "colorx": "black",
  "color": "white"
},
{
  "communityName" : "Developer DAO",
  "activeMembers" : "9486",
  "icon" : "devdao.jpg",
  "comunityAttributes" : ["devs", "infrastructure"] ,
  "activityLevel" : "Low",
  "link":"https://www.developerdao.com/",
  "colorx": "#6A4E97",
  "color": "#fff"
}];

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
