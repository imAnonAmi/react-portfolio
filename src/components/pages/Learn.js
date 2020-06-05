import React from "react";
import { Link } from "react-router-dom";


function Learn() {
  return (
    <div class={{ container: 100 }} style={{padding: 20, paddingTop: 50 }}>
      <h1 className="text-center">hello</h1>
      <p>
        Lorem ipsum dolor sit amet, est ut enim consequat. Nostrum fastidii partiendo sed ne, no
        mutat ludus aperiri mea, per in choro dolorem electram. Invidunt reprimique assueverit quo
        ne, eruditi graecis pro ut. Usu ut diceret scaevola evertitur, appareat voluptatibus ad vel.
      </p>
      <Link to="/about" role="button" className="btn btn-link">
        Learn Less
      </Link>
      
      <div id="footer">
	<p id="name">Andrew McIntire</p>
	<p id="copyright">&copy; 2020</p>
</div>
    </div>
  );
}

export default Learn;
