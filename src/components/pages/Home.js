import React from "react";
import Background from '../../images/smith.jpg';


function Home() {
  return (
    
    <div class={{ container: 100 }} style={{padding: 0, paddingTop: 0 }}>
    <img className="backgroundImage" src={Background} alt={"Error"} width="100%"/>
    <div class="centered" style={{
          justifyContent: "center",
          alignItems: "center"
        }}>
    
      
      <h1 style={{color: 'white', textAlign: 'center'}}>  Hi! My name is Andrew.</h1>
      
      <h2 style={{color: 'white', textAlign: 'center'}}>
        This is my happy place.
      </h2>
      <br></br>
      <h3 style={{color: 'white', textAlign: 'center'}}>
        It inspires my work and play.
      </h3>
      
      </div>  
      
      <div id="footer">
	<p id="name">Andrew McIntire</p>
	<p id="copyright">&copy; 2020</p>
</div>
    </div>
    
   
  );
}

export default Home;
