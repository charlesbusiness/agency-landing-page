import { motion } from "framer-motion";

export const MotionBox = motion.div;

export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};
