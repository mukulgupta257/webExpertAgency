import React, { useEffect, useState } from "react";
import styles from "./contact.module.css";

const ContactUs = () => {
  useEffect(() => {
    var map = new ol.Map({
      target: "map",
      layers: [
        new ol.layer.Tile({
          source: new ol.source.Stamen({ layer: "terrain" }),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([77.1388, 28.7471]),
        zoom: 12,
      }),
    });
  }, []);
  const [formfields, setFormFields] = useState({
    ContactName: "",
    PhoneNumber: "",
    EmailId: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "serviceType"
          ? e.target.options[e.target.options.selectedIndex].innerText
          : e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values", formfields);
  };
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.contactFormContainer}>
          <form
            name="ContactForm"
            className={styles.contactForm}
            onSubmit={handleSubmit}
          >
            <div className={styles.formItem}>
              <label htmlFor="ContactName"> Name </label>
              <input
                type="text"
                name="ContactName"
                placeholder="Your Name"
                value={formfields.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="PhoneNumber"> Mobile Number </label>
              <input
                type="tel"
                name="PhoneNumber"
                placeholder="10 digit mobile number"
                value={formfields.PhoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="EmailId"> Email </label>
              <input
                type="email"
                name="EmailId"
                placeholder="Enter Your Email Id"
                value={formfields.EmailId}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="serviceType"> Query </label>
              <select
                name="serviceType"
                placeholder="Select Query Subject"
                onChange={handleChange}
              >
                <option name="" defaultValue={""}>
                  Select Query Subject
                </option>
                <option name="SEO">SEO</option>
                <option name="Website">Website</option>
                <option name="E-commerce Website">E-commerce Website</option>
                <option name="Web Application">Web-application</option>
                <option name="Mobile Application">Mobile-application</option>
              </select>
            </div>
            <div className={styles.formItem} style={{ height: "100px" }}>
              <label htmlFor="message"> Message </label>
              <textarea
                name="message"
                value={formfields.message}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formItem}>
              <input type="submit" value={"Submit Form"} />
            </div>
          </form>
        </div>
        <div className={styles.maps}>
          <div id="map" className={"map"}></div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
