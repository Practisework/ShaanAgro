import { Container } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const GarudBalerPolo = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { lg: "row", md: "column", sm: "column", xs: "column" },
      }}
    >
      <Table sx={{ m: 4 }}>
        <TableHead>
          <TableRow>
            <TableCell>Making of bales</TableCell>
            <TableCell>Paddy straw/ sugarcane/maize/hay</TableCell>
          </TableRow>
        </TableHead>
        <TableRow>
          <TableCell className="W">Bale forming chamber</TableCell>
          <TableCell>फिक्स</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="W">Bale Type</TableCell>
          <TableCell>राउंड</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="W">Bale WidTableCell (cm)</TableCell>
          <TableCell>१०५</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="W">Bale dia (cm)</TableCell>
          <TableCell>५०</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="W">वजन(कि.ग्रा.)</TableCell>
          <TableCell>१८-२२</TableCell>
        </TableRow>
      </Table>

      <Table sx={{ m: 4 }}>
        <TableRow>
          <TableCell className="W">No. of Roller</TableCell>
          <TableCell>१०</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Area coverage</TableCell>
          <TableCell>60-70</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="W">Bale ejection</TableCell>
          <TableCell>Hydraulic cylinder</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="W">PTO speed (rpm)</TableCell>
          <TableCell>५४०</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="W">वजन</TableCell>
          <TableCell>६१०</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="W">TableRowactor (HP)</TableCell>
          <TableCell>३५+ </TableCell>
        </TableRow>
      </Table>
    </Container>
  );
};

export default GarudBalerPolo;
