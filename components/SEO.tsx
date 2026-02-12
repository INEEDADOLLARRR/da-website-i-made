import React from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
}

export const SEO = ({
    title = "RoofPro Sites | High-Converting Websites for Roofing Contractors",
    description = "We build SEO-optimized, high-converting websites for roofing contractors. Get more leads, booked jobs, and local visibility with a custom roofing website.",
    canonical = "https://roofprosites.com",
    ogImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
}: SEOProps) => {
    // Since we might not have react-helmet-async installed in the env, 
    // we can still use this component to generate the JSON-LD or manage tags if needed.
    // For now, let's focus on the JSON-LD Schema which is great for SEO.

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "RoofPro Sites",
        "image": ogImage,
        "description": description,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Austin",
            "addressRegion": "TX",
            "addressCountry": "US"
        },
        "url": canonical,
        "telephone": "+1-512-555-0199",
        "priceRange": "$$$"
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(schemaData)}
        </script>
    );
};
