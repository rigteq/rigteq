import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: Request) {
    let message = '';
    let history: any[] = [];
    try {
        const body = await request.json();
        message = body.message;
        history = body.history;

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json(
                { error: 'API key is missing' },
                { status: 500 }
            );
        }

        const systemPrompt = `You are the Rigteq Softwares AI Assistant. You are a professional, helpful, and concise assistant. 
    Always provide short responses (1-2 sentences max). Do not use markdown for simple answers, keep it conversational.
    
    Business Information:
    - Company: Rigteq Softwares
    - Services: Web Application Development, Mobile App Engineering, Enterprise Software Solutions (CRM, ERP), Search Engine Optimization (SEO), E-commerce Platforms, AI & Automation Solutions.
    - Hours: Mon-Sat 9:00 AM - 7:00 PM IST (India), Mon-Fri 9:00 AM - 6:00 PM CST (USA)
    - Locations: Noida (HQ) & Ghaziabad in India, Houston in the USA.
    - Team: 50+ Expert Professionals, 25+ Years combined experience, 200+ Projects delivered. Led by Mr. Divyang Gaur (Director), Mr. Manoj Sharma (Sales Manager), and Mr. Yatendra Sharma (Technical Architect).
    - Phone: +91 87503 99055 (India), +1 3502 008-444 (USA)
    - Email: sales@rigteq.com
    
    Only provide positive, helpful information related to Rigteq Softwares. If asked something unrelated, politely steer the conversation back to how Rigteq can help them with software development. NEVER answer technical programming prompts not related to our services.`;

        // Initialize the model
        const model = genAI.getGenerativeModel({
            model: "gemma-3-4b-it", // As requested by user
            systemInstruction: systemPrompt,
        });

        const chat = model.startChat({
            history: history.map((msg: any) => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }],
            })),
            generationConfig: {
                maxOutputTokens: 150,
                temperature: 0.3,
            },
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ reply: text });

    } catch (error: any) {
        console.error('Chat API Error:', error);

        // Fallback if gemma-3-4b-it isn't supported or some other error occurs
        if (error.message?.includes('model') || error.message?.includes('not found') || error.status === 404) {
            try {
                console.log("Falling back to gemini-2.5-flash...");
                const fallbackModel = genAI.getGenerativeModel({
                    model: "gemini-2.5-flash",
                    systemInstruction: `You are the Rigteq Softwares AI Assistant. Keep answers short (1-2 sentences). Info: Web/App Dev, AI, SaaS. Contact: +91 87503 99055.`,
                });
                const chat = fallbackModel.startChat({
                    history: history.map((msg: any) => ({
                        role: msg.role === 'user' ? 'user' : 'model',
                        parts: [{ text: msg.content }],
                    })),
                });
                const result = await chat.sendMessage(message);
                return NextResponse.json({ reply: await result.response.text() });
            } catch (fallbackError) {
                console.error('Fallback failed:', fallbackError);
            }
        }

        return NextResponse.json(
            { error: 'Failed to process chat request' },
            { status: 500 }
        );
    }
}
