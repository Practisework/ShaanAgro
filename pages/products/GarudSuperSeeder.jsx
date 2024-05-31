import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";
import AboutUsComponent from "@/components/aboutuscomponent";
import Data from "@/implement_data";
const GarudSuperSeeder = () => {
  return (
    <>
      <h1 className="text-4xl text-center mt-10">{Data[7].name}</h1>

      <AboutUsComponent imgSrc={Data[7].imgUrl} content={Data[7].content} />
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
          <TableHead>
            <TableRow>
              <TableCell>मॉडेल</TableCell>
              <TableCell>GSS-11</TableCell>
            </TableRow>
          </TableHead>

          <TableRow>
            <TableCell className="W">Working width</TableCell>
            <TableCell>२०६०</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">Gearbox rpm</TableCell>
            <TableCell>५४०/१०००</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">Side transmission</TableCell>
            <TableCell>Gear drive</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">पाते</TableCell>
            <TableCell>५४</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">Blades type</TableCell>
            <TableCell>HATCHET C TYPE</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">No of rows</TableCell>
            <TableCell>११</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">वजन(कि.ग्रा.)</TableCell>
            <TableCell>८६५</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">tractor power</TableCell>
            <TableCell>५०-६०</TableCell>
          </TableRow>
        </Table>
      </Container>
    </>
  );
};

export default GarudSuperSeeder;
