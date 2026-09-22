import { useState } from 'react';
import {
  Star,
  Check,
  Settings,
  Zap,
  Target,
  CheckCircle2,
  AlarmClock,
  Layers,
  ArrowRight,
  Shield,
  Keyboard,
  Mail,
  Heart,
} from 'lucide-react';
import './index.css';

// ─── Inline SVGs for brand icons ─────────────────────────────────────────────
const AppleLogo = ({ className, fill }: { className?: string, fill?: string }) => (
  <svg className={className} viewBox="0 0 384 512" fill={fill || "currentColor"}>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);



// ─── Mino Logo ────────────────────────────────────────────────────────────────
const MinoLogo = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6">
    <rect width="32" height="32" rx="8" fill="#0f172a" />
    <rect x="10" y="14" width="4" height="4" rx="2" fill="white" />
    <rect x="18" y="14" width="4" height="4" rx="2" fill="white" />
  </svg>
);

// ─── Blob Hero Components ───────────────────────────────────────────────────────
const CurvedArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M70 20 Q 30 40 40 80" />
    <path d="M25 70 L 40 80 L 45 65" />
  </svg>
);

const CurvedArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M30 20 Q 70 40 60 80" />
    <path d="M75 70 L 60 80 L 55 65" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const AppPopupInteractive = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Finish project deck', done: false },
    { id: 2, text: 'Reply to emails', done: false },
    { id: 3, text: 'Plan weekend trip', done: true },
    { id: 4, text: 'Read a book', done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] p-5 w-[340px] border border-gray-100 text-left">
      <div className="flex items-center justify-between mb-1">
        <span className="font-bold text-gray-900 text-xl">Mino</span>
        <Settings className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
      </div>
      <p className="text-[13px] text-gray-500 mb-4">Your tasks, right in the menu bar.</p>
      
      <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 mb-5 cursor-text">
        <span className="text-gray-400 text-[13px]">Add a task...</span>
        <div className="ml-auto bg-gray-200 text-gray-500 rounded px-1.5 py-0.5 text-xs font-semibold">↵</div>
      </div>
      
      <div className="space-y-3 mb-6 max-h-[160px] overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {tasks.map(t => (
          <div key={t.id} className="flex items-center gap-3 cursor-pointer group" onClick={() => toggleTask(t.id)}>
            <div className={`w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center transition-colors ${t.done ? 'bg-[#1a202c]' : 'border-2 border-gray-300 group-hover:border-gray-400'}`}>
              {t.done && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
            </div>
            <span className={`text-[14px] font-medium transition-colors ${t.done ? 'text-gray-400 line-through' : 'text-gray-700 group-hover:text-black'}`}>
              {t.text}
            </span>
          </div>
        ))}
      </div>
      
      <div className="bg-slate-50 rounded-xl p-3 flex items-center justify-between border border-slate-100">
        <div className="flex items-center gap-3">
          <AlarmClock className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
          <div>
            <p className="text-[13px] font-bold text-gray-900 leading-tight">Focus</p>
            <p className="text-[11px] font-medium text-gray-400 leading-tight">25 min</p>
          </div>
        </div>
        <button className="bg-[#0f172a] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-black transition-colors flex items-center gap-1.5">
          <PlayIcon className="w-3 h-3" />
          Start
        </button>
      </div>
    </div>
  );
};

