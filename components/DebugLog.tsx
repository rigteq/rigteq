"use client";

import { useState, useEffect } from "react";
import { X, Terminal, Trash2 } from "lucide-react";

export default function DebugLog() {
    const [logs, setLogs] = useState<{ type: string; message: string; timestamp: string }[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const originalConsoleLog = console.log;
        const originalConsoleError = console.error;
        const originalConsoleWarn = console.warn;

        const addLog = (type: string, args: any[]) => {
            const message = args.map(arg => {
                if (typeof arg === 'object') {
                    try {
                        return JSON.stringify(arg);
                    } catch (e) {
                        return String(arg);
                    }
                }
                return String(arg);
            }).join(' ');

            const timestamp = new Date().toLocaleTimeString();
            setLogs(prev => [...prev.slice(-49), { type, message, timestamp }]);
        };

        console.log = (...args) => {
            originalConsoleLog(...args);
            addLog('info', args);
        };

        console.error = (...args) => {
            originalConsoleError(...args);
            addLog('error', args);
        };

        console.warn = (...args) => {
            originalConsoleWarn(...args);
            addLog('warn', args);
        };

        return () => {
            console.log = originalConsoleLog;
            console.error = originalConsoleError;
            console.warn = originalConsoleWarn;
        };
    }, []);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 left-4 z-50 bg-gray-900 text-green-400 p-2 rounded-md shadow-lg font-mono text-xs opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2 border border-gray-700"
            >
                <Terminal size={14} /> Debug
            </button>
        );
    }

    return (
        <div className="fixed bottom-4 left-4 z-50 w-80 md:w-96 bg-[#0d1117] border border-gray-700 rounded-lg shadow-2xl flex flex-col font-mono text-xs text-gray-300 max-h-[300px]">
            <div className="flex items-center justify-between p-2 bg-[#161b22] border-b border-gray-700 rounded-t-lg">
                <span className="flex items-center gap-2 font-semibold text-gray-100"><Terminal size={12} /> System Logs</span>
                <div className="flex items-center gap-2">
                    <button onClick={() => setLogs([])} className="hover:text-red-400"><Trash2 size={12} /></button>
                    <button onClick={() => setIsOpen(false)} className="hover:text-white"><X size={14} /></button>
                </div>
            </div>
            <div className="overflow-y-auto p-2 space-y-1 flex-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                {logs.length === 0 && <span className="text-gray-600 italic">No logs captured yet...</span>}
                {logs.map((log, i) => (
                    <div key={i} className="flex gap-2 break-all">
                        <span className="text-gray-500 shrink-0">[{log.timestamp}]</span>
                        <span className={
                            log.type === 'error' ? 'text-red-400' :
                                log.type === 'warn' ? 'text-yellow-400' :
                                    'text-green-400'
                        }>{log.message}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
