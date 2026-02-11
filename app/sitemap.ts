import { MetadataRoute } from 'next';
import { servicesData } from './services/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://rigteq.com'; // Replace with actual domain

    // Static routes
    const routes = [
        '',
        '/solutions',
        '/roi-central',
        '/enterprise',
        '/portfolio',
        '/packages',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1,
    }));

    // Dynamic service routes
    const serviceRoutes = Object.keys(servicesData).map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...routes, ...serviceRoutes];
}
