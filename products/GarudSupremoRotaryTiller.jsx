import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";

const GarudSupremoRotaryTiller = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { lg: "row", md: "column", sm: "column", xs: "column" },
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>मॉडेल</TableCell>
            <TableCell>१८२५४८</TableCell>
            <TableCell>२१००५४</TableCell>
            <TableCell>२४९०६०</TableCell>
          </TableRow>
        </TableHead>
        <TableRow>
          <TableCell className="W">Working width</TableCell>
          <TableCell>१८२५</TableCell>
          <TableCell>२१००</TableCell>
          <TableCell>२४९०</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="W">Gearbox rpm</TableCell>
          <TableCell>५४०/१०००</TableCell>
          <TableCell>५४०/१०००</TableCell>
          <TableCell>५४०/१०००</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="W">Side Transmission</TableCell>
          <TableCell>Gear drive</TableCell>
          <TableCell>Gear drive</TableCell>
          <TableCell>Gear drive</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="W">पाते</TableCell>
          <TableCell>४८</TableCell>
          <TableCell>५४</TableCell>
          <TableCell>६०</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="W">Driveline safety</TableCell>
          <TableCell>Shear bolt</TableCell>
          <TableCell>Shear bolt</TableCell>
          <TableCell>Shear bolt</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="W">वजन(कि.ग्रा.)</TableCell>
          <TableCell>४२०</TableCell>
          <TableCell>४३०</TableCell>
          <TableCell>४४०</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="W">Tractor power</TableCell>
          <TableCell>४०-५०</TableCell>
          <TableCell>५०-५५</TableCell>
          <TableCell>५५-६०</TableCell>
        </TableRow>
      </Table>
    </Container>
  );
};

export default GarudSupremoRotaryTiller;
