import {useState} from "react";
import {Box} from "@material-ui/core";
import Title from "../../../ReusiableComponents/Titel/Titel";
import useStyles from "./statistics.style";
import Image from "next/image";
import {data} from "./data";
import {Button, Typography} from "@mui/material";

export default function Statistics(){
    const classes = useStyles();

    const [data1, setData1] = useState(data[0]);
    const [category, setCategory] = useState("cristiano");

    const handleSinglePlayer = function(event: string){
        setCategory(event)
        const filtering = data.filter(item => item.cat === event)
        // @ts-ignore
        setData1(...filtering);
    }

    return(
        <Box className={classes.statisticWrapper}>
            <Title header="Statistics" />
            <Box className={classes.statisticMain}>
                <Box className={classes.singleInform}>
                    <Image src={data1.img} className={classes.playerImage} width={300} height={400}/>
                    <Box className={classes.playerBio}>
                        <Typography className={classes.playerName}>{data1.name}</Typography>
                        <Typography className={classes.teamName}>{data1.team}</Typography>
                        <Typography className={classes.teamDesc}>{data1.desc}</Typography>
                        <Button className={classes.moreSee}>See more</Button>
                    </Box>
                </Box>
                <Box className={classes.scrollView}>
                    {data.map(item =>
                        <Box onClick={() => handleSinglePlayer(item.cat)} className={item.cat === category ? classes.activePlayer : classes.scrollSingle}>
                                <Image src={item.img} width={117} height={148} className={classes.scrollImage}/>
                            <Box>
                                <Typography className={classes.playerName}>{item.name}</Typography>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}
