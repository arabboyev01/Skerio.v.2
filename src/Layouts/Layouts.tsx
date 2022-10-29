import Navbar from "../ReusiableComponents/Navbar/Navbar"
import Footer from "../ReusiableComponents/Footer/Footer";
import {Box} from "@material-ui/core";
import Brands from "../ReusiableComponents/Brands/Brands";

export default function Layout({children}: any){
    return(
        <Box style={{maxWidth: "1300px", margin: "0 auto"}}>
            <Navbar />
              <main>{children}</main>
            <Brands />
            <Footer />
        </Box>
    )
}

