
// import {useState} from "react"
export default function About(props) {
// const [myStyle, setmyStyle] = useState({
//     color:"white",
//     backgroundColor:"black"
    
// })


let myStyle ={
  color: props.mode === "dark"? "white" : "#042743",
  backgroundColor:   props.mode === "dark"? "rgb(36 74 104)" : "white",
}









// const [btnText , setBtnText] = useState("Enable dark mode")
// const toggleStyle =()=>{

//     if(myStyle.color === "white"){


//         setmyStyle({
//             color:"black",
    
//     backgroundColor:"white",
            
//     border: "2px solid white"
            
            
    


//         })

//         setBtnText("Enable dark mode")



//     }

//     else{
//         setmyStyle({
//             color:"white",
//             backgroundColor:"black"
//         })

//         setBtnText("Enable light mode")









//     }
// }
       return(
         
        

      <div className="container my-3"   >
      <h1 className="my-3" style={{color: props.mode === "dark"? "white" : "#042743"}}> About us</h1>
         
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>  Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body"  style={myStyle} >
        Textconverter gives you a way to analyze your text quickly and efficiently. Be it word count, character count or remove extra spaces.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed"  style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free To Use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body"  style={myStyle} >
        Textconverter is a free character counter tool that provides instant character count & word count statistics for a given text. Textconverter reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed"  style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body"  style={myStyle} >
       This word <b>software<b/> works in any web browsers such as chrom, Firfox,Internet Explorer, Safari, opera. It suits to count Characters in facebook, blog, books, excel document, essays, etc. 
      </div>
    </div>
  </div>
</div>
{/* <button className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button> */}

      </div>
      
       
       )
        
    
}
