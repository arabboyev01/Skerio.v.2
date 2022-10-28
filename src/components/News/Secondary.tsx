import { Box, Typography } from "@material-ui/core";
import useStyles from "./secondary.style";
import { dumbNewsData } from "./newsDumbData";
export default function Secondary() {
    const classes = useStyles();

    return (
        <Box className={classes.secondaryWrapper}>
            <Box className={classes.popularNews}>
                <Box>
                    <Typography className={classes.popularNewsTitle}>6 Most Popular News</Typography>
                </Box>
                {dumbNewsData.filter(categ => categ.category === 1).slice(0, 6).map((item, index) =>
                    <Box>
                        <Typography key={item.title} className={classes.popularNewsDescription}>{index + 1}  {item.title}</Typography>
                        <Typography className={classes.date}>{item.date}</Typography>
                    </Box>
                )}
            </Box>
            <Box>
            {dumbNewsData.filter(categ => categ.category === 3).map(item =>
                <Box className={classes.nonActive}>
                    <Box className={classes.nonActiveBg} style={{ backgroundImage: `url(${item.image.src})` }}></Box>
                    <Box className={classes.nonActiveDesc}>
                        <Typography className={classes.popularNewsDescription}>{item.title}</Typography>
                        <Typography className={classes.date}>{item.date}</Typography>
                    </Box>
                </Box>
            )}
            </Box>
        </Box>
    )
}