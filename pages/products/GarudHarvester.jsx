import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";
import AboutUsComponent from "@/components/aboutuscomponent";
import Data from "@/implement_data";
const GarudHarvester = () => {
  return (
    <>
      <h1 className="text-4xl text-center mt-10">{Data[10].name}</h1>

      <AboutUsComponent imgSrc={Data[10].imgUrl} content={Data[10].content} />
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
          <TableRow>
            <TableHead>Engine</TableHead>
            <TableCell>Tata 4sp rtv</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">No of cylinders</TableHead>
            <TableCell>४</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Power (HP)</TableHead>
            <TableCell>60@1250-2850 rpm</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Cooling system</TableHead>
            <TableCell>water cooled</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Drum diameter</TableHead>
            <TableCell>४६० मि.मी.</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">width</TableHead>
            <TableCell>५७० मि.मी.</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Rotor speed rpm</TableHead>
            <TableCell>५००-१२७५</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Cleaning area</TableHead>
            <TableCell>१.६ स्वे. मि.</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">transmission</TableHead>
            <TableCell>hydrostatic</TableCell>
          </TableRow>
        </Table>

        <Table sx={{ m: 4 }}>
          <TableRow>
            <TableHead className="W">No. of Roller</TableHead>
            <TableCell>१०</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Area coverage</TableHead>
            <TableCell>60-70</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Unloading system</TableHead>
            <TableCell>Universal join type</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Cutting width</TableHead>
            <TableCell>७Ft</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Lift height</TableHead>
            <TableCell>९२५ मि.मी </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">performance</TableHead>
            <TableCell>0.9 to 1 acres per hour </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Diesel consumption</TableHead>
            <TableCell>७/८ ली./HOUR </TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Fuel tank</TableHead>
            <TableCell>१०५ ली.</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">LxWxH (mm)</TableHead>
            <TableCell>5810x2560x2980</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">Ground clearance</TableHead>
            <TableCell>२४०</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="W">वजन</TableHead>
            <TableCell>४६०० कि.ग्रा.</TableCell>
          </TableRow>
        </Table>
      </Container>
    </>
  );
};

export default GarudHarvester;
