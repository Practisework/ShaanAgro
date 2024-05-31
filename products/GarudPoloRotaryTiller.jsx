import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";

const GarudPoloRotaryTiller = () => {
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
            <TableCell>१००१६</TableCell>
            <TableCell>१००२०</TableCell>
            <TableCell>१००२४</TableCell>
          </TableRow>
        </TableHead>
        <TableRow>
          <TableHead className="W">Working width</TableHead>
          <TableCell>८५०</TableCell>
          <TableCell>१०५०</TableCell>
          <TableCell>१२५०</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">Side transmission</TableHead>
          <TableCell>Gear drive</TableCell>
          <TableCell>Gear drive</TableCell>
          <TableCell>Gear drive</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">पाते</TableHead>
          <TableCell>१६</TableCell>
          <TableCell>२०</TableCell>
          <TableCell>२४</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">Rotor rpm</TableHead>
          <TableCell>२२३</TableCell>
          <TableCell>२२३</TableCell>
          <TableCell>२२३</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">Driveline safety</TableHead>
          <TableCell>Shear bolt</TableCell>
          <TableCell>Shear bolt</TableCell>
          <TableCell>Shear bolt</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">three point linkage</TableHead>
          <TableCell>CAT - 1</TableCell>
          <TableCell>CAT - 1</TableCell>
          <TableCell>CAT - 1</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">वजन(कि.ग्रा.)</TableHead>
          <TableCell>१८५</TableCell>
          <TableCell>१९५</TableCell>
          <TableCell>२१०</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">tractor power</TableHead>
          <TableCell>१५-२०</TableCell>
          <TableCell>२०-२५</TableCell>
          <TableCell>२५-३०</TableCell>
        </TableRow>
      </Table>
    </Container>
  );
};

export default GarudPoloRotaryTiller;
