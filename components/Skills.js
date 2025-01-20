"use client";
import { ashuUtilit } from "@/utility";
import { jarallax, jarallaxVideo } from "jarallax";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    ashuUtilit.activeSkillProgress();
  }, []);

  useEffect(() => {
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
      imgSrc: "assets/img/skill.jepg",
    });
  });

  return (
    <div
      className="ashu_tm_section w-full h-auto clear-both float-left"
      id="skills"
    >
      <div className="ashu_tm_skills w-full h-auto clear-both float-left relative px-0 pt-[140px] pb-[150px]">
        <div className="container">
          <div className="skills_inner w-full h-auto clear-both float-left relative z-[3]">
            <div className="left w-[60%] pr-[200px]">
              <div className="ashu_tm_main_title w-full h-auto clear-both float-left">
                <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
                  Skills
                </span>
                <h3 className="font-extrabold uppercase text-white">
                  Programming Skills
                </h3>
              </div>
              <div
                className="text w-full float-left mt-[40px] mb-[44px] wow fadeInUp"
                data-wow-duration=".7s"
              >
                <p className="text-[#bbb]">
                  For more than 3 years, I've been deeply immersed in modern web
                  development, mastering cutting-edge programming languages for
                  both web and blockchain applications.
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="progress_inner" data-value={95}>
                  <span>
                    <span className="label">HTML &amp; CSS </span>
                    <span className="number">95%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={80}>
                  <span>
                    <span className="label">JavaScript</span>
                    <span className="number">85%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>

                <div className="progress_inner" data-value={80}>
                  <span>
                    <span className="label">TypeScript</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={90}>
                  <span>
                    <span className="label">ReactJS &amp; NextJS </span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>

                <div className="progress_inner" data-value={90}>
                  <span>
                    <span className="label">
                      NodeJS &amp; ExpressJS &amp; NestJs{" "}
                    </span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="right w-[40%] absolute right-0 top-0 bottom-[-220px] overflow-hidden"
              data-background-style="image"
            >
              {" "}
              {/* Background Styles: "video" and "image" // Also you can use any youtube, vimeo, and local videos */}
              {/* <div
                className="my_video absolute inset-2 jarallax"
                data-speed={0}
                data-img-url="assets/img/skills.jpg"
              /> */}
              <div style={containerStyle}>
                <img
                  src="assets/img/skills.jpg"
                  alt="Skills"
                  style={imgStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

const containerStyle = {
  position: "relative",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Background color with transparency
  backgroundImage: "url(assets/img/skills.jpg)", // Background image
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "100vh", // Set height as needed
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  inset: "0",
};
