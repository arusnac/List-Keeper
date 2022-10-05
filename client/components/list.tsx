import { IList } from "../types";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   "&:nth-of-type(odd)": {
  //     backgroundColor: "#F6FFF8",
  //   },
  //   // hide last border
  //   "&:last-child td, &:last-child th": {
  //     border: 0,
  //   },
}));

const List = ({ content, link, title, complete, category }: IList) => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const background = category === "groceries" ? "#A4C3B2" : "#9684A1";

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: background,
      color: "black",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
      backgroundColor: "#F6FFF8",
    },
  }));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  //   function createData(
  //     name: string,
  //     calories: number,
  //     fat: number,
  //     carbs: number,
  //     protein: number
  //   ) {
  //     return { name, calories, fat, carbs, protein };
  //   }

  //   const rows = [
  //     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //     createData("Eclair", 262, 16.0, 24, 6.0),
  //     createData("Cupcake", 305, 3.7, 67, 4.3),
  //     createData("Gingerbread", 356, 16.0, 49, 3.9),
  //   ];

  return (
    <Box sx={{ padding: 1 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} size="small" aria-label="a desnse table">
          <TableHead>
            <TableRow>
              <StyledTableCell>{title}</StyledTableCell>
              <StyledTableCell align="right">Deadline</StyledTableCell>
              {/*<StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {content.map((item) => (
              <StyledTableRow key={item}>
                <StyledTableCell component="th" scope="row">
                  <Checkbox {...label} />
                  {item}
                </StyledTableCell>
                <StyledTableCell align="right">
                  5:00 pm - 10/10/22
                </StyledTableCell>
                {/*<StyledTableCell align="right">{row.fat}</StyledTableCell>{" "}
                
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default List;
