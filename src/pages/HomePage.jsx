import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import API from "../lib/api";
import { saveSelectedPlan } from "../lib/planSelection";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { toast } from "sonner";
import { formatCurrencyINR } from "../lib/utils";
import {
  Buildings,
  Lightning,
  Target,
  Robot,
  ChartBar,
  WhatsappLogo,
  Megaphone,
  Image,
  ArrowRight,
  CheckCircle,
  Star,
  Crown,
  CaretDown,
  Info,
  Play,
  Sparkle,
  RocketLaunch,
  Users,
  TrendUp,
  Globe,
  Storefront,
} from "@phosphor-icons/react";
import headerLogo from "../assets/header_logo.png";

const HERO_IMG = "https://images.unsplash.com/photo-1578439297699-eb414262c2de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZWFsJTIwZXN0YXRlJTIwYnVpbGRpbmclMjBsdXh1cnl8ZW58MHx8fHwxNzc1NTQzMDA5fDA&ixlib=rb-4.1.0&q=85&w=1200";
const BUILDING_IMG_1 = "https://images.unsplash.com/photo-1580785692949-7b5b7fd83d25?w=800&q=80";
const BUILDING_IMG_2 = "https://images.unsplash.com/photo-1580403983530-b1c31a3eecce?w=800&q=80";
const DASHBOARD_IMG = "https://images.unsplash.com/photo-1660144425546-b07680e711d1?w=800&q=80";
const ANALYTICS_IMG = "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80";
const NIGHT_TOWER_IMG = "https://images.unsplash.com/photo-1718257515626-3dd78dcf206b?w=800&q=80";

const FEATURES = [
  { icon: Lightning, title: "AI Strategy", desc: "GPT-powered marketing strategies tailored for your project in seconds.", detail: "ICP, messaging, funnels, and channel plan.", span: "md:col-span-4 lg:col-span-5", bg: "bg-gradient-to-br from-blue-500 to-blue-600", accent: "text-white", shadow: "shadow-blue-500/25" },
  { icon: Target, title: "Landing Pages", desc: "Auto-generate conversion-optimized landing pages with AI copy and layouts.", detail: "Mobile-ready sections, forms, and CTA blocks.", span: "md:col-span-4 lg:col-span-7", bg: "bg-gradient-to-br from-emerald-500 to-emerald-600", accent: "text-white", shadow: "shadow-emerald-500/25" },
  { icon: Image, title: "Ad Creatives", desc: "Generate stunning ad images and copy with GPT Image 1. A/B test variants automatically.", detail: "Creative variants for Meta, Google, and WhatsApp.", span: "md:col-span-4 lg:col-span-7", bg: "bg-gradient-to-br from-violet-500 to-violet-600", accent: "text-white", shadow: "shadow-violet-500/25" },
  { icon: Robot, title: "Lead Capture", desc: "Capture leads from landing pages, forms, and ads. Bulk import/export via CSV.", detail: "Unified lead inbox with source-level attribution.", span: "md:col-span-4 lg:col-span-5", bg: "bg-gradient-to-br from-amber-500 to-orange-500", accent: "text-white", shadow: "shadow-amber-500/25" },
  { icon: WhatsappLogo, title: "WhatsApp AI Agent", desc: "Automate follow-ups and qualify leads with an AI-powered WhatsApp chatbot.", detail: "Instant replies, qualification, and visit intent capture.", span: "md:col-span-4 lg:col-span-4", bg: "bg-gradient-to-br from-green-500 to-green-600", accent: "text-white", shadow: "shadow-green-500/25" },
  { icon: Megaphone, title: "Campaign Automation", desc: "Launch and manage Meta & Google Ads campaigns directly from your dashboard.", detail: "Budget controls, audience targeting, and sync.", span: "md:col-span-4 lg:col-span-4", bg: "bg-gradient-to-br from-orange-500 to-red-500", accent: "text-white", shadow: "shadow-orange-500/25" },
  { icon: ChartBar, title: "Analytics", desc: "Track CTR, CPL, conversions, and ROI across all channels in real-time.", detail: "Live dashboards for spend, leads, and outcomes.", span: "md:col-span-4 lg:col-span-4", bg: "bg-gradient-to-br from-rose-500 to-pink-500", accent: "text-white", shadow: "shadow-rose-500/25" },
];

