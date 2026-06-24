"use client";

import { motion } from "framer-motion";

const blobs = [
  { width: "70vw", height: "70vw", color: "#b8a6e7", top: "-20%", left: "-15%",  duration: 18, x: [0, 200, 80, -100, 0],   y: [0, 100, 250, 80, 0],   opacity: 0.75 },
  { width: "60vw", height: "60vw", color: "#faafac", top: "-10%", left: "55%",   duration: 22, x: [0, -150, -80, 100, 0],   y: [0, 150, 300, 100, 0],  opacity: 0.70 },
  { width: "65vw", height: "65vw", color: "#c9b8f0", top: "20%",  left: "20%",   duration: 16, x: [0, 120, -60, 80, 0],     y: [0, -80, 150, -50, 0],  opacity: 0.65 },
  { width: "55vw", height: "55vw", color: "#f7c5c2", top: "40%",  left: "-10%",  duration: 20, x: [0, 180, 60, -120, 0],    y: [0, -100, 200, 50, 0],  opacity: 0.70 },
  { width: "60vw", height: "60vw", color: "#e8d0f7", top: "50%",  left: "55%",   duration: 14, x: [0, -100, 80, -60, 0],    y: [0, -150, -80, 100, 0], opacity: 0.65 },
  { width: "50vw", height: "50vw", color: "#faafac", top: "70%",  left: "25%",   duration: 19, x: [0, -80, 140, -40, 0],    y: [0, -120, -200, -60, 0],opacity: 0.60 },
  { width: "45vw", height: "45vw", color: "#b8a6e7", top: "60%",  left: "60%",   duration: 24, x: [0, 60, -140, 80, 0],     y: [0, -80, -160, -40, 0], opacity: 0.55 },
];

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute blur-[80px] rounded-full"
          style={{
            width: blob.width,
            height: blob.height,
            background: blob.color,
            opacity: blob.opacity,
            top: blob.top,
            left: blob.left,
          }}
          animate={{ x: blob.x, y: blob.y }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
        />
      ))}
    </div>
  );
}