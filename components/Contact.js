const Contact = () => {
  return (
    <div
      className="ashu_tm_section w-full h-auto clear-both float-left"
      id="contact"
    >
      <div className="ashu_tm_contact w-full h-auto clear-both float-left bg-[#f9f9f9] px-0 pt-[140px] pb-[119px]">
        <div className="container">
          <div className="ashu_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              Contact
            </span>
            <h3 className="font-extrabold uppercase">Get in Touch</h3>
          </div>
          <div className="contact_inner w-full h-auto clear-both float-left mt-[40px] flex">
            <div
              className="left w-1/2 pr-[100px] wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="text w-full float-left mb-[42px]">
                <p>
                  Please fill out the form on this section to contact with me.
                  Or call me anytime.
                </p>
              </div>
              <div className="short w-full float-left">
                <ul>
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      {/* If you want to change or add any svg icons you can download here for free www.flaticon.com */}
                      <img
                        className="svg absolute left-0 w-[18px] h-[18px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                        src="assets/img/svg/placeholder.svg"
                        alt=""
                      />
                      <span className="text-[18px] text-black font-poppins">
                        B4 - 404, Amrapali Leisure Park, Gr. Noida, India
                      </span>
                    </div>
                  </li>
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      <img
                        className="svg absolute left-0 w-[18px] h-[18px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                        src="assets/img/svg/phone.svg"
                        alt=""
                      />

                      <a
                        href="tel:+91 8400491708"
                        className="text-[18px] text-white  font-poppins"
                      >
                        +91 8400491708
                      </a>
                    </div>
                  </li>
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      <img
                        className="svg absolute left-0 w-[18px] h-[18px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                        src="assets/img/svg/mail.svg"
                        alt=""
                      />
                      <a
                        href="mailto:ashutoshm9695@gmail.com"
                        className="text-[18px] text-white font-poppins"
                      >
                        ashutoshm9695@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      <img
                        className="svg absolute left-0 w-[18px] h-[18px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                        src="assets/img/svg/globe.svg"
                        alt=""
                      />
                      <a
                        href="https://ashutosh.thebytescode.in/"
                        className="text-[18px] text-white font-poppins"
                      >
                        ashutosh.thebytescode.in/
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="right w-1/2 pl-[100px] wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="fields w-full h-auto clear-both float-left">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="first w-full float-left">
                    <ul>
                      <li className="w-full mb-[30px] float-left">
                        <input id="name" type="text" placeholder="Name" />
                      </li>
                      <li className="w-full mb-[30px] float-left">
                        <input id="email" type="text" placeholder="Email" />
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      id="message"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="ashu_tm_button" data-position="left">
                    <a id="send_message" href="#">
                      <span>Submit</span>
                      <img
                        className="svg inline-block"
                        src="assets/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* If you want to change mail address to yours, please open modal.php and go to line 4 */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