const STEPS = [
  { num: "01", title: "Add Your Project", desc: "Enter property details — location, type, pricing, amenities.", icon: Buildings, color: "from-blue-500 to-cyan-500" },
  { num: "02", title: "AI Generates Everything", desc: "Strategy, landing pages, ad creatives, and campaign settings — all AI-generated.", icon: Sparkle, color: "from-violet-500 to-purple-500" },
  { num: "03", title: "Launch & Convert", desc: "Go live with campaigns, capture leads, and convert via WhatsApp AI agent.", icon: RocketLaunch, color: "from-emerald-500 to-green-500" },
];

// Stats hidden until we have real, audited numbers from real customers.
// Re-enable this array (and the matching section in the JSX below) once
// we have permission to publicly cite specific projects + lead totals.
// const STATS = [
//   { value: "500+", label: "Projects Launched", icon: Buildings },
//   { value: "10M+", label: "Leads Generated", icon: Users },
//   { value: "85%", label: "Conversion Rate", icon: TrendUp },
//   { value: "50+", label: "Cities Covered", icon: Globe },
// ];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, className = "", delay = 0, direction = "up" }) {
  const [ref, visible] = useInView();
  const transforms = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(40px)",
    right: "translateX(-40px)",
    scale: "scale(0.9)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0) scale(1)" : transforms[direction],
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function FloatingCard({ children, className = "", delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) rotateX(0)" : "translateY(60px) rotateX(15deg)",
        transitionDelay: `${delay}s`,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {children}
    </div>
  );
}

function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView();
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const end = numericValue;
    const incrementTime = duration / end;
    const timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [visible, numericValue, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function Floating3DElement({ children, className = "", duration = 3 }) {
  return (
    <div
      className={`${className} animate-float`}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
      }}
    >
      {children}
    </div>
  );
}

function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}

function GradientOrb({ className = "", color = "blue" }) {
  const colors = {
    blue: "from-blue-400 to-blue-600",
    purple: "from-purple-400 to-violet-600",
    emerald: "from-emerald-400 to-green-600",
    orange: "from-orange-400 to-red-500",
  };
  return (
    <div className={`absolute rounded-full bg-gradient-to-br ${colors[color]} blur-3xl opacity-30 animate-pulse ${className}`} />
  );
}

