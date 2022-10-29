import useStyles from "./table.style";
import {Box} from "@material-ui/core";
import FilterButtons from "../../ReusiableComponents/FilterButtons/FilterButtons";

export default function Table(){


    const classes = useStyles();

    return(
        <Box className={classes.TableWrapper}>
            <Box>
                <FilterButtons />
            </Box>

        </Box>
    )
}
