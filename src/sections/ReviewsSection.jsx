import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, ExternalLink } from 'lucide-react';
import { reviewsList, siteInfo } from '../data/siteData';
import { useLang } from '../context/LangContext';

export const ReviewsSection = () => {
  const { t } = useLang();

  return (
    <section id="reviews" className="py-20 px-4 lg:px-12 bg-neutral-100 dark:bg-[#16171d]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-white/5 px-4 py-1.5 rounded-full border border-black/5 dark:border-white/5">
            <div className="flex text-[#FFC929]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold">{siteInfo.googleRating} ★ · {siteInfo.googleReviewsCount} Google Reviews</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            {t("Customer Reviews", "صارفین کی آراء")}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto text-sm">
            What food lovers across Shahdara and Lahore say about our BBQ, pizza, and service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reviewsList.map((rev) => (
            <motion.div
              key={rev.id}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-[#1f2028] p-8 rounded-3xl shadow-xl border border-black/5 dark:border-white/5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#FFC929]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">{rev.date}</span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-black text-sm">{rev.author}</h4>
                  <span className="text-[10px] uppercase font-mono text-[#E8262B]">{rev.source}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="text-center">
          <a
            href={siteInfo.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white dark:bg-[#1f2028] hover:bg-neutral-50 px-8 py-4 rounded-2xl font-bold shadow-xl border border-black/10 dark:border-white/10 transition"
          >
            <span>Write a Review on Google</span>
            <ExternalLink className="w-4 h-4 text-[#E8262B]" />
          </a>
        </div>
      </div>
    </section>
  );
};
