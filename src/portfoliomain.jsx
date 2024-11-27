 import myphoto from "./santu.png"
//  import Main from "./portfoliomai";


const Main=()=>{
    return(
  <div style={styles.div}>
    <h1 style={styles.text}>Hello,I'm santoshi</h1>
      <p style={{fontWeight:"bold",fontSize:"20px..."}}>Passionate Software Developer <br/>Recent Graduate <br/> Eager to Apply Technical Skills in Real-World Projects | Seeking Entry-Level Opportunities.</p>
       </div>
    );
}
const styles={
  div:{
    backgroundImage:`url(${myphoto})`,
    backgroundSize:"cover",
    opacity:"0.5",
    height:"80vh",
    width:"100vw",
    display:"grid",
    gridtemplateRows:"row",
    justtifyContent:"center",
    alignContent:"center",
    // position:"relative",
    // height:"50%"
    
  },
    text:{
      // backgroundColor: "rgba(0, 0, 0, 0.5)",
      // position:"absolute",
  
    }

  }

  // text:{
  //   display:"flex",
  //   justtifyContent:"center",
  //   alignContent:"center",

  // }
 // }


export default Main;


