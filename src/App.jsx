import React from "react";  
import Header from "./components/header";
import Footer from "./components/footer";
import Parent from "./components/parent";




const App = () => {
  return (
    <div className= "box">
      <video  src="./holivideo.webm" autoPlay loop muted /> 
      
         <Header />
          <Parent /> 
          <Footer /> 
    </div>
    
    
  )
}
export default App;