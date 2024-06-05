'use client';
import {motion} from "framer-motion";

export default function Box({ href, icon, title, description }) {
    return (
        <motion.a
            href={href} target="_blank" className="w-4/5 md:w-3/5 lg:w-2/5 mt-4 p-4 rounded-md bg-base-200"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-white rounded-md p-3 mr-3 float-left text-primary">
                { icon }
            </div>

            <div className="text-lg font-bold">{ title }</div>
            <div className="text-sm opacity-50">{ description }</div>
        </motion.a>
    );
}
