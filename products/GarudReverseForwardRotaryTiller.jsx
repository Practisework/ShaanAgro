import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";

const GarudReverseForwardRotaryTiller = () => {
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
            <TableCell>Parameter</TableCell>
            <TableCell>२.६ Ft</TableCell>
            <TableCell>२.८ Ft</TableCell>
            <TableCell>३.२ Ft</TableCell>
          </TableRow>
        </TableHead>
        <TableRow>
          <TableHead className="W">Number of blades</TableHead>
          <TableCell>१६ पाते</TableCell>
          <TableCell>१८ पाते</TableCell>
          <TableCell>२२ पाते</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">Working width</TableHead>
          <TableCell>५४५ मि. मी.</TableCell>
          <TableCell>६१० मि.मी.</TableCell>
          <TableCell>७४५ मि.मी.</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">Overall length</TableHead>
          <TableCell>१३३२ मि.मी.</TableCell>
          <TableCell>१३३२ मि.मी.</TableCell>
          <TableCell>१३३२ मि.मी.</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">Overall width</TableHead>
          <TableCell>७८० मि.मी.</TableCell>
          <TableCell>८५० मि.मी.</TableCell>
          <TableCell>९८० मि.मी.</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">Overall height</TableHead>
          <TableCell>८५०</TableCell>
          <TableCell>८५०</TableCell>
          <TableCell>८५०</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">Gearbox</TableHead>
          <TableCell>Single speed</TableCell>
          <TableCell>Single speed</TableCell>
          <TableCell>Single speed</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">Rotor rpm</TableHead>
          <TableCell>२९७</TableCell>
          <TableCell>२९७</TableCell>
          <TableCell>२९७</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">Side transmission</TableHead>
          <TableCell>Chain drive</TableCell>
          <TableCell>Chain drive</TableCell>
          <TableCell>Chain drive</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">वजन</TableHead>
          <TableCell>१४५</TableCell>
          <TableCell>१५२</TableCell>
          <TableCell>१५९</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">P.T.O RPM</TableHead>
          <TableCell>५४०</TableCell>
          <TableCell>५४०</TableCell>
          <TableCell>५४०</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="W">Tractor power</TableHead>
          <TableCell>१५-२५ Hp</TableCell>
          <TableCell>१५-२५ Hp</TableCell>
          <TableCell>१५-२५ Hp</TableCell>
        </TableRow>
      </Table>
    </Container>
  );
};

export default GarudReverseForwardRotaryTiller;
