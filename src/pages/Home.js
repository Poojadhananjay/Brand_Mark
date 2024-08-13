import React from "react";

import Carousel from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import slideImg1 from "../assets/images/Activeunlock.png";
import slideImg2 from "../assets/images/Angulo-ANcho.png";
import slideImg3 from "../assets/images/Chonixlogo.png";
import slideImg4 from "../assets/images/Conde-Hair.png";
import slideImg5 from "../assets/images/Ichtar-4.png";
import slideImg6 from "../assets/images/Okkokodesign.png";
import image1 from "../assets/images/Meraki_Portfolio_Image-2.webp";
import saas from "../assets/images/LD-Saas.gif";
import settings from "../assets/images/settings.gif";
import montesoori from "../assets/images/montesoori.jpeg";
import newsok from "../assets/images/newsok.webp";
import you from "../assets/images/you.png";
import know from "../assets/images/badges-KNOW-updated-3.webp";
import aese from "../assets/images/aese.jpg";
import brands from "../assets/images/brands-greenseasons-landscaping_orig.png";
import Izzys from "../assets/images/Izzys-Logo-Fond-Rose.webp";
import oip1 from "../assets/images/OIP (1).jpeg";
import oip from "../assets/images/OIP.jpeg";
import cult from "../assets/images/cult.jpeg";
import monk from "../assets/images/monk.png";
import flowery from "../assets/images/flowly.png";
import blob from "../assets/images/blob.jpeg";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const Home = () => (
  <div>
    <section style={{ backgroundColor: "rgb(252 212 105)" }}>
      <div class="container container-md container-lg">
        <div class="row">
          <div class="col-md-6 col-sm-12 ">
            <div class="headings">
              <h1>Create a unique, professional </h1>
              <h1>logo for your business</h1>
              <div class="para">
                <p>
                  Kickstart your brand with business card designs, social media
                  graphics, app icons, letter heads and more
                </p>
              </div>

              <button type="button" class="btn  mybtn">
                Create my logo
              </button>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </section>

    <section className="light-gray">
      <div className="container">
        <div className="row">
          <div class="col-md-12 col-sm-6 col-lg-12">
            <div class="img-slide d-flex flex-row mb-3">
              <div className="two-pair p-2">
                <img src={slideImg1}></img>
                <img src={slideImg2}></img>
              </div>
              <div className="two-pair p-2">
                <img src={slideImg3}></img>
                <img src={slideImg4}></img>
              </div>
              <div className="two-pair p-2">
                <img src={slideImg5}></img>
                <img src={slideImg6}></img>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div class="img-for-sec">
              <img
                src={image1}
                style={{ width: "315px", height: "315px" }}
              ></img>
            </div>
          </div>

          <div className="col-md-6">
            <div class="bfr-head ">
              <div class="brf-head-bg"></div>

              <div className="bft-par">
                <p>
                  Kickstart your business with thousands of
                  <br />{" "}
                  <span
                    style={{ color: "rgba(41, 46, 52, .5)", fontWeight: "500" }}
                  >
                    ready-to-use
                  </span>{" "}
                  design assets.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 my-uord-flex">
                <div className="unord-lst">
                  <ul>
                    <li>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          style={{
                            display: "inline",
                            width: "20px",
                            marginRight: "5px",
                          }}
                        >
                          <path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />{" "}
                        </svg>
                      </span>
                      Logo design files
                    </li>
                    <li>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M512 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z" />
                        </svg>
                      </span>{" "}
                      Business card designs
                    </li>
                    <li>
                      {" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z" />
                        </svg>
                      </span>
                      Letterhead templates
                    </li>
                    <li>
                      {" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm72 208c-13.3 0-24 10.7-24 24l0 104 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 44 0c42 0 76-34 76-76s-34-76-76-76l-68 0zm68 104l-44 0 0-56 44 0c15.5 0 28 12.5 28 28s-12.5 28-28 28z" />
                        </svg>
                      </span>
                      Presentation templates
                    </li>
                  </ul>
                </div>
                <div className="unord-lst">
                  <ul>
                    <li>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
                        </svg>
                      </span>
                      Social profile icons
                    </li>
                    <li>
                      <sapn>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          style={{
                            display: "inline",
                            width: "20px",
                            marginRight: "5px",
                          }}
                        >
                          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                        </svg>
                      </sapn>
                      Animated designs
                    </li>
                    <li>
                      {" "}
                      <sapn>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          style={{
                            display: "inline",
                            width: "20px",
                            marginRight: "5px",
                          }}
                        >
                          <path d="M500.3 7.3C507.7 13.3 512 22.4 512 32l0 144c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48l0-57L352 90.2 352 208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48l0-96c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM74.7 304l11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2l61.7 0c10.7 0 20.7 5.3 26.6 14.2L213.3 304l26.7 0c26.5 0 48 21.5 48 48l0 112c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 352c0-26.5 21.5-48 48-48l26.7 0zM192 408a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM478.7 278.3L440.3 368l55.7 0c6.7 0 12.6 4.1 15 10.4s.6 13.3-4.4 17.7l-128 112c-5.6 4.9-13.9 5.3-19.9 .9s-8.2-12.4-5.3-19.2L391.7 400 336 400c-6.7 0-12.6-4.1-15-10.4s-.6-13.3 4.4-17.7l128-112c5.6-4.9 13.9-5.3 19.9-.9s8.2 12.4 5.3 19.2zm-339-59.2c-6.5 6.5-17 6.5-23 0L19.9 119.2c-28-29-26.5-76.9 5-103.9c27-23.5 68.4-19 93.4 6.5l10 10.5 9.5-10.5c25-25.5 65.9-30 93.9-6.5c31 27 32.5 74.9 4.5 103.9l-96.4 99.9z" />
                        </svg>
                      </sapn>
                      Social media designs
                    </li>
                    <li>
                      {" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          style={{
                            display: "inline",
                            width: "20px",
                            marginRight: "5px",
                          }}
                        >
                          <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z" />
                        </svg>
                      </span>
                      Brand guide
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div className="col-md-6">
                <div class="new-btn">
                  <button>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        style={{
                          display: "inline",
                          width: "20px",
                          marginRight: "5px",
                        }}
                      >
                        <path d="M352 224l-46.5 0c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8l-2.5 0c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144l80 0 0-61.3C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2l-3.7 0c-17.7 0-32-14.3-32-32l0-64zM80 96c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 112C0 67.8 35.8 32 80 32l48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 96z" />
                      </svg>
                    </span>
                    See example assets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mrg-row">
          <div class="col-md-6">
            <div class="bfr-head-2">
              <div class="brf-head-bg-cl"></div>

              <div className="bft-par">
                <p>
                  We’ll personally help you customize your logo with the
                  purchase of any package.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="saas-img">
              <img src={saas}></img>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="export">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="exp-head-1">
              <h3>Instantly customize and export</h3>
              <p>Right in your browser, no designer or software needed</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="exp-txt-head">
              <h4>Export to all </h4>
              <h4>major formats</h4>
              <p>Including SVG, EPS, PNG</p>
              <p>and PDF</p>
            </div>
            <div class="exp-txt-head-2">
              <h4>Easily edit </h4>
              <h4>and customize</h4>
              <p>Double click to edit text</p>
            </div>
          </div>
          <div class="col-md-6 my-index">
            <div class="exp-img">
              <img src={settings}></img>
            </div>
          </div>
          <div class="col-md-3">
            <div class="exp-txt-head">
              <h4>Export to all </h4>
              <h4>major formats</h4>
              <p>Including SVG, EPS, PNG</p>
              <p>and PDF</p>
            </div>
            <div class="exp-txt-head-2">
              <h4>Easily edit </h4>
              <h4>and customize</h4>
              <p>Double click to edit text</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="credencials">
      <div class="container ">
        <div class="row" style={{ paddingTop: "15em" }}>
          <div class="col-md-6">
            <div class="creden-bfr-head-2">
              <div class="creden-brf-head-bg-cl"></div>

              <div className="creden-bft-par">
                <p>
                  See why over 108,704 users have
                  <br />
                  created a logo with Brandmark.io
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 ">
            <div class="imgg" style={{ display: "flex" }}>
              <img src={montesoori}></img>

              <div class="immgg ">
                <img src={you}></img>
                <img src={know}></img>
              </div>
            </div>
          </div>

          <div className="container mt-4">
            <div className="row g-3">
              {/* First Row */}
              <div className="col-md-4">
                <div className="img-container">
                  <img src={monk}></img>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img-container">
                  <img src={oip}></img>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img-container">
                  <img src={oip1}></img>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="row g-3 mt-4">
              <div className="col-md-4">
                <div className="img-container">
                  <img src={aese}></img>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img-container">
                  <img src={blob}></img>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img-container">
                  <img src={brands}></img>
                </div>
              </div>
            </div>

            {/* Third Row */}
            <div className="row g-3 mt-4">
              <div className="col-md-4">
                <div className="img-container">
                  <img src={settings}></img>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img-container">
                  <img src={aese}></img>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img-container">
                  <img src={flowery}></img>
                </div>
              </div>
            </div>

            <div className="image-section">
              <div className="image-wrapper">
                <div className="image-container">
                  <img src={flowery} alt="Image 1" className="image image-1" />
                </div>

                <div className="image-container">
                  <img src={flowery} alt="Image 2" className="image image-2" />
                  <div className="text-content text-2">
                    <h2>No more designer anxiety</h2>
                    <p>Get your logo instantly, not in weeks.</p>
                  </div>
                </div>

                <div className="image-container">
                  <img src={flowery} alt="Image 3" className="image image-3" />
                  <div className="text-content text-3">
                    <h2>Need a tweak to your design?</h2>
                    <p>We’ll do it for you, absolutely free</p>
                  </div>
                </div>

                <div className="image-container">
                  <img src={flowery} alt="Image 4" className="image image-4" />
                  <div className="text-content text-4">
                    <h2>No monthly charges</h2>

                    <p>Pay once, get access to our branding tools forever.</p>
                  </div>
                </div>

                <div className="image-container">
                  <img src={flowery} alt="Image 5" className="image image-5" />
                  <div className="text-content text-5">
                    <h2>Full copyright included</h2>

                    <p>For use in commercial and personal projects</p>
                  </div>
                </div>

                <div className="image-container">
                  <img src={flowery} alt="Image 6" className="image image-6" />
                  <div className="text-content text-6">
                    <h2>Unlimited revisions</h2>

                    <p>Modify your logo at any time, even after purchase</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row myrow">
              <div class="col-md-12 mymd-12">
                <div class="head-para">
                  <h3>Create your unique logo design</h3>
                  <p>generate unlimited logos for free</p>
                </div>

                <div class="own-logo1">
                  <button>Create my logo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section></section>
  </div>
);

export default Home;
