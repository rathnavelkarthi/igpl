import {
    AppWindow, FileJson, Zap, Palette, Framer, LayoutTemplate,
    TerminalSquare, Database, Shield,
    CloudCog, Rocket, Server, Boxes, Key,
    Workflow, Smartphone, MessageCircle, Mail, Calendar,
    Film, Clapperboard, Volume2, Brain, Bot
} from 'lucide-react';

const techCategories = [
    {
        name: "FRONTEND",
        items: [
            { name: "React 18", icon: <AppWindow size={16} /> },
            { name: "TypeScript", icon: <FileJson size={16} /> },
            { name: "Vite", icon: <Zap size={16} /> },
            { name: "Tailwind CSS", icon: <Palette size={16} /> },
            { name: "Framer Motion", icon: <Framer size={16} /> },
            { name: "Recharts", icon: <LayoutTemplate size={16} /> },
        ]
    },
    {
        name: "BACKEND",
        items: [
            { name: "Node.js 24", icon: <TerminalSquare size={16} /> },
            { name: "Prisma", icon: <Database size={16} /> },
            { name: "Supabase", icon: <Zap size={16} /> },
            { name: "PostgreSQL", icon: <Database size={16} /> },
            { name: "NextAuth", icon: <Shield size={16} /> },
        ]
    },
    {
        name: "INFRASTRUCTURE",
        items: [
            { name: "Google Cloud", icon: <CloudCog size={16} /> },
            { name: "Cloud Run", icon: <Rocket size={16} /> },
            { name: "GKE", icon: <Server size={16} /> },
            { name: "Artifact Registry", icon: <Boxes size={16} /> },
            { name: "Workload Identity", icon: <Key size={16} /> },
        ]
    },
    {
        name: "AUTOMATION",
        items: [
            { name: "n8n", icon: <Workflow size={16} /> },
            { name: "Evolution API", icon: <Smartphone size={16} /> },
            { name: "WhatsApp Business", icon: <MessageCircle size={16} /> },
            { name: "Gmail API", icon: <Mail size={16} /> },
            { name: "Google Calendar", icon: <Calendar size={16} /> },
        ]
    },
    {
        name: "AI",
        items: [
            { name: "Veo3", icon: <Film size={16} /> },
            { name: "Sora 2", icon: <Clapperboard size={16} /> },
            { name: "ElevenLabs", icon: <Volume2 size={16} /> },
            { name: "Gemini 1.5 Pro", icon: <Brain size={16} /> },
            { name: "Vertex AI", icon: <Bot size={16} /> },
        ]
    }
];

export default function TechStack() {
    return (
        <section id="tech" className="py-24" style={{ background: 'var(--bg)', position: 'relative' }}>
            {/* Subtle Grid Background Override */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(var(--gray-800) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    opacity: 0.2
                }}
            />

            <div className="container max-w-6xl mx-auto relative z-10">
                {/* Headers as requested in mockup */}
                <div style={{ marginBottom: '6rem' }}>
                    <h2 className="text-[3rem] sm:text-[4rem] font-bold leading-[1.1] tracking-tight text-white uppercase mb-6" style={{ fontFamily: 'var(--font-head)' }}>
                        TECHNOLOGY<br />STACK.
                    </h2>
                    <p className="text-gray-500 text-lg sm:text-xl max-w-2xl leading-relaxed">
                        International Garudas builds on a modern, cloud-native
                        technology stack — designed for scalable enterprise software
                        development and reliable delivery.
                    </p>
                </div>

                <div className="flex flex-col gap-16">
                    {techCategories.map((category, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-20">
                            {/* Category Label */}
                            <div className="flex items-center gap-4 md:w-48 shrink-0 md:pt-3">
                                <span className="w-4 h-[2px]" style={{ background: 'var(--blue)' }}></span>
                                <h3 className="text-[0.65rem] font-bold tracking-[0.2em] text-gray-500 uppercase">
                                    {category.name}
                                </h3>
                            </div>

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-4">
                                {category.items.map((tech, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 px-5 py-2.5 rounded-2xl cursor-default transition-all duration-300"
                                        style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            backdropFilter: 'blur(10px)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                        }}
                                    >
                                        <span className="text-gray-400">{tech.icon}</span>
                                        <span className="text-sm font-medium text-gray-200 tracking-wide">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
