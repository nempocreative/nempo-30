import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { CommunityApplicationForm } from "@/components/community-application-form";
import { CheckCircle2, Users } from "lucide-react";

export default function RecruitmentPage() {
  return (
    <Layout>
      <SEO
        title="Recruitment — Gabung Nempo Community"
        description="Isi formulir open recruitment Nempo Community. Terbuka untuk pelajar, mahasiswa, dan umum tanpa biaya pendaftaran."
        keywords="recruitment Nempo, open recruitment, komunitas anak muda Jawa Barat, gabung komunitas"
        path="/recruitment"
      />

      <main className="min-h-screen overflow-hidden bg-[#f5f5ff] text-[#37215b]">
        {/* ===== HEADER ===== */}
        <section className="relative border-b border-[#dce4fb] bg-[#eaf0ff]">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#d85da4]/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#6e4bb4]/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e5d3e6] bg-white/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a62f78]">
              <Users className="h-3.5 w-3.5" />
              Open recruitment
            </span>
            <h1 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] text-[#37215b] sm:text-4xl lg:text-5xl">
              Gabung bareng{" "}
              <span className="text-[#a62f78]">Nempo Community.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#62677c] sm:text-base">
              Isi formulir singkat ini dan ceritakan minatmu. Tim kami akan
              menghubungimu lewat WhatsApp untuk langkah berikutnya.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {[
                "Terbuka untuk pelajar, mahasiswa, dan umum",
                "Tanpa biaya pendaftaran",
                "Boleh daftar lebih dari satu minat nanti",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm font-semibold text-[#3f3564]"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#a62f78]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== FORM ===== */}
        <section id="gabung" className="scroll-mt-24 border-b border-[#d9daf3]">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <CommunityApplicationForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}
