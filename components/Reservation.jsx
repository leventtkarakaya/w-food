"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import ReservationFrom from "./ReservationFrom";

const Reservation = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      viewport={{ once: false, amount: 0.2 }}
      whileInView={"show"}
      className="xl:my-32 xl:h-[1020px] xl:bg-reservation xl:bg-no-repeat xl:flex xl:flex-col xl:justify-end xl:items-end"
      id="reservation"
    >
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        viewport={{ once: false, amount: 0.2 }}
        whileInView={"show"}
        className="bg-black w-full xl:max-w-[868px] min-h-[518px] p-8 md:p-14 "
      >
        <h2 className="text-white mb-9 capitalize">Book a table</h2>
        <ReservationFrom />
      </motion.div>
    </motion.section>
  );
};

export default Reservation;
