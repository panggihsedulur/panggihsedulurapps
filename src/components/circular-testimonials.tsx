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
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);
  const handlePrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsLength) % testimonialsLength,
    );
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
                  {testi.quote.map((paragraph, paragraphIndex) => (
                    <span
                      key={paragraphIndex}
                      style={{ display: "block", marginBottom: "1rem" }}
                    >
                      {paragraph}
                    </span>
                  ))}
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
                  <motion.p
                    className="quote"
                    style={{ color: colorTestimony, fontSize: fontSizeQuote }}
                  >
                    {activeTestimonial.quote.map(
                      (paragraph, paragraphIndex) => (
                        <span
                          key={paragraphIndex}
                          style={{ display: "block", marginBottom: "1rem" }}
                        >
                          {paragraph.split(" ").map((word, i) => (
                            <motion.span
                              key={`${paragraphIndex}-${i}`}
                              initial={{
                                filter: "blur(10px)",
                                opacity: 0,
                                y: 5,
                              }}
                              animate={{
                                filter: "blur(0px)",
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.22,
                                ease: "easeInOut",
                                delay: 0.025 * i,
                              }}
                              style={{ display: "inline-block" }}
                            >
                              {word}&nbsp;
                            </motion.span>
                          ))}
                        </span>
                      ),
                    )}
                  </motion.p>
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
      "Selamat datang di keluarga besar Panggih Sedulur 2026! Sebagai mahasiswa, perjalanan kita di kampus tentu tidak hanya sebatas ruang kelas dan tugas akademik. Oleh karena itu, kami menghadirkan Panggih Sedulur sebagai ruang kebersamaan yang hangat dan inklusif untuk saling mengenal, berbagi cerita, serta membangun jejaring yang luas. Harapan kami, melalui wadah ini, Anda bisa merasakan langsung suasana yang ramah, guyub, dan penuh semangat gotong royong di setiap pertemuan, sekaligus menemukan keluarga baru yang akan senantiasa mendukung langkah adaptasi dan eksplorasi Anda di lingkungan kampus tercinta ini.",
      "Lebih dari sekadar ajang pengenalan, melalui setiap rangkaian kegiatan di sini, kami memiliki komitmen kuat untuk menumbuhkan rasa bangga dan kepedulian yang mendalam terhadap komunitas. Panggih Sedulur dirancang untuk memperluas kesempatan kolaborasi tanpa batas lintas UKM dan Paguyuban Daerah, menyatukan berbagai minat dan bakat menjadi sebuah harmoni. Kami mengucapkan terima kasih yang sebesar-besarnya karena Anda telah bersedia menjadi bagian penting dari perjalanan sejarah ini. Mari kita melangkah bersama, tumbuh beriringan, dan menghasilkan karya-karya nyata demi mewujudkan lingkungan kampus UNSOED yang inklusif, prestatif, dan memberikan dampak positif bagi masyarakat luas.",
    ],
    name: "Azza Febra Pramudika",
    designation: "Presiden BEM UNSOED 2026",
    src: "./azza.webp",
  },
  {
    quote: [
      "Kementerian Dalam Negeri BEM UNSOED percaya bahwa setiap mahasiswa memiliki potensi, minat, dan bakat yang luar biasa besar untuk terus dikembangkan dan diwujudkan dalam bentuk karya nyata. Memahami hal tersebut, Panggih Sedulur hadir dan diinisiasi sebagai sebuah 'rumah' bersama yang aman dan suportif bagi kita semua. Di rumah inilah kita bisa saling mendukung kreativitas, memberikan ruang eksplorasi dan pembelajaran yang seluas-luasnya, sehingga setiap ide brilian—sekecil apa pun itu—dapat dipupuk dan bertumbuh subur menjadi sebuah aksi nyata yang membawa manfaat bagi banyak orang.",
      "Untuk mewujudkan visi tersebut, mari kita bersama-sama menjaga nilai-nilai kebersamaan dan persaudaraan ini dengan senantiasa mengedepankan rasa saling menghargai. Mari perkuat kolaborasi antarmahasiswa, menjaga iklim komunikasi yang sehat dan konstruktif, serta selalu membuka pintu lebar-lebar bagi lahirnya inovasi dan inisiatif baru. Kami sangat berharap bahwa partisipasi aktif dan kehadiran Anda di sini tidak hanya sekadar menggugurkan kewajiban, tetapi juga mampu membawa inspirasi baru, menebarkan energi positif ke sekitar, serta mengobarkan semangat pengabdian dan pelayanan yang tulus untuk memajukan komunitas kampus kita.",
    ],
    name: "Rosmay Diana",
    designation: "Menteri Dalam Negeri BEM UNSOED 2026",
    src: "./rosmay_diana.webp",
  },
  {
    quote: [
      "Halo, Sedulur semua! Mewakili seluruh panitia, saya ingin menyampaikan rasa terima kasih yang tak terhingga atas dukungan dan antusiasme Anda untuk Panggih Sedulur 2026 di setiap langkah persiapan hingga pelaksanaannya. Perjalanan dan kebersamaan kita ini sejak awal dibangun dan dilandasi oleh semangat kekeluargaan untuk saling menolong, merangkul, dan menjaga erat tali silaturahmi. Misi utama kami adalah memastikan bahwa setiap mahasiswa baru maupun mahasiswa aktif di UNSOED merasa diterima dengan tangan terbuka, memiliki 'tempat berpulang', dan menemukan ruang yang tepat untuk bertumbuh sesuai dengan passion mereka masing-masing.",
      "Sebagai pelaksana, kami telah merancang serangkaian program dengan penuh pertimbangan dan harapan agar setiap kegiatan yang disajikan dapat memberikan manfaat yang nyata dan tepat sasaran. Tidak hanya berfokus pada ranah pengembangan hardskill dan softskill individu, tetapi juga menyentuh aspek sosial melalui pengabdian kepada masyarakat sekitar. Perjalanan ini baru saja dimulai. Oleh karena itu, ayo kita terus bergandengan tangan, satukan visi dan misi demi menciptakan kebaikan bersama, dan mari ukir cerita perjalanan kolaborasi yang jauh lebih kuat, seru, dan tak terlupakan di Panggih Sedulur tahun ini!",
    ],
    name: "Fada",
    designation: "Project Officer Panggih Sedulur 2026",
    src: "./FAADA_FITRAZAKY.webp",
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
