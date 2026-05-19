import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, MapPin, Flame, Star } from "lucide-react";

import simplesImg from "@/assets/simples-souza.jpg";
import baconImg from "@/assets/bacon-brabo.jpg";
import cheddarImg from "@/assets/cheddar-supremo.jpg";
import duploImg from "@/assets/duplo-classico.jpg";
import smashImg from "@/assets/smash-salada.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/5562000000000?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20no%20Hamburgueria%20do%20Souza";

type Item = {
  name: string;
  price: string;
  desc: string;
  ingredients: string[];
  img: string;
  combo?: { fries: boolean; drink: string };
  tag?: string;
};

const burgers: Item[] = [
  {
    name: "Simples do Souza",
    price: "19,90",
    desc: "O começo de tudo. Smash crocante, queijo derretendo e molho da casa.",
    ingredients: ["Pão brioche", "Carne smash 100g", "Queijo (cheddar ou muçarela)", "Molho da casa"],
    img: simplesImg,
  },
  {
    name: "Bacon Brabo",
    price: "24,90",
    desc: "Bacon crocante por cima do smash suculento. Sem frescura, só sabor.",
    ingredients: ["Pão brioche", "Carne smash 100g", "Queijo (cheddar ou muçarela)", "Bacon crocante", "Molho da casa"],
    img: baconImg,
    tag: "Mais pedido",
  },
];

const combos: Item[] = [
  {
    name: "Cheddar Supremo Combo",
    price: "29,90",
    desc: "Cheddar derretido, salada fresca e o crocante da batata. O combo completo.",
    ingredients: ["Pão brioche", "Carne smash 100g", "Queijo (cheddar ou muçarela)", "Alface", "Tomate", "Molho da casa"],
    img: cheddarImg,
    combo: { fries: true, drink: "Coca-Cola lata" },
  },
  {
    name: "Duplo Clássico Combo",
    price: "29,90",
    desc: "Dois smashes, queijo dobrado e aquele molho. Para quem tem fome de verdade.",
    ingredients: ["Pão brioche", "2 carnes smash 100g", "Queijo (cheddar ou muçarela)", "Molho da casa"],
    img: duploImg,
    combo: { fries: true, drink: "Coca-Cola lata" },
    tag: "Mais carne",
  },
  {
    name: "Smash Salada Combo",
    price: "27,90",
    desc: "O smash equilibrado, com salada caprichada e o frescor do Mineirinho.",
    ingredients: ["Pão brioche", "Carne smash 100g", "Queijo (cheddar ou muçarela)", "Alface", "Tomate", "Cebola roxa", "Picles", "Molho da casa"],
    img: smashImg,
    combo: { fries: true, drink: "Mineirinho 250ml" },
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7, ease: EASE },
};

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/60 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-gold" strokeWidth={2.2} />
            <span className="font-display text-xl tracking-wider">SOUZA</span>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold hover:text-foreground transition-colors"
          >
            Pedir agora
          </a>
        </div>
      </header>

      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] flex items-end overflow-hidden">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <img
            src={baconImg}
            alt="Hambúrguer artesanal Hamburgueria do Souza"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 sm:pb-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold pulse-soft" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold">
                Noroeste · Goiânia
              </span>
            </div>

            <h1 className="font-display text-[15vw] sm:text-8xl md:text-9xl leading-[0.85] tracking-tight">
              HAMBURGUERIA
              <br />
              <span className="text-gold neon-gold">DO SOUZA</span>
            </h1>

            <p className="mt-6 max-w-md text-base sm:text-lg text-muted-foreground font-light">
              Smash artesanal, pão brioche e molho da casa. O sabor que está conquistando a Região Noroeste.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#cardapio"
                className="px-7 py-3.5 rounded-full bg-gold text-ink font-semibold text-sm uppercase tracking-wider shine hover:bg-gold/90 transition-all hover:scale-[1.03] active:scale-95"
              >
                Ver cardápio
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener"
                className="px-7 py-3.5 rounded-full border border-white/15 backdrop-blur-sm text-sm uppercase tracking-wider hover:border-gold/60 hover:text-gold transition-all"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[10px] tracking-[0.4em] text-muted-foreground/60 uppercase"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          deslize
        </motion.div>
      </section>

      {/* MANIFESTO */}
      <section className="relative py-24 sm:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.4em] text-gold mb-6">
            — O sabor da região
          </motion.p>
          <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="font-display text-4xl sm:text-6xl leading-tight">
            Carne na chapa, pão na manteiga.
            <br />
            <span className="text-gold">Sem atalho, sem firula.</span>
          </motion.h2>
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="mt-8 text-muted-foreground text-base sm:text-lg leading-relaxed">
            A gente faz hambúrguer do jeito que tem que ser feito. Smash crocante por fora, suculento por dentro, queijo derretendo e o molho da casa que vicia.
          </motion.p>
        </div>
      </section>

      {/* CARDÁPIO */}
      <section id="cardapio" className="relative px-5 sm:px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="Cardápio" title="Hambúrgueres" />
          <div className="space-y-6 sm:space-y-8">
            {burgers.map((b, i) => <ProductCard key={b.name} item={b} index={i} />)}
          </div>

          <div className="mt-20">
            <SectionTitle eyebrow="Acompanha Batata + Bebida" title="Combos" />
            <div className="space-y-6 sm:space-y-8">
              {combos.map((b, i) => <ProductCard key={b.name} item={b} index={i} />)}
            </div>
          </div>

          {/* BEBIDAS / ADICIONAIS */}
          <div className="mt-24 grid sm:grid-cols-2 gap-5 sm:gap-6">
            <InfoCard
              title="Bebidas"
              items={[
                ["Coca-Cola lata 350ml", "7,00"],
                ["Guaraná Mineirinho 250ml", "6,00"],
                ["Suco lata", "6,00"],
                ["Água sem gás", "4,00"],
              ]}
            />
            <InfoCard
              title="Adicionais"
              items={[
                ["Carne smash extra 100g", "8,00"],
                ["Cheddar extra", "4,00"],
                ["Bacon crocante", "5,00"],
                ["Cebola caramelizada", "3,00"],
              ]}
            />
          </div>
        </div>
      </section>

      {/* REGIÃO NOROESTE */}
      <section className="relative py-28 sm:py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/20 blur-[140px]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 mb-8">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Região Noroeste · GYN</span>
          </motion.div>
          <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="font-display text-5xl sm:text-7xl leading-[0.95]">
            Feito <span className="text-gold neon-gold">aqui</span>,
            <br />
            entregue <span className="text-gold neon-gold">aqui</span>.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="mt-8 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Delivery artesanal direto na sua porta. Atendemos toda a Região Noroeste de Goiânia com agilidade e aquele cheirinho de smash recém-saído da chapa.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {["Bairro Floresta", "Finsocial", "Recanto do Bosque", "Boa Vista", "Itatiaia", "Goiânia 2"].map((b) => (
              <span key={b} className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-white/10 text-muted-foreground">
                {b}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp} className="flex justify-center gap-1 mb-6 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
          </motion.div>
          <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="font-display text-4xl sm:text-6xl leading-tight">
            Tá com fome agora?
          </motion.h2>
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="mt-4 text-muted-foreground">
            Faz o pedido pelo WhatsApp. A gente cuida do resto.
          </motion.p>
          <motion.a
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="mt-10 inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gold text-ink font-bold uppercase tracking-wider shine hover:scale-[1.04] transition-transform"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
            Pedir no WhatsApp
          </motion.a>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 px-6 text-center pb-28 sm:pb-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Flame className="w-4 h-4 text-gold" />
          <span className="font-display text-lg tracking-wider">HAMBURGUERIA DO SOUZA</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Goiânia, GO · Artesanal sempre.
        </p>
      </footer>

      {/* Sticky mobile CTA */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
        className="sm:hidden fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-2 py-4 rounded-full bg-gold text-ink font-bold uppercase tracking-wider text-sm shadow-2xl shadow-gold/30 shine"
      >
        <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
        Pedir no WhatsApp
      </a>
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div {...fadeUp} className="mb-10 sm:mb-14">
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold mb-3">— {eyebrow}</p>
      <h2 className="font-display text-5xl sm:text-7xl leading-none">{title}</h2>
    </motion.div>
  );
}

