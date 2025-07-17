"use client";

import { useEffect } from "react";

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
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          aria-label="Fermer le formulaire"
          className="modal-close"
          onClick={onClose}
        >
          ×
        </button>
        <h2 id="contact-modal-title" className="modal-title">
          Contactez-nous
        </h2>
        <form
          action="https://formsubmit.co/graillezone33@gmail.com"
          method="POST"
          className="modal-form"
        >
          <input type="hidden" name="_captcha" value="false" />
          <label htmlFor="name">Nom</label>
          <input id="name" name="name" type="text" required />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} required />
          <button type="submit" className="submit-btn">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

