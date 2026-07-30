import { useEffect } from "react";
import ContainerLayout from "../components/ContainerLayout";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | Cleanora Cleaning Services";
  }, []);

  return (
    <div className="pt-32 pb-20 bg-gray-50/50 min-h-screen">
      <ContainerLayout>
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-famic-sm border border-gray-150 max-w-4xl mx-auto">
          <span className="bg-lime-100 text-[#0A1F1C] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 inline-block">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-950 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm font-semibold mb-8">
            Last updated: July 24, 2026
          </p>

          <div className="space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-950">
                1. Information We Collect
              </h2>
              <p>
                We collect personal information that you voluntarily provide to
                us when you register on our website, request a cleaning quote,
                or schedule an appointment. This information may include your
                name, email address, phone number, and physical billing/cleaning
                address.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-950">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to provide and maintain our
                professional cleaning services, communicate updates, send
                service reminders, issue invoices, and process payments
                securely. We do not sell or share your personal data with third
                parties for promotional purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-950">
                3. Cookies and Tracking
              </h2>
              <p>
                Our site uses essential security and analytics cookies to
                enhance user experience and understand how visitors interact
                with our features. You can configure your browser to reject
                cookies, though some features of the booking portal may not
                function properly.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-950">
                4. Vetted Security
              </h2>
              <p>
                We enforce enterprise-grade electronic and operational security
                protocols to protect your billing details and address
                information. All online financial transactions are encrypted
                using secure socket layer technology (SSL).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-950">
                5. Contact Support
              </h2>
              <p>
                If you have questions about this policy or want to update/remove
                your account information, please contact our legal team at:
              </p>
              <p className="font-semibold text-gray-950">
                Email: support@cleanora.com <br />
                Address: 100 Clean Street, Suite 400, Chicago, IL 60601
              </p>
            </section>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}
