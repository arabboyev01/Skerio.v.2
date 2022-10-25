import {Box} from "@material-ui/core";
import useStyles from "./brands.style";
import {data} from "./data"
import Image from "next/image";
export default function Brands(){
    const classes = useStyles();
    return (
        <Box className={classes.brandWrapper}>
            <Box className={classes.marquee}>
                <Box className={classes.marqueeInner}>
                    {data.map((item, index) =>
                        <span key={index} className={classes.span}>
                          <Box className={classes.orb}>
                            <Image src={item.image} width={146} height={100} className={classes.brandName }/>
                          </Box>
                        </span>
                    )}
                    {data.map((item, index) =>
                        <span key={index} className={classes.span}>
                          <Box className={classes.orb}>
                            <Image src={item.image} width={146} height={100} className={classes.brandName }/>
                          </Box>
                        </span>
                    )}
                    {data.map((item, index) =>
                        <span key={index} className={classes.span}>
                          <Box className={classes.orb}>
                            <Image src={item.image} width={146} height={100} className={classes.brandName }/>
                          </Box>
                        </span>
                    )}
                </Box>
            </Box>
        </Box>
    )
}
