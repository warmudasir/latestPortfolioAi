import React from "react";
import Card from "./Card";
import styles from "../styles/landing.module.scss";

export default function Experience() {
    return (
        <section className={styles.section} id="experience">
            <h2 className={styles.sectionHeading}>Current Work & Experience</h2>
            <div className={styles.cardsGrid}>
                <Card
                    title="Caterpillar Inc, Bangalore"
                    subtitle="Front End Developer — 01/2024 - Present"
                    description="Built and maintained responsive web applications using React.js, Next.js, and TypeScript. Collaborated with cross-functional teams to deliver production features on schedule and wrote clean, scalable, reusable front-end code aligned with company style guidelines."
                    tags={["React.js", "Next.js", "TypeScript"]}
                />
                <Card
                    title="Connect Sys Pvt Ltd"
                    subtitle="Full Stack Web Developer — 04/2022 - 08/2022"
                    description="Developed full-stack features spanning front-end interfaces and back-end services, working with relational and non-relational databases to support application functionality."
                    tags={["Full Stack", "SQL", "NoSQL"]}
                />
            </div>
        </section>
    );
}
