import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InsideDSS from "./InsideDSS";
import TableHead from '@mui/material/TableHead';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Fire_rating from "./dss/Fire_rating";
import Sprinkler from "./dss/Sprinkler";

export const Dss= (props) => {
  // const [elementName, setElementName] = useState("");
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
    {
      data:"Distance"
    },
    {
      data:"Number of stair and protection"
    },
    {
      data:"Means of warning"
    },
    {
      data:"Fire services and access"
    }
  ];
  
  const getAlldss = () => {
    return dss_data.map((cur) => {

      console.log("Print: ",cur.data);
      return(
      <>
         <ListItemButton style={{ background: "#DAF3FF" }}>
          < ArrowRightOutlinedIcon fontSize="small"/>
          <ListItemText primary={cur.data} />
          <ExpandMore />
        </ListItemButton>
        <Collapse  in="true" timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <TableHead style={{display: "flex", fontSize: "15px", justifyContent: "space-between"}}>
                <div style={{display:"contents" }}>
                  {/* {handle(cur.data)} */}
                  <Fire_rating/>
                  <Sprinkler/>
                </div>
            </TableHead>
          </List>
        </Collapse>
      </>
      )
    });
  }
     return (
           <div style={{ display:"contents" }}>
            <List sx={{  width: "100%", maxWidth: 360}} component="nav" aria-labelledby="nested-list-subheader">
              <ListItemButton style={{ background: "#1976d2", color:"white",  borderRadius:"10px 10px 0px 0px" }}>
                <ListItemText primary="Properties" />
                <ExpandMore/>
              </ListItemButton>
              <Collapse in="true" timeout="auto" unmountOnExit>
                
              {getAlldss()}

              </Collapse>
            </List>
            </div>             
           )
  };
  export default Dss;