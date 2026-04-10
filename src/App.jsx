import { appConfig } from "./config";

const { appName } = appConfig;
const contactEmail = "farahugaas0@gmail.com";

export default function App() {
  return (
    <div className="policy-page">
      <div className="policy-glow policy-glow-one" />
      <div className="policy-glow policy-glow-two" />

      <main className="policy-shell">
        <section className="policy-card">
          <p className="policy-badge">Google Play Privacy Policy</p>
          <h1 className="policy-title">{appName} Privacy Policy</h1>
          <p className="policy-date">Last Updated: April 10, 2026</p>

          <p className="policy-lead">
            This Privacy Policy explains how {appName} collects, uses, stores, and shares
            information when you use our mobile application and related services. By using
            the app, you agree to the practices described in this policy.
          </p>

          <section className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>Depending on how you use the app, we may collect the following information:</p>
            <ul>
              <li>
                <strong>Account Information:</strong> such as your name, phone number,
                username, and login details.
              </li>
              <li>
                <strong>Business and Customer Records:</strong> such as customer names,
                balances, debt records, payment records, notes, and related transaction
                details that you choose to enter into the app.
              </li>
              <li>
                <strong>Device and Technical Information:</strong> such as device model,
                operating system, app version, IP address, and diagnostic or crash data.
              </li>
              <li>
                <strong>Usage Information:</strong> such as how you interact with features,
                pages, and services inside the app.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Information</h2>
            <ul>
              <li>To create and manage your account.</li>
              <li>To provide debt tracking, payment management, and customer record features.</li>
              <li>To improve app performance, reliability, and security.</li>
              <li>To respond to support requests and communicate important service updates.</li>
              <li>To detect, prevent, and investigate fraud, abuse, or unauthorized access.</li>
              <li>To comply with legal obligations where applicable.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. How Information Is Shared</h2>
            <p>
              We do not sell your personal information. We may share information only in the
              following situations:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> with vendors or providers that help us host,
                maintain, secure, or support the app.
              </li>
              <li>
                <strong>Legal Requirements:</strong> when disclosure is required by law,
                regulation, court order, or legal process.
              </li>
              <li>
                <strong>Business Protection:</strong> when necessary to protect our users, our
                services, or our legal rights.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Data Retention</h2>
            <p>
              We keep personal and business data only for as long as it is necessary to provide
              the service, maintain account functionality, resolve disputes, enforce agreements,
              and comply with legal obligations.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Data Security</h2>
            <p>
              We use reasonable administrative, technical, and organizational measures to help
              protect your information. However, no method of storage or transmission over the
              internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Your Choices and Rights</h2>
            <p>You may have the right to request access to, correction of, or deletion of your data.</p>
            <p>
              If you would like to update or delete your information, please contact us at{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Children's Privacy</h2>
            <p>
              {appName} is not directed to children under the age of 13, and we do not knowingly
              collect personal information from children.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Third-Party Services</h2>
            <p>
              The app may rely on third-party tools or infrastructure to operate properly, such
              as hosting, analytics, crash reporting, authentication, or cloud services. Those
              providers may process data on our behalf only as needed to support the app.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we make changes, we will
              update the "Last Updated" date on this page. Continued use of the app after changes
              become effective means you accept the updated policy.
            </p>
          </section>

          <section className="policy-section policy-contact">
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions, requests, or concerns about this Privacy Policy or how
              data is handled, please contact us:
            </p>
            <p>
              <strong>Email:</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}
