import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import TableHead from '@mui/material/TableHead';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Tablecells from './Tablecells';
import data from './data.json';
import { CurrencyBitcoin, CurrencyYenTwoTone } from "@mui/icons-material";

export const InsideDSS = (props) => {
  const dss_data = [
    {
      data:"Fire Rating"
    },
    {
      data:"Sprinkler"
    },
    {
      data:"Compartment"
    },
    {
      data:"Firedoor"
    },
  ];
  const getAlldss = () => {
    return dss_data.map((cur) => {
      <>
         <ListItemButton style={{ background: "#DAF3FF" }}>
          < ArrowRightOutlinedIcon fontSize="small"/>
          <ListItemText primary={cur.data} />
          <ExpandMore />
        </ListItemButton>
        <Collapse  in="true" timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <TableHead style={{display: "flex", fontSize: "15px", justifyContent: "space-between"}}>
                <div>okok</div>
            </TableHead>
          </List>
        </Collapse>
      </>
    });
  }
      return (
        <>
        {getAlldss()}
        </>             
        )
};
export default InsideDSS;