function ProductCard({ item, index }: { item: Item; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm hover:border-gold/30 transition-all duration-500"
    >
      <div className="grid sm:grid-cols-5 gap-0">
        <div className="sm:col-span-3 relative overflow-hidden aspect-[4/3] sm:aspect-auto sm:min-h-[340px]">
          <motion.img
            src={item.img}
            alt={item.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-background/60" />
          {item.tag && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-ink text-[10px] font-bold uppercase tracking-widest">
              {item.tag}
            </div>
          )}
        </div>

        <div className="sm:col-span-2 p-6 sm:p-8 flex flex-col justify-center">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-display text-3xl sm:text-4xl leading-none">{item.name}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{item.desc}</p>

          <ul className="space-y-1.5 mb-6">
            {item.ingredients.map((ing) => (
              <li key={ing} className="text-xs text-muted-foreground/90 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gold/70" />
                {ing}
              </li>
            ))}
          </ul>

          {item.combo && (
            <div className="mb-5 p-3 rounded-xl border border-gold/20 bg-gold/5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold mb-1">Acompanha</p>
              <p className="text-sm">Batata P + {item.combo.drink}</p>
            </div>
          )}

          <div className="flex items-end justify-between mt-auto">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground block">a partir de</span>
              <span className="font-display text-4xl text-gold neon-gold">R$ {item.price}</span>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wider hover:bg-gold hover:text-ink hover:border-gold transition-all"
            >
              Pedir
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function InfoCard({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <motion.div {...fadeUp} className="rounded-3xl border border-white/5 bg-white/[0.02] p-7 backdrop-blur-sm">
      <h3 className="font-display text-3xl mb-6">{title}</h3>
      <ul className="divide-y divide-white/5">
        {items.map(([name, price]) => (
          <li key={name} className="flex items-center justify-between py-3">
            <span className="text-sm">{name}</span>
            <span className="font-display text-xl text-gold">R$ {price}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
