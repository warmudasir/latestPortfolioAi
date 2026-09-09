import React from "react";
import Card from "./Card";
import styles from "../styles/landing.module.scss";

export default function Projects() {
    return (
        <section className={styles.section} id="projects">
            <h2 className={styles.sectionHeading}>Projects & Publications</h2>
            <div className={styles.cardsGrid}>
                <Card
                    title="Smart Home Vision"
                    subtitle="Computer Vision / IoT"
                    description="Prototype for automated scene understanding and context-aware device control."
                    tags={["Python", "OpenCV", "Edge"]}
                />
                <Card
                    title="Realtime Collaboration"
                    subtitle="WebRTC / UX"
                    description="Low-latency collaborative editor with presence and conflict-free merging."
                    tags={["TypeScript", "WebRTC", "Next.js"]}
                />
                <Card
                    title="DataOps Pipeline"
                    subtitle="ETL / Automation"
                    description="Robust data ingestion and validation pipeline with monitoring."
                    tags={["Airflow", "SQL", "Kubernetes"]}
                />
            </div>
        </section>
    );
}
