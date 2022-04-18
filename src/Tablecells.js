import React, { useState } from "react";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import FileOpenIcon from '@mui/icons-material/FileOpen';

export const Tablecells = (props) => {
     return props.value.map((current) =>{
          // console.log("Print",current);
          return (
                    <div style={{ fontSize: "15px", justifyContent: "space-between"}}>
                         <TableCell size="small" >{current.element_id}</TableCell>
                         <TableCell size="small">{current.result}</TableCell>
                         <TableCell size="small"><FileOpenIcon/></TableCell>
                     </div>             
               );
      });
     
  };
  export default Tablecells;