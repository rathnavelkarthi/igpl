import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInSection, FadeInText } from './FadeInSection'

const smooth = { duration: 0.7, ease: [0.22, 1, 0.36, 1] }

const categories = [
    {
        id: 'enterprise',
        label: 'Enterprise Software',
        projects: [
            {
                title: 'ERP System for Manufacturing Firm',
                objective: 'End-to-end enterprise resource planning for a Chennai-based manufacturer',
                results: '40% operational efficiency gain · 6-month delivery',
                tools: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
                image: '/images/abstract/ai_saas_dev_1771770315929.png',
            },
            {
                title: 'CRM Platform for Real Estate Group',
                objective: 'Custom CRM with lead tracking, pipeline management, and reporting',
                results: '3× lead conversion · Automated follow-ups',
                tools: ['Next.js', 'Supabase', 'Tailwind', 'n8n'],
                image: '/images/abstract/performance_marketing_1771770216698.png',
            },
            {
                title: 'Hospital Management System',
                objective: 'Patient records, appointment scheduling, and billing automation',
                results: 'Production-grade healthcare SaaS',
                tools: ['Next.js', 'Prisma', 'GKE', 'Vertex AI'],
                image: '/images/abstract/the_firm_1771770372896.png',
            },
            {
                title: 'Logistics & Fleet Management',
                objective: 'Real-time vehicle tracking, route optimization, and dispatch management',
                results: '25% reduction in delivery costs',
                tools: ['React', 'Node.js', 'Google Maps', 'PostgreSQL'],
                image: '/images/abstract/perf_aviation.png',
            },
        ],
    },
    {
        id: 'webapps',
        label: 'Web & Mobile Apps',
        projects: [
            {
                title: 'E-Commerce Platform',
                objective: 'Multi-vendor marketplace with payment gateway and inventory management',
                results: '10K+ products · Seamless checkout · Mobile-first',
                tools: ['React', 'Stripe', 'Supabase', 'Tailwind'],
                image: '/images/abstract/perf_ecommerce.png',
            },
            {
                title: 'EdTech Learning Platform',
                objective: 'Course management, video streaming, and student assessment system',
                results: '5K+ active users · 98.5% uptime',
                tools: ['Next.js', 'Supabase', 'Gemini API', 'Stripe'],
                image: '/images/abstract/vid_psycho.png',
            },
            {
                title: 'Food Delivery App',
                objective: 'Real-time ordering, driver tracking, and restaurant management',
                results: 'Full-stack mobile + web delivery platform',
                tools: ['React Native', 'Node.js', 'PostgreSQL', 'Maps API'],
                image: '/images/abstract/whatsapp_automation_1771770271282.png',
            },
            {
                title: 'Booking & Appointment Platform',
                objective: 'Multi-tenant booking system for salons, clinics, and service providers',
                results: '60% reduction in no-shows · Automated reminders',
                tools: ['React', 'Supabase', 'Google Calendar', 'n8n'],
                image: '/images/abstract/ai_video_system_1771770172751.png',
            },
        ],
    },
    {
        id: 'consulting',
        label: 'IT Consulting & Procurement',
        projects: [
            {
                title: 'Cloud Migration for Banking Client',
                objective: 'Migrate legacy monolith to microservices architecture on cloud',
                results: '70% infrastructure cost reduction',
                tools: ['Google Cloud', 'Kubernetes', 'Terraform', 'Docker'],
                image: '/images/abstract/political_intelligence_1771770240152.png',
            },
            {
                title: 'Software Vendor Selection for Insurance Co.',
                objective: 'Evaluate and procure best-fit claims management software',
                results: 'Evaluated 15 vendors · Saved ₹2Cr in licensing',
                tools: ['Requirements Analysis', 'RFP Process', 'Vendor Scoring'],
                image: '/images/abstract/vid_gold.png',
            },
            {
                title: 'DevOps Transformation',
                objective: 'CI/CD pipeline setup and infrastructure automation for fintech startup',
                results: '4× faster deployments · Zero-downtime releases',
                tools: ['GitHub Actions', 'Docker', 'GKE', 'Terraform'],
                image: '/images/abstract/vid_health.png',
            },
        ],
    },
]

