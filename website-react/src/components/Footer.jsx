export default function Footer() {
    const cols = [
        {
            title: 'Services', links: [
                { label: 'AI Video Systems', href: '/ai-video-production-systems' },
                { label: 'Political Intelligence', href: '/political-intelligence-platform' },
                { label: 'Performance Marketing', href: '/digital-marketing-agency-chennai' },
                { label: 'SEO Services', href: '/seo-services-chennai' },
            ]
        },
        {
            title: 'Company', links: [
                { label: 'About', href: '/' },
                { label: 'Founder', href: '/founder' },
                { label: 'Chennai Marketing', href: '/best-marketing-agency-chennai' },
                { label: 'Contact', href: '#' },
            ]
        },
    ]

    return (
        <footer style={{
            borderTop: '2px solid var(--border)', /* Thicker border */
            paddingTop: 'clamp(4rem, 10vw, 10rem)', paddingBottom: '4rem',
            background: 'var(--bg)'
        }}>
            <div className="container">
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 1.5fr) minmax(0, 1.5fr) minmax(0, 2fr)',
                    gap: 'clamp(2rem, 5vw, 4rem)',
                    marginBottom: 'clamp(4rem, 8vw, 8rem)',
                }}>
                    <div>
                        <div style={{
                            fontFamily: 'var(--font-head)', fontWeight: 700,
                            fontSize: '1.5rem', letterSpacing: '-0.04em',
                            marginBottom: '1.5rem',
                        }}>
                            <span style={{ color: '#fff' }}>monkeymind</span>
                            <span style={{ color: 'var(--blue)' }}>media</span>
                        </div>
                        <p style={{
                            fontSize: '0.9375rem', color: 'var(--gray-300)', /* Better contrast */
                            lineHeight: 1.8, maxWidth: '280px', marginBottom: '2rem',
                        }}>
                            Engineered creatively. Built for global brand leadership.
                            <br />Puducherry HQ · Chennai · Worldwide Systems.
                        </p>
                    </div>

                    {/* Link columns */}
                    {cols.map(col => (
                        <div key={col.title}>
                            <div style={{
                                fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em',
                                textTransform: 'uppercase', color: 'var(--gray-200)',
                                marginBottom: '2rem',
                            }}>
                                {col.title}
                            </div>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                {col.links.map(l => (
                                    <li key={l.label}>
                                        <a href={l.href} style={{
                                            fontSize: '0.875rem', color: 'var(--gray-400)',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s ease',
                                        }}
                                            onMouseEnter={e => {
                                                e.target.style.color = 'var(--white)';
                                            }}
                                            onMouseLeave={e => {
                                                e.target.style.color = 'var(--gray-400)';
                                            }}
                                            className="cursor-pointer focus-visible:ring-1 focus-visible:ring-blue-500 rounded-sm outline-none"
                                        >
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact column */}
                    <div>
                        <div style={{
                            fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em',
                            textTransform: 'uppercase', color: 'var(--gray-200)',
                            marginBottom: '2rem',
                        }}>
                            Contact
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <div style={{ fontSize: '0.625rem', fontWeight: 600, color: 'var(--gray-500)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Phone</div>
                                <a href="tel:+917871241791" className="cursor-pointer hover:text-white transition-colors" style={{ fontSize: '0.875rem', color: 'var(--gray-400)', display: 'block' }}>+91 78712 41791</a>
                                <a href="tel:+919944003804" className="cursor-pointer hover:text-white transition-colors" style={{ fontSize: '0.875rem', color: 'var(--gray-400)', display: 'block', marginTop: '0.4rem' }}>+91 99440 03804</a>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.625rem', fontWeight: 600, color: 'var(--gray-500)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Email</div>
                                <a href="mailto:contact@monkeymindmedia.com" className="cursor-pointer hover:text-white transition-colors" style={{ fontSize: '0.875rem', color: 'var(--gray-400)', display: 'block' }}>contact@monkeymindmedia.com</a>
                                <a href="mailto:social@monkeymindmedia.com" className="cursor-pointer hover:text-white transition-colors" style={{ fontSize: '0.875rem', color: 'var(--gray-400)', display: 'block', marginTop: '0.4rem' }}>social@monkeymindmedia.com</a>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.625rem', fontWeight: 600, color: 'var(--gray-500)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Address</div>
                                <address style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.7, fontStyle: 'normal' }}>
                                    21, Jansi St, Indira Gandhi Nagar,<br />
                                    Ilango Nagar, Puducherry, 605001
                                </address>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.03)',
                    fontSize: '0.8125rem', color: 'var(--gray-500)',
                    flexWrap: 'wrap', gap: '1.5rem',
                }}>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        <span>© 2026 Monkey Mind Media.</span>
                        <a href="#" className="cursor-pointer focus-visible:ring-1 focus-visible:ring-blue-500 rounded-sm outline-none" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" className="cursor-pointer focus-visible:ring-1 focus-visible:ring-blue-500 rounded-sm outline-none" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
                    </div>
                    <span style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.6875rem', letterSpacing: '0.1em' }}>AI-POWERED INFRASTRUCTURE</span>
                </div>
            </div>

            {/* Responsive */}
            <style>{`
                @media (max-width: 900px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }
                @media (max-width: 600px) {
                    .footer-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </footer>
    )
}

