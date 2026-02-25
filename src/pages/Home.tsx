import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-brand-accent font-semibold mb-4 block">
              Consultoria Digital de Elite
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-8">
              Design que <br />
              <span className="italic">inspira</span> confiança.
            </h1>
            <p className="text-xl md:text-2xl text-brand-primary/70 max-w-2xl mb-12 font-light leading-relaxed">
              Criamos experiências digitais sofisticadas para marcas que valorizam a excelência e a simplicidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/servicos"
                className="bg-brand-primary text-brand-secondary px-10 py-5 rounded-full flex items-center justify-center group hover:bg-brand-accent transition-all duration-300"
              >
                Ver Serviços
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contacto"
                className="border border-brand-primary/20 px-10 py-5 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-brand-secondary transition-all duration-300"
              >
                Fale Connosco
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://picsum.photos/seed/office/800/1000"
                alt="Workspace"
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div>
              <h2 className="text-4xl md:text-5xl mb-8">A nossa filosofia é a <span className="italic">essência</span> do seu sucesso.</h2>
              <p className="text-lg text-brand-primary/60 mb-8 leading-relaxed">
                Acreditamos que a tecnologia deve ser invisível e a experiência deve ser memorável. Cada pixel que desenhamos tem um propósito: elevar a sua marca.
              </p>
              <ul className="space-y-4">
                {['Estratégia Digital', 'Design de Experiência', 'Desenvolvimento Premium'].map((item) => (
                  <li key={item} className="flex items-center text-sm uppercase tracking-widest font-semibold">
                    <div className="w-2 h-2 bg-brand-accent rounded-full mr-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
