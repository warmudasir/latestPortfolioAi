"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/landing.module.scss";

export default function Header() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setHasScrolled(window.scrollY > 16);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${hasScrolled ? styles.headerScrolled : ""}`}>
            <div className={styles.inner}>
                <div className={styles.brand}>MM</div>
                <nav>
                    <ul className={styles.navList}>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#patents">Publications</a></li>
                        <li><a href="https://www.linkedin.com/in/mudasir-m-a28570200">LinkedIn</a></li>
                        <li><a href="/Mudasir-M-Resume.pdf" download="Mudasir-M-Resume.pdf">Resume</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
