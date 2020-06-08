import React from "react";
import myRes from "../../images/AMcIntire_Res_1.1.pdf";

function Contact() {
  return (
    <div class={{ container: 100 }} style={{padding: 20, paddingTop: 20 }}>
    <div class="container" style={{marginBottom: 20, padding: 30}} width="100%">
    <h2 style={{color: '#668eb9'}}>Contact</h2>
    <div class="container">
    <hr style={{color: "skyblue"}}></hr>
        <p><strong style={{color: "#668eb9"}}>Via email:</strong> mcintireaw [at] gmail.com</p>
        <p><strong style={{color: "#668eb9"}}>or by phone:</strong> 503.XXX.XXXX.</p>
        <p><strong style={{color: "#668eb9"}}>More information and project examples at:</strong></p>
        <p> <a href="https://github.com/imAnonAmi" target="blank">GitHub</a></p>
        <p> <a href="https://linkedin.com/in/andrew-mcintire" target="blank">LinkedIn</a></p>
        <p><strong style={{color: "#668eb9"}}>Or review my resume</strong> <a href={myRes} target="blank" title="Andrew McIntire">here.</a> </p>
        
      
      </div>
     
      
      <div id="footer">
	<p id="name">Andrew McIntire</p>
	<p id="copyright">&copy; 2020</p>
</div>
    </div>
    </div>
  );
}

export default Contact;
