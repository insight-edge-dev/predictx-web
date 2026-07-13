import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | PredictX Sports",
  description:
    "Learn what data PredictX collects, why it is collected, and how it is protected.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      badge="Last updated: May 2026"
      description={'PredictX ("we", "our", "us") is operated by Inside Edge Dev. This policy explains what data we collect, why, and how we protect it.'}
      icon={<ShieldCheck className="h-7 w-7" />}
    >
      <h2>1. Who We Are</h2>
      <p>
        PredictX is a cricket &amp; football companion app providing live scores,
        AI-powered match predictions, standings, and expert analysis. We are
        operated by Inside Edge Dev, India. Contact:{" "}
        <a href="mailto:support@predictx.app">support@predictx.app</a>
      </p>

      <h2>2. Data We Collect</h2>
      <div className="legal-card">
        <strong>Phone Number</strong>
        <p>
          Collected when you sign up or log in. Used solely for authentication
          via one-time password (OTP). Stored securely in our database.
        </p>
      </div>
      <div className="legal-card">
        <strong>Display Name</strong>
        <p>
          Optionally provided after signup. Used to personalise your in-app
          experience. You can change or remove it at any time from your Profile.
        </p>
      </div>
      <div className="legal-card">
        <strong>Favourite Teams</strong>
        <p>
          Teams you select in the app. Used to tailor match highlights and quick
          access. Stored linked to your account.
        </p>
      </div>

      <h2>3. Data We Do NOT Collect</h2>
      <ul>
        <li>Email address</li>
        <li>Precise or approximate location</li>
        <li>Device identifiers or advertising IDs</li>
        <li>Contacts, camera, or microphone data</li>
        <li>Browsing history or app usage analytics</li>
        <li>Payment or financial information</li>
        <li>Any data from users under 13</li>
      </ul>

      <h2>4. How We Use Your Data</h2>
      <div className="legal-table-wrap">
        <table>
          <thead>
            <tr><th>Data</th><th>Purpose</th><th>Shared?</th></tr>
          </thead>
          <tbody>
            <tr><td>Phone number</td><td>Authentication (OTP login)</td><td>OTP provider only (delivery)</td></tr>
            <tr><td>Display name</td><td>In-app personalisation</td><td className="legal-negative">No</td></tr>
            <tr><td>Favourite teams</td><td>Personalised experience</td><td className="legal-negative">No</td></tr>
          </tbody>
        </table>
      </div>

      <h2>5. Third-Party Services</h2>
      <p>
        We use the following third-party services. No personally identifiable
        user data is sent to any service except where stated:
      </p>
      <ul>
        <li><strong>Supabase</strong> — Database and realtime infrastructure (AWS, SOC 2 Type II, data encrypted at rest and in transit). Stores phone number, display name, favourite teams, and authentication tokens.</li>
        <li><strong>JSK Bulk Marketing (jskbulkmarketing.in)</strong> — SMS OTP delivery. Receives your phone number solely to send the login OTP. No data is retained by them beyond delivery.</li>
        <li><strong>Sportsmonks Cricket API</strong> — Cricket match data. No user data is sent.</li>
        <li><strong>Cricbuzz via RapidAPI</strong> — Cricket news content. No user data is sent.</li>
        <li><strong>football-data.org</strong> — Football match data. No user data is sent.</li>
      </ul>

      <h2>6. Authentication &amp; Security</h2>
      <p>
        We use a custom JWT-based authentication system. Your OTP is hashed using
        bcrypt before storage and deleted immediately after successful verification.
        Access tokens expire in 15 minutes. Refresh tokens (90-day validity) are
        stored as SHA-256 hashes — the raw token lives only on your device. All data
        is transmitted over HTTPS (TLS 1.2+).
      </p>

      <h2>7. Data Retention</h2>
      <ul>
        <li><strong>OTP data:</strong> Deleted immediately after verification or after 10-minute expiry.</li>
        <li><strong>Refresh tokens:</strong> Deleted on logout or after 90 days.</li>
        <li><strong>Account data:</strong> Retained until you delete your account.</li>
        <li><strong>Post-deletion:</strong> All data permanently removed within 7 days.</li>
      </ul>

      <h2>8. Your Rights</h2>
      <ul>
        <li><strong>Access:</strong> Your profile screen shows all data we hold about you.</li>
        <li><strong>Correction:</strong> Edit your display name and favourite teams in the Profile screen at any time.</li>
        <li><strong>Deletion:</strong> Tap <em>Delete Account</em> in the Profile screen. This immediately and permanently deletes all your data. Alternatively email <a href="mailto:support@predictx.app">support@predictx.app</a> — requests processed within 7 days.</li>
      </ul>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        PredictX is not directed at children under 13. We do not knowingly collect
        data from children. If you believe a child has provided us data, contact us
        at <a href="mailto:support@predictx.app">support@predictx.app</a> and we will
        delete it promptly.
      </p>

      <h2>10. Predictions Disclaimer</h2>
      <p>
        Match predictions in PredictX are data-driven statistical estimates for
        entertainment and informational purposes only. They are not gambling advice,
        betting tips, or financial recommendations. PredictX is not a betting platform.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this policy to reflect changes in our practices or legal
        requirements. Significant changes will be communicated via an in-app notice.
        Continued use after changes constitutes acceptance.
      </p>

      <h2>12. Contact Us</h2>
      <p>For privacy questions or data requests: <a href="mailto:support@predictx.app">support@predictx.app</a></p>
      <p>Inside Edge Dev, India</p>
    </LegalPageShell>
  );
}
