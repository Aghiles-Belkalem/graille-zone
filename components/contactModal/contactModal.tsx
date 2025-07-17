"use client";

import { useEffect } from "react";
import styles from "../contactModal/contactModal.module.css";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          aria-label="Fermer le formulaire"
          className={styles.closeBtn}
          onClick={onClose}
        >
          ×
        </button>
        <h2 id="contact-modal-title" className={styles.title}>
          Contactez-nous
        </h2>
        <form
          action="https://formsubmit.co/graillezone33@gmail.com"
          method="POST"
          className={styles.form}
        >
          <input type="hidden" name="_captcha" value="false" />
          <label htmlFor="name">Nom</label>
          <input id="name" name="name" type="text" required />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} required />
          <button type="submit" className={styles.submitBtn}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

