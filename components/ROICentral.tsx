"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, DollarSign, Target, Percent, Calculator, Sparkles, PieChart, Users } from "lucide-react";

interface ROICentralProps {
    setView?: (view: string) => void;
}

export default function ROICentral({ setView }: ROICentralProps) {
    // Input States
    const [currentRevenue, setCurrentRevenue] = useState(5000000); // ₹50 Lakh default
    const [conversionRate, setConversionRate] = useState(2); // 2% default
    const [monthlyMarketingBudget, setMonthlyMarketingBudget] = useState(50000); // ₹50k default

    // Business Analyst Logic - Guaranteed Positive Growth Model
    const calculations = useMemo(() => {
        // 1. Marketing Efficiency (ROAS)
        // Logic: Higher conversion rate = Higher Return on Ad Spend (ROAS)
        // Base ROAS is 3x (Market Standard). Every 1% conversion adds 0.5x ROAS.
        // Cap ROAS at 12x (Excellent performance).
        const calculatedROAS = Math.min(3 + (conversionRate * 0.5), 12);

        // 2. Organic Uplift (The "Rigteq Effect")
        // Better UX/UI + SEO typically improves baseline revenue by 20-30% without extra ad spend
        const organicUpliftFactor = 0.25; // 25% conservative uplift
        const organicRevenueGain = currentRevenue * organicUpliftFactor;

        // 3. Marketing Revenue
        // Revenue generated specifically from the annual marketing budget
        const annualMarketingSpend = monthlyMarketingBudget * 12;
        const marketingRevenueGain = annualMarketingSpend * calculatedROAS;

        // 4. Total Projections
        const additionalRevenue = organicRevenueGain + marketingRevenueGain;
        const projectedRevenue = currentRevenue + additionalRevenue;

        // 5. Cost Analysis
        // Rigteq Development Cost (One-time Capex based on business tier)
        let rigteqProjectCost = 50000;
        if (currentRevenue > 50000000) rigteqProjectCost = 500000; // >5Cr
        else if (currentRevenue > 10000000) rigteqProjectCost = 250000; // >1Cr
        else if (currentRevenue > 2500000) rigteqProjectCost = 100000; // >25L

        const totalInvestment = annualMarketingSpend + rigteqProjectCost;

        // 6. ROI & Net Profit
        const netProfit = additionalRevenue - totalInvestment;
        // ROI % = (Net Profit / Total Investment) * 100
        // Since ROAS >= 3 and Organic Uplift > Project Cost, this is mathematically positive
        const roi = Math.round((netProfit / totalInvestment) * 100);

        // 7. Leads Estimation
        // Est. Traffic assuming Avg CPC ₹40 (blended)
        const annualTraffic = Math.round(annualMarketingSpend / 40);
        // Est. Leads = Traffic * New Conversion Rate (Base + 20% boost)
        const optimizedConversionRate = conversionRate * 1.2;
        const annualLeads = Math.round(annualTraffic * (optimizedConversionRate / 100));

        return {
            projectedRevenue,
            additionalRevenue,
            revenueGrowthPercent: Math.round((additionalRevenue / currentRevenue) * 100),
            roi,
            netProfit,
            roas: calculatedROAS.toFixed(1),
            annualLeads,
            rigteqProjectCost,
            annualMarketingSpend,
            totalInvestment,
            optimizedConversionRate: optimizedConversionRate.toFixed(1)
        };
    }, [currentRevenue, conversionRate, monthlyMarketingBudget]);

    const handleContact = () => {
        if (setView) {
            setView("contact");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const formatCurrency = (value: number) => {
        if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)} Cr`;
        if (value >= 100000) return `₹${(value / 100000).toFixed(1)} L`;
        if (value >= 1000) return `₹${(value / 1000).toFixed(1)}K`;
        return `₹${value.toLocaleString('en-IN')}`;
    };

    const formatCurrencyFull = (value: number) => {
        if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Crore`;
        if (value >= 100000) return `₹${(value / 100000).toFixed(2)} Lakh`;
        return `₹${value.toLocaleString('en-IN')}`;
    };

    return (
        <section className="py-24 px-4 md:px-12 bg-gradient-to-b from-slate-50 to-white min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100 mb-4">
                        <Calculator size={14} /> Strategic Growth Forecaster
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#0e3d52] font-serif mb-6">
                        Forecast Your <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Digital Dominance</span>
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Market-validated projection model. See how optimization and strategic ad spend translate to exponential revenue growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Calculator Inputs */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl"
                    >
                        <h3 className="text-2xl font-bold text-[#0e3d52] mb-8 flex items-center gap-3">
                            <div className="p-2 bg-blue-50 rounded-xl">
                                <Target size={24} className="text-blue-600" />
                            </div>
                            Business Parameters
                        </h3>

                        <div className="space-y-10">
                            {/* Current Annual Revenue */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <label className="text-gray-700 font-medium">Annual Revenue</label>
                                    <span className="text-2xl font-bold text-[#0e3d52]">{formatCurrency(currentRevenue)}</span>
                                </div>
                                <input
                                    type="range"
                                    min="500000"
                                    max="50000000"
                                    step="500000"
                                    value={currentRevenue}
                                    onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                                    className="w-full h-3 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-gray-200 to-gray-400 accent-blue-600"
                                    style={{ accentColor: '#2563eb' }}
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>₹5 Lakh</span>
                                    <span>₹5 Crore</span>
                                </div>
                            </div>

                            {/* Conversion Rate */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <label className="text-gray-700 font-medium">Conversion Rate</label>
                                        <p className="text-xs text-gray-400">Sales / Traffic %</p>
                                    </div>
                                    <span className="text-2xl font-bold text-[#0e3d52]">{conversionRate}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0.5"
                                    max="20"
                                    step="0.5"
                                    value={conversionRate}
                                    onChange={(e) => setConversionRate(Number(e.target.value))}
                                    className="w-full h-3 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-gray-200 to-gray-400"
                                    style={{ accentColor: '#8b5cf6' }}
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>0.5%</span>
                                    <span>20% (Excellent)</span>
                                </div>
                            </div>

                            {/* Monthly Marketing Budget */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <label className="text-gray-700 font-medium">Monthly Ad Budget</label>
                                        <p className="text-xs text-gray-400">Paid Media + SEO</p>
                                    </div>
                                    <span className="text-2xl font-bold text-[#0e3d52]">{formatCurrency(monthlyMarketingBudget)}</span>
                                </div>
                                <input
                                    type="range"
                                    min="10000"
                                    max="2000000"
                                    step="10000"
                                    value={monthlyMarketingBudget}
                                    onChange={(e) => setMonthlyMarketingBudget(Number(e.target.value))}
                                    className="w-full h-3 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-gray-200 to-gray-400"
                                    style={{ accentColor: '#10b981' }}
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>₹10k</span>
                                    <span>₹20 Lakh</span>
                                </div>
                            </div>
                        </div>

                        {/* Cost Breakdown */}
                        <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between text-sm">
                            <span className="text-gray-500">Tech Implementation (One-time)</span>
                            <span className="font-semibold">{formatCurrency(calculations.rigteqProjectCost)}</span>
                        </div>
                    </motion.div>

                    {/* Results */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Hero Output: Projected Revenue */}
                        <div className="bg-[#0e3d52] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                            {/* Abstract Glows */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10">
                                <span className="text-blue-200 font-medium text-sm tracking-wide uppercase">Projected Annual Revenue</span>
                                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">{formatCurrencyFull(calculations.projectedRevenue)}</h2>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                            <TrendingUp size={20} className="text-green-400" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-green-400">+{formatCurrency(calculations.additionalRevenue)}</div>
                                            <div className="text-white/60 text-xs">New Annual Revenue</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                            <Percent size={20} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-blue-400">{calculations.revenueGrowthPercent}%</div>
                                            <div className="text-white/60 text-xs">Year-over-Year Growth</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Metrics Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* ROI */}
                            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="flex items-center gap-2 text-gray-500 mb-2">
                                    <PieChart size={18} className="group-hover:text-green-600 transition-colors" />
                                    <span className="text-sm font-medium">ROI</span>
                                </div>
                                <div className="text-3xl font-bold text-green-600">{calculations.roi}%</div>
                                <p className="text-xs text-gray-400 mt-1">Return on total investment</p>
                            </div>

                            {/* ROAS */}
                            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="flex items-center gap-2 text-gray-500 mb-2">
                                    <Target size={18} className="group-hover:text-purple-600 transition-colors" />
                                    <span className="text-sm font-medium">ROAS</span>
                                </div>
                                <div className="text-3xl font-bold text-[#0e3d52]">{calculations.roas}x</div>
                                <p className="text-xs text-gray-400 mt-1">Marketing Efficiency Ratio</p>
                            </div>

                            {/* Estimated Leads */}
                            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="flex items-center gap-2 text-gray-500 mb-2">
                                    <Users size={18} className="group-hover:text-blue-600 transition-colors" />
                                    <span className="text-sm font-medium">Est. Annual Leads</span>
                                </div>
                                <div className="text-3xl font-bold text-[#0e3d52]">{calculations.annualLeads.toLocaleString()}</div>
                                <p className="text-xs text-gray-400 mt-1">High-intent opportunities</p>
                            </div>

                            {/* Profit */}
                            <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 shadow-sm">
                                <div className="flex items-center gap-2 text-emerald-700 mb-2">
                                    <Sparkles size={18} />
                                    <span className="text-sm font-bold">Net Profit</span>
                                </div>
                                <div className="text-2xl font-bold text-emerald-700 tracking-tight">{formatCurrency(calculations.netProfit)}</div>
                                <p className="text-xs text-emerald-600/80 mt-1">After all costs</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <button
                            onClick={handleContact}
                            className="w-full py-4 bg-[#0e3d52] hover:bg-[#1a5a7a] text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                        >
                            Build This Revenue Engine <ArrowRight size={20} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
