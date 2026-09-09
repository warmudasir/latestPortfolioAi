import React from "react";
import styles from "../styles/landing.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.brand}>MW</div>
                <nav>
                    <ul className={styles.navList}>
                        <li><a href="#about">about</a></li>
                        <li><a href="#projects">projects</a></li>
                        <li><a href="#connect">connect</a></li>
                        <li><a href="#resume">Resume</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
