import {useState, useEffect} from "react";
import {Box} from "@material-ui/core";
import useStyles from "./login.style"
import loginImages from "../../assets/images/login.jpg";
import {Typography} from "@mui/material";
import {ColorButton} from "./login.style";
import TextField from '@mui/material/TextField';
import Link from "next/link";
export default function LoginComponent() {

    const [validateEmail, setValidateEmail] = useState("");
    const [catchErrorEmail, setCatchErrorEmail] = useState(false);
    const [validatePassword, setValidatePassword] = useState("");
    const [catchErrorPassword, setCatchErrorPassword] = useState(false);
    const handleCatchError = function(){
        validateEmail === "" ? setCatchErrorEmail(true) : setCatchErrorEmail(false);
        validatePassword === "" ? setCatchErrorPassword(true) : setCatchErrorPassword(false);
    }
    const classes = useStyles();
    return(
        <Box className={classes.loginWrapper} style={{backgroundImage: `url(${loginImages.src})`}}>
            <Link href="/">
            <Typography className={classes.logo}>Skerio .</Typography>
            </Link>
            <Box className={classes.formBox}>
                <Box className={classes.formDiv} component="form">
                    <TextField
                        error={catchErrorEmail}
                        onChange={(e) => setValidateEmail(e.target.value)}
                        id="outlined-textarea"
                        label="Your e-mail *"
                        className={classes.textField}
                    />
                </Box>
                <Box className={classes.formDiv} component="form" >
                    <TextField
                        error={catchErrorPassword}
                        onChange={(e) => setValidatePassword(e.target.value)}
                        id="outlined-textarea"
                        label="Your Password *"
                        variant="outlined"
                        className={classes.textField}
                    />
                </Box>
                <ColorButton onClick={handleCatchError} variant="contained">Submit</ColorButton>
            </Box>
        </Box>
    )
}
