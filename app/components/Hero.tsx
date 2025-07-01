"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.3} speed={1.5} roughness={0} />
    </Sphere>
  )
}

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white z-10 order-2 lg:order-1"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pranav Balaji
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Computer Science Student & AI Engineer
            </motion.p>

            <motion.p
              className="text-lg mb-8 text-gray-400 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Passionate about machine learning, full-stack development, and creating innovative solutions. Currently
              pursuing my Bachelor's at Purdue University.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.a
                href="https://github.com/pranavbalaji"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/pranav-balaji-b669a0265/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:pranavbalaji9276@gmail.com"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Model - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-96 lg:h-full order-1 lg:order-2"
          >
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <AnimatedSphere />
              <Environment preset="night" />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ArrowDown size={32} className="text-blue-400" />
        </motion.div>
      </div>
    </section>
  )
}
