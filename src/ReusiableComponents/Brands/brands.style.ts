import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    brandWrapper: {
        width: "100%",
    },
    marquee: {
        height: "200px",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        margin: "auto",
    },
    marqueeInner: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        margin: "50px 0",
        position: "absolute",
        animation: "marquee 30s linear infinite",
        '&:hover': {
            animationPlayState: "paused",
        },
    },
    orb: {
        width: "200px",
        height: "200px",
        display: "inline-block",
        margin: "0 5px",
        float: "left",
        transition: "all 0.3s ease-out",
    },
    brandName: {
        objectFit: "scale-down",
    },
    span: {
        float: "left",
        width: "150%",
    },
}))
