"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string[];
  name: string;
  designation: string;
  src: string;
  previewLimit?: number;
}
interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return (
    minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
  );
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  // Color & font config
  const colorName = colors.name ?? "#000";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorTestimony = colors.testimony ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isExpanded, setIsExpanded] = useState(false);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials],
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current)
        clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [activeIndex, testimonialsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    setIsExpanded(false);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);
  const handlePrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsLength) % testimonialsLength,
    );
    setIsExpanded(false);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const offset =
      (index - activeIndex + testimonialsLength) % testimonialsLength;
    // const zIndex = testimonialsLength - Math.abs(offset);
    const isActive = index === activeIndex;
    const isLeft =
      (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-grid">
        {/* Images */}
        <div className="image-container" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              className="testimonial-image"
              data-index={index}
              style={getImageStyle(index)}
            />
          ))}
        </div>
        {/* Content */}
        <div className="testimonial-content">
          <div className="quote-wrapper">
            {testimonials.map((testi, idx) => (
              <div
                key={`invisible-${idx}`}
                className="quote-content-invisible"
                aria-hidden="true"
              >
                <h3 className="name" style={{ fontSize: fontSizeName }}>
                  {testi.name}
                </h3>
                <p
                  className="designation"
                  style={{ fontSize: fontSizeDesignation }}
                >
                  {testi.designation}
                </p>
                <div className="quote" style={{ fontSize: fontSizeQuote }}>
                  {testi.quote
                    .slice(0, testi.previewLimit || 4)
                    .map((paragraph, paragraphIndex) => (
                      <span
                        key={paragraphIndex}
                        style={{ display: "block", marginBottom: "1rem" }}
                      >
                        {paragraph}
                      </span>
                    ))}
                  {testi.quote.length > (testi.previewLimit || 4) && (
                    <span
                      style={{
                        display: "block",
                        marginBottom: "1rem",
                        color: "transparent",
                      }}
                    >
                      Selengkapnya
                    </span>
                  )}
                </div>
              </div>
            ))}

            <div className="quote-content-visible">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={quoteVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h3
                    className="name"
                    style={{ color: colorName, fontSize: fontSizeName }}
                  >
                    {activeTestimonial.name}
                  </h3>
                  <p
                    className="designation"
                    style={{
                      color: colorDesignation,
                      fontSize: fontSizeDesignation,
                    }}
                  >
                    {activeTestimonial.designation}
                  </p>
                  <div
                    className="quote"
                    style={{ color: colorTestimony, fontSize: fontSizeQuote }}
                  >
                    {(isExpanded
                      ? activeTestimonial.quote
                      : activeTestimonial.quote.slice(
                          0,
                          activeTestimonial.previewLimit || 4,
                        )
                    ).map((paragraph, paragraphIndex) => (
                      <span
                        key={paragraphIndex}
                        style={{ display: "block", marginBottom: "1rem" }}
                      >
                        {paragraph}
                        {!isExpanded &&
                          paragraphIndex ===
                            (activeTestimonial.previewLimit || 4) - 1 &&
                          activeTestimonial.quote.length >
                            (activeTestimonial.previewLimit || 4) &&
                          "..."}
                      </span>
                    ))}
                    {activeTestimonial.quote.length >
                      (activeTestimonial.previewLimit || 4) && (
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        style={{
                          background: "none",
                          border: "none",
                          padding: 0,
                          color: "#3A7989",
                          fontWeight: "bold",
                          cursor: "pointer",
                          fontSize: "0.9em",
                          textDecoration: "underline",
                        }}
                      >
                        {isExpanded ? "Tutup" : "Selengkapnya"}
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="arrow-buttons">
            <button
              className="arrow-button prev-button"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous testimonial"
            >
              <FaArrowLeft size={28} color={colorArrowFg} />
            </button>
            <button
              className="arrow-button next-button"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next testimonial"
            >
              <FaArrowRight size={28} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .testimonial-container {
          width: 100%;
          max-width: 80rem;
          padding: 2rem;
        }
        .testimonial-grid {
          display: grid;
          gap: 6rem;
          align-items: center;
        }
        .image-container {
          position: relative;
          width: 100%;
          max-width: 18rem;
          aspect-ratio: 3 / 4;
          perspective: 1000px;
        }
        .testimonial-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .quote-wrapper {
          display: grid;
        }
        .quote-content-invisible,
        .quote-content-visible {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }
        .quote-content-invisible {
          visibility: hidden;
          pointer-events: none;
          user-select: none;
        }
        .name {
          font-weight: bold;
          margin-bottom: 0.25rem;
        }
        .designation {
          margin-bottom: 2rem;
        }
        .quote {
          line-height: 1.75;
        }
        .arrow-buttons {
          display: flex;
          gap: 1.5rem;
          padding-top: 3rem;
        }
        .arrow-button {
          width: 2.7rem;
          height: 2.7rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s;
          border: none;
        }
        .word {
          display: inline-block;
        }
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: minmax(240px, 18rem) minmax(0, 1fr);
          }
          .arrow-buttons {
            padding-top: 0;
          }
        }
        @media (max-width: 767px) {
          .testimonial-container {
            padding: 1rem;
          }
          .image-container {
            max-width: 100%;
            aspect-ratio: 3 / 4;
          }
          .testimonial-content {
            align-items: flex-start;
          }
          .designation {
            margin-bottom: 1.5rem;
          }
          .arrow-buttons {
            order: -1;
            padding-top: 0;
            padding-bottom: 1.5rem;
          }
          .quote {
            padding-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularTestimonials;

const testimonials = [
  {
    quote: [
      "Menemukan Ruang, Menemukan Kawan, Menemukan Jalan Perjuangan.",
      "Selamat datang di Panggih Sedulur.",
      "Di Universitas Jenderal Soedirman, menjadi mahasiswa bukan sekadar tentang datang ke ruang kelas, mengejar nilai, lalu menunggu hari wisuda. Menjadi mahasiswa adalah tentang menemukan siapa diri kita, dengan siapa kita bertumbuh, dan untuk apa ilmu yang kita miliki kelak digunakan.",
      "Karena itu, Panggih Sedulur hadir bukan sekadar sebagai etalase Unit Kegiatan Mahasiswa dan Paguyuban Mahasiswa Daerah. Panggih sedulur adalah ruang perjumpaan, tempat mahasiswa menemukan gagasan, kegelisahan, keberanian, dan mungkin juga jalan hidupnya.",
      "Kepada seluruh mahasiswa universitas Jenderal Soedirman, jangan datang ke kampus hanya untuk menjadi penonton. Datanglah untuk mengambil peran.",
      "Temukan ruang yang membuatmu berani berbicara. Temukan platform yang membuatmu belajar bekerja bersama. Temukan organisasi yang mengajarkanmu bertanggung jawab. Temukan kawan yang membuatmu tumbuh, bahkan pada saat kalian berbeda pandangan.",
      "Masuklah ke sebuah ruang karena kamu ingin bertumbuh dan memberi arti.",
      "Semoga di Panggih Sedulur hari ini kalian bukan hanya menemukan sebuah UKM. Bisa jadi kamu menemukan paguyuban yang terasa seperti rumah. Tapi bukan tidak mungkin, dari sebuah perjumpaan sederhana inilah kamu menemukan sahabat seperjalanan, dan pilihan yang akan kalian tentukan.",
      "Selamat menemukan ruangmu.",
      "Selamat menemukan kawanmu.",
      "Selamat menemukan jalanmu.",
      "HIDUP MAHASISWA!",
    ],
    name: "Azza Febra Pramudika",
    designation: "Presiden BEM UNSOED 2026",
    src: "./azza.webp",
    previewLimit: 4,
  },
  {
    quote: [
      "Assalamu’alaikum Warahmatullahi Wabarakatuh, Shalom, Om Swastiastu, Namo Buddhaya, Salam Kebajikan, dan Salam Sejahtera Bagi Kita Semua.",
      "Halo, Sedulur!",
      "Universitas Jenderal Soedirman adalah tempat di mana ribuan mimpi bertemu, bertumbuh, dan membentuk identitas. Bagi kalian para mahasiswa Unsoed atau mahasiswa baru, kami memahami bahwa fase ini seringkali mendatangkan rasa bimbang atau disorientasi dalam memahami ekosistem kampus. Oleh karena itu, Kementerian Dalam Negeri BEM Unsoed hadir membawa solusi melalui Panggih Sedulur 2026.",
      "Dalam Panggih Sedulur 2026, kami hadir sebagai wadah penghubung dan ruang perjumpaan bagi teman-teman mahasiswa baru maupun aktif untuk mengenal lebih dekat berbagai Unit Kegiatan Mahasiswa (UKM) dan Paguyuban yang ada di lingkungan Universitas Jenderal Soedirman. Di sinilah tempat di mana minat, bakat, serta ikatan kekeluargaan berpadu, membentuk warna dan energi positif. Kami ingin memastikan setiap mahasiswa mendapatkan kesempatan yang sama, tanpa terkecuali, untuk berekspresi dan berproses secara inklusif di lingkungan yang ramah.",
      "Mari kita jadikan Panggih Sedulur 2026 sebagai titik awal kolaborasi yang memperkuat sinergi dan solidaritas antar lembaga mahasiswa. Selamat menjelajah, selamat menemukan keluarga baru, dan selamat merayakan kebersamaan di Universitas Negeri Jenderal Sudirman!",
      "Hidup Mahasiswa!",
      "Hidup Kesinergian Lembaga Mahasiswa!",
      "Salam hangat,",
      "[Rosmay Diana]",
      "Menteri Dalam Negeri BEM Unsoed 2026",
    ],
    name: "Rosmay Diana",
    designation: "Menteri Dalam Negeri BEM UNSOED 2026",
    src: "./rosmay_diana.webp",
    previewLimit: 3,
  },
  {
    quote: [
      "Assalamu’alaikum Warahmatullahi Wabarakatuh",
      "Halo, Sedulur!",
      "Bagi aku, Panggih Sedulur 2026 adalah tentang menemukan ruang dan orang-orang yang membuat perjalanan di kampus menjadi lebih berarti. Melalui semangat Campus Playground, tahun ini Panggih Sedulur hadir untuk memberikan ruang bagi mahasiswa untuk mengeksplorasi minat dan bakat, mencoba hal baru, serta menemukan orang-orang yang memiliki semangat dan ketertarikan yang sama.",
      "Di balik semua itu, ada begitu banyak orang yang telah memberikan waktu, tenaga, pikiran, dan hatinya untuk perjalanan ini. Untuk seluruh panitia, SC, PH, dan koordinator, terima kasih sudah mau berjalan bersama, saling membantu, dan terus memberikan yang terbaik sampai sejauh ini. Terima kasih khusus untuk May dan Rahes selaku Steering Committee, serta Jean, Nitya, Defani, Sulthon, Rambu, Zharfan, Rissa, Najmi, Alma, Caca, dan Sovia yang telah membersamai dan menjaga setiap bagian dari perjalanan Panggih Sedulur 2026. Terima kasih juga untuk seluruh UKM dan Paguyuban yang telah berpartisipasi, serta sponsor dan media partner yang telah memberikan dukungan untuk Panggih Sedulur tahun ini.",
      "Special thanks untuk Faada Fitrazaky, yang telah menjadi bagian awal dari perjalanan Panggih Sedulur 2026 dan memperkenalkan gagasan Campus Playground yang kemudian kami lanjutkan bersama. Terima kasih untuk setiap pemikiran, waktu, dan jejak yang telah ditinggalkan. Menjadi bagian dari perjalanan yang sudah kamu mulai adalah sebuah kehormatan bagiku. Terima kasih juga untuk Kementerian Dalam Negeri BEM Unsoed dan Ditjen Paguyuban yang telah memberikan ruang dan kepercayaan bagi Panggih Sedulur untuk berjalan hingga hari ini.",
      "Untuk semua yang telah menjadi bagian dari perjalanan ini, terima kasih sudah memilih untuk berjalan bersama. Semoga apa yang kita bangun bersama tidak hanya menjadi sebuah acara, tetapi menjadi cerita baik yang suatu hari nanti akan kita ingat dengan senyuman dan rasa bangga.",
      "Dan untuk setiap orang yang datang ke Panggih Sedulur, semoga kalian menemukan ruang untuk bertumbuh, mencoba, dan menjadi diri sendiri, serta menemukan orang-orang yang membuat perjalanan kalian terasa lebih berarti.",
      "Find Your Playground, Find Your People.",
      "Salam hangat,",
      "[Jenita Eka Lestari]",
      "Project Officer Panggih Sedulur 2026",
    ],
    name: "Jenita Eka Lestari",
    designation: "Project Officer Panggih Sedulur 2026",
    src: "./jeni.webp",
    previewLimit: 3,
  },
];

export const Sambutan = () => (
  <section>
    {/* Light testimonials section */}
    <motion.div
      className="p-6 md:p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative"
      initial={{ opacity: 0, y: 50, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.8 },
      }}
    >
      <div className="max-w-3xl mx-auto text-center  relative z-10">
        <h2
          id="intro-heading"
          aria-label="Apa itu Panggih Sedulur"
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tighter text-center text-gradient mb-2"
        >
          <span
            className="font-edwardian text-5xl sm:text-6xl md:text-7xl mr-1 sm:mr-2"
            aria-hidden="true"
          >
            S
          </span>
          ambutan{" "}
          <span
            className="font-edwardian text-5xl sm:text-6xl md:text-7xl mr-1 sm:mr-2"
            aria-hidden="true"
          >
            P
          </span>
          anggih{" "}
          <span
            className="font-edwardian text-5xl sm:text-6xl md:text-7xl mr-1 sm:mr-2"
            aria-hidden="true"
          >
            S
          </span>
          edulur{" "}
          <span
            className="font-edwardian text-5xl sm:text-6xl md:text-7xl mr-1 sm:mr-2"
            aria-hidden="true"
          >
            2
          </span>
          026
        </h2>{" "}
        <p className="mt-5 text-neutral-500  text-lg leading-relaxed">
          Dengarkan sepatah kata dan inspirasi dari Presiden BEM, Menteri Dalam
          Negeri, serta Project Officer untuk perjalanan kolaborasi kita tahun
          ini.
        </p>
      </div>
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1280px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#0a0a0a",
            designation: "#454545",
            testimony: "#171717",
            arrowBackground: "#141414",
            arrowForeground: "#f1f1f7",
            arrowHoverBackground: "#3A7989",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </motion.div>

    {/* Dark testimonials section */}
  </section>
);
