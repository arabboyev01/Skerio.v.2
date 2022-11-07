import {StyledTableCell, StyledTableRow} from "./tablechild.style";
import useStyles from "./tablechild.style";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {tableData} from  "./TableData";
import Image from "next/image";

export default function TableChild(){
    const classes = useStyles();
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Team</StyledTableCell>
                        <StyledTableCell align="right">Number</StyledTableCell>
                        <StyledTableCell align="right">Goal Scored</StyledTableCell>
                        <StyledTableCell align="right">Icon</StyledTableCell>
                        <StyledTableCell align="right">Goal Concadet</StyledTableCell>
                        <StyledTableCell align="right">Shots on Target</StyledTableCell>
                        <StyledTableCell align="right">Fouls</StyledTableCell>
                        <StyledTableCell align="right">Yellow Cards</StyledTableCell>
                        <StyledTableCell align="right">Red Cards</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row, index) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                            <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                            <StyledTableCell align="right"><Image src={row.icon} className={classes.tableImage}/></StyledTableCell>
                            <StyledTableCell align="right">{row.score}</StyledTableCell>
                            <StyledTableCell align="right">{row.conced}</StyledTableCell>
                            <StyledTableCell align="right">{row.shotsOn}</StyledTableCell>
                            <StyledTableCell align="right">{row.fouls}</StyledTableCell>
                            <StyledTableCell align="right">{row.yellow}</StyledTableCell>
                            <StyledTableCell align="right">{row.red}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
