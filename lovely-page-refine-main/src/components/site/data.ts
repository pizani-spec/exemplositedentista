import draHelena from "@/assets/dra-helena.jpg";
import drFernando from "@/assets/dr-fernando.jpg";
import draCamila from "@/assets/dra-camila.jpg";

export const WHATSAPP = "https://wa.me/554399887766";
export const whatsappLink = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#equipe", label: "Equipe" },
  { href: "#convenios", label: "Convênios" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export const benefits = [
  {
    icon: "award" as const,
    title: "12+ anos de experiência",
    text: "Desde 2012 cuidando da saúde bucal dos londrinenses com qualidade e dedicação.",
  },
  {
    icon: "cpu" as const,
    title: "Tecnologia de ponta",
    text: "Equipamentos modernos para diagnósticos precisos e tratamentos mais confortáveis.",
  },
  {
    icon: "heart" as const,
    title: "Atendimento humanizado",
    text: "Uma equipe acolhedora que entende suas necessidades e respeita o seu tempo.",
  },
  {
    icon: "check" as const,
    title: "Avaliação inicial gratuita",
    text: "Entendemos suas necessidades e orientamos o melhor caminho para o seu sorriso.",
  },
];

export const specialties = [
  { n: "01", title: "Clínico Geral", text: "Limpeza, restaurações e prevenção." },
  { n: "02", title: "Implantes Dentários", text: "Reposição de dentes com segurança." },
  { n: "03", title: "Ortodontia", text: "Aparelhos fixos e alinhadores invisíveis." },
  { n: "04", title: "Clareamento Dental", text: "Resultado estético em poucas sessões." },
  { n: "05", title: "Endodontia", text: "Tratamento de canal preciso e confortável." },
  { n: "06", title: "Odontopediatria", text: "Atendimento especializado para crianças." },
];

export const team = [
  {
    photo: draHelena,
    name: "Dra. Helena Ribeiro",
    role: "Fundadora · Clínico Geral e Ortodontia",
    cro: "CRO-PR 15.432",
    cta: "Olá! Gostaria de agendar com a Dra. Helena.",
  },
  {
    photo: drFernando,
    name: "Dr. Fernando Costa",
    role: "Implantodontia e Endodontia",
    cro: "CRO-PR 21.876",
    cta: "Olá! Gostaria de agendar com o Dr. Fernando.",
  },
  {
    photo: draCamila,
    name: "Dra. Camila Alves",
    role: "Odontopediatria e Clareamento",
    cro: "CRO-PR 18.209",
    cta: "Olá! Gostaria de agendar com a Dra. Camila.",
  },
];

export const testimonials = [
  {
    quote:
      "Atendimento impecável! Fiz um implante e não senti dor nenhuma. Recomendo demais.",
    name: "Ricardo Almeida",
    since: "Paciente desde 2019",
  },
  {
    quote:
      "Levei minha filha para a primeira consulta e a Dra. Camila foi um amor. Ambiente acolhedor.",
    name: "Patrícia Mendes",
    since: "Paciente desde 2021",
  },
  {
    quote: "Clareamento ficou perfeito em tempo recorde. Profissionais excelentes!",
    name: "Juliana Santos",
    since: "Paciente desde 2022",
  },
];

export const insurances = [
  "Unimed",
  "Bradesco Dental",
  "SulAmérica",
  "Amil Dental",
  "OdontoPrev",
];

export const payments = [
  "Cartão de débito e crédito",
  "PIX",
  "Dinheiro",
  "Parcelamento em até 12x",
];