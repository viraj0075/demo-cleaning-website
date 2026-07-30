import { useEffect } from "react";
import ContainerLayout from "../components/ContainerLayout";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | Cleanora Cleaning Services";
  }, []);

  return (
    <div className="pt-32 pb-20 bg-gray-50/50 min-h-screen">
      <ContainerLayout>
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-famic-sm border border-gray-150 max-w-4xl mx-auto">
          <span className="bg-lime-100 text-[#0A1F1C] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 inline-block">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-950 tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm font-semibold mb-8">
            Last updated: July 24, 2026
          </p>

          <div className="space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-950">
                1. Services and Scope
              </h2>
              <p>
                Cleanora connects users with certified, vetted,
                background-checked professional home and office cleaners. All
                appointments booked through this portal are subject to team
                availability and cleaning suitability assessments.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-950">
                2. Cancellation Policy
              </h2>
              <p>
                To provide fair schedules for our professional crew, any changes
                or cancellations to scheduled cleaning appointments must be
                requested at least 24 hours in advance. Cancellations made
                inside the 24-hour window may incur a standard $45 cancellation
                fee.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-950">
                3. Access to Property
              </h2>
              <p>
                Clients must provide reliable access to the premises at the
                scheduled cleaning time. If the cleaning team is locked out and
                cannot gain entry after 20 minutes of arrival, the cleaning
                session will be cancelled and billed as a late lockout fee.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-950">
                4. Satisfaction Guarantee
              </h2>
              <p>
                We stand behind our work. If you are not satisfied with any area
                cleaned by our team, contact us within 24 hours, and we will
                dispatch a team to reclean the specific area free of charge. We
                do not issue cash refunds.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-950">
                5. Liability Limits
              </h2>
              <p>
                While all staff undergo rigorous training and vetting, Cleanora
                is not liable for structural wear-and-tear, or pre-existing
                damages. Our total liability for any certified property damage
                is limited to the value of the cleaning services booked.
              </p>
            </section>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}
