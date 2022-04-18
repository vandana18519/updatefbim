import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Inside from "./Inside";
import data from './data.json';

export const Properties = () => {
   
     return (
           <div style={{ display:"contents"}}>
            <List sx={{  width: "100%", maxWidth: 360 }} component="nav" aria-labelledby="nested-list-subheader">
              <ListItemButton style={{ background: "#1976d2", color:"white",  borderRadius:"10px 10px 0px 0px" }}>
                <ListItemText primary="Properties" />
                <ExpandMore/>
              </ListItemButton>
              <Collapse in="true" timeout="auto" unmountOnExit>
              <Inside/>
              </Collapse>
            </List>
            </div>             
           )
    
  };
  export default Properties;