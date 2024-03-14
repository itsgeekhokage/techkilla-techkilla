/** @format */

import styles from "./whatWeDo.module.css";
// import "swiper/css/pagination";
import LogoSlider from "./LogoSlider/LogoSlider";
import { whatWeDoArr } from "../../../data/home/WhatWeDo";

export default function WhatWeDo() {

  return (
    <section className={styles.WhatWeDo}>
      <div className={styles.bgImage}></div>
      <main>
        {/* logo slider */}
        <LogoSlider />

        {/* what we do */}
        <div className={styles.WhatWeDoContainer}>
          <h2 className={styles.heading}>
            We create <br /> bespoke experiences
          </h2>
          <div className={styles.parent}>
            {whatWeDoArr?.map((item, index) => (
              <div
                key={index}
                className={styles.singleCard}>
                <div className={styles.imgContainer}>
                  <img
                    src={item.img}
                    alt="what we do"
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.contentHeading}>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
