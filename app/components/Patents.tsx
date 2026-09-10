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
                />
                <Card
                    title="Online Doctor Recommendation and Disease Prediction Using Machine Learning"
                    subtitle="IEEE Xplore"
                    description="Machine learning research combining online doctor recommendations with disease prediction."
                    tags={["Machine Learning", "Healthcare"]}
                />
            </div>
        </section>
    );
}
