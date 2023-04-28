"use client"
//import Image from 'next/image'
//import styles from './page.module.css'
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testomonials";

export default function Home() {
  return (
    <>
    <HeroSection />
    <Features />
    <Testimonials />
    </>
  )
}
