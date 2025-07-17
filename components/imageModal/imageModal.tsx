"use client";

import ReactDOM from "react-dom";
import Image from "next/image";
import styles from "./imageModal.module.css";
import { useEffect, useState } from "react";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>✖️</button>

        <div className={styles.imageWrapper}>
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="contain"
            className={styles.image}
            priority
          />
        </div>
      </div>
    </div>,
    document.body
  );
}




