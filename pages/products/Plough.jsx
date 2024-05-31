import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Container } from "@mui/material";
import AboutUsComponent from "@/components/aboutuscomponent";
import Data from "@/implement_data";
const Plough = () => {
  return (
    <>
      <h1 className="text-4xl text-center mt-10">{Data[2].name}</h1>

      <AboutUsComponent imgSrc={Data[2].imgUrl} content={Data[2].content} />
      <Box
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
              <TableCell></TableCell>
              <TableCell>८ इंच</TableCell>
              <TableCell>१० इंच</TableCell>
              <TableCell>१२ इंच</TableCell>
              <TableCell>१४ इंच</TableCell>
              <TableCell>१६ इंच</TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell className="W">मोडेल</TableCell>
            <TableCell>SRP(8”)SS</TableCell>
            <TableCell>SRP(10”)SS</TableCell>
            <TableCell>SRP(१२”)SS</TableCell>
            <TableCell>SRP(14”)SS</TableCell>
            <TableCell>SRP(16”)SS</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">वजन</TableCell>
            <TableCell>210 कि.ग्रा</TableCell>
            <TableCell>250 कि.ग्रा</TableCell>
            <TableCell>300 कि.ग्रा</TableCell>
            <TableCell>380 कि.ग्रा</TableCell>
            <TableCell>480 कि.ग्रा</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">ट्रॅक्टर(Hp)</TableCell>
            <TableCell>१८-२५ Hp</TableCell>
            <TableCell>२५-३५ Hp</TableCell>
            <TableCell>३०-४५ Hp</TableCell>
            <TableCell>४५-५० Hp</TableCell>
            <TableCell>४५-५५ Hp</TableCell>
          </TableRow>
        </Table>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>८ इंच</TableCell>
              <TableCell>१० इंच</TableCell>
              <TableCell>१२ इंच</TableCell>
              <TableCell>१४ इंच</TableCell>
              <TableCell>१६ इंच</TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell className="W">मोडेल</TableCell>
            <TableCell>SRP(8”)SS</TableCell>
            <TableCell>SRP(10”)SS</TableCell>
            <TableCell>SRP(१२”)SS</TableCell>
            <TableCell>SRP(14”)SS</TableCell>
            <TableCell>SRP(16”)SS</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">वजन</TableCell>
            <TableCell>210 कि.ग्रा</TableCell>
            <TableCell>250 कि.ग्रा</TableCell>
            <TableCell>300 कि.ग्रा</TableCell>
            <TableCell>380 कि.ग्रा</TableCell>
            <TableCell>480 कि.ग्रा</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">ट्रॅक्टर(Hp)</TableCell>
            <TableCell>१८-२५ Hp</TableCell>
            <TableCell>२५-३५ Hp</TableCell>
            <TableCell>३०-४५ Hp</TableCell>
            <TableCell>४५-५० Hp</TableCell>
            <TableCell>४५-५५ Hp</TableCell>
          </TableRow>
        </Table>
      </Box>
    </>
  );
};

export default Plough;
