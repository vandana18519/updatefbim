import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import InsideDSS from "./InsideDSS";
import TableHead from '@mui/material/TableHead';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import FireRating from "./dss/FireRating";
import Sprinkler from "./dss/Sprinkler";
import Compartment from "./dss/Compartment";
import FireDoor from "./dss/FireDoor";

export const Dss= (props) => {
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
  const [open, setOpen] = useState(false);
  const handleClick = (props) => {
    
      setOpen(!open);
 
  };
  const displayAll = (props) => {
    
        if(props == "Fire Rating"){
          return(
            <FireRating/>
          )
        } if(props == "Sprinkler"){
          return(
            <Sprinkler/>
          )
        } if(props == "Compartment"){
          return(
            <Compartment/>
          )
        } if(props == "Firedoor"){
          return(
            <FireDoor/>
          )
        }
  };
  const getAlldss = () => {
    return dss_data.map((cur) => {
      return(
      <>
         <ListItemButton onClick={() => handleClick(cur.data)} style={{ background: "#DAF3FF" }}>
          < ArrowRightOutlinedIcon fontSize="small"/>
          <ListItemText primary={cur.data} />
          {open ? <ExpandLess /> : <ExpandMore /> }

        </ListItemButton>
        <Collapse  in={open}timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <TableHead style={{display: "flex", fontSize: "15px", justifyContent: "space-between"}}>
                <div style={{display:"contents" }}>
                  {displayAll(cur.data)}
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
                <ListItemText primary="DSS" />
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