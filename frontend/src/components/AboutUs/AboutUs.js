import React from "react";
import Header from "../Header/Header";
import classes from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <div className={classes.card}>
        <div className={classes.image}>
          <img src="./foods/au5.jpg" />
          <div className={classes.image_button}>
            <button>Learn More</button>
          </div>
        </div>
        <div className={classes.details}>
          <div className={classes.center}>
            <h1>TastyCraft</h1>
            <p>
              Welcome to TastyCraft, where passion for food meets the
              convenience of modern technology. Our journey began with a simple
              yet profound goal – to bring delightful culinary experiences to
              your doorstep. Our team is comprised of food enthusiasts, tech
              aficionados, and customer-centric individuals, all driven by a
              shared commitment to redefine the way you experience dining.
              Whether you're craving a comforting classic or eager to explore
              the latest culinary trends, our platform connects you with a
              diverse range of local restaurants offering delectable dishes.
              Join us on this flavorful adventure as we strive to make your
              dining choices effortless and your taste buds ecstatic. Thank you
              for choosing TatyCraft, where every click brings you closer to a
              world of culinary delights.
            </p>
            <ul>
              <a
                href="https://www.linkedin.com/in/netleap-it-training-and-solutions-6b41b31a0"
                target="_blank"
                aria-label="Instagram"
              >
                <svg
                  width="11"
                  height="21"
                  viewBox="0 0 11 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99781 3.48675H10.9149V0.147753C10.5842 0.102253 9.44669 -0.00012207 8.12194 -0.00012207C5.35781 -0.00012207 3.46431 1.7385 3.46431 4.934V7.87487H0.414062V11.6076H3.46431V20.9999H7.20406V11.6085H10.1309L10.5956 7.87575H7.20319V5.30412C7.20406 4.22525 7.49456 3.48675 8.99781 3.48675Z"
                    fill="#19191B"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/netleap-it-training-and-solutions-6b41b31a0"
                target="_blank"
                aria-label="Facebook"
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 7.98533C9.56465 7.98533 7.98526 9.56472 7.98526 11.5001C7.98526 13.4354 9.56465 15.0148 11.5 15.0148C13.4354 15.0148 15.0147 13.4354 15.0147 11.5001C15.0147 9.56472 13.4354 7.98533 11.5 7.98533ZM22.0416 11.5001C22.0416 10.0446 22.0548 8.60232 21.973 7.14949C21.8913 5.46199 21.5063 3.96433 20.2724 2.73035C19.0357 1.49373 17.5407 1.1114 15.8532 1.02967C14.3978 0.947928 12.9555 0.961111 11.5026 0.961111C10.0472 0.961111 8.60489 0.947928 7.15205 1.02967C5.46455 1.1114 3.9669 1.49637 2.73291 2.73035C1.49629 3.96697 1.11397 5.46199 1.03223 7.14949C0.950491 8.60496 0.963675 10.0472 0.963675 11.5001C0.963675 12.9529 0.950491 14.3978 1.03223 15.8507C1.11397 17.5382 1.49893 19.0358 2.73291 20.2698C3.96953 21.5064 5.46455 21.8887 7.15205 21.9705C8.60752 22.0522 10.0498 22.039 11.5026 22.039C12.9581 22.039 14.4004 22.0522 15.8532 21.9705C17.5407 21.8887 19.0384 21.5038 20.2724 20.2698C21.509 19.0332 21.8913 17.5382 21.973 15.8507C22.0574 14.3978 22.0416 12.9555 22.0416 11.5001ZM11.5 16.908C8.50733 16.908 6.09209 14.4928 6.09209 11.5001C6.09209 8.5074 8.50733 6.09217 11.5 6.09217C14.4927 6.09217 16.9079 8.5074 16.9079 11.5001C16.9079 14.4928 14.4927 16.908 11.5 16.908ZM17.1294 7.13367C16.4307 7.13367 15.8664 6.56941 15.8664 5.87068C15.8664 5.17195 16.4307 4.60769 17.1294 4.60769C17.8281 4.60769 18.3924 5.17195 18.3924 5.87068C18.3926 6.0366 18.3601 6.20093 18.2967 6.35425C18.2333 6.50758 18.1402 6.64689 18.0229 6.76421C17.9056 6.88153 17.7663 6.97456 17.613 7.03795C17.4596 7.10135 17.2953 7.13388 17.1294 7.13367Z"
                    fill="#19191B"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/netleap-it-training-and-solutions-6b41b31a0"
                target="_blank"
                aria-label="Linkedin"
              >
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.17797 0.167969C1.66558 0.167969 0.676758 1.20622 0.676758 2.57085C0.676758 3.90535 1.63613 4.97321 3.11993 4.97321H3.14864C4.6906 4.97321 5.65022 3.90535 5.65022 2.57085C5.62139 1.20622 4.6906 0.167969 3.17797 0.167969Z"
                    fill="#19191B"
                  ></path>
                  <path
                    d="M0.93457 6.87256H5.3559V20.7789H0.93457V6.87256Z"
                    fill="#19191B"
                  ></path>
                  <path
                    d="M16.2155 6.54688C13.8304 6.54688 12.231 8.89001 12.231 8.89001V6.87326H7.80957V20.7796H12.2308V13.0138C12.2308 12.598 12.2596 12.1829 12.3764 11.8856C12.696 11.0555 13.4234 10.1954 14.6449 10.1954C16.2447 10.1954 16.8846 11.4707 16.8846 13.3402V20.7796H21.3056V12.806C21.3056 8.53454 19.1242 6.54688 16.2155 6.54688Z"
                    fill="#19191B"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/netleap-it-training-and-solutions-6b41b31a0"
                target="_blank"
                aria-label="Twitter"
              >
                <svg
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 2.98869C20.2191 3.33125 19.3869 3.55831 18.5194 3.66856C19.4119 3.13569 20.0931 2.29831 20.4133 1.289C19.5812 1.78512 18.6624 2.13556 17.6833 2.33113C16.8932 1.48981 15.7671 0.96875 14.5386 0.96875C12.1551 0.96875 10.2362 2.90338 10.2362 5.27506C10.2362 5.61631 10.2651 5.94444 10.3359 6.25681C6.75675 6.08225 3.58969 4.36681 1.46212 1.75363C1.09069 2.39806 0.872813 3.13569 0.872813 3.92975C0.872813 5.42075 1.64062 6.74244 2.78513 7.50762C2.09344 7.4945 1.41488 7.29369 0.84 6.97738C0.84 6.9905 0.84 7.00756 0.84 7.02462C0.84 9.11675 2.33231 10.8545 4.28925 11.2548C3.93881 11.3506 3.55687 11.3966 3.1605 11.3966C2.88488 11.3966 2.60662 11.3808 2.34544 11.3231C2.90325 13.028 4.48613 14.2814 6.36825 14.3221C4.9035 15.4679 3.04369 16.1583 1.03031 16.1583C0.67725 16.1583 0.338625 16.1426 0 16.0992C1.90706 17.3291 4.16719 18.0312 6.6045 18.0312C14.5267 18.0312 18.858 11.4688 18.858 5.78038C18.858 5.59006 18.8514 5.40631 18.8423 5.22388C19.6967 4.6175 20.4146 3.86019 21 2.98869Z"
                    fill="#19191B"
                  ></path>
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
