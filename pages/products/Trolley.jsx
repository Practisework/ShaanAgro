import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";
import AboutUsComponent from "@/components/aboutuscomponent";
import Data from "@/implement_data";

const TableRowolley = () => {
  return (
    <>
      <h1 className="text-4xl text-center mt-10">{Data[1].name}</h1>

      <AboutUsComponent imgSrc={Data[1].imgUrl} content={Data[1].content} />
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
              <TableCell></TableCell>
              <TableCell>suspension</TableCell>
              <TableCell>Non suspension</TableCell>
              <TableCell>suspension</TableCell>
              <TableCell>Non suspension</TableCell>
              <TableCell>suspension</TableCell>
              <TableCell>Non suspension</TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell className="W">वजन</TableCell>
            <TableCell>१२०० कि.ग्रा</TableCell>
            <TableCell>१०६० कि.ग्रा</TableCell>
            <TableCell>११०० कि.ग्रा</TableCell>
            <TableCell>१००० कि.ग्रा</TableCell>
            <TableCell>८२० कि.ग्रा</TableCell>
            <TableCell>७५० कि.ग्रा</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">बेस शीट</TableCell>
            <TableCell>६ मि.मी</TableCell>
            <TableCell>६ मि.मी</TableCell>
            <TableCell>६ मि.मी</TableCell>
            <TableCell>६ मि.मी</TableCell>
            <TableCell>६ मि.मी</TableCell>
            <TableCell>६ मि.मी</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">उंची</TableCell>
            <TableCell>२१ इंच</TableCell>
            <TableCell>२१ इंच</TableCell>
            <TableCell>२१ इंच</TableCell>
            <TableCell>२१ इंच</TableCell>
            <TableCell>२१ इंच</TableCell>
            <TableCell>२१ इंच</TableCell>
          </TableRow>
        </Table>
      </Container>
    </>
  );
};

export default TableRowolley;
