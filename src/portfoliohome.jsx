import React,{Component} from "react";
import Header from "./portfolioheader";
import Main from "./portfoliomain";
class Home extends Component{
    render(){
        return(
            <>
            <Header/>
            <Main/>
            </>
            
        );
    }

}
export default Home;