const HeroInteractiveApp = () => {
  return (
    <div className="w-full h-[600px] rounded-[2rem] overflow-hidden relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60 bg-gradient-to-b from-[#f2f7ff] via-[#eef5ff] to-[#e4efff]">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-white rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
      
      {/* ── MAC OS MENU BAR ────────────────────────────────────────── */}
      <div className="absolute top-4 left-4 right-4 h-10 bg-white/80 backdrop-blur-md rounded-xl flex items-center justify-between px-5 text-[13px] font-medium text-gray-800 shadow-sm border border-white z-20">
        <div className="flex items-center gap-4">
          <AppleLogo className="w-4 h-4 text-gray-900" fill="currentColor" />
          <span className="text-gray-900 font-bold">Finder</span>
          <span className="hidden sm:inline">File</span>
          <span className="hidden sm:inline">Edit</span>
          <span className="hidden sm:inline">View</span>
          <span className="hidden sm:inline">Go</span>
          <span className="hidden sm:inline">Window</span>
          <span className="hidden sm:inline">Help</span>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Mino Menu Bar Pill + App Popup */}
          <div className="relative group">
            <div className="w-[42px] h-[22px] bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center gap-[4px] cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="w-[4px] h-[10px] bg-[#1a202c] rounded-full"></div>
              <div className="w-[4px] h-[10px] bg-[#1a202c] rounded-full relative">
                {/* little checkmark tick over the right pill */}
                <svg className="absolute -top-[6px] -right-[6px] w-[14px] h-[14px] text-black" viewBox="0 0 24 24" fill="currentColor">
                   <circle cx="12" cy="12" r="10"/>
                   <path d="M16 9l-5.5 5.5L8 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
            </div>
            
            {/* The Dropdown App Mockup */}
            <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 z-50">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-100 rounded-sm"></div>
              <AppPopupInteractive />
            </div>
          </div>

          <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
          <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect><line x1="22" y1="11" x2="22" y2="13"></line></svg>
          <span className="font-semibold text-gray-900">Mon 9:41 AM</span>
        </div>
      </div>

      {/* ── ANNOTATIONS ──────────────────────────────────────────────── */}
      <div className="absolute left-[8%] top-[25%] max-w-[140px] hidden md:block z-10 pointer-events-none">
        <p className="font-['Caveat'] text-[36px] text-[#5e6a82] leading-[1] transform -rotate-6 font-medium">Small steps<br/>big progress.</p>
        <CurvedArrowLeft className="w-14 h-14 text-[#8ba3b8] mt-3 ml-6" />
      </div>
      
      <div className="absolute right-[4%] top-[62%] max-w-[160px] hidden md:block z-10 text-right pointer-events-none">
        <CurvedArrowRight className="w-14 h-14 text-[#8ba3b8] mb-3 ml-auto mr-6 transform rotate-[15deg]" />
        <p className="font-['Caveat'] text-[36px] text-[#5e6a82] leading-[1] transform rotate-3 font-medium">Right here,<br/>when you need<br/>it.</p>
      </div>

      {/* ── 3D BLOB ──────────────────────────────────────────────────── */}
      <div className="absolute bottom-[-5%] left-[8%] w-[45%] md:w-[35%] z-10 pointer-events-none">
        <div className="relative">
          <img 
            src="/mascot-transparent.png" 
            alt="Mino Character"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

    </div>
  );
};

