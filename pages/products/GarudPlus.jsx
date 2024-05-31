import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";

const GarudPlus = () => {
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
            <TableCell>मॉडेल</TableCell>
            <TableCell>१००२४</TableCell>
            <TableCell>१२५३०</TableCell>
            <TableCell>१५०३६</TableCell>
            <TableCell>१७५४२</TableCell>
            <TableCell>२००४८</TableCell>
            <TableCell>२२५५४</TableCell>
            <TableCell>२५०६०</TableCell>
            <TableCell>२७५६६</TableCell>
          </TableRow>
        </TableHead>
        <TableRow>
          <TableHead>Working width (mm)</TableHead>
          <TableCell>१०६०</TableCell>
          <TableCell>१३१२</TableCell>
          <TableCell>१५६२</TableCell>
          <TableCell>१८०६</TableCell>
          <TableCell>२०५३</TableCell>
          <TableCell>२३०२</TableCell>
          <TableCell>२६०१</TableCell>
          <TableCell>२९००</TableCell>
        </TableRow>
        <TableRow>
          <TableHead>Gearbox rpm</TableHead>
          <TableCell>५४०/१०००</TableCell>
          <TableCell>५४०/१०००</TableCell>
          <TableCell>५४०/१०००</TableCell>
          <TableCell>५४०/१०००</TableCell>
          <TableCell>५४०/१०००</TableCell>
          <TableCell>५४०/१०००</TableCell>
          <TableCell>५४०/१०००</TableCell>
          <TableCell>५४०/१०००</TableCell>
        </TableRow>
        <TableRow>
          <TableHead>Side transmission</TableHead>
          <TableCell>Gear drive</TableCell>
          <TableCell>Gear drive</TableCell>
          <TableCell>Gear drive</TableCell>
          <TableCell>Gear drive</TableCell>
          <TableCell>Gear drive</TableCell>
          <TableCell>Gear drive</TableCell>
          <TableCell>Gear drive</TableCell>
          <TableCell>Gear drive</TableCell>
        </TableRow>
        <TableRow>
          <TableHead>पाते</TableHead>
          <TableCell>२४/३६</TableCell>
          <TableCell>३०/४२</TableCell>
          <TableCell>३६/४८</TableCell>
          <TableCell>४२/५४</TableCell>
          <TableCell>४८/६०</TableCell>
          <TableCell>५४/६६</TableCell>
          <TableCell>६०/७२</TableCell>
          <TableCell>६६/७८</TableCell>
        </TableRow>
        <TableRow>
          <TableHead>Driveline safety</TableHead>
          <TableCell>Shear bolt</TableCell>
          <TableCell>Shear bolt</TableCell>
          <TableCell>Shear bolt</TableCell>
          <TableCell>Shear bolt</TableCell>
          <TableCell>Shear bolt</TableCell>
          <TableCell>Shear bolt</TableCell>
          <TableCell>Shear bolt</TableCell>
          <TableCell>Shear bolt</TableCell>
        </TableRow>
        <TableRow>
          <TableHead>वजन</TableHead>
          <TableCell>३७५</TableCell>
          <TableCell>३९०</TableCell>
          <TableCell>४०५</TableCell>
          <TableCell>४२०</TableCell>
          <TableCell>४३५</TableCell>
          <TableCell>४६०</TableCell>
          <TableCell>४८५</TableCell>
          <TableCell>५१०</TableCell>
        </TableRow>
        <TableRow>
          <TableHead>Tr actor power (Hp)</TableHead>
          <TableCell>३०-३५</TableCell>
          <TableCell>३५-४०</TableCell>
          <TableCell>४०-४५</TableCell>
          <TableCell>४५-५०</TableCell>
          <TableCell>५०-५५</TableCell>
          <TableCell>५५-६०</TableCell>
          <TableCell>६०-६५</TableCell>
          <TableCell>६०-७५</TableCell>
        </TableRow>
      </Table>
    </Container>
  );
};

export default GarudPlus;
