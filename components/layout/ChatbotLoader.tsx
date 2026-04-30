'use client';

import dynamic from 'next/dynamic';

// ssr:false is only valid inside a Client Component.
// This thin wrapper keeps the Chatbot out of the critical JS bundle — improving page TTI.
const Chatbot = dynamic(
    () => import('@/components/layout/Chatbot').then((m) => ({ default: m.Chatbot })),
    { ssr: false }
);

export function ChatbotLoader() {
    return <Chatbot />;
}
