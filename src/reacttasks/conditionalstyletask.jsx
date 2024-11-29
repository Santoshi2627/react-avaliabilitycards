import React,{Component } from "react";
const obj=[{
    productName:"samsung galaxy s25",
    productPrice:"130000",
    productAvaliability:true,
},
{
    productName:"ipad",
    productPrice:"100000",
    productAvaliability:true,
},
{
productName:"macbook",
productPrice:"160000",
productAvaliability:false,
},
{
productName:"iphone",
productPrice:"160000",
productAvaliability:false,
},
{
productName:"samsung",
productPrice:"160000",
productAvaliability:true,
},
{
    productName:"one plus",
    productPrice:"60000",
    productAvaliability:true,
    },

]
class ProductsMain extends Component{
    render(){
        return(
            <div style={{display: "grid",
    gridTemplateColumns: "repeat(3, 60px)",
    // alignContent:"space-evenly",
    gap: " 60px",
    padding: "100px",
    justifyContent: "space-evenly",backgroundColor:"pink",margin:"0"}}>
{/*                 <p>avaliable cards are in green and unavaliable cards are in red</p> */}
            <div style={{...styles.card,...obj[0].productAvaliability?styles.greenbox:styles.redbox}}>
                <img src="https://www.androidheadlines.com/wp-content/uploads/2024/09/Galaxy-S25-Ultra-5K1-1420x799.webp" alt="samsung" style={{width:"100px", height:"100px"}}/>
                <h1>{obj[0].productName}</h1>
                <h2>{obj[0].productPrice}</h2>
            </div>
             <div style={{...styles.card,...obj[1].productAvaliability?styles.greenbox:styles.redbox}}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdE-EsNIBk48dOQ3_Iox_2ndgywTkVYzR2g&s" alt="ipad" style={{width:"100px", height:"100px"}}/>
             <h1>{obj[1].productName}</h1>
             <h2>{obj[1].productPrice}</h2>
         </div>
         <div style={{...styles.card,...obj[2].productAvaliability?styles.greenbox:styles.redbox}}>
                <img src="https://www.hindustantimes.com/ht-img/img/2023/12/08/1600x900/Apple-Macbook-Pro---Official-image-_1702007766290.jpg" alt="macbook" style={{width:"100px", height:"100px"}}/>
             <h1>{obj[2].productName}</h1>
             <h2>{obj[2].productPrice}</h2>
         </div>
         <div style={{...styles.card,...obj[3].productAvaliability?styles.greenbox:styles.redbox}}>
                <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/8b3870c7-7d7f-427d-a930-87f4247948c9/7dacb0e3-8fcf-4d76-aceb-902cce940132.png" alt="iphone" style={{width:"100px", height:"100px"}}/>
             <h1>{obj[3].productName}</h1>
             <h2>{obj[3].productPrice}</h2>
         </div>
         <div style={{...styles.card,...obj[4].productAvaliability?styles.greenbox:styles.redbox}}>
                <img src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-a356elbjins/gallery/in-galaxy-a35-5g-sm-a356-sm-a356elbjins-thumb-540296439" alt="samsung" style={{width:"100px", height:"100px"}}/>
             <h1>{obj[4].productName}</h1>
             <h2>{obj[4].productPrice}</h2>
         </div>
         <div style={{...styles.card,...obj[5].productAvaliability?styles.greenbox:styles.redbox}}>
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/8/337487292/ST/JB/TD/189620676/oneplus-nord-ce-3-5g-500x500.jpg" alt="oneplus" style={{width:"100px", height:"100px"}}/>
            
             <h1>{obj[5].productName}</h1>
             <h2>{obj[5].productPrice}</h2>
         </div>
                   <p>avaliable cards are in green and unavaliable cards are in red</p>
         </div>
            // <>
            //    <p>avaliable cards are in green and unavaliable cards are in red</p>
            // </>
     )
        
    }
}
const styles={ 
    card: {
        width: "300px", // Fixed width for each card
        textAlign: "center", // Center-align text
    },
    redbox:{backgroundColor:"red",padding:"20px",color:"black"},
    greenbox:{backgroundColor:"green",padding:"20px",color:"white"},
 
   
//    padding:"30px"
}

export default ProductsMain;
