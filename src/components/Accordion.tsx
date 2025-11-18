"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { HiArrowUpRight } from "react-icons/hi2";
import { FiGithub } from "react-icons/fi";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="backdrop-blur-2xl fixed inset-0  grid place-items-center z-100">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className=" flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-200 text-xl"
                    >
                      {active.title}
                    </motion.h3>
                    <div className="flex justify-center md:justify-start gap-3 mt-2 flex-wrap">
                      {active.tech?.map((logo: string, i: number) => (
                        <img
                          key={i}
                          src={logo}
                          alt="tech-logo"
                          className="h-6 w-6 object-contain opacity-90 hover:opacity-100 transition"
                        />
                      ))}
                    </div>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="p-3 text-xl cursor-target bg-white rounded-full text-black"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="cursor-target p-4 flex flex-col hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`} className="relative">
                {card.status && (
                  <span
                    className={`absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-xs font-medium ${
                      card.status === "Completed"
                        ? "bg-green-500/90 text-white"
                        : "bg-yellow-500/90 text-white"
                    }`}
                  >
                    {card.status}
                  </span>
                )}
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <div className="flex justify-center md:justify-start gap-3 mt-2 flex-wrap">
                  {card.tech?.map((logo, i) => (
                    <img
                      key={i}
                      src={logo}
                      alt="tech-logo"
                      className="h-6 w-6 object-contain opacity-90 hover:opacity-100 transition"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "",
    title: "Flicksy",
    src: "/project-1.png",
    ctaText: <FiGithub />,
    status: "Completed",
    ctaLink: "https://github.com/vxnsh1/movie-app",
    tech: ["/react.png", "/javascript.png", "/tailwind.png", "/appwrite.png"],
    content: () => {
      return (
        <p>
          A sleek and responsive movie discovery platform that delivers a
          cinematic experience right in your browser.
          <br /> <br />
          Built with modern frontend architecture, it features lightning-fast
          navigation, beautiful UI transitions, and adaptive layouts for all
          devices.
        </p>
      );
    },
  },
  {
    description: "",
    title: "Vanta",
    src: "/project-2.png",
    ctaText: <HiArrowUpRight />,
    status: "Completed",
    ctaLink: "https://vanta-coral.vercel.app/",
    tech: [
      "/react.png",
      "/javascript.png",
      "/tailwind.png",
      "/gsap.png",
      "react-router.png",
    ],
    content: () => {
      return (
        <p>
          A high-energy, K72-styled animated storefront that captures One Piece fandom with immersive micro-interactions and cinematic product pages.
          <br /> <br />
          This store blends bold, manga-inspired visuals with buttery animations and a conversion-first layout. Customers get a playful, collectible-focused shopping experience with hero animations.
        </p>
      );
    },
  },

  {
    description: "",
    title: "Vaultica",
    src: "/project-3.png",
    ctaText: <FiGithub />,
    status: "In Progress",
    ctaLink: "https://github.com/vxnsh1/vaultica",
    tech: [
      "/nextjs.png",
      "/javascript.png",
      "/react.png",
      "/tailwind.png",
      "prisma.png",
      "gemini.png",
    ],
    content: () => {
      return (
        <p>
          A next-gen AI-powered career mentor that delivers personalized interview prep, resume feedback, and skill-growth guidance — all in one smart dashboard.
          <br /> <br />
          This project simulates a real-world SaaS platform with complex backend logic, authentication, and scalable architecture. It uses Gemini AI to generate human-like mentorship advice.
        </p>
      );
    },
  },
  {
    description: "",
    title: "AnimeVerse",
    src: "/project-4.png",
    status: "Completed",
    ctaText: <FiGithub />,
    ctaLink: "https://github.com/vxnsh1/anime-website",
    tech: ["/html.png", "css.png", "javascript.png"],
    content: () => {
      return (
        <p>
          A nostalgic static website built during my early days of coding — a love letter to anime culture and the spark that started my web-dev journey.
          <br /> <br />
          AnimeVerse is a simple yet expressive static site that captures the essence of anime fandom. Built entirely with HTML, CSS, and vanilla JavaScript back in 2022, it serves as a time capsule of my beginner creativity — highlighting core layout fundamentals.
        </p>
      );
    },
  },
];
