import * as React from "react";
import { Link } from "@mui/material";
import Github from "@/public/Github";
import Telegram from "@/public/Telegram";
import Twitter from "@/public/Twitter";
export default function Footer() {
  const githubLink =
    "https://github.com/cocoonprotocol/dapp";
  const telegramLink = "https://t.me/+p4j2f6AH9n4zYmEx";
  const twitterLink = "https://twitter.com/cocoonprotocol";
  return (
    <footer style={{ textAlign: "center" }}>
      <Link href={githubLink} target="_blank">
        <Github style={{ width: "40px", margin: "5px" }} />
      </Link>
      <Link href={twitterLink} target="_blank">
        <Twitter style={{ width: "40px", margin: "5px" }} />
      </Link>
      <Link href={telegramLink} target="_blank">
        <Telegram style={{ width: "40px", margin: "5px" }} />
      </Link>
    </footer>
  );
}
