import React, { useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { RoomsSection } from './components/RoomsSection';
import { SpecialOffer } from './components/SpecialOffer';
import { GalleryPreview } from './components/GalleryPreview';
import { Footer } from './components/Footer';
import { Send } from 'lucide-react';

export default function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const roomsRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const offersRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const reservationRef = useRef<HTMLDivElement | null>(null);

  const [selectedRoom, setSelectedRoom] = useState('Chambre Deluxe');
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const refs: { [key: string]: React.RefObject<HTMLElement | null> } = {
      home: homeRef,
      rooms: roomsRef,
      services: servicesRef,
      offers: offersRef,
      gallery: galleryRef,
      about: aboutRef,
      contact: contactRef,
      reservation: reservationRef,
    };
    refs[id]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRoomSelect = (roomName: string) => {
    setSelectedRoom(roomName);
    scrollToSection('reservation');
  };

  return (
    <div className="min-h-screen bg-[#0b1311] text-[#f4f1ea] font-sans selection:bg-[#d4af37] selection:text-black">
      
      {/* Navbar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Hero */}
      <div ref={homeRef}>
        <Hero onExplore={() => scrollToSection('rooms')} onReserve={() => scrollToSection('reservation')} />
      </div>

      {/* Features */}
      <div ref={servicesRef}>
        <Features />
      </div>

      {/* Rooms Section */}
      <div ref={roomsRef}>
        <RoomsSection onSelectRoom={handleRoomSelect} />
      </div>

      {/* Special Offer */}
      <div ref={offersRef}>
        <SpecialOffer onReserve={() => scrollToSection('reservation')} onExplore={() => scrollToSection('rooms')} />
      </div>

      {/* Gallery Preview */}
      <div ref={galleryRef}>
        <GalleryPreview />
      </div>

      {/* About / Philosophy Section */}
      <section ref={aboutRef} className="py-16 px-6 lg:px-16 bg-[#121c19]/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase block mb-2">À PROPOS DE SERENITY</span>
          <h2 className="text-3xl font-serif font-bold mb-6">Notre Philosophie</h2>
          <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-6">
            Serenity Hotel & Resort est né de la vision d'offrir un sanctuaire de luxe absolu et de sérénité au bord de l'océan. Chaque détail de notre établissement a été pensé pour anticiper vos besoins, vous offrir un service sur-mesure et transformer chaque instant de votre séjour en un souvenir mémorable.
          </p>
        </div>
      </section>

      {/* Formulaire de Réservation & Contact (Formspree) */}
      <section ref={reservationRef} className="py-20 px-6 lg:px-16 bg-[#0b1311]">
        <div className="max-w-3xl mx-auto bg-[#121c19] border border-[#d4af37]/40 rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase block mb-2">FORMULAIRE DE CONTACT & RÉSERVATION</span>
            <h2 className="text-3xl font-serif font-bold">Réservez votre séjour dès maintenant</h2>
            <p className="text-gray-400 text-sm mt-2">Remplissez le formulaire ci-dessous. Nous vous répondrons instantanément pour confirmer votre réservation.</p>
          </div>

          <form 
            action="https://formspree.io/f/YOUR_FORMSPREE_ID" 
            method="POST"
            onSubmit={() => {
              setFormStatus("Votre demande de réservation a bien été envoyée ! Nous vous contacterons rapidement.");
            }}
            className="space-y-6 text-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Nom complet</label>
                <input 
                  type="text" 
                  name="nom" 
                  required 
                  placeholder="Ex: Aminata Diallo" 
                  className="w-full bg-[#1a2622] border border-white/10 rounded px-4 py-3 text-white focus:border-[#d4af37] outline-none transition"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Adresse email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="Ex: aminata@gmail.com" 
                  className="w-full bg-[#1a2622] border border-white/10 rounded px-4 py-3 text-white focus:border-[#d4af37] outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Date d'arrivée</label>
                <input 
                  type="date" 
                  name="arrivee" 
                  required 
                  className="w-full bg-[#1a2622] border border-white/10 rounded px-4 py-3 text-white focus:border-[#d4af37] outline-none transition"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Date de départ</label>
                <input 
                  type="date" 
                  name="depart" 
                  required 
                  className="w-full bg-[#1a2622] border border-white/10 rounded px-4 py-3 text-white focus:border-[#d4af37] outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Type de chambre</label>
                <select 
                  name="chambre" 
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full bg-[#1a2622] border border-white/10 rounded px-4 py-3 text-white focus:border-[#d4af37] outline-none transition"
                >
                  <option value="Chambre Deluxe">Chambre Deluxe (85 000 FCFA / nuit)</option>
                  <option value="Chambre Supérieure">Chambre Supérieure (110 000 FCFA / nuit)</option>
                  <option value="Suite Présidentielle">Suite Présidentielle (190 000 FCFA / nuit)</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Nombre de personnes</label>
                <select 
                  name="personnes" 
                  className="w-full bg-[#1a2622] border border-white/10 rounded px-4 py-3 text-white focus:border-[#d4af37] outline-none transition"
                >
                  <option value="1 personne">1 personne</option>
                  <option value="2 personnes">2 personnes</option>
                  <option value="3+ personnes">3 personnes ou plus</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">Demandes particulières (optionnel)</label>
              <textarea 
                name="message" 
                rows={4} 
                placeholder="Précisez vos besoins (transfert aéroport, régime alimentaire...)" 
                className="w-full bg-[#1a2622] border border-white/10 rounded px-4 py-3 text-white focus:border-[#d4af37] outline-none transition"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#d4af37] hover:bg-[#c5a028] text-black font-bold py-4 rounded transition flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <Send className="w-5 h-5" /> Envoyer ma demande de réservation
            </button>

            {formStatus && (
              <p className="text-green-400 text-center font-medium mt-4">{formStatus}</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <div  ref={contactRef}>
        <Footer onNavigate={scrollToSection} />
      </div>

    </div>
  );
}