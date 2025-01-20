"use client";
import { context } from "@/context/context";
import { useContext } from "react";

const Hero = () => {
  const { setServiceModal, modalToggle } = useContext(context);
  return (
    <div
      className="ashu_tm_section w-full h-auto clear-both float-left"
      id="home"
    >
      <div className="ashu_tm_hero w-full min-h-[100vh] float-left clear-both bg-[#f9f9f9]">
        <div className="container min-h-full">
          <div className="content w-full min-h-[100vh] flex items-center relative">
            <div className="left w-1/2 pr-[50px] relative opacity-0 invisible top-[20px] transition-all duration-[400ms]">
              <span className="name inline-block mb-[16px] text-secondary-color font-poppins font-medium">
                Ashutosh Maurya
              </span>
              <h3 className="job text-[45px] font-extrabold leading-[1.4] uppercase mb-[25px]">
                FullStack Developer based in India
              </h3>
              <div className="services w-full h-auto clear-both float-left mb-[35px]">
                <ul>
                  {services.map((service) => (
                    <li className="w-full float-left" key={service.id}>
                      <a
                        className="text-black text-[17px] inline-block py-[8px] px-0 relative transition-all duration-300"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          modalToggle(true);
                          setServiceModal(service);
                        }}
                      >
                        <img className="image" src={service.img} alt="" />
                        <span>{service.title}</span>
                        <img
                          className="svg relative w-[17px] h-[17px] left-[10px] transition-all duration-300 inline-block"
                          src="assets/img/svg/right-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="short_info w-full h-auto clear-both float-left">
                <ul>
                  <li className="mr-[50px] mb-[15px] py-0 inline-block">
                    <div className="list_inner flex items-center">
                      <h3 className="text-[45px] font-semibold">3+</h3>
                      <span className="font-poppins pl-[15px] inline-block leading-[1.4] relative top-[-3px] text-[14px]">
                        Years of
                        <br />
                        Experience
                      </span>
                    </div>
                  </li>
                  <li className="mb-[15px] py-0 inline-block">
                    <div className="list_inner flex items-center">
                      <h3 className="text-[45px] font-semibold">10+</h3>
                      <span className="font-poppins pl-[15px] inline-block leading-[1.4] relative top-[-3px] text-[14px]">
                        Project
                        <br />
                        Completed
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right w-1/2 text-right pl-[200px] relative opacity-0 invisible top-[20px] transition-all duration-[400ms]">
              <div className="image relative">
                <img
                  className="min-w-full relative opacity-0"
                  src="assets/img/thumbs/3-4.jpg"
                  alt=""
                />
                <div
                  className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-[400ms]"
                  data-img-url="assets/img/hero/card.jpg"
                />
                <div className="shape" />
              </div>
            </div>
            <div className="down anchor">
              <a href="#portfolio">
                <img
                  className="svg"
                  src="assets/img/svg/down-arrow.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

const services = [
  {
    id: 1,
    title: "Frontend & Backend Development",
    img: "assets/img/service/1.jpg",
    description: `<div style="font-family: Arial, sans-serif; font-size: 14px; color: #eee;">
        <p style="line-height: 1.6;">
          With extensive experience in frontend and backend technologies, I
          specialize in building dynamic, responsive, and scalable web
          applications using the MERN stack (MongoDB, Express.js, React.js,
          Node.js). I focus on delivering high-quality code and efficient
          deployment strategies.
        </p>
        <p style="line-height: 1.6;">Check out some of my projects:</p>
        <ul style="line-height: 1.6;">
          <li>
            <a
              href="https://bksmygold.com/"
              style="color: #1e90ff; text-decoration: none;"
              target="_blank"
            >
              BKS My Gold
            </a>
          </li>
          <li>
            <a
              href="https://thebytescode.in/"
              style="color: #1e90ff; text-decoration: none;"
              target="_blank"
            >
              TheBytesCode
            </a>
          </li>
          <li>
            <a
              href="https://davinci-menu-react.vercel.app/"
              style="color: #1e90ff; text-decoration: none;"
              target="_blank"
            >
              DaVinci Menu
            </a>
          </li>
        </ul>
      </div>`,
  },
  {
    id: 2,
    title: "AI Integration",
    img: "assets/img/service/2.png",
    description: `
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #eee;">
        <p style="line-height: 1.6;">I integrate cutting-edge AI technologies to enhance web applications with smart, context-aware interactions. From chatbots to AI-driven systems, I offer solutions that integrate seamlessly with your business.</p>
        <p style="line-height: 1.6;">Some examples include:</p>
        <ul style="line-height: 1.6;">
          <li><a href="https://ai.blazpay.com/" style="color: #1e90ff; text-decoration: none;" target="_blank">AI Blazpay</a> for blockchain, AI, and frontend integration</li>
          <li><a href="https://rewards.blazpay.com/" style="color: #1e90ff; text-decoration: none;" target="_blank">Rewards Blazpay</a> showcasing AI-driven solutions for rewarding systems</li>
        </ul>
      </div>
    `,
  },
  {
    id: 3,
    title: "Blockchain | DeFi",
    img: "assets/img/service/4.jpg",
    description: `
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #eee;">
        <p style="line-height: 1.6;">As a blockchain developer, I specialize in creating decentralized applications (DApps) and implementing blockchain technologies such as smart contracts and DeFi solutions. My expertise is demonstrated through projects like:</p>
        <ul style="line-height: 1.6;">
          <li><a href="https://blazpay.com/" style="color: #1e90ff; text-decoration: none;" target="_blank">Blazpay</a></li>
          <li><a href="https://www.cordly.io/" style="color: #1e90ff; text-decoration: none;" target="_blank">Cordly.io</a></li>
        </ul>
      </div>
    `,
  },
  {
    id: 4,
    title: "FullStack Development",
    img: "assets/img/service/3.jpg",
    description: `
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #eee;">
        <p style="line-height: 1.6;">I offer complete full-stack development services, combining frontend and backend expertise to deliver robust, scalable applications. I work with technologies like React.js, Node.js, Express.js, and more.</p>
        <p style="line-height: 1.6;">You can explore some of my work on:</p>
        <ul style="line-height: 1.6;">
          <li><a href="https://arispay.io/" style="color: #1e90ff; text-decoration: none;" target="_blank">Arispay</a></li>
          <li><a href="https://bksmygold.com/" style="color: #1e90ff; text-decoration: none;" target="_blank">BKS My Gold</a></li>
          <li><a href="https://davinci-menu-react.vercel.app/" style="color: #1e90ff; text-decoration: none;" target="_blank">DaVinci Menu</a></li>
        </ul>
      </div>
    `,
  },
];
