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
