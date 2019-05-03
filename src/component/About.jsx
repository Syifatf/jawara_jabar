import React, { Component } from 'react';
// import './css/agency.css';
// import './css/agency.min.css';
// import about1 from './public/images/about/1.jpg';


class About extends Component {
    render() {
      return (
        <div>
          {/* About */}
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h4 className="section-heading text-uppercase">About</h4>
                <h5 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                
                  {/* <Timeline img="./img/about/1.jpg" tahun="2009-2011" subheading="Our Humble Beginnings" text_muted="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"/> */}
                 
                  <li>
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="./public/images/about/1.jpg" alt />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2009-2011</h4>
                        <h4 className="subheading">Our Humble Beginnings</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                      </div>
                    </div>
                  </li>
  
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="./public/images/about/2.jpg" alt />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>March 2011</h4>
                        <h4 className="subheading">An Agency is Born</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="./public/images/about/3.jpg" alt />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>December 2012</h4>
                        <h4 className="subheading">Transition to Full Service</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="./public/images/about/4.jpg" alt />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>July 2014</h4>
                        <h4 className="subheading">Phase Two Expansion</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4>Be Part
                        <br />Of Our
                        <br />Story!</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        </div>
        
      );
    }
  }
  
  export default About;
  