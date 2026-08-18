import { Logo } from "./Logo";
import { WHATSAPP } from "./data";

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-primary-foreground">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Seu sorriso, nossa prioridade. Odontologia completa no centro de Londrina-PR.
          </p>
        </div>
        <nav aria-label="Clínica">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Clínica</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            <li><a className="hover:text-aqua" href="#sobre">Sobre</a></li>
            <li><a className="hover:text-aqua" href="#especialidades">Especialidades</a></li>
            <li><a className="hover:text-aqua" href="#equipe">Equipe</a></li>
          </ul>
        </nav>
        <nav aria-label="Contato">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Contato</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            <li><a className="hover:text-aqua" href="tel:+554333445566">(43) 3344-5566</a></li>
            <li><a className="hover:text-aqua" href={WHATSAPP} target="_blank" rel="noopener noreferrer">(43) 99988-7766</a></li>
            <li><a className="hover:text-aqua" href="mailto:contato@sorrisoodontologico.com.br">contato@sorrisoodontologico.com.br</a></li>
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Redes sociais</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            <li>
              <a className="hover:text-aqua" href="https://instagram.com/sorrisoodontologico" target="_blank" rel="noopener noreferrer">
                @sorrisoodontologico
              </a>
            </li>
            <li className="text-primary-foreground/70">Seg–Sex · 8h às 19h</li>
            <li className="text-primary-foreground/70">Sáb · 8h às 13h</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/12">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-2 px-5 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Sorriso Odontológico. Todos os direitos reservados.</span>
          <span>Projeto de portfólio · Conteúdo fictício</span>
        </div>
      </div>
    </footer>
  );
}