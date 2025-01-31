import React, { useState } from "react";
import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ScrollingWords from "@/components/ScrollingWords";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Budri - Estúdio Criativo</title>
        <meta
          name="description"
          content="A Budri é uma marca especializada em criar soluções digitais que combinam pesquisa sobre a experiência do usuário, design, identidade visual, desenvolvimento mobile e front-end. Focada em oferecer experiências intuitivas e envolventes, a marca transforma ideias em interfaces que unem funcionalidade e estética, sempre alinhadas às necessidades reais de quem interage."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        {/* Navbar */}
        <header>
          <Nav />
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center bg-white justify-center gap-16 p-8 sm:p-20">
          <HeroSection></HeroSection>
          <ScrollingWords></ScrollingWords>
        </main>

        {/* Footer */}
        <Footer></Footer>
      </div>
    </>
  );
}
