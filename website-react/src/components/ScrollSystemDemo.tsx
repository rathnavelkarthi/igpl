import React from "react";
import { FullScreenScrollFX, FullScreenFXAPI } from "@/components/ui/full-screen-scroll-fx";

const sections = [
    {
        leftLabel: "Silence",
        title: <>Absence</>,
        rightLabel: "Silence",
        background: "/images/bg/absence_bg_1771767371972.png",
    },
    {
        leftLabel: "Essence",
        title: <>Stillness</>,
        rightLabel: "Essence",
        background: "/images/bg/stillness_bg_1771767392724.png",
    },
    {
        leftLabel: "Rebirth",
        title: <>Growth</>,
        rightLabel: "Rebirth",
        background: "/images/bg/growth_bg_1771767419729.png",
    }
];

export default function ScrollSystemDemo() {
    const apiRef = React.useRef<FullScreenFXAPI>(null);

    return (
        <div className="relative z-40 bg-black">
            <FullScreenScrollFX
                sections={sections}
                header={
                    <>
                        <div style={{ color: 'var(--white)', fontFamily: 'var(--font-head)' }}>The Creative</div>
                        <div style={{ color: 'var(--blue)', fontFamily: 'var(--font-head)' }}>Process</div>
                    </>
                }
                footer={<div style={{ color: 'var(--gray-500)', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Monkey Mind Media</div>}
                showProgress
                durations={{ change: 0.7, snap: 800 }}
                colors={{
                    pageBg: '#050505',
                    stageBg: '#000000',
                    text: '#ffffff',
                    overlay: 'rgba(5,5,5,0.4)',
                }}
            />
        </div>
    );
}
