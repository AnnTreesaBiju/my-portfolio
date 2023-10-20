import React from 'react'

function Contact() {
    return (
        <>
            <section id='contact'>
            <div className='contact'>
                <h3 className='mt-3 mb-4 ps-5' style={{ color: "orangered" }}>Get in Touch</h3>
                <hr className='w-75' />
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d16479.643133203786!2d77.0513464827951!3d9.880526034502786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTInMjguMSJOIDc3wrAwMic1OC41IkU!5e0!3m2!1sen!2sin!4v1697785366575!5m2!1sen!2sin" className='ms-3' width="590" height="270" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                <div>
                    <div className='row mt-4 ms-2'>
                        <div className='col-6'>
                            <h6 style={{ fontSize: "14px", fontWeight: "bold" }}>ADDRESS  <span className='ms-2' />.<span className='ms-2' />  .<span className='ms-2' />  . <span className='ms-2' /> .<span className='ms-2' /> <span className='fw-normal fs-6 '>Cherupaarambil</span>  </h6>
                            <h6 style={{ fontSize: "14px", fontWeight: "bold" }}>PHONE  <span className='ms-2' /> .  <span className='ms-2' />. <span className='ms-2' /> . <span className='ms-2' /> .  <span className='ms-2' /> <span className='fw-normal  fs-6 '>7012924149</span> </h6>
                        </div>
                        <div className='col-6'>

                            <h6 style={{ fontSize: "14px", fontWeight: "bold" }}>EMAIL  <span className='ms-2' />.<span className='ms-2' /> . <span className='ms-2' />. <span className='ms-2   ' /><span className='fw-normal fs-6'>anntreesa028@gmail.com</span> </h6>
                            <h6 style={{ fontSize: "15px", fontWeight: "bold" }}>RESIDENCE <span className='ms-2' /> .<span className='ms-2' /> .<span className='ms-2' /> . <span className='ms-2' /> . <span className='ms-2' /><span className='fw-normal  fs-6 '>Kerala, India</span></h6>
                        </div>
                    </div>


                    <div className='text-center'>
                    <h4 className='mt-5 mb-4 ps-5 text-center' style={{ color: "orangered" }}>Connect Me</h4>
                    <a style={{ color: "rgb(43, 42, 42)", textDecoration: "none", textDecoration: "none" }} target='blank' href="https://www.linkedin.com/in/ann-treesa-biju-682a60284/"> <i className="fa-brands fa-linkedin ms-5 me-2 mt-2 fa-lg"></i></a>
                    <a style={{ color: "rgb(43, 42, 42)", textDecoration: "none" }} target='blank' href="https://instagram.com/__sistaaz__queen__?igshid=OGQ5ZDc2ODk2ZA=="> <i className="fa-brands fa-square-instagram me-2 fa-lg"></i></a>
                    <a style={{ color: "rgb(43, 42, 42)", textDecoration: "none", textDecoration: "none" }} target='blank' href="https://github.com/dashboard"> <i className="fa-brands fa-github me-2 fa-lg"></i></a>
                    <a className='mb-5' style={{ color: "rgb(43, 42, 42)", textDecoration: "none" }} href="" target='blank'> <i className="fa-brands fa-square-whatsapp mb-5 fa-lg"></i></a>
                  </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Contact