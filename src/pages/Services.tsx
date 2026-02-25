import { motion } from 'motion/react';
import { Layout, Smartphone, Globe, BarChart } from 'lucide-react';

const services = [
  {
    title: 'Web Design',
    description: 'Interfaces elegantes e intuitivas que convertem visitantes em clientes fiéis.',
    icon: Layout,
  },
  {
    title: 'Mobile Apps',
    description: 'Aplicações nativas e híbridas focadas na melhor experiência de utilizador.',
    icon: Smartphone,
  },
  {
    title: 'E-commerce',
    description: 'Lojas online robustas e escaláveis preparadas para o mercado global.',
    icon: Globe,
  },
  {
    title: 'SEO & Analytics',
    description: 'Estratégias baseadas em dados para colocar a sua marca no topo dos resultados.',
    icon: BarChart,
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-8"
          >
            Serviços <span className="italic">Especializados</span>
          </motion.h1>
          <p className="text-xl text-brand-primary/60 max-w-2xl">
            Oferecemos um conjunto completo de soluções digitais para ajudar a sua empresa a crescer no mundo moderno.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-12 bg-white rounded-3xl border border-brand-primary/5 hover:border-brand-accent/30 transition-all duration-500 group"
            >
              <service.icon className="w-12 h-12 mb-8 text-brand-accent group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-3xl mb-4">{service.title}</h3>
              <p className="text-brand-primary/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
