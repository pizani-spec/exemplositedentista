import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  Cpu,
  Heart,
  CheckCircle2,
  Star,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  Quote,
  CreditCard,
  Banknote,
  Wallet,
  CalendarClock,
} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ContactForm } from "@/components/site/ContactForm";
import {
  benefits,
  insurances,
  payments,
  specialties,
  team,
  testimonials,
  whatsappLink,
  WHATSAPP,
} from "@/components/site/data";
import heroPaciente from "@/assets/hero-paciente.jpg";
import clinicaInterior from "@/assets/clinica-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sorriso Odontológico | Clínica Odontológica em Londrina-PR" },
      {
        name: "description",
        content:
          "Clínica odontológica em Londrina-PR com atendimento humanizado, tecnologia de ponta e 6 especialidades. Agende sua avaliação gratuita.",
      },
      { property: "og:title", content: "Sorriso Odontológico | Seu sorriso, nossa prioridade" },
      {
        property: "og:description",
        content:
          "Atendimento humanizado, tecnologia de ponta e cuidado odontológico completo em Londrina-PR.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefitIcons = { award: Award, cpu: Cpu, heart: Heart, check: CheckCircle2 };
const paymentIcons = [CreditCard, Wallet, Banknote, CalendarClock];

function Eyebrow({ children, light }: { children: string; light?: boolean }) {
  return (
    <span
      className={
        light
          ? "inline-flex items-center rounded-full bg-surface/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/90"
          : "inline-flex items-center rounded-full bg-brand/8 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand"
      }
    >
      {children}
    </span>
  );
}

function Stars({ className = "text-coral" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Toaster position="top-center" />

      <main>
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-32 size-[38rem] rounded-full bg-aqua/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-56 -left-40 size-[34rem] rounded-full bg-brand/10 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-[1180px] items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr]">
            <div className="reveal-up">
              <Eyebrow>Desde 2012 · Londrina-PR</Eyebrow>
              <h1 className="mt-6 text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">
                Seu sorriso,{" "}
                <span className="text-gradient-brand">nossa prioridade.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-ink-soft">
                Clínica odontológica moderna, com atendimento humanizado e tecnologia de ponta
                para cuidar do seu sorriso em todas as fases da vida.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappLink("Olá! Gostaria de agendar uma avaliação.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-brand-deep"
                >
                  Agendar avaliação gratuita
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#especialidades"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-4 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
                >
                  Conhecer especialidades
                </a>
              </div>
              <dl className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-7">
                {[
                  ["12+", "anos de história"],
                  ["6", "especialidades"],
                  ["4", "consultórios"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-display text-2xl font-semibold text-brand-deep">{v}</dt>
                    <dd className="text-sm text-ink-soft">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative reveal-up">
              <img
                src={heroPaciente}
                alt="Paciente sorrindo em consultório odontológico moderno"
                width={1024}
                height={1280}
                className="aspect-4/5 w-full rounded-[40px_40px_40px_8px] object-cover shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-surface p-4 shadow-elevated sm:left-6">
                <div>
                  <Stars />
                  <p className="mt-1 font-display text-lg font-semibold text-ink">4,9/5</p>
                  <p className="text-xs text-muted-foreground">Avaliação dos pacientes</p>
                </div>
              </div>
              <div className="absolute -top-4 right-4 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-xs font-semibold text-ink shadow-soft">
                <span className="size-2 rounded-full bg-whatsapp" aria-hidden="true" />
                Atendimento humanizado
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20" aria-labelledby="benefits-title">
          <div className="mx-auto max-w-[1180px] px-5">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Por que escolher a Sorriso</Eyebrow>
              <h2 id="benefits-title" className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">
                Cuidado que você sente desde a{" "}
                <span className="text-gradient-brand">primeira consulta.</span>
              </h2>
              <p className="mt-4 text-ink-soft">
                Experiência, tecnologia e acolhimento reunidos em um só lugar.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => {
                const Icon = benefitIcons[b.icon];
                return (
                  <article
                    key={b.title}
                    className="surface-card rounded-[28px_28px_28px_6px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
                  >
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-aqua-soft text-brand">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-ink">{b.title}</h3>
                    <p className="mt-2 text-sm text-ink-soft">{b.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-20" aria-labelledby="about-title">
          <div className="mx-auto grid max-w-[1180px] items-center gap-14 px-5 lg:grid-cols-2">
            <div className="relative">
              <img
                src={clinicaInterior}
                alt="Interior moderno da clínica Sorriso Odontológico"
                loading="lazy"
                width={1200}
                height={1008}
                className="w-full rounded-[40px_40px_40px_8px] object-cover shadow-elevated"
              />
              <div className="absolute -bottom-7 right-6 rounded-2xl bg-brand px-6 py-4 text-primary-foreground shadow-elevated">
                <strong className="font-display text-2xl">12+</strong>
                <span className="ml-2 text-xs opacity-90">
                  anos cuidando
                  <br />
                  de sorrisos
                </span>
              </div>
            </div>
            <div>
              <Eyebrow>Sobre nós</Eyebrow>
              <h2 id="about-title" className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">
                Uma história construída com{" "}
                <span className="text-gradient-brand">cuidado e excelência.</span>
              </h2>
              <div className="mt-5 space-y-4 text-ink-soft">
                <p>
                  Fundada em 2012 pela Dra. Helena Ribeiro, a Sorriso Odontológico nasceu com o
                  propósito de oferecer atendimento odontológico de qualidade, acessível e
                  humanizado para toda a família.
                </p>
                <p>
                  Com estrutura moderna e 4 consultórios completos, contamos com uma equipe
                  multidisciplinar de profissionais qualificados.
                </p>
                <p>
                  Nosso compromisso é simples: cuidar do seu sorriso com a mesma dedicação que
                  cuidaríamos do nosso.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-7">
                {[
                  ["5.000+", "pacientes atendidos"],
                  ["6", "especialidades"],
                  ["4,9★", "avaliação"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <strong className="block font-display text-2xl text-brand-deep">{v}</strong>
                    <span className="text-sm text-ink-soft">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Especialidades */}
        <section id="especialidades" className="bg-secondary/60 py-20" aria-labelledby="spec-title">
          <div className="mx-auto max-w-[1180px] px-5">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Tratamentos</Eyebrow>
              <h2 id="spec-title" className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">
                Tudo para o seu sorriso,{" "}
                <span className="text-gradient-brand">em um só lugar.</span>
              </h2>
              <p className="mt-4 text-ink-soft">
                Tratamentos completos para toda a família, com profissionais especializados.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {specialties.map((s) => (
                <article
                  key={s.n}
                  className="group surface-card relative overflow-hidden rounded-[28px_28px_28px_6px] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="absolute right-6 top-5 font-display text-4xl font-semibold text-brand/10">
                    {s.n}
                  </span>
                  <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{s.text}</p>
                  <a
                    href="#contato"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                  >
                    Quero saber mais
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section id="equipe" className="py-20" aria-labelledby="team-title">
          <div className="mx-auto max-w-[1180px] px-5">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Nossa equipe</Eyebrow>
              <h2 id="team-title" className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">
                Profissionais que cuidam{" "}
                <span className="text-gradient-brand">de pessoas.</span>
              </h2>
              <p className="mt-4 text-ink-soft">
                Qualificação técnica aliada a um atendimento próximo e acolhedor.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m) => (
                <article
                  key={m.name}
                  className="surface-card overflow-hidden rounded-[28px_28px_28px_6px] transition duration-300 hover:shadow-soft"
                >
                  <img
                    src={m.photo}
                    alt={`Retrato de ${m.name}`}
                    loading="lazy"
                    width={800}
                    height={900}
                    className="aspect-4/5 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-ink">{m.name}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{m.role}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {m.cro}
                    </p>
                    <a
                      href={whatsappLink(m.cta)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-deep"
                    >
                      Agendar consulta
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Convênios */}
        <section id="convenios" className="py-20" aria-labelledby="conv-title">
          <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 lg:grid-cols-2">
            <div>
              <Eyebrow>Facilidade para você</Eyebrow>
              <h2 id="conv-title" className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">
                Seu cuidado cabe na sua{" "}
                <span className="text-gradient-brand">rotina e no seu bolso.</span>
              </h2>
              <p className="mt-4 text-ink-soft">
                Aceitamos os principais convênios e oferecemos diferentes formas de pagamento.
              </p>
            </div>
            <div className="rounded-[40px_40px_40px_8px] bg-surface p-8 shadow-elevated">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
                Convênios aceitos
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {insurances.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                  >
                    {i}
                  </span>
                ))}
              </div>
              <div className="my-7 h-px bg-border" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
                Formas de pagamento
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {payments.map((p, i) => {
                  const Icon = paymentIcons[i]!;
                  return (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-ink">
                      <Icon className="size-4 text-brand" aria-hidden="true" />
                      {p}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="bg-secondary/60 py-20" aria-labelledby="dep-title">
          <div className="mx-auto max-w-[1180px] px-5">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Depoimentos</Eyebrow>
              <h2 id="dep-title" className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">
                Quem cuida do sorriso,{" "}
                <span className="text-gradient-brand">recomenda.</span>
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="surface-card relative rounded-[28px_28px_28px_6px] p-7"
                >
                  <Quote className="size-8 text-aqua" aria-hidden="true" />
                  <Stars />
                  <blockquote className="mt-3 text-ink">“{t.quote}”</blockquote>
                  <figcaption className="mt-5">
                    <strong className="block text-sm font-semibold text-ink">{t.name}</strong>
                    <span className="text-xs text-muted-foreground">{t.since}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Localização */}
        <section className="py-20" aria-labelledby="loc-title">
          <div className="mx-auto grid max-w-[1180px] gap-12 px-5 lg:grid-cols-2">
            <div>
              <Eyebrow>Onde estamos</Eyebrow>
              <h2 id="loc-title" className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">
                No centro de Londrina,{" "}
                <span className="text-gradient-brand">perto de você.</span>
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    Icon: MapPin,
                    title: "Endereço",
                    lines: ["Rua Senador Souza Naves, 1234 - Centro", "Londrina-PR · CEP 86010-160"],
                  },
                  {
                    Icon: Clock,
                    title: "Horários",
                    lines: ["Segunda a sexta: 8h às 19h", "Sábado: 8h às 13h", "Domingo: fechado"],
                  },
                  {
                    Icon: Phone,
                    title: "Contato",
                    lines: ["(43) 3344-5566", "(43) 99988-7766", "contato@sorrisoodontologico.com.br"],
                  },
                ].map(({ Icon, title, lines }) => (
                  <div key={title} className="flex gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-aqua-soft text-brand">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <strong className="text-sm font-semibold text-ink">{title}</strong>
                      <p className="mt-1 text-sm text-ink-soft">
                        {lines.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://maps.google.com/?q=Rua+Senador+Souza+Naves+1234+Londrina+PR"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-brand-deep"
              >
                Como chegar
                <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="overflow-hidden rounded-[40px_40px_40px_8px] shadow-elevated">
              <iframe
                title="Mapa da localização da clínica em Londrina-PR"
                src="https://www.google.com/maps?q=Rua%20Senador%20Souza%20Naves%201234%20Londrina%20PR&output=embed"
                loading="lazy"
                className="h-[420px] w-full border-0 lg:h-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="relative overflow-hidden bg-brand-deep py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-0 size-[30rem] rounded-full bg-aqua/20 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-[1180px] items-start gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow light>Vamos conversar?</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold text-primary-foreground sm:text-4xl">
                Seu próximo sorriso começa com uma conversa.
              </h2>
              <p className="mt-4 max-w-md text-primary-foreground/75">
                Preencha seus dados e enviaremos as informações direto para o WhatsApp da clínica.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-surface/10 px-5 py-4 text-primary-foreground backdrop-blur transition hover:bg-surface/15"
              >
                <span className="size-2.5 rounded-full bg-whatsapp" aria-hidden="true" />
                <span className="text-sm opacity-75">WhatsApp</span>
                <strong className="font-display text-lg">(43) 99988-7766</strong>
              </a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />

      <a
        href={whatsappLink("Olá! Gostaria de mais informações sobre a clínica.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 font-semibold text-primary-foreground shadow-elevated transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.1-1.4-.1-.1-.3-.2-.5-.3z" />
          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.2.8.9-3.1-.2-.3C3.7 14.6 3.2 13 3.2 12c0-4.8 3.9-8.7 8.8-8.7s8.8 3.9 8.8 8.7-3.9 8.7-8.8 8.7z" />
        </svg>
        <span className="hidden sm:inline">Fale conosco</span>
      </a>
    </div>
  );
}
