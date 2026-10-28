import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { ColorModeProvider } from './context/ColorModeContext';
import { LangProvider } from './context/LangContext';

import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';

import { Hero } from './sections/Hero';
import { Marquee } from './sections/Marquee';
import { Deals } from './sections/Deals';
import { MenuSection } from './sections/MenuSection';
import { DaigSection } from './sections/DaigSection';
import { WhyUs } from './sections/WhyUs';
import { GallerySection } from './sections/GallerySection';
import { ReviewsSection } from './sections/ReviewsSection';
import { ContactSection } from './sections/ContactSection';
import { CtaSection } from './sections/CtaSection';

export function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <ColorModeProvider>
      <LangProvider>
        <CartProvider>
          <div className="min-h-screen bg-white dark:bg-[#141414] text-neutral-900 dark:text-[#FFF8EC] selection:bg-[#E8262B] selection:text-white">
            <Preloader onLoaded={() => setLoaded(true)} />
            <CustomCursor />
            <Navbar />

            <main>
              <Hero />
              <Marquee />
              <Deals />
              <MenuSection />
              <DaigSection />
              <WhyUs />
              <GallerySection />
              <ReviewsSection />
              <ContactSection />
              <CtaSection />
            </main>

            <Footer />
            <FloatingWhatsApp />
            <MobileBottomBar />
            <CartDrawer />
          </div>
        </CartProvider>
      </LangProvider>
    </ColorModeProvider>
  );
}

export default App;
