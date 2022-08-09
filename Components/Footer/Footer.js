import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.upperFooter}>
        <div className={styles.upperFooterSection}>
          <Image
            src={"/assets/icons/call.svg"}
            alt={"Footer Image"}
            width={"200px"}
            height={"150px"}
          />
          <span className={styles.footertext}>24X7 Support</span>
        </div>
        <div className={styles.upperFooterSection}>
          <Image
            src={"/assets/icons/timelapse.svg"}
            alt={"on time delivery"}
            width={"200px"}
            height={"150px"}
          />
          <span className={styles.footertext}>On Time Delivery</span>
        </div>
        <div className={styles.upperFooterSection}>
          <Image
            src={"/assets/icons/support.svg"}
            alt={"Footer Image"}
            width={"200px"}
            height={"150px"}
          />
          <span className={styles.footertext}>6 Months Free Assistance</span>
        </div>
      </div>
      <div className={styles.lowerFooter}>
        <section className={styles.lowerFooterSection}>
          <Image
            src={"/image2.png"}
            width={400}
            height={150}
            alt="Company Logo"
          />
        </section>
        <section className={styles.lowerFooterSection}>B</section>
        <section className={styles.lowerFooterSection}>C</section>
      </div>
    </div>
  );
}
