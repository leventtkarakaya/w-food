"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { Button } from "./ui/button";
const About = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center"
    >
      {/* Text */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        viewport={{ once: false, amount: 0.2 }}
        whileInView={"show"}
        className="xl:pl-[110px]"
      >
        <h1 className="mb-9">Let's Talk About W'Food</h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
          voluptate rerum consectetur commodi maiores possimus ducimus quia
          architecto delectus sit quasi nisi, in perferendis vitae voluptatibus
          eaque aspernatur hic quod!
        </p>
        <p className="mb-10">
          posuere ultrices facilisi. Senectus velit lobortis velit arcu varius
          lectus mattis. Dictum aenean duis aliquet Tortor purus egestas urna
          scelerisque vel ornare lectus ultricies. Nisi, eu ut ultricies enim
          enim amet porttitor. Volutpat ac tellus volutpat eget volutpat orci
          enim, ut a. Turpis adipiscing eleifend dignissim viverra euismod
          ultrices.
        </p>
        <Button>Read More</Button>
      </motion.div>
      {/* img */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        viewport={{ once: false, amount: 0.2 }}
        whileInView={"show"}
      >
        <Image
          src="/about/img.png"
          width={705}
          height={771}
          alt=""
          className="hidden xl:flex"
        />
      </motion.div>
    </section>
  );
};

export default About;
