export default function Footer() {
    const cols = [
        {
            title: 'Services', links: [
                { label: 'Custom Software Development', href: '#products' },
                { label: 'Software Procurement', href: '#products' },
                { label: 'Enterprise Solutions', href: '#products' },
                { label: 'IT Consulting', href: '#products' },
            ]
        },
        {
            title: 'Company', links: [
                { label: 'About', href: '#about' },
                { label: 'Leadership', href: '/founder' },
                { label: 'Clients', href: '#work' },
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
                            <span style={{ color: '#fff' }}>international</span>
                            <span style={{ color: 'var(--blue)' }}>garudas</span>
                        </div>
                        <p style={{
                            fontSize: '0.9375rem', color: 'var(--gray-300)', /* Better contrast */
                            lineHeight: 1.8, maxWidth: '280px', marginBottom: '2rem',
                        }}>
                            Your trusted software development partner.
                            <br />Chennai HQ · Pan-India · Global Delivery.
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
                                <a href="mailto:contact@internationalgarudas.com" className="cursor-pointer hover:text-white transition-colors" style={{ fontSize: '0.875rem', color: 'var(--gray-400)', display: 'block' }}>contact@internationalgarudas.com</a>
                                <a href="mailto:info@internationalgarudas.com" className="cursor-pointer hover:text-white transition-colors" style={{ fontSize: '0.875rem', color: 'var(--gray-400)', display: 'block', marginTop: '0.4rem' }}>info@internationalgarudas.com</a>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.625rem', fontWeight: 600, color: 'var(--gray-500)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Address</div>
                                <address style={{ fontSize: '0.875rem', color: 'var(--gray-400)', lineHeight: 1.7, fontStyle: 'normal' }}>
                                    Chennai, Tamil Nadu,<br />
                                    India
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
                        <span>© 2026 International Garudas Private Limited.</span>
                        <a href="#" className="cursor-pointer focus-visible:ring-1 focus-visible:ring-blue-500 rounded-sm outline-none" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" className="cursor-pointer focus-visible:ring-1 focus-visible:ring-blue-500 rounded-sm outline-none" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
                    </div>
                    <span style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.6875rem', letterSpacing: '0.1em' }}>SOFTWARE SOLUTIONS PARTNER</span>
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

