import "./resources/styles.css";
import { Element } from "react-scroll";
import { items } from "./utils";
import { AppWrapper } from "./components/widget/App";
import React from "react";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";

const App = () => {
  return (
    <AppWrapper>
      <Header />

      {items.map(x => <Element name={x.name} key={x.name} children={x.component} />)}

      <Footer />
    </AppWrapper>
  );
};

export default App;
