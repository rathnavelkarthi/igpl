import {
    Dribbble,
    Facebook,
    Github,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from 'lucide-react';

const data = {
    facebookLink: 'https://facebook.com/monkeymindmedia',
    instaLink: 'https://instagram.com/monkeymindmedia',
    twitterLink: 'https://twitter.com/monkeymindmedia',
    githubLink: 'https://github.com/monkeymindmedia',
    dribbbleLink: 'https://dribbble.com/monkeymindmedia',
    services: {
        webdev: '/ai-saas-development',
        webdesign: '/performance-marketing-systems',
        marketing: '/political-intelligence-platform',
        googleads: '/ai-video-production-systems',
    },
    about: {
        history: '/about',
        team: '/rathnavel',
        handbook: '/vetrivel',
        careers: '/careers',
    },
    help: {
        faqs: '/faqs',
        support: '/support',
        livechat: '/live-chat',
    },
    contact: {
        email: 'info@monkeymindmedia.com',
        phone: '+91 8637373116',
        address: 'Chennai, Tamil Nadu, India',
    },
    company: {
        name: 'Monkey Mind Media',
        description:
            'We build modular intelligence systems across digital domains. Each deployment is structured for scalability, security, and strategic control.',
        logo: '/images/abstract/vid_psycho.png',
    },
};

const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: data.facebookLink },
    { icon: Instagram, label: 'Instagram', href: data.instaLink },
    { icon: Twitter, label: 'Twitter', href: data.twitterLink },
    { icon: Github, label: 'GitHub', href: data.githubLink },
    { icon: Dribbble, label: 'Dribbble', href: data.dribbbleLink },
];

const aboutLinks = [
    { text: 'Company History', href: data.about.history },
    { text: 'Founder', href: data.about.team },
    { text: 'Digital Head', href: data.about.handbook },
    { text: 'Careers', href: data.about.careers },
];

const serviceLinks = [
    { text: 'AI SaaS Dev', href: data.services.webdev },
    { text: 'Performance Marketing', href: data.services.webdesign },
    { text: 'Political Intelligence', href: data.services.marketing },
    { text: 'Video Systems', href: data.services.googleads },
];

const helpfulLinks = [
    { text: 'FAQs', href: data.help.faqs },
    { text: 'Support', href: data.help.support },
    { text: 'Live Chat', href: data.help.livechat, hasIndicator: true },
];

const contactInfo = [
    { icon: Mail, text: data.contact.email },
    { icon: Phone, text: data.contact.phone },
    { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
    return (
        <footer className="w-full place-self-end mt-24 z-50 relative pt-24 pb-16" style={{ background: 'var(--card)', borderTop: '1px solid var(--border)' }}>
            <div className="container mx-auto max-w-7xl px-8 sm:px-12 lg:px-20 z-50">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-4">
                        <div className="flex justify-center sm:justify-start items-center" style={{ color: 'var(--blue)' }}>
                            <span className="text-2xl lg:text-4xl font-bold tracking-widest uppercase whitespace-nowrap" style={{ fontFamily: 'var(--font-head)' }}>
                                {data.company.name}
                            </span>
                        </div>

                        <p className="mt-8 max-w-sm text-center leading-relaxed sm:text-left text-lg" style={{ color: 'var(--gray-400)' }}>
                            {data.company.description}
                        </p>

                        <ul className="mt-10 flex justify-center gap-6 sm:justify-start md:gap-8 list-none pl-0">
                            {socialLinks.map(({ icon: Icon, label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="transition outline-none focus-visible:ring-1 focus-visible:ring-blue-500 hover:opacity-80 block"
                                        style={{ color: 'var(--blue)' }}
                                    >
                                        <span className="sr-only">{label}</span>
                                        <Icon className="size-6 hover:scale-110 transition-transform" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:col-span-8">
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-bold tracking-widest uppercase mb-8" style={{ fontFamily: 'var(--font-head)', color: 'var(--white)' }}>About Us</p>
                            <ul className="space-y-5 text-lg list-none pl-0">
                                {aboutLinks.map(({ text, href }) => (
                                    <li key={text}>
                                        <a
                                            className="transition outline-none focus-visible:ring-1 focus-visible:ring-blue-500 pointer-events-auto hover:text-white"
                                            style={{ color: 'var(--gray-400)' }}
                                            href={href}
                                        >
                                            {text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-bold tracking-widest uppercase mb-8" style={{ fontFamily: 'var(--font-head)', color: 'var(--white)' }}>Our Services</p>
                            <ul className="space-y-5 text-lg list-none pl-0">
                                {serviceLinks.map(({ text, href }) => (
                                    <li key={text}>
                                        <a
                                            className="transition outline-none focus-visible:ring-1 focus-visible:ring-blue-500 pointer-events-auto"
                                            style={{ color: 'var(--gray-400)' }}
                                            onMouseEnter={(e) => e.target.style.color = 'var(--white)'}
                                            onMouseLeave={(e) => e.target.style.color = 'var(--gray-400)'}
                                            href={href}
                                        >
                                            {text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-bold tracking-widest uppercase mb-8" style={{ fontFamily: 'var(--font-head)', color: 'var(--white)' }}>Helpful Links</p>
                            <ul className="space-y-5 text-lg list-none pl-0">
                                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                                    <li key={text}>
                                        <a
                                            href={href}
                                            className={hasIndicator ? 'group flex justify-center gap-1.5 sm:justify-start outline-none focus-visible:ring-1 focus-visible:ring-blue-500 pointer-events-auto hover:text-white transition' : 'transition outline-none focus-visible:ring-1 focus-visible:ring-blue-500 pointer-events-auto hover:text-white'}
                                            style={{ color: 'var(--gray-400)' }}
                                        >
                                            <span>
                                                {text}
                                            </span>
                                            {hasIndicator && (
                                                <span className="relative flex size-2 mt-1 ml-1" style={{ position: 'relative', top: '2px' }}>
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: 'var(--blue)' }} />
                                                    <span className="relative inline-flex size-2 rounded-full" style={{ background: 'var(--blue)' }} />
                                                </span>
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-bold tracking-widest uppercase mb-8" style={{ fontFamily: 'var(--font-head)', color: 'var(--white)' }}>Contact Us</p>
                            <ul className="space-y-5 text-lg pointer-events-auto list-none pl-0">
                                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                                    <li key={text}>
                                        <div className="flex items-center justify-center gap-1.5 sm:justify-start pointer-events-auto" style={{ color: 'var(--gray-400)' }}>
                                            <Icon className="size-5 shrink-0 shadow-sm pointer-events-auto" style={{ color: 'var(--blue)' }} />
                                            {isAddress ? (
                                                <address className="-mt-0.5 flex-1 not-italic transition pointer-events-auto">
                                                    {text}
                                                </address>
                                            ) : (
                                                <span className="flex-1 transition pointer-events-auto">
                                                    {text}
                                                </span>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-24 border-t pt-10" style={{ borderColor: 'var(--border)' }}>
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="mt-4 text-base transition sm:order-first sm:mt-0 tracking-widest uppercase hover:text-white" style={{ color: 'var(--gray-500)' }}>
                            &copy; 2026 {data.company.name}
                        </p>

                        <p className="text-base tracking-widest uppercase" style={{ color: 'var(--gray-500)' }}>
                            <span className="block sm:inline">All rights reserved.</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
