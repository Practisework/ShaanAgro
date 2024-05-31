import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";
import AboutUsComponent from "@/components/aboutuscomponent";
import Data from "@/implement_data";
const GarudSamratRotaryTiller = () => {
  return (
    <>
      <h1 className="text-4xl text-center mt-10">{Data[5].name}</h1>

      <AboutUsComponent imgSrc={Data[5].imgUrl} content={Data[5].content} />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column",
          },
        }}
      >
        <Table>
          <TableRow>
            <TableCell>मॉडेल</TableCell>
            <TableCell>१६५४८</TableCell>
            <TableCell>१८५५४</TableCell>
            <TableCell>२०५६०</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Working width</TableHead>
            <TableCell>१६५०</TableCell>
            <TableCell>१८५०</TableCell>
            <TableCell>२०५०</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Gearbox rpm</TableHead>
            <TableCell>५४०/१०००</TableCell>
            <TableCell>५४०/१०००</TableCell>
            <TableCell>५४०/१०००</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Side transmission</TableHead>
            <TableCell>Gear drive</TableCell>
            <TableCell>Gear drive</TableCell>
            <TableCell>Gear drive</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">पाते</TableHead>
            <TableCell>४८</TableCell>
            <TableCell>५४</TableCell>
            <TableCell>६०</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Driveline safety</TableHead>
            <TableCell>Shear bolt</TableCell>
            <TableCell>Shear bolt</TableCell>
            <TableCell>Shear bolt</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">वजन(कि.ग्रा.)</TableHead>
            <TableCell>३५५</TableCell>
            <TableCell>३७५</TableCell>
            <TableCell>३९५</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">tractor power</TableHead>
            <TableCell>३५-४०</TableCell>
            <TableCell>४०-४५</TableCell>
            <TableCell>४५-५०</TableCell>
          </TableRow>
        </Table>
      </Container>
    </>
  );
};

export default GarudSamratRotaryTiller;
