import React from "react";

const Footer = () => {
  return (
    <footer class="site-footer">
      <div
        class="footer-top"
        style={{ backgroundImage: "url(images/pattern/pt15.png)" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6 col-5 col-sm-6 footer-col-4 col-12">
              <div class="widget widget_about border-0">
                <h5 class="footer-title">About Us</h5>
                <p class="mm-t5">
                  Contrary to popular belief, Lorem simply random text. It has
                  roots in a piece of classical Latin literature.
                </p>
                <ul class="contact-info-bx">
                  <li>
                    <i class="las la-map-marker"></i>
                    <strong>Address</strong> 20 , New York 10010{" "}
                  </li>
                  <li>
                    <i class="las la-phone-volume"></i>
                    <strong>Phone</strong> 0800-123456
                  </li>
                  <li>
                    <i class="las la-envelope-open"></i>
                    <strong>Email</strong> info@example.com
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-7 col-sm-6 footer-col-4 col-12">
              <div class="widget border-0 recent-posts-entry">
                <h5 class="footer-title">Latest Post</h5>
                <div class="widget-post-bx">
                  <div class="widget-post clearfix">
                    <div class="dlab-post-media">
                      <img
                        src="images/blog/recent-blog/pic1.jpg"
                        width="200"
                        height="143"
                        alt=""
                      />
                    </div>
                    <div class="dlab-post-info">
                      <div class="dlab-post-header">
                        <h6 class="post-title">
                          <a href="blog-single.html">
                            Helping you and your house become better.
                          </a>
                        </h6>
                      </div>
                      <div class="dlab-post-meta">
                        <ul>
                          <li class="post-date">
                            {" "}
                            <i class="la la-clock"></i> <strong>01 June</strong>{" "}
                            <span> 2022</span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="widget-post clearfix">
                    <div class="dlab-post-media">
                      <img
                        src="images/blog/recent-blog/pic2.jpg"
                        width="200"
                        height="160"
                        alt=""
                      />
                    </div>
                    <div class="dlab-post-info">
                      <div class="dlab-post-header">
                        <h6 class="post-title">
                          <a href="blog-single.html">
                            Creating quality urban lifestyles.
                          </a>
                        </h6>
                      </div>
                      <div class="dlab-post-meta">
                        <ul>
                          <li class="post-date">
                            {" "}
                            <i class="la la-clock"></i> <strong>01 June</strong>{" "}
                            <span> 2022</span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-2 col-md-6 col-sm-6 footer-col-4 col-12">
              <div class="widget widget_services border-0">
                <h5 class="footer-title">Usefull Link</h5>
                <ul class="mm-t10">
                  <li>
                    <a href="javascript:void(0);">About Us</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Blog</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Services</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Projects </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 footer-col-4 col-12">
              <div class="widget">
                <h5 class="footer-title">Opening Hours</h5>
                <ul class="thsn-timelist-list mm-t5">
                  <li>
                    <span class="thsn-timelist-li-title">Mon – Tue</span>
                    <span class="thsn-timelist-li-value">10:00 – 18:00</span>
                  </li>
                  <li>
                    <span class="thsn-timelist-li-title">Wed – Thur</span>
                    <span class="thsn-timelist-li-value">10:00 – 17:00</span>
                  </li>
                  <li>
                    <span class="thsn-timelist-li-title">Fri – Sat</span>
                    <span class="thsn-timelist-li-value">10:00 – 12:30</span>
                  </li>
                  <li>
                    <span class="thsn-timelist-li-title">Saturday</span>
                    <span class="thsn-timelist-li-value">10:00 – 12:30</span>
                  </li>
                  <li>
                    <span class="thsn-timelist-li-title">Sunday</span>
                    <span class="thsn-timelist-li-value">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer bottom part --> */}
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 text-left ">
              {" "}
              <span>
                Copyright © 2022{" "}
                <a href="https://dexignzone.com/" target="_blank">
                  DexignZone
                </a>
              </span>{" "}
            </div>
            <div class="col-md-6 col-sm-6 text-right ">
              <div class="widget-link ">
                <ul>
                  <li>
                    <a href="javascript:void(0);"> About</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"> Help Desk</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"> Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
