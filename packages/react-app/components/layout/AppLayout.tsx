import * as React from "react";
import Meta from "../meta/Meta";
import Footer from "./Footer";
import { Header } from "./Header";


interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const CocoContext = React.createContext({coco: 0, setCoco:()=>{}});

export default function AppLayout({ title, description, children }: Props) {

  const [coco, setCoco] = React.useState(0);
  const handleCocoChange = () => setCoco(coco + 1);
  return (
    <CocoContext.Provider value={{ coco, setCoco, handleCocoChange }}>
      <Header />
      <Meta title={title} description={description} />
      {children}
      <Footer />
    </CocoContext.Provider>
  );
}
