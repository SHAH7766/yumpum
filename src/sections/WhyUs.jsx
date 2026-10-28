import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Utensils, Pizza, Clock, MapPin, Building2 } from 'lucide-react';
import { useLang } from '../context/LangContext';

const features = [
  {
    icon: <Flame className="w-8 h-8 text-[#E8262B]" />,
    title: "Fresh BBQ off the Grill",
    desc: "Charcoal-smoked seekh kababs, malai boti, and tikka boti grilled fresh to perfection."
  },
  {
    icon: <Utensils className="w-8 h-8 text-[#FFC929]" />,
    title: "Authentic Karahi",
    desc: "Mutton, beef, and chicken karahi cooked in pure butter and desi spices in wok."
  },
  {
    icon: <Pizza className="w-8 h-8 text-[#E8262B]" />,
    title: "Hot Pizza & Loaded Deals",
    desc: "Wood-fired crusts loaded with triple cheese and unbeatable bundle deals."
  },
  {
    icon: <Clock className="w-8 h-8 text-[#FFC929]" />,
    title: "Open until 3:00 AM",
    desc: "Satisfy your late-night cravings every single day from 11:00 AM to 3:00 AM."
  },
  {
    icon: <Building2 className="w-8 h-8 text-[#E8262B]" />,
    title: "Rooftop Seating",
    desc: "Enjoy your favorite fast food and BBQ under the open sky with family and friends."
  },
  {
    icon: <MapPin className="w-8 h-8 text-[#FFC929]" />,
    title: "2 Locations in Shahdara",
    desc: "Conveniently located at Main Gujranwala Road and Begum Kot Chowk."
  }
];

export const WhyUs = () => {
  const { t } = useLang();

  return (
    <section id="why-us" className="py-20 px-4 lg:px-12 bg-neutral-100 dark:bg-[#16171d]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-1 bg-[#E8262B]/10 text-[#E8262B] px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider">
            <span>{t("The YuM PuM Standard", "یَم پَم کا معیار")}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            {t("Why Choose YuM PuM", "یَم پَم کیوں چنیں")}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto text-sm">
            Legendary taste, lightning-fast delivery, and premium ingredients in Shahdara Lahore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-[#1f2028] p-8 rounded-3xl shadow-xl border border-black/5 dark:border-white/5 space-y-4 flex flex-col justify-between"
            >
              <div className="w-16 h-16 rounded-2xl bg-neutral-100 dark:bg-black/40 flex items-center justify-center shadow-md">
                {feat.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black uppercase">{feat.title}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
