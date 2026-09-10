import React from "react";
import Card from "./Card";
import styles from "../styles/landing.module.scss";

export default function Projects() {
    return (
        <section className={styles.section} id="projects">
            <h2 className={styles.sectionHeading}>Projects & Publications</h2>
            <div className={styles.cardsGrid}>
                <Card
                    title="Fake Product Detection Using Blockchain Technology"
                    subtitle="08/2023"
                    description="Built a system to detect counterfeit products by scanning a QR code and verifying authenticity against blockchain records, addressing the rise of counterfeit goods sold through digital marketing channels."
                    tags={["Blockchain", "QR Code"]}
                />
                <Card
                    title="Employee Productivity Detection Using Artificial Intelligence"
                    subtitle="07/2021"
                    description="Developed a system to measure employee productivity in an office setting using Artificial Neural Networks and Convolutional Neural Networks."
                    tags={["Artificial Intelligence", "ANN", "CNN"]}
                />
            </div>
        </section>
    );
}
