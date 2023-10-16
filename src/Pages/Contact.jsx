import React from 'react'

function Contact() {
    return (
        <>
            <section id='contact'>
            <div className='contact'>
                <h3 className='mt-3 mb-4 ps-5' style={{ color: "orangered" }}>Get in Touch</h3>
                <hr className='w-75' />
                <iframe className='p-3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0623229847097!2d76.33520887459484!3d10.011710972834024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ddf7ec52f9d%3A0xb7529ebe26cefa12!2sMayBelle%20Homes%20Ladies%20Hostel!5e0!3m2!1sen!2sin!4v1697022824617!5m2!1sen!2sin" width="100%" height="270" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div>
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