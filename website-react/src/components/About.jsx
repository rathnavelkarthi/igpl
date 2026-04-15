import { motion } from 'framer-motion'
import { FadeInSection, FadeInText } from './FadeInSection'
import { Clapperboard, Image as ImageIcon, LineChart, Bot, Cpu, Landmark, Target, ArrowRight } from 'lucide-react'

const capabilities = [
    { icon: <Cpu size={20} className="text-pink-500" />, title: 'Custom Software Development', desc: 'End-to-end product engineering from concept to deployment' },
    { icon: <Bot size={20} className="text-blue-400" />, title: 'Software Procurement', desc: 'Connecting enterprises with the right software vendors' },
    { icon: <LineChart size={20} className="text-indigo-400" />, title: 'Enterprise Solutions', desc: 'ERP, CRM, and business process automation systems' },
    { icon: <Landmark size={20} className="text-emerald-400" />, title: 'IT Consulting', desc: 'Strategic technology advisory and digital transformation' },
    { icon: <Clapperboard size={20} className="text-purple-400" />, title: 'Cloud & DevOps', desc: 'Cloud migration, infrastructure, and CI/CD pipelines' },
    { icon: <ImageIcon size={20} className="text-slate-300" />, title: 'QA & Testing', desc: 'Comprehensive software quality assurance and testing' },
    { icon: <Target size={20} className="text-cyan-400" />, title: 'Staff Augmentation', desc: 'Skilled software developers on demand for your projects' },
]

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg)' }}>

            {/* Background Subtle Gradient */}
            <div className="absolute top-0 right-[-20%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-pink-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-12 lg:gap-20 items-start">

                    {/* Left — Text */}
                    <div className="flex flex-col">
                        <FadeInText delay={0}>
                            <h4 className="text-[0.65rem] font-bold tracking-[0.25em] text-pink-500 uppercase mb-4">
                                THE COMPANY
                            </h4>
                            <h2 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[3.8rem] xl:text-[4.25rem] leading-[1.05] tracking-tight font-bold mb-8 uppercase" style={{ fontFamily: 'var(--font-head)' }}>
                                <span className="text-white">A SOFTWARE<br />DEVELOPMENT<br /></span>
                                <span style={{
                                    background: 'linear-gradient(90deg, #ec4899 0%, #3b82f6 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>& BROKERING</span>
                                <br />
                                <span className="text-blue-500">COMPANY.</span>
                            </h2>
                            <div className="flex flex-col gap-6 text-gray-400 text-[0.95rem] leading-relaxed max-w-2xl mb-12">
                                <p>
                                    International Garudas Private Limited (IGPL) is not a traditional IT company. We are a software development and procurement firm that bridges the gap between businesses and technology.
                                </p>
                                <p>
                                    We connect enterprises with the right software development teams, build custom solutions, and manage the entire software lifecycle. From requirements gathering to deployment and maintenance, our team ensures every project delivers measurable business value.
                                </p>
                                <p>
                                    Based in Chennai, we serve clients across India and globally. Our approach is partnership-driven, quality-focused, and built for long-term success.
                                </p>
                            </div>
                        </FadeInText>

                        <div className="flex flex-col">
                            {capabilities.map((cap, i) => (
                                <FadeInSection key={cap.title} delay={i * 0.05}>
                                    <motion.div
                                        whileHover={{ x: 8 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        className={`flex items-center gap-5 sm:gap-6 py-5 sm:py-6 cursor-default transition-colors group ${i !== capabilities.length - 1 ? 'border-b border-white/5' : ''
                                            }`}
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/5 shrink-0 group-hover:bg-white/10 transition-colors">
                                            {cap.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-bold tracking-wide text-[1.05rem] text-gray-100 mb-1">{cap.title}</div>
                                            <div className="text-[0.85rem] sm:text-sm text-gray-500">{cap.desc}</div>
                                        </div>
                                        <ArrowRight size={20} className="text-gray-600 shrink-0 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 group-hover:text-blue-400" />
                                    </motion.div>
                                </FadeInSection>
                            ))}
                        </div>
                    </div>

                    {/* Right — Visual Card */}
                    <FadeInSection delay={0.2} className="lg:sticky lg:top-32">
                        <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(37,99,235,0.15)] group">

                            {/* Background Image (Using placeholder that matches aesthetic) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: 'url(/images/abstract/the_firm_1771770372896.png)' }}
                            />

                            {/* Dark Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90 z-10" />
                            <div className="absolute inset-0 bg-blue-900/10 z-10 mix-blend-overlay" />

                            {/* Content */}
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8">
                                <h3 className="text-center font-bold tracking-tight leading-[1.05] uppercase drop-shadow-xl"
                                    style={{
                                        fontFamily: 'var(--font-head)',
                                        fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
                                    }}>
                                    <span className="text-white block mb-1">Software</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-400 mb-1 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                                        Development
                                    </span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                        Excellence
                                    </span>
                                </h3>
                                <div className="mt-8 text-[0.7rem] sm:text-xs font-bold tracking-[0.3em] text-gray-400 uppercase border border-white/10 py-2 px-6 rounded-full bg-black/40 backdrop-blur-md">
                                    Chennai · Global
                                </div>
                            </div>

                            {/* Floating stats bottom bar */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-black/80 backdrop-blur-xl border-t border-white/10 flex justify-between items-center z-30">
                                {[
                                    { value: '150+', label: 'Projects' },
                                    { value: '40+', label: 'Clients' },
                                    { value: '8', label: 'Awards' }
                                ].map((stat, idx) => (
                                    <div key={idx} className="flex flex-col items-center flex-1">
                                        <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1" style={{ fontFamily: 'var(--font-head)' }}>
                                            {stat.value}
                                        </div>
                                        <div className="text-[0.6rem] sm:text-[0.65rem] font-bold text-gray-500 uppercase tracking-[0.15em]">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeInSection>

                </div>
            </div>
        </section>
    )
}
