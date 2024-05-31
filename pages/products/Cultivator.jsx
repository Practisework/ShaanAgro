import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";
import AboutUsComponent from "@/components/aboutuscomponent";
import Data from "@/implement_data";
const Cultivator = () => {
  return (
    <>
      <h1 className="text-4xl text-center mt-10">{Data[0].name}</h1>

      <AboutUsComponent imgSrc={Data[0].imgUrl} content={Data[0].content} />
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
              <TableCell>5 दाते</TableCell>
              <TableCell>७ दाते</TableCell>
              <TableCell>९ दाते</TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell className="W">मोडेल</TableCell>
            <TableCell>SBT-20/5-F/LCS</TableCell>
            <TableCell>SBT-20/7-F/LCS</TableCell>
            <TableCell>SBT-20/9-F/LCS</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">वजन</TableCell>
            <TableCell>७३ कि.ग्रा</TableCell>
            <TableCell>१४५ कि.ग्रा</TableCell>
            <TableCell>१८५ कि.ग्रा</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">फ्रेम</TableCell>
            <TableCell>50x50 sq. pipe</TableCell>
            <TableCell>72x72 sq. pipe</TableCell>
            <TableCell>72x72 sq. pipe</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">उंची</TableCell>
            <TableCell>४०५ मि.मी</TableCell>
            <TableCell>५३० मि.मी</TableCell>
            <TableCell>५३० मि.मी</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">ट्रॅक्टर (Hp)</TableCell>
            <TableCell>१८ – २५ Hp</TableCell>
            <TableCell>३० – ४५ Hp</TableCell>
            <TableCell>४० - ५५ Hp</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">फ्रेम (len)</TableCell>
            <TableCell>१२३० मि.मी</TableCell>
            <TableCell>२६१२ मि.मी</TableCell>
            <TableCell>२१२० मि.मी</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">फ्रेम (wid)</TableCell>
            <TableCell>३८० मि.मी</TableCell>
            <TableCell>४५० मि.मी</TableCell>
            <TableCell>४६० मि.मी</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">दाते (मि.मी)</TableCell>
            <TableCell>५</TableCell>
            <TableCell>७</TableCell>
            <TableCell>९</TableCell>
          </TableRow>
        </Table>
        {/* ---------------------------------------------------------------------- */}
        <Table sx={{ m: 4 }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>5 दाते</TableCell>
              <TableCell>७ दाते</TableCell>
              <TableCell>९ दाते</TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell className="W">मोडेल</TableCell>
            <TableCell>SBT-20/5-F/SHS</TableCell>
            <TableCell>SBT-20/7-F/SHS</TableCell>
            <TableCell>SBT-20/9-F/SHS</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">वजन</TableCell>
            <TableCell>७४ कि.ग्रा</TableCell>
            <TableCell>१५५ कि.ग्रा</TableCell>
            <TableCell>१५७ कि.ग्रा</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">फ्रेम</TableCell>
            <TableCell>3 in C channel</TableCell>
            <TableCell>4 in C channel</TableCell>
            <TableCell>4 in C channel</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">उंची</TableCell>
            <TableCell>४०५ मि.मी</TableCell>
            <TableCell>५३० मि.मी</TableCell>
            <TableCell>५३० मि.मी</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">ट्रॅक्टर (Hp)</TableCell>
            <TableCell>१८ – २५ Hp</TableCell>
            <TableCell>३० – ४५ Hp</TableCell>
            <TableCell>४० - ५५ Hp</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">फ्रेम (len)</TableCell>
            <TableCell>१२३० मि.मी</TableCell>
            <TableCell>२६१२ मि.मी</TableCell>
            <TableCell>२१२० मि.मी</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">फ्रेम (wid)</TableCell>
            <TableCell>३८० मि.मी</TableCell>
            <TableCell>४५० मि.मी</TableCell>
            <TableCell>४६० मि.मी</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="W">दाते (मि.मी)</TableCell>
            <TableCell>५</TableCell>
            <TableCell>७</TableCell>
            <TableCell>९</TableCell>
          </TableRow>
        </Table>
      </Container>
    </>
  );
};

export default Cultivator;
