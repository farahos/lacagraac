const highlights = [
  "Manage customer debts in one place",
  "Add debts and payments quickly",
  "Access everything from mobile and web anytime",
  "Keep your data secure and easy to manage",
];

const stats = [
  {
    title: "Secure Login",
    text: "Each user can sign in with their own account.",
    tone: "emerald",
    icon: ShieldIcon,
  },
  {
    title: "Live Data",
    text: "Web and mobile share the same backend and data.",
    tone: "sky",
    icon: CloudIcon,
  },
  {
    title: "Ready To Install",
    text: "Download the APK in one click and install it right away.",
    tone: "amber",
    icon: PhoneIcon,
  },
];

export default function App() {
  return (
    <div className="page-shell">
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />

      <main className="hero-layout">
        <section className="hero-copy">
          <div className="pill">
            <PhoneIcon />
            Android app is ready
          </div>

          <h1>
            LacagRaac App
            <span>Ku rakib hal click oo keliya</span>
          </h1>

          <p className="lead">
            Landing page-kan waxaa loogu talagalay in macaamiisha ama shaqaalaha ay si degdeg
            ah ugu soo dejiyaan Android app-ka, kadibna uga maareeyaan deymaha, lacag-bixinta,
            iyo xogta macaamiisha meel kasta.
          </p>

          <div className="cta-row">
            <a className="download-btn" href="/downloads/app-release.apk" download>
              <DownloadIcon />
              Download APK
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
        </section>

        <section className="hero-panel">
          <div className="device-card">
            <div className="device-overlay" />

            <div className="device-top card-surface">
              <div>
                <p className="eyebrow">Mobile Version</p>
                <h2>Debt Management App</h2>
              </div>
              <div className="icon-badge">
                <DownloadIcon />
              </div>
            </div>

            <div className="card-surface intro-card">
              <p>
                This APK is built for Android so you can manage customers, debts, payments,
                and transaction updates with ease.
              </p>
            </div>

            <div className="feature-grid">
              {stats.map(({ title, text, icon: Icon, tone }) => (
                <article className={`mini-card ${tone}`} key={title}>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="install-note">
              <p className="install-title">Install Notes</p>
              <p>
                If Android tells you the app was not downloaded from the Play Store, enable
                <strong> Install unknown apps </strong>
                and continue with the installation.
              </p>
            </div>
          </div>
        </section>
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