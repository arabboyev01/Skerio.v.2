import { Box, Typography } from "@material-ui/core";
import FilterButtons from "../../ReusiableComponents/FilterButtons/FilterButtons";
import useStyles from "./news.style";
import {dumbNewsData} from "./newsDumbData";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Image from "next/image";
import Secondary from "./Secondary";

export default function News() {

    const classes = useStyles();
    return (
        <Box className={classes.newsWrapper}>
            <Box>
                <FilterButtons />
            </Box>
            <Box className={classes.newsContainer}>
                <Box className={classes.specialNews}>
                    {dumbNewsData.filter(categ => categ.category === 2).map(item => 
                    <Box className={classes.singleSpecial}>
                        <Box className={classes.imageBackground} style={{backgroundImage:`url(${item.image.src})`}}></Box>
                        <Box className={classes.specialNewsDesc}>
                            <Typography className={classes.dates}><CalendarTodayIcon /> {item.date}</Typography>
                            <Typography className={classes.newsTitle}>{item.title}</Typography>
                            <Typography className={classes.newsDesk}>{item.desc}</Typography>
                        </Box>
                    </Box>  
                    )}
                    <Box className={classes.ordinaryNews}>
                        {dumbNewsData.filter(categ => categ.category === 1).map(item =>     
                        <Box className={classes.ordinaryNewsSingle}>
                            <Image className={classes.ordinaryImages} src={item.image}/>
                            <Box className={classes.ordinaryDesc}>
                            <Typography ><CalendarTodayIcon /> {item.date}</Typography>
                            <Typography >{item.title}</Typography>
                            </Box>
                        </Box>
                        )}
                    </Box>
                </Box>
                <Box className={classes.secondaryNews}>
                    <Secondary />
                </Box>
            </Box>
        </Box>
    )
}