import React from "react";
import Card from "./Card";
import styles from "../styles/landing.module.scss";

export default function Experience() {
    return (
        <section className={styles.section} id="experience">
            <h2 className={styles.sectionHeading}>Current Work & Experience</h2>
            <div className={styles.cardsGrid}>
                <Card
                    title="Acme Labs"
                    subtitle="Senior Engineer — 2024 - Present"
                    description="Leading backend initiatives for real-time analytics and observability."
                    tags={["Go", "K8s", "Prometheus"]}
                />
                <Card
                    title="BrightSoft"
                    subtitle="Software Engineer — 2021 - 2024"
                    description="Built scalable APIs and improved platform reliability across services."
                    tags={["Node.js", "Microservices"]}
                />
            </div>
        </section>
    );
}
