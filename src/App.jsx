const highlights = [
  "Ku maamul deynta macaamiisha hal meel gudaheeda",
  "Si degdeg ah ugu dar deyn iyo lacag-bixin cusub",
  "Ka gal mobilka ama webka meel kasta oo aad joogto",
  "Xogtaada si ammaan ah u keydi oo si fudud u raadso",
];

const features = [
  {
    title: "Galitaan Ammaan ah",
    text: "Qof kasta wuxuu ku geli karaa akoonkiisa si xogta loo ilaaliyo.",
    tone: "emerald",
    icon: ShieldIcon,
  },
  {
    title: "Xog Toos ah",
    text: "Mobile-ka iyo webku waxay wadaagaan xog isku mid ah isla markiiba.",
    tone: "sky",
    icon: CloudIcon,
  },
  {
    title: "Si Fudud U Rakib",
    text: "APK-ga hal mar soo degso kadibna si toos ah ugu shubo mobile-kaaga.",
    tone: "amber",
    icon: PhoneIcon,
  },
];

const plans = [
  { key: "1m", title: "1 Bile", price: 3, savePercentage: 0 },
  { key: "3m", title: "3 Bile", price: 8, savePercentage: 11 },
  { key: "6m", title: "6 Bile", price: 12, savePercentage: 33 },
  { key: "12m", title: "12 Bile", price: 18, savePercentage: 50 },
  { key: "24m", title: "2 Sano", price: 20, savePercentage: 72 },
];

const whatsappPhone = "252619964951";
const supportPhone = "619964951";

export default function App() {
  return (
    <div className="page-shell">
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />

      <main>
        <section className="hero-layout">
          <div className="hero-copy">
            {/* <div className="pill">
              <PhoneIcon />
              App-ka Android-ka waa diyaar
            </div> */}

            <h1>
              LacagRaac
              <span>App-ka deynta oo fudud oo casri ah</span>
            </h1>

            <p className="lead">
              LacagRaac wuxuu kaa caawinayaa inaad si sahlan u maamusho deymaha,
              lacag-bixinnada, iyo xogta macaamiisha. Haddii aad tahay ganacsade ama
              shaqaale, waxaad xogta ka heli kartaa meel kasta adigoo isticmaalaya mobile
              ama web.
            </p>

            <div className="cta-row">
              <a className="download-btn" href="/downloads/app-release.apk" download>
                <DownloadIcon />
                Dagso Hadda
              </a>
              <a className="ghost-btn" href="#plans">
                Arag Plans-ka
              </a>
            </div>

            <div className="highlights-grid">
              {highlights.map((item) => (
                <article className="highlight-card" key={item}>
                  <CheckIcon />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="device-card">
              <div className="device-overlay" />

              <div className="device-top card-surface">
                <div>
                  <p className="eyebrow">Nooca Mobile-ka</p>
                  <h2>Maamulka Deynta iyo Lacag-bixinta</h2>
                </div>
                <div className="icon-badge">
                  <DownloadIcon />
                </div>
              </div>

              <div className="card-surface intro-card">
                <p>
                  APK-kan waxaa loo dhisay Android si aad ugu maamusho macaamiisha,
                  deymaha, lacag-bixinta, iyo dhaqdhaqaaqyada maalinlaha ah si degdeg ah.
                </p>
              </div>

              <div className="feature-grid">
                {features.map(({ title, text, icon: Icon, tone }) => (
                  <article className={`mini-card ${tone}`} key={title}>
                    <Icon />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>

              {/* <div className="install-note">
                <p className="install-title">Fiiro Gaar Ah</p>
                <p>
                  Haddii Android-ku kuu sheego in app-kan aanu ka imaan Play Store,
                  fur <strong>Install unknown apps</strong> ama <strong>Unknown sources</strong>,
                  kadibna sii wad rakibidda.
                </p>
              </div> */}
            </div>
          </div>
        </section>

        <section className="plans-section" id="plans">
          <div className="section-head">
            <span className="section-tag">Plans</span>
            <h2>Dooro plan-ka kugu habboon</h2>
            <p>
              Isticmaal mid ka mid ah qorshayaashan si aad u sii waddo adeegga LacagRaac.
              Haddii aad rabto inaad iibsato plan, waxaad si toos ah uga wici kartaa ama
              WhatsApp uga la xiriiri kartaa support-ka.
            </p>
          </div>

          <div className="plans-grid">
            {plans.map((plan) => {
              const whatsappLink = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
                `Asc, waxaan rabaa plan ${plan.title} ee LacagRaac.`
              )}`;
              const dialerLink = `tel:*712*${supportPhone}*${String(plan.price)}#`;

              return (
                <article className="plan-card" key={plan.key}>
                  <div className="plan-top">
                    <div>
                      <h3>{plan.title}</h3>
                      <p>
                        {plan.savePercentage === 0
                          ? "Kayd ma leh"
                          : `Waxaad kaydsanaysaa ${plan.savePercentage}%`}
                      </p>
                    </div>
                    <strong>${plan.price}</strong>
                  </div>

                  <div className="plan-note">
                    Plan-kan wuxuu ku habboon yahay ganacsiyada doonaya adeeg deggan,
                    fudud, oo la isku halayn karo.
                  </div>

                  <div className="plan-actions">
                    <a className="plan-btn filled" href={dialerLink}>
                      <CallIcon />
                      Gado Plan
                    </a>
                    <a className="plan-btn outline" href={whatsappLink} target="_blank" rel="noreferrer">
                      <ChatIcon />
                      La xiriir WhatsApp
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-brand">
            <h3>LacagRaac</h3>
            <p>
              App casri ah oo kaa caawinaya maamulka deynta, lacag-bixinta, iyo xogta
              macaamiisha si fudud oo ammaan ah.
            </p>
          </div>

          <div className="footer-links">
            <a href="/downloads/app-release.apk" download>
              Dagso Hadda
            </a>
            <a href={`https://wa.me/${whatsappPhone}`} target="_blank" rel="noreferrer">
              WhatsApp Support
            </a>
            <a href={`tel:${supportPhone}`}>Wac Support</a>
          </div>

          <p className="footer-copy">� 2026 LacagRaac. Dhammaan xuquuqdu way dhowran tahay.</p>
        </footer>
      </main>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v10.2l3.4-3.4 1.4 1.4-5.8 5.8-5.8-5.8 1.4-1.4 3.4 3.4V3H12Z" />
      <path d="M4 19h16v2H4z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 5 5v6c0 5 3.4 9.6 7 11 3.6-1.4 7-6 7-11V5l-7-3Zm0 4.1 4.5 1.9v3c0 3.5-2.2 6.8-4.5 8.1-2.3-1.3-4.5-4.6-4.5-8.1v-3L12 6.1Zm-1 8.8-2.1-2.1-1.4 1.4 3.5 3.5 5.5-5.5-1.4-1.4-4.1 4.1Z" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 18a4 4 0 1 1 .5-8A5.5 5.5 0 0 1 18 8.5 3.5 3.5 0 1 1 18.5 18H7Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 3v13h10V5H7Zm4 15h2v1h-2v-1Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1.1 14.5-4-4 1.4-1.4 2.6 2.6 5-5 1.4 1.4Z" />
    </svg>
  );
}

function CallIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.2.56 3.4.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.3.56 3.4a1 1 0 0 1-.24 1l-2.2 2.4Z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v7A2.5 2.5 0 0 1 17.5 15H9l-4.5 4v-4.2A2.5 2.5 0 0 1 4 12.5v-7Z" />
    </svg>
  );
}