'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquareText, X, SendHorizonal, Trash2, User, Loader2 } from 'lucide-react';

interface ChatMessage {
    role: 'user' | 'model';
    content: string;
}

const SUGGESTIONS = [
    "What services do you offer?",
    "Where is Rigteq located?",
    "How can I start a project?",
    "Do you build native mobile apps?",
    "What are your working hours?",
];

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', content: "Hi! I'm the Rigteq Assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isOpen, isLoading]);

    // Auto-focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            // Small delay to ensure transition completes
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const handleSend = async (text: string) => {
        if (!text.trim() || isLoading) return;

        const userMsg: ChatMessage = { role: 'user', content: text.trim() };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const history = messages.slice(1); // Exclude initial greeting from history array for simplicity 

            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text.trim(), history }),
            });

            if (!res.ok) throw new Error('API request failed');

            const data = await res.json();
            setMessages((prev) => [
                ...prev,
                { role: 'model', content: data.reply || "I'm having trouble connecting to my system right now. Please email sales@rigteq.com." }
            ]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages((prev) => [
                ...prev,
                { role: 'model', content: "Sorry, I'm currently unavailable. Please contact us via the contact form or call us directly." }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClear = () => {
        setMessages([{ role: 'model', content: "Hi! I'm the Rigteq Assistant. How can I help you today?" }]);
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-[90px] right-4 sm:right-6 z-[9997] w-14 h-14 rounded-full bg-slate-900 border border-slate-700 text-white flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:scale-105 hover:bg-slate-800 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
                aria-label="Open Chat Assistant"
            >
                <MessageSquareText size={26} strokeWidth={2} />

                {/* Online indicator dot */}
                <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-slate-900"></span>
                </span>
            </button>

            {/* Chat Popup Container */}
            <div
                className={`fixed z-[9999] bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[380px] bg-white sm:rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-bottom-right
                    ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 pointer-events-none translate-y-8 sm:translate-y-4'}
                `}
                style={{ maxHeight: 'calc(100vh - 80px)', height: '70vh' }}
            >
                {/* Header */}
                <div className="bg-slate-900 text-white px-5 py-4 sm:rounded-t-2xl flex items-center justify-between shrink-0 shadow-sm relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center border-2 border-slate-700 shrink-0">
                            <MessageSquareText size={20} className="text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm tracking-wide">Rigteq Assistant</h3>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Online</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <button
                            onClick={handleClear}
                            aria-label="Clear Chat"
                            className="p-2 mr-1 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                            title="Clear Chat"
                        >
                            <Trash2 size={16} />
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close Chat"
                            className="p-2 rounded-full bg-slate-800 hover:bg-rose-500 text-slate-300 hover:text-white transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-5 bg-gray-50 flex flex-col gap-4">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex items-end gap-2 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                            {msg.role === 'model' && (
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200">
                                    <MessageSquareText size={14} className="text-blue-600" />
                                </div>
                            )}

                            <div className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm
                                ${msg.role === 'user'
                                    ? 'bg-blue-600 text-white rounded-br-sm'
                                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm'}
                            `}>
                                {msg.content}
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex items-end gap-2 max-w-[85%] self-start">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200">
                                <MessageSquareText size={14} className="text-blue-600" />
                            </div>
                            <div className="px-4 py-3.5 rounded-2xl rounded-bl-sm bg-white border border-gray-200 shadow-sm flex items-center gap-1.5 h-[44px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} className="h-0 w-full" />
                </div>

                {/* Quick Suggestions - Only show if very few messages and not loading */}
                {messages.length < 3 && !isLoading && (
                    <div className="px-4 bg-gray-50 pb-3">
                        <div className="flex overflow-x-auto pb-2 gap-2 snap-x scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {SUGGESTIONS.map((suggestion) => (
                                <button
                                    key={suggestion}
                                    onClick={() => handleSend(suggestion)}
                                    className="shrink-0 snap-start bg-white border border-gray-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-sm text-gray-600 text-xs font-semibold px-4 py-2 rounded-full transition-all whitespace-nowrap"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-200 sm:rounded-b-2xl shrink-0">
                    <form
                        onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                        className="flex items-center gap-2"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            disabled={isLoading}
                            className="flex-1 bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-sm outline-none transition-all disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isLoading}
                            className="w-[46px] h-[46px] shrink-0 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 text-white flex items-center justify-center transition-all"
                        >
                            <SendHorizonal size={20} className={isLoading ? 'opacity-0' : 'opacity-100'} />
                            {isLoading && <Loader2 size={18} className="absolute animate-spin" />}
                        </button>
                    </form>
                    <div className="text-center mt-3">
                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                            ⚡ Powered by AI
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
