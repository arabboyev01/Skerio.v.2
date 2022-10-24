import {Box} from "@material-ui/core";
import Title from "../../../ReusiableComponents/Titel/Titel";
import StoreCart from "../../../ReusiableComponents/StoreCart/StoreCart";
import {data} from "./data";

export default function Store(){
    return(
       <Box>
           <Title header={"Funny Store"} />
           <StoreCart data={data}/>
       </Box>
    )
}
