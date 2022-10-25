import useStyles from "./filterButtons.style";
import {Box} from "@material-ui/core";
import {FormControl, NativeSelect, Typography} from "@mui/material";
import {language} from "../Navbar/data";
import SortIcon from '@mui/icons-material/Sort';
export default function FilterButtons(){
  const classes = useStyles();
  return(
      <Box className={classes.filterWrapper}>
          <Box className={classes.dropDown}>
              <SortIcon />
          </Box>
          <Box className={classes.dropDown} >
              <FormControl fullWidth>
                  <NativeSelect defaultValue={30}>
                      {language.map(item =>
                          <option value={10} key={item.name}>{item.name}</option>
                      )}
                  </NativeSelect>
              </FormControl>
          </Box>
          <Box className={classes.dropDown} >
              <FormControl fullWidth>
                  <NativeSelect defaultValue={30}>
                      {language.map(item =>
                          <option value={10} key={item.name}>{item.name}</option>
                      )}
                  </NativeSelect>
              </FormControl>
          </Box>
      </Box>
  )
}