export default function HomePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bookDemoOpen, setBookDemoOpen] = useState(false);
  const [submittingDemo, setSubmittingDemo] = useState(false);
  const [demoForm, setDemoForm] = useState({
    full_name: "",
    company_name: "",
    designation: "",
    email: "",
    phone: "",
    city: "",
    project_type: "",
    project_count: "",
    monthly_ad_budget: "",
    preferred_contact_time: "",
    message: "",
    source: "homepage",
  });

  useEffect(() => {
    API.get("/subscription/plans").then(({ data }) => setPlans(data.plans)).catch(() => {});
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const planIcons = {
    plan_starter: Lightning,
    plan_growth: Buildings,
    plan_enterprise: Crown,
    plan_agency: Storefront,
  };
  const planAccents = {
    plan_starter: { bg: "bg-gradient-to-br from-blue-500 to-blue-600", text: "text-blue-600", btn: "bg-blue-600 hover:bg-blue-700", ring: "ring-blue-100" },
    plan_growth: { bg: "bg-gradient-to-br from-emerald-500 to-emerald-600", text: "text-emerald-600", btn: "bg-emerald-600 hover:bg-emerald-700", ring: "ring-emerald-100" },
    plan_enterprise: { bg: "bg-gradient-to-br from-violet-500 to-violet-600", text: "text-violet-600", btn: "bg-violet-600 hover:bg-violet-700", ring: "ring-violet-100" },
    plan_agency: { bg: "bg-gradient-to-br from-amber-500 to-orange-600", text: "text-amber-700", btn: "bg-amber-600 hover:bg-amber-700", ring: "ring-amber-100" },
  };

  const updateDemoField = (key, value) => {
    setDemoForm((prev) => ({ ...prev, [key]: value }));
  };

  const submitDemoRequest = async (e) => {
    e.preventDefault();
    if (!demoForm.full_name || !demoForm.company_name || !demoForm.email || !demoForm.phone) {
      toast.error("Please fill name, company, email, and phone");
      return;
    }
    setSubmittingDemo(true);
    try {
      await API.post("/demo-requests", demoForm);
      toast.success("Demo request received. Our team will contact you soon.");
      setBookDemoOpen(false);
      setDemoForm({
        full_name: "",
        company_name: "",
        designation: "",
        email: "",
        phone: "",
        city: "",
        project_type: "",
        project_count: "",
        monthly_ad_budget: "",
        preferred_contact_time: "",
        message: "",
        source: "homepage",
      });
    } catch (err) {
      const detail = err?.response?.data?.detail || "Failed to submit demo request";
      toast.error(typeof detail === "string" ? detail : "Failed to submit demo request");
    } finally {
      setSubmittingDemo(false);
    }
  };

  return (
    <div data-testid="home-page" className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(2deg); } }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); } 50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-gradient { background-size: 200% 200%; animation: gradient-shift 3s ease infinite; }
        .animate-shimmer::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); animation: shimmer 2s infinite; }
        .perspective-1000 { perspective: 1000px; }
        .transform-3d { transform-style: preserve-3d; }
        .rotate-y-12 { transform: rotateY(12deg); }
        .rotate-y-neg-12 { transform: rotateY(-12deg); }
        .hover-3d:hover { transform: translateZ(20px) scale(1.02); }
        .glass { backdrop-filter: blur(20px); background: rgba(255,255,255,0.8); }
        .glass-dark { backdrop-filter: blur(20px); background: rgba(15,23,42,0.8); }
      `}</style>

      <header data-testid="home-header" className="fixed top-0 inset-x-0 z-50 glass border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <img src={headerLogo} alt="MakanAI" className="h-10 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollTo("features")} className="transition-all hover:text-blue-600 hover:scale-105">Features</button>
            <button onClick={() => scrollTo("how-it-works")} className="transition-all hover:text-blue-600 hover:scale-105">How It Works</button>
            {/* Pricing hidden for standalone marketing phase */}
            {/* <button onClick={() => scrollTo("pricing")} className="transition-all hover:text-blue-600 hover:scale-105">Pricing</button> */}
          </nav>
          <div className="flex items-center gap-3">
            {/* Dashboard hidden for standalone marketing phase */}
            {/* {user ? (
              <Button data-testid="header-dashboard-btn" onClick={() => navigate("/app/dashboard")} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm h-9 px-5 shadow-lg shadow-blue-500/25 transition-all hover:scale-105">
                Dashboard
              </Button>
            ) : ( */}
              <>
                {/* Login hidden for standalone marketing phase */}
                {/* <Link to="/login" data-testid="header-login-btn" className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-blue-600 transition-all hover:scale-105">
                  Sign in
                </Link> */}
                <Button data-testid="header-get-started-btn" onClick={() => setBookDemoOpen(true)} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm h-9 px-5 shadow-lg shadow-blue-500/25 transition-all hover:scale-105">
                  Get Started
                </Button>
              </>
            {/* )} */}
            <button data-testid="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-slate-600">
              <CaretDown size={20} className={`transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200/50 glass px-4 py-3 space-y-2">
            <button onClick={() => scrollTo("features")} className="block w-full text-left text-sm py-2 text-slate-600 hover:text-blue-600">Features</button>
            <button onClick={() => scrollTo("how-it-works")} className="block w-full text-left text-sm py-2 text-slate-600 hover:text-blue-600">How It Works</button>
            {/* Pricing hidden for standalone marketing phase */}
            {/* <button onClick={() => scrollTo("pricing")} className="block w-full text-left text-sm py-2 text-slate-600 hover:text-blue-600">Pricing</button> */}
          </div>
        )}
      </header>

      <section data-testid="hero-section" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-white" />
          <GradientOrb className="w-[600px] h-[600px] -top-48 -right-48" color="blue" />
          <GradientOrb className="w-[400px] h-[400px] top-1/2 -left-32" color="purple" />
          <GradientOrb className="w-[300px] h-[300px] bottom-0 right-1/4" color="emerald" />
          <ParticleBackground />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative z-10">
              <FadeIn delay={0}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6 animate-pulse">
                  <Sparkle size={16} weight="fill" className="text-blue-600" />
                  <span className="text-xs uppercase tracking-[0.15em] font-bold text-blue-600">AI-Powered Real Estate Marketing</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.9] text-slate-900 mb-6">
                  Turn Projects into{" "}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                      Conversions.
                    </span>
                    <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                      <path d="M0 7 Q50 0, 100 7 T200 7" stroke="url(#gradient)" strokeWidth="3" fill="none" className="animate-pulse" />
                      <defs><linearGradient id="gradient"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#8b5cf6" /></linearGradient></defs>
                    </svg>
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                  AI-generated landing pages, ad creatives, campaign automation, and WhatsApp lead nurturing — built for real estate builders who want <span className="font-semibold text-slate-800">results, not busywork.</span>
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button
                    data-testid="hero-get-started-btn"
                    onClick={() => setBookDemoOpen(true)}
                    className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-14 px-8 text-base font-semibold shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Book Demo
                      <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                  <Button
                    data-testid="hero-features-btn"
                    variant="outline"
                    onClick={() => scrollTo("features")}
                    className="group h-14 px-8 text-base font-medium border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:scale-105"
                  >
                    <Play size={18} weight="fill" className="mr-2 text-blue-600" />
                    See How It Works
                  </Button>
                </div>
              </FadeIn>
            </div>

            <div className="relative perspective-1000 hidden lg:block">
              <Floating3DElement className="relative" duration={4}>
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-200/50 transform-3d"
                  style={{
                    transform: `rotateY(${mousePosition.x * 0.3}deg) rotateX(${-mousePosition.y * 0.3}deg)`,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  <img src={DASHBOARD_IMG} alt="AI Dashboard" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-dark rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                          <TrendUp size={16} weight="bold" className="text-white" />
                        </div>
                        <span className="text-white font-semibold">Live Analytics</span>
                      </div>
                      <div className="text-emerald-400 text-2xl font-bold">+127% Conversions</div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -left-16 top-1/4 w-48 rounded-xl overflow-hidden shadow-xl shadow-blue-500/20 border border-white/50 transform rotate-y-neg-12"
                  style={{
                    animation: "float 5s ease-in-out infinite",
                    animationDelay: "0.5s",
                  }}
                >
                  <img src={BUILDING_IMG_1} alt="Luxury Property" className="w-full h-32 object-cover" />
                  <div className="bg-white p-3">
                    <div className="text-xs font-semibold text-slate-800">Luxury Villa</div>
                    <div className="text-[10px] text-emerald-600 font-medium">₹2.5 Cr • 45 Leads</div>
                  </div>
                </div>

                <div
                  className="absolute -right-8 bottom-1/4 bg-white rounded-xl p-4 shadow-xl shadow-violet-500/20 border border-slate-100"
                  style={{
                    animation: "float 4s ease-in-out infinite",
                    animationDelay: "1s",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                      <Robot size={14} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">AI Agent</span>
                  </div>
                  <div className="text-xl font-bold text-slate-900">89%</div>
                  <div className="text-[10px] text-slate-500">Response Rate</div>
                </div>

                <div className="absolute -top-4 -right-4 w-16 h-16 animate-spin" style={{ animationDuration: "10s" }}>
                  <Sparkle size={24} weight="fill" className="text-amber-400 absolute top-0 right-0" />
                  <Sparkle size={16} weight="fill" className="text-blue-400 absolute bottom-0 left-0" />
                </div>
              </Floating3DElement>
            </div>
          </div>
        </div>
      </section>

      {/*
        Stats section hidden pre-launch — numbers like "500+ Projects Launched",
        "10M+ Leads", "85% Conversion Rate", "50+ Cities" were placeholder values.
        Showing fabricated metrics on a public marketing site is a misleading-advertising
        risk under the Indian Consumer Protection Act 2019 and a Meta App Review red flag.
        Re-enable this section (and the STATS array above) once we have real, audited
        numbers from named pilot customers we have permission to cite.
      */}
      {/*
      <section className="relative py-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon size={24} weight="duotone" className="text-blue-400" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      */}

      <section id="features" data-testid="features-section" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
        <GradientOrb className="w-[500px] h-[500px] -top-64 -left-64" color="blue" />
        <GradientOrb className="w-[400px] h-[400px] -bottom-32 -right-32" color="purple" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Lightning size={16} weight="fill" className="text-blue-600" />
              <span className="text-xs uppercase tracking-[0.15em] font-bold text-blue-600">Everything You Need</span>
            </div>
            <h2 className="font-['Outfit'] text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              One platform. <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Full-stack marketing.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to market, capture, and convert real estate leads — powered by AI.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-5">
            {FEATURES.map((f, i) => (
              <FloatingCard key={f.title} className={f.span} delay={i * 0.08}>
                <div
                  data-testid={`feature-${f.title.toLowerCase().replace(/\s/g, "-")}`}
                  className={`group h-full bg-white border border-slate-200/50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${f.shadow} hover:border-transparent cursor-pointer relative overflow-hidden`}
                >
                  <div className={`absolute inset-0 ${f.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className={`w-14 h-14 rounded-xl ${f.bg} flex items-center justify-center mb-6 shadow-lg ${f.shadow} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <f.icon size={26} weight="bold" className={f.accent} />
                  </div>
                  <h3 className="font-['Outfit'] text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                  <div className="mt-4 text-xs font-medium text-slate-500">
                    {f.detail}
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" data-testid="how-it-works-section" className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
              <RocketLaunch size={16} weight="fill" className="text-emerald-600" />
              <span className="text-xs uppercase tracking-[0.15em] font-bold text-emerald-600">Simple 3-Step Flow</span>
            </div>
            <h2 className="font-['Outfit'] text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              From project brief to <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">live campaigns</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {STEPS.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.15} direction="scale">
                <div data-testid={`step-${s.num}`} className="relative group">
                  <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">
                    <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <span className="font-['Outfit'] text-2xl font-black text-white">{s.num}</span>
                    </div>
                    <div className="mt-8 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} bg-opacity-10 flex items-center justify-center`}>
                        <s.icon size={32} weight="duotone" className="text-slate-700" />
                      </div>
                    </div>
                    <h3 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-3">{s.title}</h3>
                    <p className="text-base text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2">
                      <div className="flex items-center gap-1">
                        <div className="w-8 lg:w-12 h-0.5 bg-gradient-to-r from-slate-300 to-slate-200" />
                        <ArrowRight size={20} className="text-slate-300" />
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={NIGHT_TOWER_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
                <Image size={16} weight="fill" className="text-blue-400" />
                <span className="text-xs uppercase tracking-[0.15em] font-bold text-blue-400">AI-Powered Creatives</span>
              </div>
              <h2 className="font-['Outfit'] text-3xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Generate stunning ad creatives in <span className="text-blue-400">seconds</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Our AI creates platform-optimized ad images and copy for Meta, Google, and WhatsApp — all tailored to your property&apos;s unique selling points.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Meta Ads", desc: "1080x1080, Stories" },
                  { label: "Google Ads", desc: "Display, Responsive" },
                  { label: "Landing Pages", desc: "Conversion optimized" },
                  { label: "WhatsApp", desc: "Share cards" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-white font-semibold mb-1">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative perspective-1000">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                      <img src={BUILDING_IMG_1} alt="Property 1" className="w-full h-48 object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                      <img src={ANALYTICS_IMG} alt="Analytics" className="w-full h-32 object-cover" />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                      <img src={BUILDING_IMG_2} alt="Property 2" className="w-full h-32 object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                      <img src={HERO_IMG} alt="Hero" className="w-full h-48 object-cover" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2">
                  <Sparkle size={18} weight="fill" />
                  <span className="font-semibold">AI Generated</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing hidden for standalone marketing phase */}
      {/* <section id="pricing" data-testid="pricing-section" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
        <GradientOrb className="w-[600px] h-[600px] -top-48 left-1/2 -translate-x-1/2" color="blue" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full mb-4">
              <Crown size={16} weight="fill" className="text-violet-600" />
              <span className="text-xs uppercase tracking-[0.15em] font-bold text-violet-600">Transparent Pricing</span>
            </div>
            <h2 className="font-['Outfit'] text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Choose the plan that <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">fits your scale</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {(plans || []).map((plan, i) => {
              const Icon = planIcons[plan.id] || Lightning;
              const colors = planAccents[plan.id] || planAccents.plan_starter;
              const isPopular = plan.id === "plan_growth";
              return (
                <FloatingCard key={plan.id} delay={i * 0.12}>
                  <div
                    data-testid={`pricing-${plan.id}`}
                    className={`relative bg-white border rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group ${isPopular ? `border-emerald-300 ring-2 ${colors.ring} shadow-xl scale-105` : "border-slate-200"}`}
                  >
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                          <Star size={14} weight="fill" /> Most Popular
                        </span>
                      </div>
                    )}
                    <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                      <Icon size={26} weight="bold" className="text-white" />
                    </div>
                    <h3 className="font-['Outfit'] text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      {plan.checkout_type === "volume_monthly" || plan.id === "plan_agency" ? (
                        <>
                          <span className="font-['Outfit'] text-3xl font-black text-slate-900 leading-tight block">
                            Volume pricing
                          </span>
                          <p className="text-sm text-slate-500 mt-1">Monthly total = rate × billable projects (§3.3). All plans bill monthly only.</p>
                        </>
                      ) : (
                        <div className="flex items-baseline gap-1">
                          <span className="font-['Outfit'] text-4xl font-black text-slate-900">
                            {formatCurrencyINR(plan.price ?? 0)}
                          </span>
                          <span className="text-sm text-slate-500">/month</span>
                        </div>
                      )}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {(plan.features || []).map((f, fi) => (
                        <li key={fi} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle size={18} weight="fill" className="text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      data-testid={`pricing-select-${plan.id}`}
                      onClick={() => {
                        if (user) {
                          navigate("/app/subscription");
                        } else {
                          saveSelectedPlan(plan.id);
                          navigate("/register");
                        }
                      }}
                      className={`w-full text-white h-12 font-semibold ${colors.btn} shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      {user ? "Manage Plan" : "Get Started"} <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </div>
                </FloatingCard>
              );
            })}
          </div>

          <FadeIn delay={0.4} className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Info size={20} weight="bold" className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-2">Important: Ad Campaign Costs</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    The above pricing is for <strong>platform service charges only</strong>.
                    Actual ad campaign costs (Meta Ads, Google Ads) are <strong>billed separately</strong>.
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-amber-200">
                    <p className="text-xs font-medium text-slate-700 mb-2">Typical Ad Campaign Budget Ranges:</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-amber-50 rounded-lg p-2 text-center">
                        <div className="font-bold text-slate-800">Starter</div>
                        <div className="text-slate-600">₹5K-20K/mo</div>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-2 text-center">
                        <div className="font-bold text-slate-800">Growth</div>
                        <div className="text-slate-600">₹20K-1L/mo</div>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-2 text-center">
                        <div className="font-bold text-slate-800">Enterprise</div>
                        <div className="text-slate-600">₹1L+/mo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section> */}

      <footer data-testid="footer-section" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <GradientOrb className="w-[400px] h-[400px] top-0 left-1/4" color="blue" />
        <GradientOrb className="w-[300px] h-[300px] bottom-0 right-1/4" color="purple" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
              <RocketLaunch size={16} weight="fill" className="text-blue-400" />
              <span className="text-xs uppercase tracking-[0.15em] font-bold text-blue-400">Start Today</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">amplify</span> your sales?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
              Join hundreds of builders using AI to generate leads, nurture prospects, and close deals faster.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Button
              data-testid="footer-get-started-btn"
              onClick={() => {
                setBookDemoOpen(true);
              }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white h-14 px-12 text-lg font-semibold shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
            >
              Book Demo <ArrowRight size={20} className="ml-2" />
            </Button>
          </FadeIn>
          <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <span className="font-['Outfit'] font-bold text-lg text-white">MakanAI</span>
            </div>
            <nav data-testid="footer-legal-links" className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition">Terms</Link>
              <Link to="/data-deletion" className="hover:text-white transition">Data Deletion</Link>
            </nav>
            <p>&copy; {new Date().getFullYear()} MakanAI. AI-powered real estate marketing.</p>
          </div>
        </div>
      </footer>

      <Dialog open={bookDemoOpen} onOpenChange={setBookDemoOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Book a Demo</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitDemoRequest} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Full Name *</Label>
              <Input value={demoForm.full_name} onChange={(e) => updateDemoField("full_name", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Company Name *</Label>
              <Input value={demoForm.company_name} onChange={(e) => updateDemoField("company_name", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Designation</Label>
              <Input value={demoForm.designation} onChange={(e) => updateDemoField("designation", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Email *</Label>
              <Input type="email" value={demoForm.email} onChange={(e) => updateDemoField("email", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Phone *</Label>
              <Input value={demoForm.phone} onChange={(e) => updateDemoField("phone", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>City</Label>
              <Input value={demoForm.city} onChange={(e) => updateDemoField("city", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Project Type</Label>
              <Input placeholder="Apartment / Villa / Plots" value={demoForm.project_type} onChange={(e) => updateDemoField("project_type", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Number of Projects</Label>
              <Input value={demoForm.project_count} onChange={(e) => updateDemoField("project_count", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Monthly Ad Budget</Label>
              <Input placeholder="e.g. ₹50,000 - ₹2,00,000" value={demoForm.monthly_ad_budget} onChange={(e) => updateDemoField("monthly_ad_budget", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Preferred Contact Time</Label>
              <Input placeholder="e.g. 11 AM - 2 PM" value={demoForm.preferred_contact_time} onChange={(e) => updateDemoField("preferred_contact_time", e.target.value)} />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label>Anything else we should know?</Label>
              <Textarea rows={4} value={demoForm.message} onChange={(e) => updateDemoField("message", e.target.value)} />
            </div>
            <div className="sm:col-span-2 flex justify-end">
              <Button type="submit" disabled={submittingDemo} className="bg-blue-600 hover:bg-blue-700 text-white">
                {submittingDemo ? "Submitting..." : "Submit Demo Request"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
