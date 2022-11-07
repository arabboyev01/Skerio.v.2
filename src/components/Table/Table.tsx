import useStyles from "./table.style";
import {Box} from "@material-ui/core";
import FilterButtons from "../../ReusiableComponents/FilterButtons/FilterButtons";
import TableChild from "./TableChild/TableChild";
import CarouselComponent from "../../ReusiableComponents/Carousel/Carousel";
import {dataDump} from "../Shop/dumpData";
import {newsCarousel} from "./table.data";

export default function Table(){
    const classes = useStyles();
    return(
        <Box className={classes.TableWrapper}>
            <Box>
                <CarouselComponent data={newsCarousel}/>
                <FilterButtons />
            </Box>
            <Box className={classes.tableMainWrapper}>
                <Box className={classes.tableHeader}>
                    <TableChild />
                </Box>
            </Box>
        </Box>
    )
}
