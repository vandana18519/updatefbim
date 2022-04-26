import React, { useState } from "react";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import data from './data.json';
import List from "@mui/material/List";
import TableHead from '@mui/material/TableHead';
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { setIndex } from "./state/action-creator";
// import { decrement, increment } from './feature/counter/counterSlice'
// import {fetchDatafunction} from './actions/index'
// import { connect } from 'react-redux '

export const Tablecells = (props) => {
     //  const count = useSelector(state => state.counter.value)
    
     const dispatch = useDispatch()
    
     // const [status, setStatus] = useState(false);
     const colorStatus= () => {
          if (props.value.result == "Pass") {
               return true;
          }
          else if (props.value.result == "Fail") {
               return false;
             }
          }  
     // const [elementText, setElementText] = useState("");
          return (
               <List component="div" disablePadding>
                    <TableHead style={{ fontSize: "15px", display:"flex",justifyContent: "space-between"}}>
                         <TableCell size="small" >{props.value.element_id}</TableCell>
                         <TableCell size="small">{props.value.result}</TableCell>
                         <TableCell size="small">
                              {/* {colorStatus()} */}
                              <div
                                   onClick={() => {
                                   dispatch(setIndex(props.value.count));
                                   }}
                                   buttonStyle={{ padding: "0px 0px", fontSize: "12px" }}>
                                   {colorStatus()? <FileOpenIcon sx={{ color: '#89DB2B'}}/>:
                                             <FileOpenIcon sx={{ color: '#DB402B'}}/> }
                              </div>
                         </TableCell>
                    </TableHead>
               </List>          
               );
     
  };

export default Tablecells;