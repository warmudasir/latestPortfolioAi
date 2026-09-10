import React from "react";
import Card from "./Card";
import styles from "../styles/landing.module.scss";

export default function Patents() {
    return (
        <section className={styles.section} id="patents">
            <h2 className={styles.sectionHeading}>Patents & Publications</h2>
            <div className={styles.cardsGrid}>
                <Card
                    title="Identification of Fake Products Using Blockchain"
                    subtitle="ICCNT Paper Presentation, IIT Delhi"
                    description="Research on identifying counterfeit products through blockchain-backed authenticity verification."
                    tags={["Blockchain", "Research"]}
                    link="https://ieeexplore.ieee.org/document/10307934"
                />
                <Card
                    title="Web-Based Patient Health Management System with Doctor Recommendations and Medicine Alternatives Using Machine Learning"
                    subtitle="IEEE Xplore"
                    description="Machine learning research combining online doctor recommendations with disease prediction."
                    tags={["Machine Learning", "Healthcare"]}
                    link="https://ieeexplore.ieee.org/document/10649525"
                />
            </div>
        </section>
    );
}
