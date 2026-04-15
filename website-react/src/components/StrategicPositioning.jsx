import { FadeInSection, FadeInText } from './FadeInSection'

export default function StrategicPositioning() {
    return (
        <section id="positioning" style={{
            background: 'var(--bg)',
            padding: 'var(--section-pad) 0',
            position: 'relative'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '8rem', alignItems: 'flex-start' }}>
                    <FadeInText>
                        <div className="section-label">WHY IGPL</div>
                        <h2 className="text-h1" style={{ marginBottom: '2.5rem' }}>
                            BEYOND OUTSOURCING.<br />INTO PARTNERSHIP.
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--gray-400)', fontSize: '1.25rem', lineHeight: 1.8 }}>
                            <p>
                                Most firms outsource code. We engineer solutions.
                            </p>
                            <p>
                                Most brokers connect vendors. We curate technology partnerships.
                            </p>
                            <p>
                                Most consultants advise. We deliver working software.
                            </p>
                            <p>
                                International Garudas functions at the intersection of software development and strategic technology procurement.
                            </p>
                        </div>
                    </FadeInText>

                    <FadeInSection delay={0.2}>
                        <div style={{
                            padding: '4rem', background: 'var(--card)',
                            border: '1px solid var(--border)', borderRadius: '2.5rem',
                            position: 'relative', overflow: 'hidden'
                        }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top right, rgba(37,99,235,0.05) 0%, transparent 70%)' }} />
                            <div className="section-label" style={{ marginBottom: '1.5rem', color: 'var(--blue-lt)' }}>OUR METHODOLOGY</div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {[
                                    { t: 'Requirements Discovery', d: 'Deep analysis of business needs and technical requirements.' },
                                    { t: 'Architecture & Design', d: 'Scalable system design with modern technology stacks.' },
                                    { t: 'Agile Development', d: 'Iterative sprints with continuous client collaboration.' },
                                    { t: 'Quality Assurance', d: 'Rigorous testing and code review at every milestone.' },
                                    { t: 'Deployment & Support', d: 'Seamless go-live and ongoing maintenance partnership.' }
                                ].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                                        <span style={{ color: 'var(--blue)', fontWeight: 800, fontSize: '0.8rem' }}>0{idx + 1}</span>
                                        <div>
                                            <div style={{ color: 'var(--white)', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.125rem' }}>{item.t}</div>
                                            <div style={{ fontSize: '0.9375rem', color: 'var(--gray-500)' }}>{item.d}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    )
}
