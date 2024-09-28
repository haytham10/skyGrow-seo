"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPencilAlt, FaRocket, FaLightbulb } from 'react-icons/fa';

export default function BlogPage() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { 
			opacity: 1,
			transition: { staggerChildren: 0.3 }
		}
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: { 
			y: 0, 
			opacity: 1,
			transition: { type: 'spring', stiffness: 100 }
		}
	};

	return (
		<section className="py-20 bg-navy-900 min-h-screen flex items-center">
			<div className="container mx-auto px-4">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="text-center"
				>
					<motion.h2 
						variants={itemVariants}
						className="text-4xl md:text-5xl font-bold mb-8 text-white"
					>
						Our Blog is Taking Off Soon!
					</motion.h2>
					
					<motion.p 
						variants={itemVariants}
						className="text-xl md:text-2xl mb-12 text-gray-300"
					>
						We're crafting insightful content to skyrocket your SEO knowledge.
					</motion.p>

					<motion.div 
						variants={containerVariants}
						className="flex flex-wrap justify-center gap-8 mb-12"
					>
						{[
							{ icon: FaPencilAlt, text: "Expert Insights" },
							{ icon: FaRocket, text: "Growth Strategies" },
							{ icon: FaLightbulb, text: "SEO Innovations" }
						].map((item, index) => (
							<motion.div 
								key={index}
								variants={itemVariants}
								className="flex flex-col items-center p-6 bg-navy-800 rounded-lg shadow-lg"
							>
								<item.icon className="text-4xl mb-4 text-light-purple" />
								<p className="text-lg font-semibold text-white">{item.text}</p>
							</motion.div>
						))}
					</motion.div>

					<motion.div variants={itemVariants}>
						<Link
							href="./#contact" 
							className="inline-block px-8 py-3 bg-light-purple text-navy-900 font-bold rounded-full hover:bg-medium-purple transition duration-300"
						>
							Get Notified When We Launch
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}