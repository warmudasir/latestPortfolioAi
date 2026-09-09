import React from "react";
import Card from "./Card";
import styles from "../styles/landing.module.scss";

export default function Patents() {
    return (
        <section className={styles.section} id="patents">
            <h2 className={styles.sectionHeading}>Patents & Publications</h2>
            <div className={styles.cardsGrid}>
                <Card
                    title="Adaptive Compression"
                    subtitle="Patent Pending"
                    description="Method for adaptive bitrate selection in constrained networks."
                    tags={["Compression", "Networks"]}
                />
                <Card
                    title="Gesture Recognition"
                    subtitle="Journal Publication"
                    description="A novel gesture recognition model optimized for low-power devices."
                    tags={["ML", "Embedded"]}
                />
                <Card
                    title="Secure Sync"
                    subtitle="Conference Paper"
                    description="Protocol for secure and efficient synchronization across peers."
                    tags={["Security", "Distributed"]}
                />
            </div>
        </section>
    );
}
