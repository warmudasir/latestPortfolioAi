import React from "react";
import styles from "../styles/landing.module.scss";

type CardProps = {
    title: string;
    subtitle?: string;
    description?: string;
    tags?: string[];
    link?: string;
};

export default function Card({ title, subtitle, description, tags, link }: CardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{title}</h3>
                {subtitle && <div className={styles.cardSubtitle}>{subtitle}</div>}
            </div>
            {description && <p className={styles.cardDesc}>{description}</p>}
            {link && (
                <a className={styles.cardLink} href={link} target="_blank" rel="noreferrer">
                    View on IEEE Xplore
                </a>
            )}
            {tags && (
                <div className={styles.cardTags}>
                    {tags.map((t) => (
                        <span key={t} className={styles.tag}>
                            {t}
                        </span>
                    ))}
                </div>
            )}
        </article>
    );
}
