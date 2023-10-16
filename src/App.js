import './App.css';
import About from './Pages/About';
import Resume from './Pages/Resume';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import { useEffect, useState } from 'react';
import './Ann_Treesa-CV.pdf'
// import Skill from './Pages/Skill';



function App() {

  // dark and light
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  // return method for chaing the location
  // fun comp. react feature kodukan
  const navigateNyUrl = useNavigate("")
  // fun:-about
  const navigate1 = () => {
    navigateNyUrl('/')
  }
  // function:-resume
  const navigate2 = () => {
    navigateNyUrl('/resume')
  }
  // fun:-work
  const navigate3 = () => {
    navigateNyUrl('/work')
  }
  // fun:-contact
  const navigate4 = () => {
    navigateNyUrl('/contact')
  }
  // fun:-skill
  // const navigate5=()=>{
  //   navigateNyUrl('/skill')
  //   }


  return (
    <div >

      <div className={` App${theme} container mt-5 justify-content-center  align-items-center `}>
        <div className={`App${theme} row d-flex justify-content-center align-items-center`}>
          {/* nav */}
          <div className="col-1 justify-content-center align-items-center mt-3">
            <div className=' bg-light me-1'><nav className='mb-2 ms-3 mt-4'>

              <li style={{ textDecoration: "none", listStyle: "none", color: "" }}>  <button className='btn'><i className=" mt-4 fa-solid fa-bars fa-xl"></i></button></li>
              <li style={{ textDecoration: "none", listStyle: "none", color: "" }}> <button onClick={toggleTheme} className='btn'><i className=" mt-3 fa-regular fa-moon fa-xl"></i></button></li>


            </nav>
            </div>

            <div className=' bg-light me-1'><nav>

              <li style={{ textDecoration: "none", listStyle: "none" }}>  <button onClick={navigate1} className='btn'>
                <i className="mt-4 fa-solid fa-user fa-xl"></i>
                About
                <hr />
              </button></li>
              <li style={{ textDecoration: "none", listStyle: "none", color: "" }}> <button onClick={navigate2} className='btn'>
                <i className=" mt-2 fa-regular fa-note-sticky fa-xl"></i>
                Resume
                <hr />
              </button></li>
              <li style={{ textDecoration: "none", listStyle: "none", color: "" }}>  <button onClick={navigate3} className='btn'>
                <i className="mt-2 fa-regular fa-folder-open fa-xl"></i>
                Works
                <hr />
              </button></li>
              {/* <li style={{ textDecoration: "none", listStyle: "none", color: "" }}> <button onClick={navigate5}  className='btn'>
                <i className=" mt-2 fa-regular fa-file fa-xl"></i>
                Skill
                <hr />
              </button></li> */}
              <li style={{ textDecoration: "none", listStyle: "none", color: "" }}>  <button onClick={navigate4} className='btn mb-3'>
                <i className="mt-2 fa-solid fa-envelope fa-xl"></i>
                Contact

              </button></li>

            </nav>
            </div>

          </div>
          {/* card */}
          <div className="col-4  justify-content-center align-items-center ">
            <div>
              <div class="card" style={{ width: "27rem", height: "40rem" }}>
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" style={{ height: "350px" }} className="imag card-img-top img-fluid " alt="..." />
                <div className="card-body text-center">
                  <h3 className="card-title mt-3">ANN TREESA BIJU</h3>
                  <div className='txt justify-content-center align-items-center '>
                    <h6> I'am a : <span style={{ color: "orangered" }} className='b1'></span></h6>
                  </div>
                  <div>
                    <a style={{ color: "rgb(43, 42, 42)", textDecoration: "none", textDecoration: "none" }} href="https://www.linkedin.com/in/ann-treesa-biju-682a60284/"> <i className="fa-brands fa-linkedin me-2 mt-4"></i></a>
                    <a style={{ color: "rgb(43, 42, 42)", textDecoration: "none" }} href="https://instagram.com/__sistaaz__queen__?igshid=OGQ5ZDc2ODk2ZA=="> <i className="fa-brands fa-square-instagram me-2"></i></a>
                    <a style={{ color: "rgb(43, 42, 42)", textDecoration: "none", textDecoration: "none" }} href="https://github.com/dashboard"> <i className="fa-brands fa-github me-2"></i></a>
                    <a className='mb-5' style={{ color: "rgb(43, 42, 42)", textDecoration: "none" }} href=""> <i className="fa-brands fa-square-whatsapp mb-5"></i></a>
                  </div>
                  <a className='link' href="./Ann_Treesa-CV.pdf">
                    <button className='btn'> Download CV <i class="fa-solid fa-cloud-arrow-down fa-bounce fa-lg"></i></button></a>


                </div>

              </div>
            </div>
          </div>
          {/* 3   */}
          <div style={{ height: "37rem" }} className=" flow col-6 bg-light ">
            <Routes>
              {/* about me */}
              <Route path='/' element={<About />} />
              {/* Resumes */}
              <Route path='/resume' element={<Resume />} />
              {/* work */}
              <Route path='/work' element={<Work />} />
              {/* contact */}
              <Route path='/contact' element={<Contact />} />
              {/* skill */}
              {/* <Route path='/skill' element={<Skill />}/> */}

            </Routes>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
