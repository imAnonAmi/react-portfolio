import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import myImage from "../../images/hs_AM.jpg";

function About(props) {
  return (
<body>  
<div class={{ container: '100%' }} style={{padding: 20, paddingTop: 20 }}>
<div class="container" style={{marginBottom: 20, padding: 30}} width="100%">

<h2 style={{color: 'darkgrey'}}>About Me</h2>

<div class="row">
  
  <section>
  <p style={{padding: 10}}>
  <img src={myImage} class="rounded" width= "300px" height="300px" alt="Andrew McIntire: Full stack developer and senior operations leader" style={{float: 'left', marginRight: 40}} />
  
  Strategic, multi-disciplinary business operations leader and full stack developer with a proven aptitude for delivering high-growth results, exceeding operational performance targets, and yielding measurable outcomes while managing an extensive scope of responsibility. </p>

<ul  style={{padding: 10, marginLeft: 20}}>

<li>Expertly builds and optimizes organizational processes, measurement systems, and infrastructure to maximize business results across diverse operations, including publishing, aerospace, and retail/ecommerce industries</li>
<li>Transforms strategic plans into actionable solutions and benchmarks performance against key operational targets and goals</li>
<li>Establishes open and transparent relationships with colleagues, clients, and business partners to organically bridge the gaps between disparate groups, cultures, concepts, perspectives, and expectations</li>
<li>Leverages multi-disciplinary background to identify and cultivate connections that strengthen company’s competitive advantage</li>
</ul>

</section>
 

</div>
<Link to="/learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
</div>
					
			
      
      <div id="footer">
	<p id="name">Andrew McIntire</p>
	<p id="copyright">&copy; 2020</p>
</div>
    </div>
    </body>    
  );
}

export default About;
