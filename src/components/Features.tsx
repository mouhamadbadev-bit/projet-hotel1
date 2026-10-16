import React from 'react';
import { Sparkles, Utensils, Waves, Clock } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="bg-[#f4f1ea] text-[#0b1311] py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-[#0b1311] text-[#d4af37] rounded-lg">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-1">Chambres de luxe</h4>
            <p className="text-sm text-gray-700">Des chambres spacieuses avec une vue imprenable et tout le confort moderne.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-[#0b1311] text-[#d4af37] rounded-lg">
            <Utensils className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-1">Restaurant gourmet</h4>
            <p className="text-sm text-gray-700">Savourez une cuisine raffinée préparée par nos chefs passionnés.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-[#0b1311] text-[#d4af37] rounded-lg">
            <Waves className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-1">Spa & Bien-être</h4>
            <p className="text-sm text-gray-700">Détendez-vous avec nos soins premium pour une expérience inoubliable.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-[#0b1311] text-[#d4af37] rounded-lg">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-1">Service 24/7</h4>
            <p className="text-sm text-gray-700">Notre équipe est à votre disposition à tout moment pour un service exceptionnel.</p>
          </div>
        </div>
      </div>
    </section>
  );
};