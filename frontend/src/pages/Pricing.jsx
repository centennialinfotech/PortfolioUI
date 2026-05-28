import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Pricing() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HEADER */}
      <nav className="relative flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-5 border-b border-white/10">
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer z-50"
        >
          <h1 className="text-2xl sm:text-3xl font-black">
            Centennial
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Portfolio
            </span>
          </h1>

          <p className="text-[10px] sm:text-xs text-white/50 tracking-[3px] uppercase mt-1">
            Build Your Digital Identity
          </p>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => navigate("/")}
            className="text-white/70 hover:text-white transition-colors"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/login?type=demo")}
            className="text-white/70 hover:text-white transition-colors"
          >
            Try Demo
          </button>

          <button
            onClick={() => navigate("/login?type=register")}
            className="text-white/70 hover:text-white transition-colors"
          >
            Use Trial
          </button>

          <button
            onClick={() => navigate("/")}
            className="text-white/70 hover:text-white transition-colors"
          >
            Feature
          </button>

          <button
            onClick={() => navigate("/")}
            className="text-white/70 hover:text-white transition-colors"
          >
            FAQ
          </button>

          <button
            onClick={() => navigate("/login")}
            className="text-white/70 hover:text-white transition-colors"
          >
            Support
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={34} /> : <Menu size={34} />}
        </button>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="absolute top-[90px] right-4 w-[280px] rounded-[30px] border border-white/10 bg-[#0B1220]/95 backdrop-blur-2xl shadow-2xl p-6 flex flex-col gap-5 lg:hidden z-40">
            <button
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className="text-left text-white/80 hover:text-white text-lg transition-colors"
            >
              Home
            </button>

            <button
              onClick={() => {
                navigate("/login?type=demo");
                setMenuOpen(false);
              }}
              className="text-left text-white/80 hover:text-white text-lg transition-colors"
            >
              Try Demo
            </button>

            <button
              onClick={() => {
                navigate("/login?type=register");
                setMenuOpen(false);
              }}
              className="text-left text-white/80 hover:text-white text-lg transition-colors"
            >
              Use Trial
            </button>

            <button
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className="text-left text-white/80 hover:text-white text-lg transition-colors"
            >
              Feature
            </button>

            <button
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className="text-left text-white/80 hover:text-white text-lg transition-colors"
            >
              FAQ
            </button>

            <button
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
              className="text-left text-white/80 hover:text-white text-lg transition-colors"
            >
              Support
            </button>      
          </div>
        )}
      </nav>

      {/* PRICING */}
      <section
        id="pricing"
        className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-24"
      >
        <div className="max-w-[1400px] mx-auto">
          {/* HEADING */}
          <div className="text-center mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black">
              Simple Pricing
            </h2>

            <p className="text-white/70 text-base sm:text-lg md:text-xl mt-5 max-w-2xl mx-auto leading-relaxed">
              Affordable portfolio websites designed to help you stand out.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* BASIC */}
            <div className="bg-white/[0.06] border border-white/10 rounded-[28px] p-6 sm:p-10 backdrop-blur-xl">
              <h3 className="text-2xl sm:text-3xl font-black">Basic</h3>

              <div className="flex items-end gap-2 mt-6">
                <span className="text-5xl sm:text-6xl font-black">$19</span>

                <span className="text-white/70 mb-2">one time</span>
              </div>

              <div className="space-y-4 mt-8 text-white/80">
                <p>✔ Responsive Portfolio</p>
                <p>✔ Free Hosting</p>
                <p>✔ Resume Upload</p>
                <p>✔ Contact Section</p>
                <p>✔ Mobile Friendly</p>
              </div>

              <button
                onClick={() => navigate("/plan/basic")}
                className="w-full mt-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] transition-transform"
              >
                View Plan and Checkout
              </button>
            </div>

            {/* PRO */}
            <div className="relative rounded-[28px] p-[1px] bg-gradient-to-br from-blue-500 to-purple-600">
              <div className="bg-black rounded-[28px] p-6 sm:p-10 h-full">
                <div className="inline-flex px-4 py-2 rounded-full bg-white text-black font-semibold mb-5 text-sm">
                  Most Popular
                </div>

                <h3 className="text-2xl sm:text-3xl font-black">
                  Professional
                </h3>

                <div className="flex items-end gap-2 mt-6">
                  <span className="text-5xl sm:text-6xl font-black">$35</span>

                  <span className="text-white/70 mb-2">one time</span>
                </div>

                <div className="space-y-4 mt-8 text-white/80">
                  <p>✔ Custom Domain</p>
                  <p>✔ Premium Design</p>
                  <p>✔ SEO Optimization</p>
                  <p>✔ Unlimited Projects</p>
                  <p>✔ Priority Support</p>
                </div>

                <button className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 font-semibold hover:opacity-90 transition-opacity">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* BUSINESS */}
            <div className="bg-white/[0.06] border border-white/10 rounded-[28px] p-6 sm:p-10 backdrop-blur-xl md:col-span-2 xl:col-span-1">
              <h3 className="text-2xl sm:text-3xl font-black">Business</h3>

              <div className="flex items-end gap-2 mt-6">
                <span className="text-5xl sm:text-6xl font-black">$49</span>

                <span className="text-white/70 mb-2">one time</span>
              </div>

              <div className="space-y-4 mt-8 text-white/80">
                <p>✔ Advanced Portfolio</p>
                <p>✔ Admin Dashboard</p>
                <p>✔ Blog Support</p>
                <p>✔ Analytics</p>
                <p>✔ Premium Hosting</p>
              </div>

              <button className="w-full mt-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] transition-transform">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
