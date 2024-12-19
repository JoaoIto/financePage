import { motion } from "framer-motion";
import React from "react";

export interface FeatureCardProps {
    icon: React.ReactNode; // Icon can be any React component
    title: string;         // Title as a string
    description: string;   // Description as a string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out"
        >
            <div className="text-blue-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
}
