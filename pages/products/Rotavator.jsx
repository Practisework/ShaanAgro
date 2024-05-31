import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";
import AboutUsComponent from "@/components/aboutuscomponent";
import Data from "@/implement_data";
const Rotavator = () => {
  return (
    <>
      <h1 className="text-4xl text-center mt-10">{Data[3].name}</h1>

      <AboutUsComponent imgSrc={Data[3].imgUrl} content={Data[3].content} />
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
        <Table sx={{ m: 4 }}>
          <TableHead>
            <TableRow>
              <TableCell>मोडेल</TableCell>
              <TableCell>वजन</TableCell>
              <TableCell>पाते</TableCell>
              <TableCell>size (ft)</TableCell>
              <TableCell>PTO Shaft rpm</TableCell>
              <TableCell>Side transmission</TableCell>
              <TableCell>पात्याचे प्रकार</TableCell>
              <TableCell>Side plate</TableCell>
              <TableCell>Gear box</TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell className="W">SR (36) MSS (5) FT</TableCell>
            <TableCell>४१० कि.ग्रा</TableCell>
            <TableCell>३६</TableCell>
            <TableCell>५ फूट</TableCell>
            <TableCell>५४०/१०००</TableCell>
            <TableCell>Gear drive</TableCell>
            <TableCell>L</TableCell>
            <TableCell>१० मि.मी</TableCell>
            <TableCell>Heavy duty</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">SR (36) MSS (5.5) FT</TableCell>
            <TableCell>४१५ कि.ग्रा</TableCell>
            <TableCell>३६</TableCell>
            <TableCell>५ फूट</TableCell>
            <TableCell>५४०/१०००</TableCell>
            <TableCell>Gear drive</TableCell>
            <TableCell>L</TableCell>
            <TableCell>१० मि.मी</TableCell>
            <TableCell>Heavy duty</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">SR (४२) MSS (6) FT</TableCell>
            <TableCell>४२० कि.ग्रा</TableCell>
            <TableCell>४२</TableCell>
            <TableCell>५ फूट</TableCell>
            <TableCell>५४०/१०००</TableCell>
            <TableCell>Gear drive</TableCell>
            <TableCell>L</TableCell>
            <TableCell>१० मि.मी</TableCell>
            <TableCell>Heavy duty</TableCell>
          </TableRow>
        </Table>
      </Container>
    </>
  );
};

export default Rotavator;
