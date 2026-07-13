import type { Metadata } from "next";
import { AlertTriangle, Database, Mail, MessageCircle, Smartphone, Trash2 } from "lucide-react";

import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Delete Account | PredictX Sports",
  description: "Permanently delete your PredictX account and associated data.",
  alternates: { canonical: "/delete-account" },
};

const deletedData = [
  "Phone number",
  "Display name",
  "Favourite teams",
  "Login sessions & tokens",
  "OTP history",
  "App preferences",
];

export default function DeleteAccountPage() {
  return (
    <LegalPageShell
      title="Delete Your Account"
      description="You can permanently delete your PredictX account and all associated data at any time."
      icon={<Trash2 className="h-7 w-7" />}
      tone="danger"
    >
      <div className="legal-warning">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
        <p>
          <strong>This action is permanent and cannot be undone.</strong> Once deleted,
          your account, phone number, display name, and favourite teams cannot be recovered.
        </p>
      </div>

      <div className="legal-card legal-card-spacious">
        <span className="legal-badge legal-badge-success">✓ Recommended — Instant</span>
        <h2 className="legal-card-heading"><Smartphone className="h-5 w-5" /> Method 1: Delete from the App</h2>
        <p>The fastest way to delete your account. Works instantly — no waiting period.</p>
        <ol className="legal-steps">
          <li><span>1</span><p>Open the <strong>PredictX app</strong> on your phone</p></li>
          <li><span>2</span><p>Tap the <strong>Profile</strong> tab (bottom navigation)</p></li>
          <li><span>3</span><p>Scroll to the bottom of the Profile screen</p></li>
          <li><span>4</span><p>Tap <strong>&quot;Delete Account&quot;</strong></p></li>
          <li><span>5</span><p>Confirm the deletion in the popup — your account is permanently deleted immediately</p></li>
        </ol>
      </div>

      <div className="legal-card legal-card-spacious">
        <span className="legal-badge">Via Email — Processed within 7 days</span>
        <h2 className="legal-card-heading"><Mail className="h-5 w-5" /> Method 2: Request by Email</h2>
        <p>If you no longer have access to the app, you can request account deletion by email. Include the phone number associated with your account.</p>
        <p>Send your request to <a href="mailto:support@predictx.app">support@predictx.app</a> with the subject line <strong>&quot;Delete My Account&quot;</strong> and your registered phone number in the message body.</p>
        <a
          className="legal-button"
          href="mailto:support@predictx.app?subject=Delete%20My%20Account&body=Please%20delete%20my%20PredictX%20account.%0A%0AMy%20registered%20phone%20number%3A%20%2B91"
        >
          <Mail className="h-4 w-4" /> Send Deletion Request
        </a>
      </div>

      <div className="legal-card legal-card-spacious">
        <h2 className="legal-card-heading"><Database className="h-5 w-5" /> What Data Gets Deleted</h2>
        <p>When you delete your account, the following data is permanently removed:</p>
        <div className="legal-table-wrap">
          <table>
            <thead><tr><th>Data Type</th><th>What Happens</th><th>Timeframe</th></tr></thead>
            <tbody>
              {deletedData.map((item) => (
                <tr key={item}>
                  <td>{item}</td>
                  <td className="legal-negative">Permanently deleted</td>
                  <td>Immediately</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="legal-note">We do not retain any personal data after account deletion. No data is archived or kept in backup systems beyond 7 days.</p>
      </div>

      <div className="legal-card legal-card-spacious">
        <h2 className="legal-card-heading"><MessageCircle className="h-5 w-5" /> Questions?</h2>
        <p>If you have any questions about account deletion or your data, contact us at <a href="mailto:support@predictx.app">support@predictx.app</a>. We typically respond within 24 hours.</p>
      </div>
    </LegalPageShell>
  );
}
