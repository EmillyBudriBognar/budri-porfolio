import React, { useState } from "react";
import Head from "next/head";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Budri</title>
        <meta
          name="description"
          content="Página inicial do portfólio profissional de Budri, especialista em front-end, mobile e UX design."
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
        <main className="flex flex-col items-center justify-center gap-16 p-8 sm:p-20">
          
        </main>

        {/* Footer */}
        
      </div>
    </>
  );
}
