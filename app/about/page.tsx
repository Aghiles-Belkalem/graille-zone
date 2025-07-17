"use client";

import { useState } from "react";
import styles from "./about.module.css";
import ContactModal from "@/components/contactModal/contactModal";

export default function AboutPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <h1>Graille Zone — Street Food & Passion</h1>
        <p>
          Située au 4 place du Souvenir à Cestas, Graille Zone est votre spot incontournable pour une street food de qualité : burgers, tacos, cheesesteaks, kebabs… Toujours généreux, frais et faits maison, avec une touche gourmande et conviviale.
        </p>
      </section>

      <section className={styles.values}>
        <div className={styles.card}>
          <h2>🔥 Une ambiance unique</h2>
          <p>
            L’esprit Graille Zone se ressent dès l’entrée : déco inspirée, accueil chaleureux, ambiance détendue — une expérience complète.
          </p>
        </div>
        <div className={styles.card}>
          <h2>🍔 Une cuisine généreuse</h2>
          <p>
            Burgers toastés, tacos gratinés, kebabs maison — le goût et la qualité sont notre priorité.
          </p>
        </div>
        <div className={styles.card}>
          <h2>🚀 Des services pensés pour vous</h2>
          <p>
            Livraison rapide, commandes simplifiées, accueil pro — tout est là pour votre confort.
          </p>
        </div>
      </section>

      <section className={styles.contact}>
        <h2>Nous écrire</h2>
        <p>
          Pour toute question, suggestion ou commande spéciale, cliquez ci-dessous :
        </p>
        <button className={styles.ctaBtn} onClick={() => setModalOpen(true)}>
          Ouvrir le formulaire
        </button>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}



