import type { Metadata } from "next";
import { FileCheck2 } from "lucide-react";

import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { createPageMetadata } from "@/lib/seo";

const description =
  "Read the terms for using PredictX, including account rules, acceptable use, sports-data limitations, and the AI prediction disclaimer.";

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: "Terms & Conditions",
    description,
    path: "/terms-and-conditions",
    keywords: ["PredictX terms", "PredictX prediction disclaimer"],
  });
}

export default function TermsAndConditionsPage() {
  return (
    <LegalPageShell
      title="Terms & Conditions"
      canonicalPath="/terms-and-conditions"
      dateModified="2026-05-01"
      badge="Last updated: May 2026"
      description="Please read these terms carefully before using PredictX. By using the app, you agree to these terms."
      icon={<FileCheck2 className="h-7 w-7" />}
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using PredictX (&quot;the app&quot;), you agree to be
        bound by these Terms of Service. If you do not agree, do not use the app. These
        terms constitute a legally binding agreement between you and Inside Edge Dev.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years old to use PredictX. By using the app, you confirm
        that you meet this age requirement. If you are under 18, you confirm that a
        parent or guardian has reviewed and agreed to these terms on your behalf.
      </p>

      <h2>3. Your Account</h2>
      <ul>
        <li>You are responsible for maintaining the security of your phone number and OTP codes. Never share your OTP with anyone.</li>
        <li>Your account is personal and non-transferable. You may not share your account with others.</li>
        <li>You are responsible for all activity that occurs under your account.</li>
        <li>Notify us immediately at <a href="mailto:support@predictxsports.com">support@predictxsports.com</a> if you suspect unauthorised access to your account.</li>
      </ul>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the app for any unlawful purpose or in violation of any applicable laws.</li>
        <li>Attempt to reverse engineer, decompile, or extract the source code of the app.</li>
        <li>Use automated tools (bots, scrapers) to access or collect data from the app.</li>
        <li>Attempt to gain unauthorised access to our servers, databases, or systems.</li>
        <li>Distribute, sell, or sublicense the app or its content.</li>
        <li>Use the app to harass, abuse, or harm others.</li>
      </ul>

      <h2>5. Predictions Disclaimer — Important</h2>
      <p>
        Match predictions and AI-generated tips in PredictX are provided for <strong>entertainment
        and informational purposes only</strong>. They are data-driven statistical estimates and
        do not constitute:
      </p>
      <ul>
        <li>Gambling advice or betting tips</li>
        <li>Financial or investment recommendations</li>
        <li>Guarantees of match outcomes</li>
      </ul>
      <p>
        PredictX is not a betting or fantasy sports platform. We expressly disclaim any
        liability for decisions made based on predictions shown in the app.
      </p>

      <h2>6. Sports Data Accuracy</h2>
      <p>
        Live scores, fixtures, standings, and match data are sourced from third-party
        providers (Sportsmonks Cricket API, Cricbuzz, football-data.org). While we strive
        for accuracy, we do not guarantee that data will be error-free, real-time, or
        complete. We are not liable for any inaccuracies in third-party data.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        All content in PredictX — including the app design, logo, UI elements, and original
        text — is owned by Inside Edge Dev and protected by applicable intellectual property
        laws. Cricket data is owned by the respective data providers. You may not reproduce,
        copy, or distribute any part of the app without our written permission.
      </p>

      <h2>8. Account Deletion</h2>
      <p>
        You may delete your account at any time from the Profile screen. Upon deletion, all
        your personal data (phone number, display name, favourite teams) will be permanently
        and irreversibly removed within 7 days. We cannot recover deleted accounts.
      </p>

      <h2>9. Suspension &amp; Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access to PredictX without notice
        if we determine that you have violated these terms, engaged in fraudulent activity,
        or if required by law. You may stop using the app at any time.
      </p>

      <h2>10. Disclaimer of Warranties</h2>
      <p>
        PredictX is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of
        any kind, express or implied. We do not warrant that the app will be uninterrupted,
        error-free, or free of viruses. Your use of the app is at your sole risk.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by applicable law, Inside Edge Dev shall not be liable
        for any indirect, incidental, special, consequential, or punitive damages arising from
        your use of or inability to use PredictX, even if we have been advised of the possibility
        of such damages.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These terms are governed by the laws of India. Any disputes arising from these terms or
        your use of PredictX shall be subject to the exclusive jurisdiction of the courts of India.
      </p>

      <h2>13. Changes to Terms</h2>
      <p>
        We may update these terms from time to time. Significant changes will be communicated via
        an in-app notice. Continued use of PredictX after changes constitutes your acceptance of
        the revised terms.
      </p>

      <h2>14. Contact</h2>
      <p>For any questions about these terms: <a href="mailto:support@predictxsports.com">support@predictxsports.com</a></p>
      <p>Inside Edge Dev, India</p>
    </LegalPageShell>
  );
}
