import React from "react";
import { Link } from "react-router-dom";
import myRes1 from "../../images/amRes1.jpg";
import myRes2 from "../../images/amRes2.jpg";

function Learn() {
  return (
<body>  
<div class={{ container: '100%' }} style={{padding: 20, paddingTop: 20 }}>
<div class="container" style={{marginBottom: 20, padding: 30}} width="100%">

<h2 style={{color: 'darkgrey'}}>Resume</h2>
<div class="rescontainer">

<img src={myRes1} alt="Andrew McIntire: Full stack developer and senior operations leader" style={{}} />
<br></br>
<img src={myRes2} alt="Andrew McIntire: Full stack developer and senior operations leader" style={{}} />
</div>


 

</div>
<Link to="/about" role="button" className="btn btn-link">
        Back to About
      </Link>
</div>
					
			
      
      <div id="footer">
	<p id="name">Andrew McIntire</p>
	<p id="copyright">&copy; 2020</p>
</div>
    
    </body>  



  );
}

export default Learn;
