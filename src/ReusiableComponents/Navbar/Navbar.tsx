import {useState} from "react";
import { Box } from "@material-ui/core";
import useStyles from "./Navbar.styles";
import {Typography, Button} from "@mui/material";
import {data, sports, language} from "./data";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {NativeSelect, FormControl } from '@mui/material';
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar(){

    const router = useRouter();
    const classes = useStyles();
    const [openNavbar, setOpenNavbar] = useState(false);

    const handleOpenMenu = () => {
        setOpenNavbar(!openNavbar);
    }


    return(
        <Box className={classes.navbarWrapper}>
            <Typography className={classes.logo}> Skerio. </Typography>
            <Box className={!openNavbar ? classes.mainBlock : classes.activeNavbar}>
                {data.map(item =>
                    <Link href={item.link} key={item.name}>
                     <Typography  className={router.pathname == item.link ? classes.singleActiveName : classes.singleName}>{item.name}</Typography>
                    </Link>
                )}
                <Box className={classes.dropDown}>
                    <FormControl fullWidth>
                        <NativeSelect defaultValue={30} style={openNavbar ? { color: "white" } : {color: "black"}}>
                            {sports.map(item =>
                                 <option value={10} key={item.name}>{item.name}</option>
                            )}
                        </NativeSelect>
                    </FormControl>
                </Box>
                <Box className={classes.dropDown} >
                    <FormControl fullWidth>
                        <NativeSelect defaultValue={30} style={openNavbar ? { color: "white" } : {color: "black"}}>
                            {language.map(item =>
                                <option value={10} key={item.name}>{item.name}</option>
                            )}
                        </NativeSelect>
                    </FormControl>
                </Box>
                <Box className={classes.loginPage}>
                    <Link href="/login">
                    <Button className={classes.loginBtn} variant="contained">Login</Button>
                    </Link>
                </Box>
            </Box>
            <Box className={classes.hamburgerMenu}>
                {!openNavbar ? <MenuIcon onClick={handleOpenMenu}/> : <CloseIcon onClick={handleOpenMenu} sx={{color: "#fff"}}/> }
            </Box>
        </Box>
    )
}
