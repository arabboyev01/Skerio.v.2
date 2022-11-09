import {makeStyles} from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export default makeStyles((theme) => ({
    loginWrapper: {
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    logo: {
        color: "#BF0000",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700,
        fontSize: "42px",
        lineHeight: "51.2px",
        padding: "50px 0 0 100px",
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            fontSize: "24px",
            lineHeight: "25.2px",
            padding: "50px 0 0 30px",
        },
    },
    formBox: {
        padding: "200px 0 0 100px",
        maxWidth: "500px",
        [theme.breakpoints.down('sm')]: {
            padding: "150px 0 0 10px",
            maxWidth: "350px",
        },
    },
    formDiv: {
        '& > :not(style)': {
            m: 1, width: '400px', background: "rgba(255, 255, 255, 0.8)",
            [theme.breakpoints.down('sm')]: {
                maxWidth: "350px",
            },
        },
        marginTop: "50px",
        color: "#fff !important",
        '& input:valid + fieldset': {
            borderColor: '#fff',
            borderWidth: 2,
        },

    },
    textField: {
        color: "#fff !important",
        overflow: "hidden",
    }
}));
export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "#fff",
    backgroundColor: "#bf0000",
    marginTop: "50px",
    width: "400px",
    padding: "15px 0",
    '&:hover': {
        opacity: "0.9",
        backgroundColor: "#bf0000",
    },
    [theme.breakpoints.down('sm')]: {
        maxWidth: "350px",
    },
}));
