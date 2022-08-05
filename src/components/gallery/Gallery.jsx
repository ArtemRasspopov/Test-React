import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GalleryItem } from "./GalleryItem";
import "./gallery.scss";

const progects = [
  {
    title: "Progect name 1",
    subtitle: "subtitle",
  },
  {
    title: "Progect name 2",
    subtitle: "subtitle",
  },
  {
    title: "Progect name 3",
    subtitle: "subtitle",
  },
  {
    title: "Progect name 4",
    subtitle: "subtitle",
  },
];

export default function Gallery({ src, index, columnOffset }) {
  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray(".gallery-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">
      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span className="title">Projects</span>
        </div>
        {progects.map((item, index) => (
          <GalleryItem key={src} {...item} />
        ))}
      </div>
    </section>
  );
}
