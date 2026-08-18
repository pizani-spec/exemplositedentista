import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { WHATSAPP } from "./data";

const maskPhone = (v: string) => {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 10)
    return d.replace(/^(\d{0,2})(\d{0,4})(\d{0,4}).*/, (_, a, b, c) =>
      [a && `(${a}`, a.length === 2 ? ") " : "", b, c && `-${c}`].join(""),
    );
  return d.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
};

export function ContactForm() {
  const [phone, setPhone] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const tel = String(data.get("phone") ?? "").trim();
    if (name.length < 3) {
      toast.error("Informe seu nome completo.");
      return;
    }
    if (tel.replace(/\D/g, "").length < 10) {
      toast.error("Informe um telefone válido.");
      return;
    }

    const msg = [
      `Olá! Meu nome é ${name}.`,
      `Telefone: ${tel}`,
      data.get("service") ? `Interesse: ${data.get("service")}` : "",
      data.get("date") ? `Preferência de data: ${data.get("date")}` : "",
      data.get("message") ? `Mensagem: ${data.get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    toast.success("Tudo certo! Abrimos o WhatsApp da clínica com seus dados.");
    e.currentTarget.reset();
    setPhone("");
  };

  const field =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted-foreground focus:border-brand focus:ring-4 focus:ring-brand/12";
  const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-soft";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-3xl bg-surface p-6 shadow-elevated sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Nome completo *
          </label>
          <input id="name" name="name" autoComplete="name" placeholder="Seu nome completo" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Telefone / WhatsApp *
          </label>
          <input
            id="phone"
            name="phone"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(maskPhone(e.target.value))}
            placeholder="(43) 99999-9999"
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="service">
            Tratamento de interesse
          </label>
          <select id="service" name="service" defaultValue="" className={field}>
            <option value="">Selecione</option>
            <option>Clínico Geral</option>
            <option>Implantes Dentários</option>
            <option>Ortodontia</option>
            <option>Clareamento Dental</option>
            <option>Endodontia</option>
            <option>Odontopediatria</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="date">
            Preferência de data
          </label>
          <input id="date" name="date" type="date" className={field} />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="message">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Conte um pouco sobre o que você procura."
          className={field}
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-brand-deep"
      >
        Enviar para o WhatsApp
      </button>
      <p className="text-xs text-muted-foreground">
        Ao enviar, você será direcionado ao WhatsApp da clínica com a mensagem pronta.
      </p>
    </form>
  );
}