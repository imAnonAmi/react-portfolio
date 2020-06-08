import React from "react";
import KKI from "../../images/karaokani.jpg";
import moodle from "../../images/moodle.jpg";
import fitTrack from "../../images/fitTrack.jpg";
import burger from "../../images/burger.jpg";
import et3 from "../../images/et3.jpg";
import dayplan from "../../images/dayplan.jpg";



function Project() {
  return (
    <div class={{ container: 100 }} style={{padding: 20, paddingTop: 20 }}>
    <div class="container" style={{marginBottom: 20, padding: 30}} width="100%">
    <h2 style={{color: '#668eb9', marginBottom:20}}>Projects</h2>
      <div class="row row-cols-1 row-cols-md-3">
          <div class="col mb-4">
            <div class="card h-100">
              <a href="https://imanonami.github.io/KaraoKanI/"  target="blank"><img src={KKI} class="card-img-top" alt="Project 1"></img></a>
              <div class="card-body">
                <h5 class="card-title" style={{color: "skyblue"}} ><a href="https://imanonami.github.io/KaraoKanI/"  target="blank">Karao Kan I?</a></h5>
                <p class="card-text">Repository <a href="https://github.com/imAnonAmi/KaraoKanI/" target="blank">here  </a> &bull;  Deployed <a href="https://imanonami.github.io/KaraoKanI/" target="blank">here</a></p>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100">
              <a href="https://the-moodle-app.herokuapp.com/"  target="blank"><img src={moodle} class="card-img-top" alt="Project 2"></img></a>
              <div class="card-body">
                <h5 class="card-title" style={{color: "skyblue"}}><a href="https://the-moodle-app.herokuapp.com/"  target="blank">Mood Tracker</a></h5>
                <p class="card-text">Repository <a href="https://github.com/imAnonAmi/Project-2"  target="blank">here  </a> &bull;  Deployed <a href="https://the-moodle-app.herokuapp.com/" target="blank">here</a></p>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100">
              <a href="https://tranquil-beyond-08862.herokuapp.com/"  target="blank"><img src={burger} class="card-img-top" alt="burger tracker"></img></a>
              <div class="card-body">
                <h5 class="card-title" style={{color: "skyblue"}}><a href="https://tranquil-beyond-08862.herokuapp.com/"  target="blank">Mouth Meat Madness!</a></h5>
                <p class="card-text">Repository <a href="https://github.com/imAnonAmi/burger" target="blank">here  </a> &bull;  Deployed <a href="https://tranquil-beyond-08862.herokuapp.com/" target="blank">here</a></p> 
              </div>
            </div>
          </div>
       
        </div>

        <div class="row row-cols-1 row-cols-md-3">
          <div class="col mb-4">
            <div class="card h-100">
              <a href="https://github.com/imAnonAmi/Unit-17-Homework"  target="blank"><img src={fitTrack} class="card-img-top" alt="Fitness Tracker"></img></a>
              <div class="card-body">
                <h5 class="card-title" style={{color: "skyblue"}} ><a href="https://github.com/imAnonAmi/Unit-17-Homework"  target="blank">Simple Fitness Tracker</a></h5>
                <p class="card-text">Repository <a href="https://github.com/imAnonAmi/Unit-17-Homework" target="blank">here  </a> &bull;  Deployed <a href="https://murmuring-island-18748.herokuapp.com/?id=5ec0594e846b000017f48a35" target="blank">here</a></p>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100">
              <a href="https://imanonami.github.io/Daily-Task-List/"  target="blank"><img src={dayplan} class="card-img-top" alt="Daily Task List"></img></a>
              <div class="card-body">
                <h5 class="card-title" style={{color: "skyblue"}}><a href="https://imanonami.github.io/Daily-Task-List/"  target="blank">A Simple Daily Planner</a></h5>
                <p class="card-text">Repository <a href="https://github.com/imAnonAmi/Daily-Task-List/"  target="blank">here  </a> &bull;  Deployed <a href="https://imanonami.github.io/Homework_05/" target="blank">here</a></p>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100">
              <a href="https://github.com/imAnonAmi/employee-directory"  target="blank"><img src={et3} class="card-img-top" alt="Coding Test"></img></a>
              <div class="card-body">
                <h5 class="card-title" style={{color: "skyblue"}}><a href="https://github.com/imAnonAmi/employee-directory"  target="blank">Employee Directory</a></h5>
                <p class="card-text">Repository <a href="https://github.com/imAnonAmi/employee-directory" target="blank">here  </a> &bull;  Deployed <a href="https://random-employee-directory.herokuapp.com/" target="blank">here</a></p> 
              </div>
            </div>
          </div>
       
        </div>
      
      <div id="footer">
	<p id="name">Andrew McIntire</p>
	<p id="copyright">&copy; 2020</p>
</div>
    </div>
    </div>
  );
}

export default Project;
