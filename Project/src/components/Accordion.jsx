import React from "react";
import {
  Accordion,
} from "@chakra-ui/react";
import Accord from "./Accord";
import NewAcc from "./NewAcc";
import MenuLogIn from "./MenuLogIn";
import MenuHead from "./MenuHead";

const Accordions = ({disp}) => {
    console.log(disp);
    let arr = ["SHIRTS","POLOS","SUITS","TROUSERS","KNITWEAR","JACKETS & COATS","SHOES","ACCESSORIES","SALE"]
  return (
    <>
    <MenuHead></MenuHead>
    <Accordion allowToggle>
      {arr.map((item, index) => (
        <Accord key={index} item={item} disp={disp} />
      ))}
    </Accordion>
    <NewAcc></NewAcc>
    <MenuLogIn></MenuLogIn>
    </>
  );
};

export default Accordions;
