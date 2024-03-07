"use client";

import useSectionInView from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import { FaPaperPlane } from "react-icons/fa6";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form action="" className="flex flex-col mt-10">
        <input
          type="email"
          placeholder="Your email"
          className="h-14 px-4 rounded-lg border border-black/10"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 border border-black/10 h-[3rem] w-[8rem]
           bg-gray-900 text-white rounded-full outline-none transition-all mx-auto
            focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-sm opacity-70 transition-all group-hover:translate-x-2 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
