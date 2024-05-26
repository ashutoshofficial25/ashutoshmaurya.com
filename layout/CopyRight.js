const CopyRight = () => {
  return (
    <div className="ashu_tm_section w-full h-auto clear-both float-left">
      <div className="ashu_tm_copyright w-full h-auto clear-both float-left bg-black px-0 pt-[28px] pb-[32px] text-center">
        <div className="container">
          <div
            className="copyright_inner w-full h-auto clear-both float-left flex items-center justify-between wow fadeInUp"
            data-wow-duration=".7s"
          >
            <div className="text">
              <p className="text-white">
                Copyright © 2024. All rights reserved.
              </p>
            </div>
            <div className="social">
              <ul>
                <li className="mr-[20px] inline-block">
                  <a className="text-white" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/linkedin.svg"
                      alt=""
                    />
                  </a>
                </li>

                <li className="mr-[20px] inline-block">
                  <a
                    className="text-white"
                    href="https://github.com/ashutoshofficial25"
                  >
                    <img
                      className="svg"
                      src="assets/img/svg/social/github.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="mr-[20px] inline-block">
                  <a
                    className="text-white"
                    href="https://www.facebook.com/ashutosh.maurya.5074"
                    target="_blank"
                  >
                    <img
                      className="svg"
                      src="assets/img/svg/social/facebook.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="mr-[20px] inline-block">
                  <a
                    className="text-white"
                    href="https://x.com/ashutosh25_03"
                    target="_blank"
                  >
                    <img
                      className="svg"
                      src="assets/img/svg/social/twitter.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="mr-[20px] inline-block">
                  <a
                    className="text-white"
                    href="https://www.instagram.com/ashutosh_official_25/"
                    target="_blank"
                  >
                    <img
                      className="svg"
                      src="assets/img/svg/social/instagram.svg"
                      alt=""
                    />
                  </a>
                </li>

                {/* If you want to change or add any svg icons you can download here for free www.flaticon.com */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
