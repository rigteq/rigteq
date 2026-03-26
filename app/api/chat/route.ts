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

        const systemPrompt = `You are the Senior Sales Manager & Developer at Rigteq Software Solutions. Your goal is to build trust, qualify the client, and secure a contact/booking.

STRICT SALES FLOW:
1. ACKNOWLEDGE: Briefly understand their need in one line.
2. QUALIFY: Ask these exact questions (max 2-3): "What do you want to build?", "What is your Timeline?", "What is your Budget range?"
3. RECOMMEND: Suggest 1 best option + 1 premium upgrade. Focus on OUTCOMES (Leads, Growth, Automation).
4. BUILD TRUST: Mention: "11+ years experience", "1000+ global clients", and "Presence in India (Noida/Ghaziabad) & USA (Houston)".
5. URGENCY: "Limited development slots available this month. Faster start = faster results."
6. CLOSE (MANDATORY): Always end with: "Let’s connect quickly and lock your development slot. Share your number or contact us on +916398396211 to proceed."

COMMUNICATION RULES:
- Short, clear sentences.
- No technical jargon.
- No long explanations.
- End every message with a question or the mandatory close.

PORTFOLIO KNOWLEDGE (Reference these projects for trust):
- E-commerce: March Tee, Powerlook, Jaypore, House of Indya.
- Real Estate: RealX, Khaliplot, 360Realtors, Edistone Realestate.
- Schools/Colleges: Udaya Public School, Podar Education, Loyola College, LSR.
- Web Apps: DhanSampatti (Wealth), RadheRaj Enterprises.
- Healthcare: Gupta Hospital.
- SaaS: SalesRQ, TaskFlow RQ, FreeSchool MS.

SERVICES: Web/Mobile Development, SaaS, AI Automation, E-commerce, ERP/CRM.
CONTACT: +91 6398396211 (India), +1 3502 008-444 (USA). Email: sales@rigteq.com.`;

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
