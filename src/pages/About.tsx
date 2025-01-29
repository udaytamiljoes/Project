import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import fam from '../../public/images/fam.jpg'
import fam1 from '../../public/images/fam1.jpg'
import fam2 from '../../public/images/fam2.jpg'

import fam3 from '../../public/images/fam3.jpg'


const teamMembers = [
  {
    name: "A.P.S. Mohan | விவசாயி",
    role: "Founder & CEO",
    image: fam2,
    bio: "Mohan, a passionate விவசாயி, started this grocery store with a mission to bridge the gap between farmers and families."
  },
  {
    name: "S.M. Parthiban | B.COM(CA)",
    role: "CTO",
    image: fam1,
    bio: "With his expertise in operations and business management, Parthiban ensures the smooth functioning of the store."
  },
  {
    name: "S.M. Udaya | விவசாயி",
    role: "HFP",
    image: fam3,
    bio: "Udaya works directly with local farmers to source fresh, high-quality fruits and vegetables."
  }
];


const About = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <HeroSection />

        
        <LeadershipTeam />
      </div>
    </div>
  );
};

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 0.3], ["100px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className="text-center mb-16 mt-40"
    >
      <h1 style={{marginTop:"-30px"}} className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
        Our Story & Mission
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Committed to providing fresh and sustainable produce, we focus on offering high-quality grocery items to our customers      </p>
    </motion.div>
  );
};

const LeadershipTeam = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  // const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // const x = useTransform(scrollYProgress, [0, 0.3], ["100px", "0px"]);
  // const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);


  
  return (
    <section className="mb-20">
    <motion.div  initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-center mb-12">Our Leadership</motion.div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
        const x = useTransform(scrollYProgress, [0, 0.3], ["-50px", "0px"]);
        const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
         


        return (
          <motion.div
            key={member.name}
            ref={ref}
            style={{ opacity, x }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
  );
};



export default About;
