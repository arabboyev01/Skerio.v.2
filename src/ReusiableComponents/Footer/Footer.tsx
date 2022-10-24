import {Box} from "@material-ui/core";
import useStyles from "./footer.style";
import {Title} from "@mui/icons-material";
import {Typography} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer(){
    const classes = useStyles();
    return(
        <Box className={classes.footerWrapper}>
            <Box>
                <Title className={classes.footerHeader}>About Us</Title>
                <Typography className={classes.footerDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.</Typography>
                <Box className={classes.socialMediaBox}>
                    <InstagramIcon className={classes.icon}/>
                    <TelegramIcon className={classes.icon}/>
                    <FacebookIcon className={classes.icon}/>
                </Box>
            </Box>
            <Box></Box>
            <Box></Box>
        </Box>
    )
}
