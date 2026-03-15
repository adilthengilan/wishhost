import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Hotel, 
  Layout, 
  Layers, 
  ShieldCheck, 
  Droplets,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { SERVICES, CLIENTS } from './types';

const IconMap: Record<string, React.ElementType> = {
  Building2,
  Hotel,
  Layout,
  Layers,
  ShieldCheck,
  Droplets
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center font-bold text-brand-gray text-xl">W</div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tighter">WISH HOST</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold">Wish It.. Will Form it..</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Services', 'Clients', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-brand-gold transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="gold-gradient text-brand-gray px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
                Get a Quote
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-brand-gray-light border-t border-white/10 p-4"
          >
            <div className="flex flex-col gap-4">
              {['About', 'Services', 'Clients', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Modern Building"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gray via-brand-gray/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
              Trading, Contracting <br />
              <span className="text-gold-gradient">& Hospitality</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Wish Host is a leading service-based company in Qatar, providing complete end-to-end solutions tailored to your professional requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="gold-gradient text-brand-gray px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 group">
                Explore Services <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/20 hover:bg-white/5 px-8 py-4 rounded-full text-lg font-bold transition-colors">
                Our Portfolio
              </button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full gold-gradient opacity-10 blur-3xl -z-10 transform translate-x-1/2" />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
                  alt="Office Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl max-w-xs">
                <div className="text-4xl font-bold text-brand-gold mb-2">2+</div>
                <p className="text-sm text-gray-300">Years of excellence delivering premium services in Qatar.</p>
              </div>
            </motion.div>

            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-4">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">Leading the way in <br />Service Excellence</h3>
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  Wish Host is a leading service based company in complete end to end Trading, Contracting, Facilities management & Hospitality division in Qatar. We provide Product and services as per tailored to customer requirement.
                </p>
                <p>
                  Combining our solid business domain experience, best practices, designing expertise, profound knowledge of latest industry trends and quality-driven delivery model we offer progressive end-to-end services to our clients.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                {[
                  'Spotless Delivery',
                  'Expert Team',
                  '100% Satisfaction',
                  'Stringent QA'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-gold w-5 h-5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-4">Our Divisions</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Comprehensive Solutions</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = IconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-[400px] rounded-3xl overflow-hidden glass-card"
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-gray via-brand-gray/40 to-transparent" />
                  
                  <div className="relative h-full p-8 flex flex-col justify-end">
                    <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center text-brand-gray mb-6">
                      <Icon size={24} />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-24 bg-brand-gray-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-4">Our Clients</h2>
          <h3 className="text-4xl font-bold">Trusted by Industry Leaders</h3>
        </div>

        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...CLIENTS, ...CLIENTS].map((client, index) => (
            <div 
              key={`${client.name}-${index}`}
              className="glass-card px-8 py-4 rounded-xl text-lg font-medium text-gray-400 hover:text-brand-gold transition-colors cursor-default"
            >
              {client.name}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-[3rem] overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20">
                <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center text-brand-gray shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Our Location</h4>
                      <p className="text-gray-400">Office No: Al Nayef Souq, Doha-Qatar</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center text-brand-gray shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Us</h4>
                      <p className="text-gray-400">info@wishhostqa.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center text-brand-gray shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-gray-400">+974 40016371</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center text-brand-gray shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Office Hours</h4>
                      <p className="text-gray-400">Sun - Thu: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-gold p-12 lg:p-20 text-brand-gray">
                <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-white/20 border-b-2 border-brand-gray/20 p-4 placeholder:text-brand-gray/60 focus:outline-none focus:border-brand-gray transition-colors"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full bg-white/20 border-b-2 border-brand-gray/20 p-4 placeholder:text-brand-gray/60 focus:outline-none focus:border-brand-gray transition-colors"
                    />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Subject"
                    className="w-full bg-white/20 border-b-2 border-brand-gray/20 p-4 placeholder:text-brand-gray/60 focus:outline-none focus:border-brand-gray transition-colors"
                  />
                  <textarea 
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-white/20 border-b-2 border-brand-gray/20 p-4 placeholder:text-brand-gray/60 focus:outline-none focus:border-brand-gray transition-colors resize-none"
                  />
                  <button className="w-full bg-brand-gray text-white py-4 rounded-xl font-bold hover:bg-brand-gray/90 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 gold-gradient rounded flex items-center justify-center font-bold text-brand-gray">W</div>
              <span className="font-bold tracking-tighter">WISH HOST</span>
            </div>
            
            <p className="text-gray-500 text-sm">
              © 2026 Wish Host Trading & Hospitality. CR No: 16322. All rights reserved.
            </p>

            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-brand-gold">Privacy Policy</a>
              <a href="#" className="hover:text-brand-gold">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
