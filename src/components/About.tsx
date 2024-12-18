import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./hoc/SectionWrapper";

// eslint-disable-next-line react-refresh/only-export-components
const ServiceCard = ({
  itemKey,
  index,
  service: { title, icon },
}: {
  itemKey: string;
  index: number;
  service: { title: string; icon: string };
}) => {
  return (
    <Tilt
      clasName="xs:w-[250px] w-full"
      key={itemKey}
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="object-contain w-16 h-16" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js. I'm a quick
        learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>

      <div className="grid grid-cols-2 gap-10 mt-20 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            itemKey={service.title}
            index={index}
            service={service}
            {...service}
          />
        ))}
      </div>
    </>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
