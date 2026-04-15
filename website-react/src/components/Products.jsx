import { motion } from 'framer-motion'
import { FadeInSection, FadeInText } from './FadeInSection'
import { Clapperboard, LineChart, Landmark, Bot, Cpu } from 'lucide-react'

const products = [
    {
        icon: <Cpu size={36} className="text-purple-400" />, title: 'Custom Software Development',
        desc: 'End-to-end product engineering — from requirements analysis to deployment. We build scalable, enterprise-grade software solutions tailored to your business.',
        tag: 'Most Popular',
        image: '/images/abstract/ai_saas_dev_1771770315929.png',
        glow: 'rgba(168, 85, 247, 0.15)',
        isLarge: true,
        href: '#'
    },
    {
        icon: <LineChart size={36} className="text-blue-400" />, title: 'Software Procurement',
        desc: 'Connecting businesses with vetted software vendors and development teams across Chennai and India.',
        tag: null,
        image: '/images/abstract/performance_marketing_1771770216698.png',
        glow: 'rgba(37, 99, 235, 0.15)',
        href: '#'
    },
    {
        icon: <Landmark size={36} className="text-indigo-400" />, title: 'Enterprise Solutions',
        desc: 'ERP, CRM, and business process automation — designed for scale and operational efficiency.',
        tag: 'Enterprise',
        image: '/images/abstract/political_intelligence_1771770240152.png',
        glow: 'rgba(79, 70, 229, 0.15)',
        href: '#'
    },
    {
        icon: <Bot size={36} className="text-blue-400" />, title: 'IT Consulting',
        desc: 'Strategic technology advisory, digital transformation, and architecture consulting.',
        tag: null,
        image: '/images/abstract/whatsapp_automation_1771770271282.png',
        glow: 'rgba(59, 130, 246, 0.1)',
        href: '#'
    },
    {
        icon: <Clapperboard size={36} className="text-sky-400" />, title: 'Staff Augmentation',
        desc: 'On-demand access to skilled developers, QA engineers, and project managers for your team.',
        tag: null,
        image: '/images/abstract/ai_video_system_1771770172751.png',
        glow: 'rgba(14, 165, 233, 0.1)',
        href: '#'
    },
]

export default function Products() {
    return (
        <section id="products" style={{
            background: 'var(--bg)',
            padding: 'var(--section-pad) 0',
            position: 'relative'
        }}>
            <div className="container">
                <FadeInText>
                    <div className="section-label">OUR SOLUTIONS</div>
                    <h2 className="text-h1" style={{ marginBottom: '2.5rem' }}>
                        SOFTWARE SOLUTIONS<br />BUILT TO SCALE.
                    </h2>
                    <p style={{ color: 'var(--gray-500)', fontSize: '1.25rem', marginBottom: '8rem', maxWidth: '650px', lineHeight: 1.8 }}>
                        We deliver end-to-end software services across five core domains.
                        Every engagement is structured for quality, scalability, and measurable business impact.
                    </p>
                </FadeInText>

                <div className="bento-grid">
                    {products.map((p, i) => (
                        <FadeInSection
                            key={p.title}
                            delay={i * 0.1}
                            className={p.isLarge ? 'bento-span-2' : ''}
                            style={{ display: 'flex' }}
                        >
                            <a href={p.href} className="cursor-pointer focus-visible:ring-1 focus-visible:ring-blue-500 rounded-[var(--radius-card)]" style={{ display: 'flex', width: '100%', textDecoration: 'none', outline: 'none' }}>
                                <motion.div
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    variants={{
                                        rest: { y: 0, borderColor: 'var(--border)', background: 'var(--card)' },
                                        hover: { y: -12, borderColor: 'var(--blue)', background: 'rgba(37,99,235,0.02)' }
                                    }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                    style={{
                                        padding: 'clamp(2rem, 5vw, 4rem)',
                                        borderRadius: 'var(--radius-card)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        width: '100%',
                                        display: 'flex', flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        backdropFilter: 'blur(40px) saturate(180%) contrast(110%)',
                                        border: '1px solid',
                                        transition: 'box-shadow 0.6s var(--vanguard-ease)'
                                    }}
                                >
                                    {/* Animated Glow Header */}
                                    <motion.div
                                        variants={{
                                            rest: { opacity: 0.2, scale: 1 },
                                            hover: { opacity: 0.6, scale: 1.2 }
                                        }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        style={{
                                            position: 'absolute', top: 0, left: 0, right: 0, height: '250px',
                                            background: `radial-gradient(ellipse at 50% 0%, ${p.glow}, transparent 70%)`,
                                            pointerEvents: 'none',
                                            transformOrigin: 'top center'
                                        }}
                                    />

                                    {/* Animated Image Overlay */}
                                    <motion.div
                                        variants={{
                                            rest: { opacity: 0.02, scale: 1 },
                                            hover: { opacity: 0.08, scale: 1.05 }
                                        }}
                                        transition={{ duration: 1.2, ease: "easeOut" }}
                                        style={{
                                            position: 'absolute', inset: 0,
                                            backgroundImage: `url(${p.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            pointerEvents: 'none',
                                        }}
                                    />

                                    <div>
                                        {p.tag && (
                                            <div style={{
                                                fontSize: '11px', fontWeight: 800, letterSpacing: '0.35em',
                                                padding: '0.5rem 1.25rem',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid var(--border)',
                                                borderRadius: '9999px',
                                                color: 'var(--blue-lt)',
                                                display: 'inline-block',
                                                marginBottom: '3rem'
                                            }}>
                                                {p.tag}
                                            </div>
                                        )}

                                        <div style={{
                                            fontSize: '2.5rem', marginBottom: '3rem',
                                            width: '80px', height: '80px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            background: 'rgba(255,255,255,0.02)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '1.5rem',
                                            filter: 'grayscale(1) brightness(1.2)'
                                        }}>
                                            {p.icon}
                                        </div>

                                        <h3 style={{
                                            fontFamily: 'var(--font-head)', fontWeight: 700,
                                            fontSize: p.isLarge ? '2.5rem' : '1.875rem', letterSpacing: '-0.04em',
                                            lineHeight: 1,
                                            marginBottom: '1.5rem', color: 'var(--white)'
                                        }}>
                                            {p.title}
                                        </h3>

                                        <p style={{
                                            fontSize: '1rem', color: 'var(--gray-500)',
                                            lineHeight: 1.8, maxWidth: p.isLarge ? '75%' : '100%'
                                        }}>
                                            {p.desc}
                                        </p>
                                    </div>

                                    <div style={{
                                        marginTop: '4rem', display: 'flex', alignItems: 'center',
                                        gap: '0.75rem', fontSize: '11px', fontWeight: 800, color: 'var(--blue)',
                                        letterSpacing: '0.25em', textTransform: 'uppercase'
                                    }}>
                                        LEARN MORE
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </motion.div>
                            </a>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
