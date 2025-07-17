"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

type HeaderProps = {
  onContactClick?: () => void; // Ajout de la prop
};

export default function Header({ onContactClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const nav = document.getElementById("navLinks");
      if (nav && !nav.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/LogoOff Graille zone.png"
            alt="Logo Graille Zone"
            width={100}
            height={100}
          />
        </Link>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>

        <ul
          id="navLinks"
          className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}
        >
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


