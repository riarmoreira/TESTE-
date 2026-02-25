export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-secondary py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-6 tracking-tighter">NEXUS</h3>
          <p className="text-brand-secondary/60 max-w-xs">
            Transformando visões digitais em realidade através de design minimalista e tecnologia de ponta.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest mb-6 opacity-50">Contacto</h4>
          <p className="mb-2">geral@nexus.pt</p>
          <p>+351 210 000 000</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest mb-6 opacity-50">Localização</h4>
          <p>Avenida da Liberdade, 100</p>
          <p>1250-145 Lisboa, Portugal</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-secondary/10 flex flex-col md:flex-row justify-between items-center opacity-40 text-xs uppercase tracking-widest">
        <p>© 2026 Nexus Consultoria Digital. Todos os direitos reservados.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
