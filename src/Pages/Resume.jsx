import React from 'react'
import './Resume.css';
import './logo_vanner_01ad159943_monochrome.png';
import './institution_logo_monochrome.jpg';
function Resume() {
  return (
    <div>
      <section id='Resume'>
        <div className='Resume mb-5' >
          <h3 className='mt-3 mb-4 ps-4' style={{ color: "orangered" }}>Resumes</h3>
          {/* EXP EDU */}
          <div className='row'>
            <div className='col-6 border border-end-0 border-bottom-0 border-start-0 '>
              <div className='d-flex ms-4'><button style={{ borderRadius: "50%", borderColor: "orangered" }} className='btn p-2 mb-3 mt-3'><i class="fa-solid fa-briefcase fa-lg"></i>
              </button><p className='mb-4 fs-5 mt-3 ms-2 fw-bold'>EXPERIENCE</p>

              </div>
              {/* intern */}
              <div className='ms-4 '>
                <button type="button" class="btn btn-outline-dark p-0 ps-1 pe-1  "><span style={{ color: "orangered", fontSize: "13px" }}>2023-Present</span></button>
                <div className='d-flex justify-content-between align-items-center'><h6 className='mt-3'>MEARN Stack Intern</h6>
                  <img style={{ width: "50%" }} className='img-fluid' src="./logo_vanner_01ad159943_monochrome.png" alt="" />
                </div>
                <p style={{ fontSize: '13px' }}>Luminar Technolab.in</p>
                <p>
                  A UI developer with expertise in React, HTML, CSS, JavaScript and Bootstrap. And an intern learning MEARN Full Stack  Development .
                </p>
              </div>
              {/* hr */}
              <div className='text-center justify-content-center ps-5 align-items-center mt-5 mb-5 w-75 ms-3'>
                <hr />
              </div>
              {/*  main*/}
              <div className='ms-4 '>
                <button type="button" class="btn btn-outline-dark p-0 ps-1 pe-1  "><span style={{ color: "orangered", fontSize: "13px" }}>Dec’22 – Mar’23</span></button>
                <div className='d-flex justify-content-between align-items-center'><h6 className='mt-3'>CV Scan</h6>
                  <img className='img-fluid w-25' src="./institution_logo_monochrome.jpg" alt="" />
                </div>
                <p style={{ fontSize: '13px' }}>Mar Sleeva.in</p>
                <p>
                  A CV Scanner to evaluate candidates' resumes and connect their
                  qualifications with appropriate positions.
                </p>
              </div>
              {/* hr */}
              <div className='text-center justify-content-center ps-5 align-items-center mb-5 mt-5 w-75 ms-3'>
                <hr />
              </div>
              {/*mini  */}

              <div className='ms-4 mb-5'>
                <button type="button" class="btn btn-outline-dark p-0 ps-1 pe-1  "><span style={{ color: "orangered", fontSize: "13px" }}>Jun’22 – Sep’22           </span></button>
                <div className='d-flex justify-content-between align-items-center'><h6 className='mt-3'>Project Topics Management System</h6>
                  <img className='img-fluid w-25' src="./institution_logo_monochrome.jpg" alt="" />
                </div>
                <p style={{ fontSize: '13px' }}>Mar Sleeva.in</p>
                <p>
                  A database to store information about projects completed by
                  alumni of a college.

                </p>
              </div>
            </div>

            <div className='col-6 border  border-end-0 border-bottom-0'>
              <div className='d-flex ms-4'><button style={{ borderRadius: "50%", borderColor: "orangered" }} className='btn p-2 mb-3 mt-3'><i class="fa-solid fa-graduation-cap fa-lg"></i>
              </button><p className='mb-4 fs-5 mt-3 ms-2 fw-bold'>EDUCATION</p>

              </div>
              {/* intern */}
              <div className='ms-4 mt-2 '>
                <button type="button" class="btn btn-outline-dark p-0 ps-1 pe-1  "><span style={{ color: "orangered", fontSize: "13px" }}>2020-2023</span></button>
                <div className='d-flex justify-content-between align-items-center'><h6 className='mt-3'>BACHELOR OF COMPUTER APPLICATION</h6>
                </div>
                <p style={{ fontSize: '13px' }}>Idukki Kerala</p>
                <p>
                  Mar Sleeva College of Art and Science
                  Murickassery
                  <p>Idukki Kerala</p>
                </p>
              </div>
              {/* hr */}
              <div className='text-center justify-content-center ps-5 align-items-center mt-5 mb-5 w-75 ms-3'>
                <hr />
              </div>
              {/*  main*/}
              <div className='ms-4 '>
                <button type="button" class="btn btn-outline-dark p-0 ps-1 pe-1  "><span style={{ color: "orangered", fontSize: "13px" }}>2018-2020</span></button>
                <div className='d-flex justify-content-between align-items-center'><h6 className='mt-3'>12<sup>th</sup></h6>
                </div>
                <p style={{ fontSize: '13px' }}>Idukki Kerala</p>
                <p>
                  St. Mary’s Higher Secondary School
                  Murickassery
                  <p>Idukki Kerala</p>
                </p>
              </div>
              {/* hr */}
              <div className='text-center justify-content-center ps-5 align-items-center mb-5 mt-5 w-75 ms-3'>
                <hr />
              </div>
              {/*mini  */}

              <div className='ms-4 mb-5'>
                <button type="button" class="btn btn-outline-dark p-0 ps-1 pe-1  "><span style={{ color: "orangered", fontSize: "13px" }}>2016-2018          </span></button>
                <div className='d-flex justify-content-between align-items-center'><h6 className='mt-3'>10<sup>th</sup></h6>
                </div>
                <p style={{ fontSize: '13px' }}>Idukki Kerala</p>
                <p>
                  St. Mary’s Higher Secondary School
                  Murickassery
                  <p>Idukki Kerala</p>

                </p>
              </div>
            </div>
            <div className='text-center justify-content-center ps-5 align-items-center w-75 ms-5'>
              <hr />
            </div>
          </div>

          <h3 className='mt-4 ps-4' style={{ color: "orangered" }}>Skills</h3>
          {/* SKILL */}
          <div className='text-center justify-content-center ps-4 mt-4 mb-4 align-items-center w-75 ms-5'>
              <hr />
            </div>
          <div className='d-flex justify-content-center align-items-center ' >
                <button style={{ borderRadius: "50%", borderColor: "orangered" }} className='btn p-2 mb-3'><i class="fa-solid fa-language fa-lg"></i>
                </button><p className='mb-4 fs-5  ms-2 fw-bold'>LANGUAGES</p>
              </div>
          <div className='row ms-4'>
            
            <div class="progress-circle over50 p97 ">
              <span>97% <h6>HTML</h6></span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>tssssss
              </div>rrrr
            </div>
            <div class="progress-circle over50 p92">
              <span>92%  <h6>React</h6></span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
            <div class="progress-circle over50 p90">
              <span>90% <h6>CSS</h6></span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
            <div class="progress-circle over50 p90">
              <span>90% <h6>Bootstrap</h6></span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
            <div class="progress-circle over50 p90">
              <span>90% <h6>Java Script</h6></span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
            <div class="progress-circle over50 p83">
              <span>83%<h6>PHP</h6></span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>

            <div class="progress-circle over50 p86">
              <span>86%<h6>Java</h6></span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
            <div class="progress-circle over50 p89">
              <span>89%<h6>C</h6></span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
          </div>
          {/* LAN */}
          <div className='row'>
            <div className='col-6 border  border-top-0   text-center'>
              <div className='d-flex justify-content-center align-items-center ' >
                <button style={{ borderRadius: "50%", borderColor: "orangered" }} className='btn p-2 mb-3 mt-5'><i class="fa-solid fa-memory fa-lg"></i>
                </button><p className='mb-4 fs-5 mt-5 ms-2 fw-bold'>KNOWLEDGE</p>
              </div>

              <div className='d-flex flex-column text-start ms-3'>
                <p>
                  <i style={{ color: "orangered" }} className="fa-solid fa-check ms-4  fa-lg me-3"></i> UI UX Design
                </p>
                <p>
                  <i style={{ color: "orangered" }} className="fa-solid fa-check ms-4   fa-lg me-3"></i> Project Management
                </p>
                <p>
                  <i style={{ color: "orangered" }} className="fa-solid fa-check ms-4  fa-lg me-3"></i> Version control System
                </p>
                <p>
                  <i style={{ color: "orangered" }} className="fa-solid fa-check ms-4   fa-lg me-3"></i> Website hosting
                </p>
                <p>
                  <i style={{ color: "orangered" }} className="fa-solid fa-check  ms-4 fa-lg me-3"></i> Frameworks
                </p>
                <p>
                  <i style={{ color: "orangered" }} className="fa-solid fa-check  ms-4 fa-lg me-3"></i>Database Management
                </p>
                <p>
                  <i style={{ color: "orangered" }} className="fa-solid fa-check  ms-4 fa-lg me-3"></i> Product Development
                </p>
                <p>
                  <i style={{ color: "orangered" }} className="fa-solid fa-check  ms-4 fa-lg me-3"></i> Responsive Design
                </p>



              </div>
            </div>

            <div className='col-6 border text-center border-bottom-0  border-top-0 border-start-0'>
              <div className='d-flex justify-content-center align-items-center ' >
                <button style={{ borderRadius: "50%", borderColor: "orangered" }} className='btn p-2 mb-3 mt-5'><i class="fa-solid fa-circle-nodes fa-lg"></i>
                </button><p className='mb-4 fs-5 mt-5 ms-2 fw-bold'>PLATFORMS</p>
              </div>

              {/* <!-- skill content --> */}
              <div style={{ width: "240px" }} className="progress-element progress-element--html mt-2 ms-4">
                <p className="progress-label ">VS Code</p>
                <div class="progress-container d-flex justify-content-around">
                  <progress max="100" value="97">97%</progress>
                </div>
              </div>

              <div style={{ width: "240px" }} class="progress-element progress-element--css  ms-4">
                <p class="progress-label">Figma</p>
                <div className="progress-container">
                  <progress max="100" value="90">90%</progress>
                </div>
              </div>

              <div style={{ width: "240px" }} className="progress-element progress-element--javascript ms-4 ">
                <p class="progress-label">DevOps</p>
                <div class="progress-container">
                  <progress max="100" value="85">85%</progress>
                </div>
              </div>
              <div style={{ width: "240px" }} class="progress-element progress-element--css  ms-4">
                <p class="progress-label">GitHub</p>
                <div className="progress-container">
                  <progress max="100" value="90">90%</progress>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  )
}

export default Resume