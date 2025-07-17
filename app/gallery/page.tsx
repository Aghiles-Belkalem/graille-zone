"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./gallery.module.css";

const images = [
  "graille z accueil.webp",
  "logo graille zone.jpg",
  "graille zone interieux.webp",
  "graille zone vitrine.webp",
  "graille z 1.webp",
  "graille z 2.webp",
  "graille z 8.webp",
  "graille z 9.webp",
  "graille z 10.webp",
  "graille z 11.webp",
  "graille z 12.webp",
  "graille z4.webp",
  "graille z6.webp",
  "graille zone plat5.webp",
  "plat graille zone.webp",
];

export default function Gallery() {
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section className={styles.gallery}>
        {images.map((img, i) => (
          <button
            key={i}
            className={styles.thumb}
            onClick={() => setModal({ src: `/images/gallery/${img}`, alt: `Image ${i + 1}` })}
            aria-label={`Ouvrir l'image ${i + 1}`}
          >
            <Image
              src={`/images/gallery/${img}`}
              alt={`Graille Zone image ${i + 1}`}
              fill
              sizes="(max-width: 768px) 45vw, (max-width: 1200px) 30vw, 15vw"
              style={{ objectFit: "cover", borderRadius: "12px" }}
              priority={i < 4} // prioritise premières images
            />
          </button>
        ))}
      </section>

      {modal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setModal(null)}
              aria-label="Fermer la modale"
            >
              &times;
            </button>
            <Image
              src={modal.src}
              alt={modal.alt}
              width={900}
              height={600}
              style={{ borderRadius: "12px", objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
