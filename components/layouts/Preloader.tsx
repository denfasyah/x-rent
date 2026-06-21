'use client';

import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // simulated loading progress — ticks up at a random pace until 100%
  useEffect(() => {
    if (progress >= 100) return;

    const increment = Math.floor(Math.random() * 8) + 4;
    const timer = setTimeout(() => {
      setProgress((prev) => Math.min(prev + increment, 100));
    }, 120);

    return () => clearTimeout(timer);
  }, [progress]);

  // once we hit 100%, hold briefly then fade the whole screen out
  useEffect(() => {
    if (progress < 100) return;

    const exitTimer = setTimeout(() => setIsExiting(true), 300);
    const removeTimer = setTimeout(() => setIsVisible(false), 1100);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [progress]);

  // lock page scroll while the preloader is on screen
  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.screen} ${isExiting ? styles.exiting : ''}`}>
      <div className={styles.longfazers} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className={styles.loader} aria-hidden="true">
        <span className={styles.fazerGroup}>
          <span />
          <span />
          <span />
          <span />
        </span>

        <svg
          className={styles.carIcon}
          viewBox="0 0 260 70"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.carPath}
            d="M 8 49 C 8 42, 18 38, 30 37 C 46 35, 58 28, 74 20 C 90 13, 104 9, 120 9 C 136 9, 148 13, 158 22 C 168 31, 182 33, 198 33 C 214 33, 228 35, 240 41 C 246 44, 248 47, 245 50 L 232 50 C 232 39, 223 31, 211 31 C 199 31, 190 39, 190 50 L 88 50 C 88 39, 79 31, 67 31 C 55 31, 46 39, 46 50 L 17 50 C 11 50, 8 49, 8 49 Z"
          />
          <circle className={styles.wheelHub} cx="67" cy="50" r="15" />
          <circle className={styles.wheelRing} cx="67" cy="50" r="15" />
          <circle className={styles.wheelHub} cx="211" cy="50" r="15" />
          <circle className={styles.wheelRing} cx="211" cy="50" r="15" />
        </svg>
      </div>

      <div className={styles.brand}>
        <span className={styles.logo}>
          x<span className={styles.dash} />RENT
        </span>
        <span className={styles.progressText}>Loading {progress}%</span>
      </div>
    </div>
  );
}