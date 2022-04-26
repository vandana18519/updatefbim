import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import TableHead from '@mui/material/TableHead';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import TableCell from '@mui/material/TableCell';
import Tablecells from './Tablecells';
import data from './data.json';

export const Inside = () => {
  let arr = [];
  let mySet1 = new Set();
  data.params.forEach(e => {
    mySet1.add(e.element);
  });
  mySet1.forEach(i => {
    arr.push(i);
  });
  const getAllCells = (props) => {
      return data.params.map((n) => {
        return(
          <>
          {n.element == props ? (<Tablecells value={n}/>):null}
          </>
        )
      });
  };
  const [open, setOpen] = useState(false);
  const [nameOpen, setNameOpen] = useState("");
  const handleClick = (props) => {
    setOpen(!open);
    setNameOpen(props);

    // console.log("Props: ", props);
  };
  return arr.map((current) => {
      return(
        <>
          <ListItemButton onClick={() => handleClick(current)} style={{ background: "#DAF3FF " }}>
            < ArrowRightOutlinedIcon fontSize="small"/>
            <ListItemText primary={current}/>
            {/* {nameOpen == current ? <ExpandLess /> : <ExpandMore />} */}
            {open && nameOpen == current ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse  in={open && nameOpen == current} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <TableHead style={{ fontSize: "15px",display:"flex", justifyContent:"space-between"}}>
                  <TableCell size="small" >Id</TableCell>
                  <TableCell size="small">Status</TableCell>
                  <TableCell size="small">Details</TableCell>
              </TableHead>
                    {getAllCells(current)}
            </List>
          </Collapse>
          </>    
        )
  }); 
};
export default Inside;