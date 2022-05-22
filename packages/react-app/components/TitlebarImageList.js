import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Tabs, Tab, Typography, Box, Button, TextField, Stack, IconButton, Modal } from "@mui/material";
import { CocoContext } from './layout/AppLayout';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function TitlebarImageList() {
    const [open, setOpen] = React.useState(false);

    const { coco, setCoco, handleCocoChange } = React.useContext(CocoContext);


  const handleOpen = () => {
      setOpen(true)
} ;
  const handleClose = () => {
      setOpen(false);
  }

  return (
    <ImageList sx={{ width: 900, height: 900 }} cols={1} rowHeight={450} gap={70}>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You're registered!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You've been registered with your wallet address. You now have 10 pending $COCO. Once you are validated at the event, your $COCO will be available in your wallet.
          </Typography>
        </Box>
      </Modal>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=800&fit=crop&auto=format`}
            srcSet={`${item.img}?w=800&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <Stack direction="row" justifyContent="space-between">
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            position="below"
          />
          <Button onClick={handleOpen}>Register</Button>
            </Stack>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://demo.storj-ipfs.com/ipfs/QmS1r3x749H7SMQpCCvmLG6hmsDMYbbVYqEVQoLwwQcr48',
    title: 'Blu3 DAO Alliance Gathering',
    author: 'Sponsored by @harmonyprotocol',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://demo.storj-ipfs.com/ipfs/Qma1JBSy3ZPAY4H9TvkF81Rjgo4EAaS3KtwMRh6DsXmKyL',
    title: 'Women and Ally Brunch',
    author: 'Sponsored by @storj',
  },
  {
    img: 'https://demo.storj-ipfs.com/ipfs/QmSjp2ychRbMKs7cMm5xbN3sVVh8CSW1qskTSJrGyrEBDg',
    title: 'Harmony Boat Party',
    author: 'Sponsored by @harmonyprotocol',
  },
  {
    img: 'https://demo.storj-ipfs.com/ipfs/QmS1r3x749H7SMQpCCvmLG6hmsDMYbbVYqEVQoLwwQcr48',
    title: 'Blu3 DAO Alliance Gathering',
    author: 'Sponsored by @harmonyprotocol',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://demo.storj-ipfs.com/ipfs/Qma1JBSy3ZPAY4H9TvkF81Rjgo4EAaS3KtwMRh6DsXmKyL',
    title: 'Women and Ally Brunch',
    author: 'Sponsored by @storj',
  },
  {
    img: 'https://demo.storj-ipfs.com/ipfs/QmSjp2ychRbMKs7cMm5xbN3sVVh8CSW1qskTSJrGyrEBDg',
    title: 'Harmony Boat Party',
    author: 'Sponsored by @harmonyprotocol',
  },
  {
    img: 'https://demo.storj-ipfs.com/ipfs/QmS1r3x749H7SMQpCCvmLG6hmsDMYbbVYqEVQoLwwQcr48',
    title: 'Blu3 DAO Alliance Gathering',
    author: 'Sponsored by @harmonyprotocol',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://demo.storj-ipfs.com/ipfs/Qma1JBSy3ZPAY4H9TvkF81Rjgo4EAaS3KtwMRh6DsXmKyL',
    title: 'Women and Ally Brunch',
    author: 'Sponsored by @storj',
  },
  {
    img: 'https://demo.storj-ipfs.com/ipfs/QmSjp2ychRbMKs7cMm5xbN3sVVh8CSW1qskTSJrGyrEBDg',
    title: 'Harmony Boat Party',
    author: 'Sponsored by @harmonyprotocol',
  },
];
