import Image from "next/image";
import { catalogItems, getWhatsappUrl, siteConfig, type CatalogItem } from "@/config/site";
import styles from "./page.module.css";

type ButtonLinkProps = { children: React.ReactNode; href: string; variant?: "primary" | "neutral" | "subtle"; external?: boolean };

function ButtonLink({ children, href, variant = "primary", external = false }: ButtonLinkProps) {
  return <a className={`${styles.button} ${styles[`button-${variant}`]}`} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}</a>;
}

function ProductCard({ item }: { item: CatalogItem }) {
  return (
    <article className={`${styles.productCard} ${item.featured ? styles.productCardFeatured : ""}`}>
      <div className={styles.productImage}>
        <Image src={item.image} alt={item.imageAlt} fill sizes={item.featured ? "(max-width: 767px) 100vw, (max-width: 1199px) 60vw, 480px" : "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 468px"} />
      </div>
      <div className={styles.productBody}>
        <div><h3>{item.title}</h3><p>{item.subtitle}</p></div>
        <ButtonLink href={getWhatsappUrl(item.whatsappMessage)} variant="subtle" external>Pedir orçamento</ButtonLink>
      </div>
    </article>
  );
}

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

export default function Home() {
  const whatsappUrl = getWhatsappUrl();
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.logoLink} href="#inicio" aria-label="Encantarte — início"><Image className={styles.logo} src="/images/logo.png" alt="Encantarte" width={92} height={92} priority /></a>
        <nav className={styles.navigation} aria-label="Navegação principal">
          {navigation.map((item, index) => <a className={index === 0 ? styles.activeNavigation : undefined} href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <div className={styles.headerCta}><ButtonLink href={whatsappUrl} external>Orçamento</ButtonLink></div>
      </header>

      <main>
        <section className={styles.hero} id="inicio">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Papelaria personalizada</p>
            <h1>Detalhes únicos para momentos inesquecíveis</h1>
            <p className={styles.heroDescription}>Papelaria personalizada com cuidado, beleza e a sua história em cada criação.</p>
            <div className={styles.heroActions}>
              <ButtonLink href="#catalogo">Explorar catálogo</ButtonLink>
              <a className={styles.textLink} href={whatsappUrl} target="_blank" rel="noopener noreferrer">Atendimento pelo WhatsApp</a>
            </div>
          </div>
          <div className={styles.heroImage}><Image src="/images/hero-stationery.png" alt="Coleção de papelaria personalizada em tons rosa e verde" fill priority sizes="(max-width: 767px) 100vw, 50vw" /></div>
        </section>

        <section className={styles.catalog} id="catalogo">
          <div className={styles.sectionHeading}><h2>Nosso catálogo</h2><p>Criações personalizadas para celebrar, presentear e encantar.</p></div>
          <div className={styles.catalogGrid}>{catalogItems.map((item) => <ProductCard item={item} key={item.slug} />)}</div>
        </section>

        <section className={styles.story} id="sobre">
          <div className={styles.storyContent}>
            <h2>Criamos com você</h2>
            <p>Acreditamos que cada detalhe conta uma história. Por isso, unimos criatividade, carinho e materiais de qualidade para desenvolver papelaria personalizada que transforma momentos em lembranças inesquecíveis.</p>
            <a className={styles.textLinkStrong} href={whatsappUrl} target="_blank" rel="noopener noreferrer">Fale conosco pelo WhatsApp <span aria-hidden="true">→</span></a>
          </div>
          <div className={styles.storyImage}><Image src="/images/historia-artesanal.png" alt="Mãos preparando uma lembrancinha artesanal em uma bancada criativa" fill sizes="(max-width: 767px) 100vw, 50vw" /></div>
        </section>

        <section className={styles.contactCta} id="contato">
          <h2>Vamos transformar sua ideia em algo encantador?</h2>
          <p>Conte o que você imagina e receba um orçamento personalizado.</p>
          <div className={styles.contactActions}><ButtonLink href={whatsappUrl} external>Pedir orçamento</ButtonLink><ButtonLink href={siteConfig.instagramUrl} variant="neutral" external>Ver no Instagram</ButtonLink></div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <a className={styles.footerLogo} href="#inicio" aria-label="Encantarte — voltar ao início"><Image src="/images/logo.png" alt="" width={132} height={132} /></a>
          <div className={styles.footerBrand}><h2>Encantarte</h2><p>Papelaria personalizada criada com carinho para tornar cada momento ainda mais especial.</p></div>
          <div className={styles.footerGroup}><h2>Navegação</h2><nav aria-label="Navegação do rodapé">{navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav></div>
          <address className={styles.footerGroup}><h2>Contato</h2><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{siteConfig.phoneDisplay}</a><a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">{siteConfig.instagramHandle}</a><p>Instagram • WhatsApp</p></address>
        </div>
        <div className={styles.footerBottom}><p>© 2026 Encantarte — Papelaria Personalizada. Todos os direitos reservados.</p></div>
      </footer>
    </div>
  );
}
