export type CatalogItem = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  featured?: boolean;
};

export const siteConfig = {
  whatsappNumber: "558694026786",
  phoneDisplay: "+55 86 9402-6786",
  instagramHandle: "@encantartephb",
  instagramUrl: "https://www.instagram.com/encantartephb/",
  defaultWhatsappMessage: "Olá! Gostaria de solicitar um orçamento para papelaria personalizada.",
} as const;

export const catalogItems: CatalogItem[] = [
  { slug: "agendas", title: "Agendas personalizadas", subtitle: "Sob consulta", image: "/images/agendas.png", imageAlt: "Agenda personalizada em tons rosa e verde com acabamento floral", whatsappMessage: "Olá! Gostaria de solicitar um orçamento para Agendas personalizadas.", featured: true },
  { slug: "kits-festas", title: "Kits para festas", subtitle: "Sob consulta", image: "/images/kits-festas.png", imageAlt: "Kit de papelaria personalizada para festa em tons delicados", whatsappMessage: "Olá! Gostaria de solicitar um orçamento para Kits para festas." },
  { slug: "convites", title: "Convites especiais", subtitle: "Sob consulta", image: "/images/convites.png", imageAlt: "Convite especial decorado com flores e lacre", whatsappMessage: "Olá! Gostaria de solicitar um orçamento para Convites especiais." },
  { slug: "lembrancinhas", title: "Lembrancinhas", subtitle: "Sob consulta", image: "/images/lembrancinhas.png", imageAlt: "Lembrancinhas personalizadas para celebrações", whatsappMessage: "Olá! Gostaria de solicitar um orçamento para Lembrancinhas." },
  { slug: "adesivos-tags", title: "Adesivos e tags", subtitle: "Sob consulta", image: "/images/adesivos-tags.png", imageAlt: "Cartela de adesivos e tags personalizados", whatsappMessage: "Olá! Gostaria de solicitar um orçamento para Adesivos e tags." },
];

export function getWhatsappUrl(
  message: string = siteConfig.defaultWhatsappMessage,
) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
