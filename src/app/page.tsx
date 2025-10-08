import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-b from-green-100 via-green-50 to-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-green-900">
          How much is your land worth in carbon credits?
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-800">
          We help landowners estimate their carbon credit income and guide them toward enrollment — with clarity, trust, and zero BS.
        </p>
        <a
          href="#form-section"
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-semibold shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-105"
        >
          Get your free carbon income report
        </a>
      </section>

      {/* Benefits Section */}
      <section className="py-20 text-center bg-green-50 border-t border-green-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-900">Why Landowners Use Us</h2>
        <ul className="space-y-5 text-lg text-gray-800 max-w-2xl mx-auto">
          <li>✅ Transparent payout estimates — no vague promises</li>
          <li>✅ Simple dashboard to show next steps</li>
          <li>✅ No sales pressure — just clarity</li>
        </ul>
      </section>

      {/* Trust Section */}
      <section className="py-20 text-center bg-white border-t border-green-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-900">Built for the new era of carbon markets</h2>
        <ul className="space-y-5 text-lg text-gray-800 max-w-2xl mx-auto">
          <li>Backed by real data and proven methodologies</li>
          <li>Post-crash, post-hype — built for trust</li>
          <li>You’re always in control of your land</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-600 border-t border-green-100 bg-green-50">
        © 2025 <span className="font-semibold text-green-800">Made with 🧀 in Wisconsin</span>
      </footer>
    </main>
  );
}

