import trustedBy from "@/assets/trusted-by.png";
import { SectionHeader } from "./Section";

export function TrustedBy() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Trusted By"
          title={<>Engineered for the <span className="text-gradient-emerald">institutions that move nations.</span></>}
          description="From government ministries and defense premises to global enterprises and academic institutions — MiTurtle® powers the entrances that matter."
          center
        />

        <div className="mt-14 overflow-hidden rounded-3xl glass-strong p-2">
          <div className="relative rounded-2xl bg-white py-8 md:py-10 marquee-fade-left">
            <div className="flex w-max animate-marquee">
              <img
                src={trustedBy}
                alt="Organizations trusting MiTurtle® — GMR, BHEL, CPWD, Ministry of Home Affairs, IIM Udaipur, Ashoka University, L&T, IndianOil, Bihar Vidhan Sabha, Pind Baluchi, Hindustan Times, HP, Birla Opus, IIT, PPAP, The Muthoot Group, TATA and more."
                loading="lazy"
                className="h-16 md:h-20 w-auto max-w-none object-contain px-8 md:px-12 opacity-90"
              />
              <img
                src={trustedBy}
                alt=""
                loading="lazy"
                className="h-16 md:h-20 w-auto max-w-none object-contain px-8 md:px-12 opacity-90"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
