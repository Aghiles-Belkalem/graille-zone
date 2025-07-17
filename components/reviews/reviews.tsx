import Image from "next/image";
import styles from "./reviews.module.css"; // CSS dédié

const reviews = [
  {
    id: 1,
    name: "Alice Dupont",
    photo: "/images/pexels-olly-774909.jpg",
    rating: 5,
    comment: "Service top, burgers incroyables, je recommande à 100% !",
  },
  {
    id: 2,
    name: "Mohamed Benali",
    photo: "/images/maquette nabil.jpg",
    rating: 5,
    comment: "Ambiance chaleureuse et plats délicieux, un vrai coup de cœur.",
  },
  {
    id: 3,
    name: "Sophie Martin",
    photo: "/images/pexels-kebs-visuals-742415-3992656.jpg",
    rating: 5,
    comment: "Livraison rapide, goût authentique, on revient toujours !",
  },
];

export default function Reviews() {
  return (
    <section className={styles.reviewsSection}>
      <h2>Ce que disent nos clients</h2>
      <div className={styles.reviewsGrid}>
        {reviews.map(({ id, name, photo, rating, comment }) => (
          <div key={id} className={styles.reviewCard}>
            <div className={styles.header}>
              <Image
                src={photo}
                alt={`Photo de ${name}`}
                width={50}
                height={50}
                className={styles.avatar}
              />
              <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.rating} aria-label={`${rating} étoiles`}>
                  {"⭐".repeat(rating)}
                </p>
              </div>
            </div>
            <p className={styles.comment}>"{comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