function WorkCard({ project }) {
    return (
        <motion.div
            whileHover={{
                y: -10,
                borderColor: 'rgba(37,99,235,0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 40px rgba(59,130,246,0.15)'
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            style={{
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                background: 'var(--card)',
                cursor: 'default',
            }}
        >
            {/* Thumb */}
            <div style={{ overflow: 'hidden', position: 'relative' }}>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        height: '240px',
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    {/* Cinematic Overlay */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)',
                        zIndex: 1
                    }} />

                    <span style={{
                        fontFamily: 'var(--font-head)', fontWeight: 700,
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.15)',
                        letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1.5rem',
                        textAlign: 'center', position: 'relative', zIndex: 2
                    }}>
                        {project.title}
                    </span>
                </motion.div>
            </div>

            {/* Content */}
            <div style={{ padding: '2rem' }}>
                <h3 style={{
                    fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.125rem',
                    marginBottom: '0.75rem', letterSpacing: '-0.01em',
                }}>
                    {project.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)', marginBottom: '1rem', lineHeight: 1.7 }}>
                    {project.objective}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--blue-lt)', fontWeight: 600, marginBottom: '1.5rem' }}>
                    {project.results}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tools.map(t => (
                        <span key={t} style={{
                            fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em',
                            padding: '0.35rem 0.875rem',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '9999px', color: 'var(--gray-300)',
                            background: 'rgba(255,255,255,0.03)',
                        }}>{t}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function WorkGrid() {
    const [active, setActive] = useState('enterprise')
    const current = categories.find(c => c.id === active)

    return (
        <section id="work" style={{
            background: 'var(--bg)',
            padding: 'var(--section-pad) 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Motion Texture Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-35"
                >
                    <source src="https://videos.pexels.com/video-files/3129671/3129671-sd_640_360_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <FadeInText>
                    <div className="section-label">OUR PORTFOLIO</div>
                    <h2 className="text-h1" style={{ marginBottom: '6rem' }}>
                        DELIVERED<br />SOLUTIONS.
                    </h2>
                </FadeInText>

                {/* Tabs — Vanguard Style */}
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '6rem', flexWrap: 'wrap' }}>
                    {categories.map(cat => (
                        <motion.button
                            key={cat.id}
                            onClick={() => setActive(cat.id)}
                            className="relative overflow-hidden cursor-pointer focus-visible:ring-1 focus-visible:ring-blue-500 outline-none"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                padding: '1rem 2.25rem',
                                borderRadius: '9999px',
                                fontSize: '10px', fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.3em',
                                border: '1px solid',
                                borderColor: active === cat.id ? 'var(--blue)' : 'var(--border)',
                                color: active === cat.id ? 'var(--white)' : 'var(--gray-500)',
                                background: 'transparent',
                                transition: 'all 0.6s var(--vanguard-ease)',
                            }}
                        >
                            {/* Animated Background active state */}
                            <AnimatePresence>
                                {active === cat.id && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        style={{
                                            position: 'absolute', inset: 0,
                                            background: 'linear-gradient(120deg, rgba(37,99,235,0.05) 0%, rgba(37,99,235,0.15) 100%)',
                                            zIndex: -1
                                        }}
                                    >
                                        <motion.div
                                            animate={{
                                                opacity: [0.5, 0.8, 0.5],
                                                scale: [1, 1.05, 1]
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            style={{
                                                position: 'absolute', inset: 0,
                                                background: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.2), transparent 70%)',
                                            }}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Base hover background for non-active */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: active === cat.id ? 0 : 1 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: 'absolute', inset: 0,
                                    background: 'rgba(255,255,255,0.03)',
                                    zIndex: -2
                                }}
                            />

                            <span style={{ position: 'relative', zIndex: 1 }}>{cat.label}</span>
                        </motion.button>
                    ))}
                </div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.8, ease: [0.8, 0, 0.1, 1] }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
                            gap: '2rem',
                        }}
                    >
                        {current.projects.map((p, i) => (
                            <FadeInSection key={p.title} delay={i * 0.1}>
                                <WorkCard project={p} />
                            </FadeInSection>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
