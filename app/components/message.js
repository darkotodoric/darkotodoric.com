'use client';
import {motion} from "framer-motion";

export default function Message() {
    return (
        <motion.div
            className="w-3/4 my-20 text-6xl text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            Every day is a new opportunity to pursue your dreams and become the best version of yourself
        </motion.div>
    );
}
