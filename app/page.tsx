"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./home.module.css";

import Header from "../components/header/page";
import Footer from "../components/footer/page";
import ContactModal from "../components/contactModal/contactModal";
import Reviews from "@/components/reviews/reviews";

// Import dynamique de la modale d’image (via portail React)
const ImageModal = dynamic(() => import("../components/imageModal/imageModal"), {
  ssr: false,
});

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const openContactModal = () => setContactModalOpen(true);
  const closeContactModal = () => setContactModalOpen(false);

  function openImageModal(src: string, alt: string) {
    setModalImage({ src, alt });
    setIsModalOpen(true);
  }

  function closeImageModal() {
    setIsModalOpen(false);
    setModalImage(null);
  }

  return (
    <>

      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Graille Zone - Street Food à Cestas</h1>
            <p>Des burgers, tacos & sandwiches faits maison, frais et gourmands.</p>
            <button className={styles.btn} onClick={openContactModal}>
              Contacter
            </button>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/graille zone vitrine.webp"
              alt="Façade du restaurant Graille Zone"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </section>

        {/* Menus */}
        <section className={styles.prepSection}>
          <h2>Nos Menus</h2>
          <div className={styles.imageCircleContainer}>
            {[
              {
                src: "/images/graille zone riz menu.jpg",
                alt: "Menu Riz"
              },
              {
                src: "/images/graille zone menu 2.avif",
                alt: "Menu Sandwich"
              },
              {
                src: "/images/graille zone menu 3.avif",
                alt: "Menu Tacos"
              }
            ].map((img, idx) => (
              <div
                key={idx}
                className={styles.imageCircle}
                onClick={() => openImageModal(img.src, img.alt)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={150}
                  height={150}
                  className={styles.roundImage}
                  priority
                />
              </div>
            ))}
          </div>
        </section>
         <Reviews />
      </main>
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />

      {isModalOpen && modalImage && (
        <ImageModal src={modalImage.src} alt={modalImage.alt} onClose={closeImageModal} />
      )}
    </>
  );
}




