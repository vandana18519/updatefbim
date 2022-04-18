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

export const Inside = (props) => {
  //  const [modelData, setModelData] = useState("");
  return data.map((current) => {
    
     return current.params.map((curr) => {
      //  setModelData("Floor");
      console.log("PRINT: ",curr);
        
   
      return (
        <>
        <ListItemButton style={{ background: "#2d6791" }}>
          < ArrowRightOutlinedIcon fontSize="small"/>
          <ListItemText primary={"Floor"}/>
          <ExpandMore />
        </ListItemButton>
        <Collapse  in="true" timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <TableHead style={{ fontSize: "15px", justifyContent: "space-between"}}>
                <TableCell size="small" >Element</TableCell>
                <TableCell size="small">Status</TableCell>
                <TableCell size="small">Details</TableCell>
            </TableHead>
            {/* <Tablecells value={current.params}/> */}
          </List>
        </Collapse>
        </>             
        )
      });
    // });
  });
};
export default Inside;