import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Patents from "./components/Patents";
import Experience from "./components/Experience";
import styles from "./styles/landing.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.hero}>
        <h1 className={styles.name}>
          Mohammad
          <span>Mudasir.</span>
        </h1>
        <p className={styles.role}>Software Engineer</p>
        <p className={styles.credential}>AWS Certified Cloud Practitioner</p>
        <p className={styles.summary}>
          Front-end developer building dynamic, responsive, and user-centric
          web applications with React, Next.js, and TypeScript.
        </p>
      </main>
      <Projects />
      <Patents />
      <Experience />
    </div>
  );
}
