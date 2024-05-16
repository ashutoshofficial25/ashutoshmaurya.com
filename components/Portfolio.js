'use client';
import { context } from '@/context/context';
import { ashuUtilit } from '@/utility';
import { portfolioSlider } from '@/utility/sliderProps';
import { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
const Portfolio = () => {
  useEffect(() => {
    ashuUtilit.dataImage();
    ashuUtilit.imgToSVG();
  }, []);

  return (
    <div
      className="ashu_tm_section w-full h-auto clear-both float-left"
      id="portfolio"
    >
      <div className="ashu_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[140px] pb-[138px]">
        <div className="container">
          <div className="ashu_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              Portfolio
            </span>
            <h3 className="font-extrabold uppercase">Selected Works</h3>
          </div>
          <div
            className="portfolio_list w-full h-auto clear-both float-left pt-[92px] gallery_zoom wow fadeInUp"
            data-wow-duration=".7s"
          >
            <Swiper {...portfolioSlider} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/blog.png"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">Blog</h3>
                      <span className="font-poppins">
                        https://blogging-hub.vercel.app/
                      </span>
                    </div>
                    <a
                      target="_blank"
                      className="ashu_tm_full_link absolute inset-0 z-[5] popup-vimeo"
                      href="https://blogging-hub.vercel.app/"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/davinci.png"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                        Davinci Board Menu
                      </h3>
                      <span className="font-poppins">Davinci board menu</span>
                    </div>
                    <a
                      target="_blank"
                      className="ashu_tm_full_link absolute inset-0 z-[5] popup-youtube"
                      href="https://davinci-menu-react.vercel.app/"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/3.jpg"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">Cordly</h3>
                      <span className="font-poppins">
                        Automate Trading View Alerts
                      </span>
                    </div>
                    <a
                      target="_blank"
                      className="ashu_tm_full_link absolute inset-0 z-[5] soundcloude_link mfp-iframe audio"
                      href="https://www.cordly.io/"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/4.jpg"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                        Talentsuite
                      </h3>
                      <span className="font-poppins">
                        Professional service to investigate and develop your
                        talents{' '}
                      </span>
                    </div>
                    <a
                      target="_blank"
                      className="ashu_tm_full_link absolute inset-0 z-[5] portfolio_popup"
                      href="https://test.mytalentsuite.nl/"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/5.jpg"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                        Arispay
                      </h3>
                      <span className="font-poppins">
                        NEW ERA OF DIGITAL FINANCE
                      </span>
                    </div>
                    <a
                      target="_blank"
                      className="ashu_tm_full_link absolute inset-0 z-[5] zoom"
                      href="https://arispay.io/"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/6.jpg"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                        Click & Collect
                      </h3>
                      <span className="font-poppins">
                        E-commerce (myntra-clone)
                      </span>
                    </div>
                    <a
                      className="ashu_tm_full_link absolute inset-0 z-[5] zoom"
                      target="_blank"
                      href="https://click-n-collect-ecommerce.vercel.app/"
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="ashu_tm_swiper_progress fill">
                <div className="my_pagination_in">
                  <span className="current portfolio_cureent" />
                  <span className="pagination_progress">
                    <span className="all">
                      <span />
                    </span>
                  </span>
                  <span className="total" />
                </div>
                <div className="my_navigation">
                  <ul>
                    <li>
                      <a className="my_prev" href="#">
                        <img
                          className="svg"
                          src="assets/img/svg/right-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a className="my_next" href="#">
                        <img
                          className="svg"
                          src="assets/img/svg/right-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
