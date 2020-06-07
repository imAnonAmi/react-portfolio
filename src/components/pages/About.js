import React from "react";

import myImage from "../../images/hs_AM.jpg";
import myRes from "../../images/AMcIntire_Res_1.1.pdf";

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
  
  Of course, when you are lucky enough to enjoy what you do it can be hard to tell work and play apart. I have been truly blessed in my career, and have spent much of it leading culturally diverse, global teams of amazing people in a wide array of endeavors spanning multiple industries. In my roles of Senior Operations Leader, Full Stack Developer, and human being I pride myself most on my ability to establish open and transparent relationships with colleagues, clients, and business partners to organically bridge the gaps between disparate groups, cultures, concepts, perspectives, and expectations. In short, I value people and strive to ensure that my solutions always focus first and foremost on the ramifications for those involved.</p>
  
  <p style={{padding: 10}}>
  My career has been <i>eclectic</i> to say the least, and has included stints in Private Security, Printing, Aerospace, Graphic Design, Publishing, Ecommerce, and multiple entrepeneurial efforts. Having spent the better part of 2018-2019 overseeing a massive Ecommerce site redesign as the Product Owner, I developed a curiosity about software engineering. This curiosity pushed me to enroll in and successfully complete the University of Oregon's Full Stack Developer Bootcamp in 2020. Look below for a quick glance at my key coding strengths, or view my <a href={myRes} rel="noopener noreferrer" target="_blank">resume</a> or <a href="https://www.linkedin.com/in/andrew-mcintire/" rel="noopener noreferrer" target="_blank">LinkedIn page</a> for more details.
  </p>
  <p style={{padding: 10}}>
  Thank you for taking the time to learn a bit about me. If you would like to speak further, please reach out via my contact page.
  </p>

</section>
<div id="charts"
						className={
							"col-12 col-sm-12 col-md-12 col-lg-6 "
						}>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								HTML5
							</div> 
						</div>
        
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS3
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Javascript
							</div>
						</div>
            <div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Vanilla JS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								React JS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Express - Node JS
							</div>
						</div>
            <div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								JQuery
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								MongoDB - Mongoose
							</div>
						</div>
							
            <div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								SQL - MySQL - Sequelize
							</div>
						</div>
					</div>

</div>

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