// ─── Company Logos ────────────────────────────────────────────────────────────
const CompanyLogos = () => (
  <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
    {/* PRODUCTHUNT */}
    <span className="text-sm font-bold tracking-widest text-gray-300 uppercase">ProductHunt</span>
    {/* APP STORE */}
    <div className="flex items-center gap-1.5">
      <AppleLogo className="w-4 h-4 text-gray-300" />
      <span className="text-sm font-semibold tracking-widest text-gray-300 uppercase">App Store</span>
    </div>
    {/* G2 */}
    <span className="text-2xl font-black italic text-gray-300" style={{ fontFamily: 'Georgia, serif' }}>G2</span>
    {/* HACKERNEWS */}
    <div className="flex items-center gap-1.5">
      <div className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center">
        <span className="text-[10px] font-black text-gray-400">Y</span>
      </div>
      <span className="text-sm font-bold tracking-widest text-gray-300 uppercase">HN</span>
    </div>
    {/* SETAPP */}
    <span className="text-sm font-bold tracking-widest text-gray-300 uppercase">Setapp</span>
    {/* INDIE HACKERS */}
    <div className="flex items-center gap-1.5">
      <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center">
        <span className="text-[9px] font-black text-gray-300">IH</span>
      </div>
      <span className="text-sm font-bold tracking-widest text-gray-300 uppercase">Indie Hackers</span>
    </div>
  </div>
);

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6e9fc] via-[#f4f7fb] to-white relative overflow-hidden font-sans">
      
      {/* Soft radial glow to match the image precisely */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-b from-[#ccd6f6] to-transparent blur-[100px] rounded-full pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── NAVIGATION ─────────────────────────────────────────────────────── */}
        <div className="flex justify-center pt-8">
          <nav
            className="animate-fade-in-up bg-white/40 backdrop-blur-md border border-white/40 shadow-sm rounded-full px-6 py-2.5 flex items-center gap-8 relative z-50"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            {/* Left: Logo */}
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-7 h-7 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden p-0.5">
                <img src="/mascot-transparent.png" alt="Mino Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-[15px] font-semibold text-[#1c1e26] tracking-tight">Mino</span>
            </div>

            {/* Links (desktop) */}
            <div className="hidden md:flex items-center gap-6">
              {['Features', 'Pricing', 'Blog', 'Contact'].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-[13.5px] font-medium text-[#5e6a82] hover:text-[#1c1e26] transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
            
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-1 text-[#5e6a82]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </nav>
        </div>

        {/* Mobile nav drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-6 space-y-4 z-50 animate-fade-in-up">
            {['Features', 'Pricing', 'Blog', 'Contact'].map((l) => (
              <a key={l} href="#" className="block text-center text-sm font-medium text-[#5e6a82] hover:text-[#1c1e26]">{l}</a>
            ))}
          </div>
        )}

        {/* ── HERO ───────────────────────────────────────────────────────────── */}
        <section className="px-6 pt-20 pb-32 max-w-7xl mx-auto text-center">

          {/* Main heading */}
          <div
            className="animate-fade-in-up text-center mb-10"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-full px-3 py-1 mb-8">
              <span className="text-[10px] font-bold text-[#1c1e26] uppercase tracking-wider">NEW</span>
              <span className="text-[11px] text-[#5e6a82] font-medium">A calmer way to get things done</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[84px] font-serif text-[#1b1d28] mb-6 leading-[1.1] max-w-4xl mx-auto tracking-tight" style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}>
              Little tasks. Done.
            </h1>
            
            <p className="text-base md:text-[19px] text-[#5e6a82] max-w-2xl mx-auto leading-relaxed">
              Keep your todos one click away in the menu bar. Simple, fast, and always there when you need it.
            </p>
          </div>

          {/* CTA button */}
          <div
            className="animate-fade-in-up mb-16"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <button className="bg-[#12131a] text-white px-8 py-3.5 rounded-full text-[15px] font-medium hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-[0_4px_14px_rgba(0,0,0,0.1)]">
              Download for macOS
            </button>
          </div>

          {/* ── HIGH QUALITY HERO IMAGE ────────────────────────────────────────────────────────── */}
          <div
            className="animate-fade-in-up mt-12 mb-16 relative"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            <HeroInteractiveApp />
          </div>

          {/* ── FEATURE PILLS (below video) ───────────────────────────────────── */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { Icon: Zap,    text: 'One-click capture'     },
              { Icon: Layers, text: 'Smart task grouping'   },
              { Icon: Target, text: 'Focus mode built-in'   },
              { Icon: AppleLogo,  text: 'Native macOS'          },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm text-gray-600">
                <Icon className="w-3.5 h-3.5 text-gray-400" />
                {text}
              </div>
            ))}
          </div>

          {/* ── COMPANY LOGOS ────────────────────────────────────────────────── */}
          <div
            className="animate-fade-in-up mt-24"
            style={{ animationDelay: '0.8s', opacity: 0 }}
          >
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-8">
              Loved by makers featured on
            </p>
            <CompanyLogos />
          </div>
        </section>

        {/* ── SOCIAL PROOF STRIP ─────────────────────────────────────────────── */}
        <div className="border-t border-gray-100 px-6 py-10 flex flex-col md:flex-row items-center justify-center gap-10 text-center">
          {[
            { value: '18.3K+', label: 'Happy users'     },
            { value: '4.9',    label: 'App Store rating' },
            { value: '<1MB',   label: 'App size'         },
            { value: 'Free',   label: 'To get started'  },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>


        {/* ════════════════════════════════════════════════════════════════════
            FEATURES SECTION
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="border-t border-gray-100 px-6 py-24 max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 mb-5">
              <Zap className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-gray-900 mb-4">
              Everything you need.
              <span className="block text-gray-400">Nothing you don&apos;t.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Mino is purposely small — every feature earns its place by saving you time or clearing mental clutter.
            </p>
          </div>

          {/* Large feature cards — top row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>

            {/* Card 1 — Menu bar access */}
            <div className="bg-gray-50 rounded-3xl p-8 flex flex-col justify-between min-h-[280px] group hover:bg-gray-100 transition-colors">
              <div>
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <Layers className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lives in your menu bar</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  One click to open, one keystroke to add a task. Mino never interrupts your flow — it&apos;s always exactly one click away.
                </p>
              </div>
              {/* Mini macOS menu bar mockup */}
              <div className="mt-6 bg-white rounded-xl px-4 py-2.5 flex items-center justify-between text-[11px] font-medium text-gray-500 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <AppleLogo className="w-3 h-3" fill="currentColor" />
                  <span className="font-semibold text-gray-700">Finder</span>
                  <span>File</span><span>Edit</span><span>View</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-[3px] items-center px-1.5 py-0.5 rounded bg-gray-900">
                    <div className="w-[3px] h-[9px] bg-white rounded-full" />
                    <div className="w-[3px] h-[9px] bg-white rounded-full" />
                  </div>
                  <span className="text-gray-400">9:41 AM</span>
                </div>
              </div>
            </div>

            {/* Card 2 — Keyboard-first */}
            <div className="bg-gray-900 rounded-3xl p-8 flex flex-col justify-between min-h-[280px] group">
              <div>
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                  <Keyboard className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Keyboard-first speed</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Every action has a shortcut. Add tasks, jump to your list, or clear completed items — without ever touching the mouse.
                </p>
              </div>
              {/* Keyboard shortcut badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[['⌘', 'Space', 'Open Mino'], ['⌘', 'K', 'All tasks'], ['↵', '', 'Add task'], ['⌘', 'E', 'Edit task']].map(([k1, k2, label]) => (
                  <div key={label} className="flex items-center gap-1.5 bg-white/10 rounded-lg px-2.5 py-1.5">
                    <span className="font-mono text-xs text-white/80 font-semibold">{k1}{k2 ? ` ${k2}` : ''}</span>
                    <span className="text-white/40 text-xs">—</span>
                    <span className="text-white/60 text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Three-column feature cards — bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>

            {/* Card 3 — Privacy */}
            <div className="bg-gray-50 rounded-3xl p-7 flex flex-col gap-4 group hover:bg-gray-100 transition-colors">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Shield className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1.5">100% private</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Everything stored locally on your Mac. No accounts, no cloud sync, no tracking.</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mt-auto">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                Your data stays on your device
              </div>
            </div>

            {/* Card 4 — Focus mode */}
            <div className="bg-gray-50 rounded-3xl p-7 flex flex-col gap-4 group hover:bg-gray-100 transition-colors">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Target className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1.5">Focus mode</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Pin one task and block out everything else. Mino shows only what matters right now.</p>
              </div>
              {/* Mini focus pill */}
              <div className="mt-auto bg-white rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 border border-gray-100 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-sm font-medium text-gray-800">Finish project deck</span>
                <CheckCircle2 className="w-4 h-4 text-gray-300 ml-auto" />
              </div>
            </div>

            {/* Card 5 — Lightweight */}
            <div className="bg-gray-50 rounded-3xl p-7 flex flex-col gap-4 group hover:bg-gray-100 transition-colors">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Zap className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1.5">Under 1 MB</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Mino is tiny by design. Instant launch, zero battery drain, no background processes hogging memory.</p>
              </div>
              <div className="mt-auto">
                <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                  <span>App size</span><span className="font-semibold text-gray-700">&lt;1 MB</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[4%] bg-gray-900 rounded-full" />
                </div>
                <p className="text-[10px] text-gray-400 mt-1">vs avg macOS app 85 MB</p>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors">
              See all features <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            PRICING SECTION
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="border-t border-gray-100 px-6 py-24 max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 mb-5">
              <Star className="w-3.5 h-3.5 text-gray-500" fill="currentColor" />
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-gray-900 mb-4">
              Simple, honest pricing.
            </h2>
            <p className="text-lg text-gray-500 max-w-md mx-auto">
              Pay once. Use forever. No subscription traps.
            </p>
          </div>

          {/* Pricing card */}
          <div className="max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="bg-gray-900 rounded-3xl p-8 flex flex-col relative overflow-hidden">
              {/* Popular badge */}
              <div className="absolute top-5 right-5 bg-white/10 text-white/80 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Lifetime Access
              </div>

              <div className="mb-6 text-left">
                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Pro</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">$4</span>
                </div>
                <p className="text-sm text-white/50 mt-2">One-time payment. Full peace of mind.</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1 text-left">
                {[
                  { text: 'Unlimited tasks' },
                  { text: 'Menu bar access' },
                  { text: 'Full keyboard shortcut suite' },
                  { text: 'Focus mode' },
                  { text: 'Priority email support' },
                  { text: 'All future updates', sub: 'forever' },
                ].map(({ text, sub }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                    </div>
                    <span>
                      {text}
                      {sub && <span className="text-white/30 ml-1 text-xs">({sub})</span>}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-white text-gray-900 rounded-xl py-3 px-4 text-sm font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                <AppleLogo className="w-4 h-4" fill="currentColor" />
                Download App
              </button>
              <p className="text-center text-white/30 text-xs mt-3">14-day money-back guarantee</p>
            </div>
          </div>

          {/* FAQ teaser */}
          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <p className="text-sm text-gray-500">
              Questions? <button className="text-gray-900 font-medium underline underline-offset-2 hover:no-underline">Read the FAQ</button> or{' '}
              <button className="text-gray-900 font-medium underline underline-offset-2 hover:no-underline">chat with us</button>
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            FOOTER
        ═══════════════════════════════════════════════════════════════════ */}
        <footer className="border-t border-gray-100">

          {/* CTA banner */}
          <div className="px-6 py-20 text-center max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-gray-900 mb-5">
              Ready to get things done?
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
              Join 18,000+ people who&apos;ve made Mino their daily task companion.
            </p>
            <button className="bg-black text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2 shadow-lg shadow-black/10">
              <AppleLogo className="w-4 h-4" fill="currentColor" />
              Download for macOS
            </button>
            <p className="text-xs text-gray-400 mt-3">macOS 13 Ventura or later · No account required</p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100" />

          {/* Footer links */}
          <div className="px-6 py-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

              {/* Brand */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <MinoLogo />
                  <span className="text-base font-semibold text-gray-900">Mino</span>
                </div>
                <p className="text-sm text-gray-400 max-w-[200px] leading-relaxed">
                  Little tasks. Done.
                </p>
                {/* Social icons */}
                <div className="flex items-center gap-3 mt-1">
                  {[
                    { Icon: TwitterIcon, href: '#' },
                    { Icon: GithubIcon,  href: '#' },
                    { Icon: Mail,    href: '#' },
                  ].map(({ Icon, href }, i) => (
                    <a key={href + i} href={href} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Link columns */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 mb-3">Product</p>
                  <ul className="space-y-2">
                    {['Features', 'Pricing', 'Changelog', 'Roadmap'].map((l) => (
                      <li key={l}><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">{l}</a></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-3">Company</p>
                  <ul className="space-y-2">
                    {['About', 'Blog', 'Press kit', 'Contact'].map((l) => (
                      <li key={l}><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">{l}</a></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-3">Legal</p>
                  <ul className="space-y-2">
                    {['Privacy policy', 'Terms of use', 'Cookie policy'].map((l) => (
                      <li key={l}><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">{l}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 mt-10 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} Mino. All rights reserved. Made with{' '}
                <Heart className="inline w-3 h-3 text-gray-400 mx-0.5" fill="currentColor" />
                for doers.
              </p>
              <div className="flex items-center gap-1.5">
                <AppleLogo className="w-3.5 h-3.5 text-gray-400" fill="currentColor" />
                <span className="text-xs text-gray-400">Designed exclusively for macOS</span>
              </div>
            </div>
          </div>

        </footer>

      </div>
    </div>
  );
}
