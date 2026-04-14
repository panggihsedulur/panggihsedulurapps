export default function ComingSoonPage() {
  return (
    <main
      className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-gray-100 bg-cover bg-center"
      // TODO: Ganti URL di bawah dengan gambar background Monumen Soedirman
      style={{
        backgroundImage: "url('hero-bg.png')",
      }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-4xl bg-white/95 rounded-3xl shadow-2xl p-8 md:p-14 text-center mt-12 border-2 border-[#5a9cad]/20 backdrop-blur-md">
        {/* Title Badge */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-max max-w-[90%] px-8 md:px-12 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#5a9cad] via-[#033e4c] to-[#5a9cad] text-white font-bold text-xl md:text-3xl shadow-lg whitespace-nowrap">
          Panggih Sedulur 2026
        </div>

        {/* Subtitle - Coming Soon (Updated Font & Style) */}
        <h2
          className="mt-10 md:mt-12 text-5xl md:text-6xl font-normal font-heading mb-3 text-center min-h-24 text-transparent bg-clip-text bg-gradient-to-r from-[#5a9cad] to-[#033e4c]"
        >
          ~{" "}
          <span className="font-edwardian text-7xl md:text-8xl mr-3  ">C</span>
          oming
          <span className="font-edwardian text-7xl md:text-8xl mr-3 ml-4 ">
            S
          </span>
          oon ~
        </h2>

        {/* Description Text */}
        <p className="mt-8 text-gray-800 leading-relaxed text-sm md:text-lg font-medium max-w-2xl mx-auto">
          Panggih Sedulur adalah pameran interaktif yang dirancang sebagai ruang
          eksplorasi bagi mahasiswa Universitas Jenderal Soedirman untuk
          menemukan Unit Kegiatan Mahasiswa (UKM) dan Paguyuban Daerah yang
          paling sesuai dengan minat, bakat, dan karakter mereka
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="http://wa.me/6281775468854"
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#5a9cad] via-[#033e4c] to-[#5a9cad] text-white font-semibold transition-transform hover:scale-105 shadow-md w-full sm:w-auto justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Chat in WhatsApp
          </a>

          <a
            href="https://www.instagram.com/panggihsedulur/"
            className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#033e4c] text-[#033e4c] font-semibold transition-all hover:bg-[#033e4c] hover:text-white w-full sm:w-auto justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            We&apos;re on Instagram
          </a>
        </div>

        {/* Divider & Footer */}
        <div className="mt-14 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2026 Panggih Sedulur - Universitas Jenderal Soedirman <br />
            Badan Eksekutif Mahasiswa (BEM) Universitas Jenderal Soedirman. All
            rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
