import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl mb-8"
            >
              Vamos <span className="italic">criar</span> algo novo?
            </motion.h1>
            <p className="text-xl text-brand-primary/60 mb-12">
              Estamos prontos para ouvir o seu próximo grande projeto. Preencha o formulário ou envie um email direto.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2 opacity-50">Email</h4>
                <p className="text-2xl font-serif">geral@nexus.pt</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2 opacity-50">Telefone</h4>
                <p className="text-2xl font-serif">+351 210 000 000</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-12 rounded-3xl shadow-xl"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                <h3 className="text-3xl mb-4">Mensagem Enviada!</h3>
                <p className="text-brand-primary/60 mb-8">Obrigado pelo seu contacto. Responderemos o mais breve possível.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-brand-accent font-semibold uppercase tracking-widest text-sm"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 font-semibold">Nome</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-brand-secondary/50 border border-brand-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="O seu nome"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 font-semibold">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-brand-secondary/50 border border-brand-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="o-seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 font-semibold">Mensagem</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-secondary/50 border border-brand-primary/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <button
                  disabled={status === 'loading'}
                  className="w-full bg-brand-primary text-brand-secondary py-5 rounded-xl flex items-center justify-center group hover:bg-brand-accent transition-all duration-300 disabled:opacity-50"
                >
                  {status === 'loading' ? 'A enviar...' : 'Enviar Mensagem'}
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Ocorreu um erro. Por favor, tente novamente.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
