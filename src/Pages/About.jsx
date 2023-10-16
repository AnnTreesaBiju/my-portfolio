import React from 'react'
import './About.css'
function About() {
  return (
    <div>
         {/* about me */}
        <section id='AboutMe' className='expandable'>
        <div className= 'AboutMe' >
              <h3 className='mt-3 mb-4 ps-5' style={{ color: "orangered" }}>About Me</h3>
              <div className='row'>
                <div  className='col-12  border-top p-5'>
                  <h6>Hello! I’m Ann Treesa Biju.</h6>
                  
                 <p style={{textAlign:"justify"}} > Innovative, task-driven Full Stack Developer with expertise in web design and development across diverse industries.  Proficient in developing databases, creating user interfaces, writing and testing codes, troubleshooting simple/complex issues, and implementing new features based on user feedback.</p>
                  <div className='row mt-4'>
                    <div className='col-6'>
                      <h6 style={{ fontSize: "15px" }}>AGE  <span className='ms-2' />.<span className='ms-2' />  .<span className='ms-2' />  . <span className='ms-2' /> .<span className='ms-2' /> <span className='fw-normal'>21</span>  </h6>
                      <h6 style={{ fontSize: "15px" }}>FREELANCE  <span className='ms-2' /> .  <span className='ms-2' />. <span className='ms-2' /> . <span className='ms-2' /> .  <span className='ms-2' /> <span className='fw-normal'>Available</span> </h6>
                    </div>
                    <div className='col-6'>

                      <h6 style={{ fontSize: "15px" }}>EDUCATION <span className='ms-2' />. <span className='ms-2' />.<span className='ms-2' /> . <span className='ms-2' />. <span className='ms-2' /><span className='fw-normal'>BCA</span> </h6>
                      <h6 style={{ fontSize: "15px" }}>RESIDENCE <span className='ms-2' /> .<span className='ms-2' /> .<span className='ms-2' /> . <span className='ms-2' /> . <span className='ms-2' /><span className='fw-normal'>Kerala, India</span></h6>
                    </div>
                  </div>
                </div>

              </div>

              <h3 className='mt-5 mb-4 ps-5' style={{ color: "orangered" }}>My services</h3>
              <div className='row'>
                <div className='col-6 border border-end-0 border-start-0 text-center'>
                  <button style={{ borderRadius: "50%", borderColor: "orangered" }} className='btn p-3 mb-3 mt-3'><i className="fa-solid fa-globe fa-flip fa-xl" ></i>
                  </button>
                  <h4 className='mb-4'>Website</h4>
                  <p>
                    I Can Build

                    Professional

                    Responsive

                    Websites Optimized

                    For The Most

                    Popular Search

                    Engines.
                  </p>
                </div>

                <div className='col-6 border text-center border-end-0 border-bottom-0'>
                  <button style={{ borderRadius: "50%", borderColor: "orangered" }} className='btn p-3 mb-3 mt-3'><i class="fa-solid fa-display fa-shake fa-xl"></i>
                  </button>
                  <h4 className='mb-4'>Single Page Applications</h4>
                  <p >
                    I Can Build

                    Professional Single

                    Page Application

                    Using Reactjs And

                    Modern Library
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-6 border  border-top-0  border-bottom-0  text-center'>
                  <button style={{ borderRadius: "50%", borderColor: "orangered" }} className='btn p-3 mb-3 mt-3'><i className="fa-solid fa-globe fa-flip fa-xl" ></i>
                  </button>
                  <h4 className='mb-4'>Web Application</h4>
                  <p>
                    I Can Build

                    Applications For

                    Different Purposes

                    Using Technologies

                    That Allow You

                    More Security.
                  </p>
                </div>

                <div className='col-6 border text-center border-top-0 border-start-0'>
                  <button style={{ borderRadius: "50%", borderColor: "orangered" }} className='btn p-3 mb-3 mt-3'><i class="fa-solid fa-file-lines fa-fade fa-xl"></i>
                  </button>
                  <h4 className='mb-4'>PSD To HTML</h4>
                  <p>
                    It Is A Fact

                    That Reader Will

                    Be Distracted By

                    Content Of A Page When Looking At

                    The Readable

                    Its Layout.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-6 border  border-top-0   text-center'>
                  <button style={{ borderRadius: "50%", borderColor: "orangered" }} className='btn p-3 mb-3 mt-3'><i class="fa-brands fa-squarespace fa-beat fa-xl"></i>
                  </button>
                  <h4 className='mb-4'>UI/UX Desigin</h4>
                  <p>
                    Modern and mobile-ready website that will help you reach all of your marketing.
                  </p>
                </div>

                <div className='col-6 border text-center border-bottom-0  border-top-0 border-start-0'>
                  <button style={{ borderRadius: "50%", borderColor: "orangered" }} className='btn p-3 mb-3 mt-3'><i class="fa-solid fa-wrench fa-shake fa-xl"></i>
                  </button>
                  <h4 className='mb-4'>Fixed Website</h4>
                  <p>
                    I Can Build

                    Professional

                    Responsive

                    Websites Optimized

                    For The Most Popular Search

                    Engines.
                  </p>
                </div>
              </div>
              <h3 className='mt-5 ps-5' style={{ color: "orangered" }}>Focus</h3>
              <div className='row'>
                <div className='col-12  border-top p-5'>
                  <h6>UI/UX Developer !</h6>
                 <p  style={{textAlign:"justify"}}> Focused UI Developer, Competent In Web Development And Ui Design And Is Highly Efficient In Creating High-Quality Wireframes, Demos And Prototypes Of User Interfaces.</p>
                  <hr className='w-25 mb-4'></hr>
                  <h6>Front-End Web Development !</h6>
                 <p style={{textAlign:"justify"}}>  I Work In Front-End Web Development, And I Have Experience In Dealing With Programming And Modern Web Technologies, And I Have Built A Lot Of Projects That Have Increased My Experience And Trained A Lot, I Am A Fast Learner And Always Love To Develop Myself.</p>
                  <hr className='w-50 mb-4'></hr>
                  <h6>Back-End Web Development !</h6>
                 <p style={{textAlign:"justify"}}> Build and maintain the mechanisms that process data and perform actions on websites. primarily focuses on databases, scripting, backend logic, APIs, and website architecture.</p>                
                    <hr className='w-75'></hr>
                  
                </div>

              </div>
            </div>
        </section>
    </div>
  )
}

export default About