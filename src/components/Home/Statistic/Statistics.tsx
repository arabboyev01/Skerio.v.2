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
                    <Image src={data1.img} className={classes.playerImage} alt="image" width={300} height={400}/>
                    <Box className={classes.playerBio}>
                        <Typography className={classes.playerName}>{data1.name}</Typography>
                        <Typography className={classes.teamName}>{data1.team}</Typography>
                        <Typography className={classes.teamDesc}>{data1.desc}</Typography>
                        <Button className={classes.moreSee}>See more</Button>
                    </Box>
                    <Box className={classes.resultTable}>
                        <Typography className={classes.tableHeader}>{data1.result}</Typography>
                        <Box className={classes.teamResult}>
                            <Typography>Team</Typography>
                            <Typography>{data1.teamResult}</Typography>
                        </Box>
                        <Box className={classes.teamResult}>
                            <Typography>Game Spent</Typography>
                            <Typography>{data1.gameSpend}</Typography>
                        </Box>
                        <Box className={classes.teamResult}>
                            <Typography>Hit Goals</Typography>
                            <Typography>{data1.hitGoals}</Typography>
                        </Box>
                        <Box className={classes.teamResult}>
                            <Typography>Sponsorship</Typography>
                            <Typography>{data1.teamResult}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.scrollView}>
                    {data.map(item =>
                        <Box onClick={() => handleSinglePlayer(item.cat)} key={item.name} className={item.cat === category ? classes.activePlayer : classes.scrollSingle}>
                                <Image src={item.img} width={100} height={90} alt="image" className={classes.scrollImage}/>
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
