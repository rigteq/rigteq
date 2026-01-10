export default function ServicesGrid() {
    return (
        <section id="services" className="bg-white pt-[60px] pb-20 px-4 md:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-xl md:text-2xl font-bold text-[#003366] mb-[30px]">
                    India's Leading Website Design Company for Custom Solutions
                </h2>

                {/* Custom Grid Layout - Matches reference website proportions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] md:h-[614px]">
                    {/* Row 1, Col 1 */}
                    <ServiceCard title="Website Designing" img="/images/web_designing.webp" />

                    {/* Row 1, Col 2 (Spans 2 rows) */}
                    <div className="md:row-span-2 h-full">
                        <ServiceCard title="Website Development" img="/images/website-development.webp" isTall={true} />
                    </div>

                    {/* Row 1, Col 3 */}
                    <ServiceCard title="CRM Development" img="/images/crm.webp" />

                    {/* Row 2, Col 1 */}
                    <ServiceCard title="E-Commerce Development" img="/images/e-commerce.webp" />

                    {/* Row 2, Col 3 (Row 2, Col 2 is taken by the middle tall card) */}
                    <ServiceCard title="Custom Website Solutions" img="/images/custom.webp" />
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ title, img, isTall = false }: { title: string; img: string; isTall?: boolean }) {
    return (
        <div className={`relative overflow-hidden rounded-[15px] border border-gray-100 shadow-sm h-full bg-[#f8fbff]`}>
            <img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
            />
            {title && (
                <div className="absolute bottom-0 left-0 w-full bg-[#4a6b8a] py-3 text-center">
                    <span className="text-white text-sm md:text-base font-semibold">{title}</span>
                </div>
            )}
        </div>
    );
}
