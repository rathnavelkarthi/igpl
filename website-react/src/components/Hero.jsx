import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"

const smooth = { duration: 1.2, ease: [0.22, 1, 0.36, 1] }

// Animated floating blob -> Removed for Brutalism, replaced with sharp geometric accents
function GeometricAccent({ style }) {
    return (
        <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 90, 180] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{
                position: 'absolute',
                border: '4px solid var(--blue)',
                width: '200px',
                height: '200px',
                pointerEvents: 'none',
                ...style,
            }}
        />
    )
}

export default function Hero({ onOpenModal }) {
    const { scrollYProgress } = useScroll()
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -400])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100])

    // Mask opacity for viewport transitions
    const maskOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

    const headline = [
        { text: 'STRATEGIC AI', highlight: false },
        { text: 'INFRASTRUCTURE', highlight: true },
    ]

    return (
        <section
            className="brutalist-hero"
            style={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                paddingTop: '6rem',
            }}
        >
            {/* Background Parallax — Clinical Subtlety */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: '-15%',
                    backgroundImage: 'url(/images/abstract/hero_bg_1771770114300.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.1,
                    zIndex: 0,
                    y: y3,
                    filter: 'grayscale(1) contrast(1.2)'
                }}
            />

            {/* Vanguard Parallax Atmosphere -> Brutalist Geometric Lines */}
            <motion.div className="hidden lg:block" style={{ position: 'absolute', inset: 0, zIndex: 1, y: y1 }}>
                <GeometricAccent style={{ top: '10%', right: '5%' }} />
                <GeometricAccent style={{ bottom: '20%', left: '-5%', borderColor: 'var(--blue-lt)' }} />
            </motion.div>

            {/* Hero Interactive Spotlight */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20 z-0"
                fill="var(--blue-lt)"
            />

            {/* Interactive 3D Spline Model Side - Z-index fixed for interaction */}
            <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-start w-full h-full pb-10 lg:pb-0 pointer-events-none">
                {/* Content Side */}
                <div className="w-full lg:w-[65%] relative z-20 flex flex-col justify-center pt-4 lg:pt-0 pointer-events-auto">
                    {/* Vanguard Micro-label */}
                    <motion.div
                        initial={{ opacity: 0, letterSpacing: '0.1em' }}
                        animate={{ opacity: 1, letterSpacing: '0.4em' }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="section-label"
                    >
                        SYSTEMS INTELLIGENCE FIRM
                    </motion.div>

                    {/* Vanguard Mask-Reveal Headline */}
                    <h1 style={{ marginBottom: '2.5rem' }}>
                        {headline.map((line, i) => (
                            <div key={i} style={{ overflow: 'hidden', marginBottom: '0.2rem' }}>
                                <motion.div
                                    initial={{ y: '105%' }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 1.2,
                                        ease: [0.8, 0, 0.1, 1],
                                        delay: 0.2 + i * 0.1
                                    }}
                                    className="text-h1"
                                    style={{
                                        color: line.highlight ? 'var(--blue)' : 'var(--white)',
                                        paddingRight: '0.05em', // Prevent clipping
                                        hyphens: 'none'
                                    }}
                                >
                                    {line.text}
                                </motion.div>
                            </div>
                        ))}
                    </h1>

                    {/* Analytical Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...smooth, delay: 0.8 }}
                        style={{
                            fontSize: 'clamp(0.875rem, 2vw, 1.25rem)',
                            color: 'var(--gray-500)',
                            lineHeight: 1.8,
                            maxWidth: '750px',
                            marginBottom: 'clamp(3rem, 5vw, 6rem)',
                            fontWeight: 400,
                            letterSpacing: '0.02em'
                        }}
                    >
                        Monkey Mind Media engineers AI automation platforms, political intelligence systems,
                        enterprise performance marketing engines, and AI-powered creative infrastructure
                        designed for systemic dominance.
                    </motion.p>

                    {/* CTAs with Magnetic Intent */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...smooth, delay: 1 }}
                        style={{
                            display: 'flex',
                            gap: 'clamp(1rem, 2vw, 2rem)',
                            flexWrap: 'wrap',
                            pointerEvents: 'auto' // Re-enable pointer events for buttons
                        }}
                    >
                        <button
                            onClick={onOpenModal}
                            className="btn btn-primary cursor-pointer"
                        >
                            GET QUOTE
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button
                            onClick={onOpenModal}
                            className="btn btn-outline cursor-pointer"
                            style={{ background: 'var(--bg)' }}
                        >
                            CONTACT
                        </button>
                    </motion.div>

                    {/* Progress Indicator Parallax */}
                    <motion.div
                        style={{
                            position: 'absolute', right: 0, bottom: '-8rem',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem',
                            color: 'var(--gray-600)', fontSize: '9px', letterSpacing: '0.5rem', textTransform: 'uppercase',
                            opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0])
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, 40, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            style={{ width: 1, height: 100, background: 'linear-gradient(to bottom, var(--blue), transparent)' }}
                        />
                        SYSTEMS ACTIVE
                    </motion.div>
                </div>

                {/* Spline Model Side */}
                <div className="w-full lg:absolute lg:-right-[5%] lg:top-1/2 lg:-translate-y-1/2 lg:w-[60%] relative h-[60vh] lg:h-[100vh] z-30 pointer-events-auto flex items-center justify-center mt-8 lg:mt-0">
                    <div className="absolute inset-0 w-full h-full scale-[1.3] lg:scale-[1.2] origin-center">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full cursor-grab active:cursor-grabbing"
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}
