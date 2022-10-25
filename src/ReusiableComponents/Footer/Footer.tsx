import { Box } from "@material-ui/core";
import useStyles from "./footer.style";
import { Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.footerWrapper}>
            <Box className={classes.footerMain}>
                <Box className={classes.footerDesc}>
                    <Typography className={classes.footerHeader}>About Us</Typography>
                    <Typography className={classes.footerDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.</Typography>
                    <Box className={classes.socialMediaBox}>
                        <InstagramIcon className={classes.icon} />
                        <TelegramIcon className={classes.icon} />
                        <FacebookIcon className={classes.icon} />
                    </Box>
                </Box>
                <Box className={classes.footerNavbar}>
                    <Typography className={classes.footerHeader}>Menu</Typography>
                    <Typography className={classes.footerNavHome}>Home</Typography>
                    <Typography className={classes.footerNavItems}>News</Typography>
                    <Typography className={classes.footerNavItems}>Shop</Typography>
                    <Typography className={classes.footerNavItems}>Table</Typography>
                    <Typography className={classes.footerNavItems}>Area</Typography>
                </Box>
                <Box className={classes.footerContact}>
                    <Typography className={classes.footerHeader}>Contact</Typography>
                    <Typography className={classes.contactInfo}> <LocationOnIcon className={classes.contactIcons} />203 Fake St. Mountain
                        View, San Francisco,
                        California, USA</Typography>
                    <Typography className={classes.contactInfo}><LocalPhoneIcon className={classes.contactIcons} /> +998 99 988 35 00 </Typography>
                    <Typography className={classes.contactInfo}><EmailIcon className={classes.contactIcons} />abbosarabboyev9@gmailcom </Typography>
                </Box>
            </Box>
            <Box >
                <Typography className={classes.developmentText}>&#169;	 UIL development Team.</Typography>
            </Box>
        </Box>
    )
}
