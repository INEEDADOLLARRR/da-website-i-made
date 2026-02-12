import React from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
}

export const SEO = ({
    title = "Apex Residential Roofing | Premium Storm Restoration in Austin, TX",
    description = "Trusted local residential roofing experts in Austin, TX. Specializing in premium storm restoration, luxury roof replacements, and free local estimates.",
    canonical = "https://apex-roofing.example.com",
    ogImage = "https://images.unsplash.com/photo-1633519076046-24898124233c?auto=format&fit=crop&q=80&w=1200"
}: SEOProps) => {
    // Since we might not have react-helmet-async installed in the env, 
    // we can still use this component to generate the JSON-LD or manage tags if needed.
    // For now, let's focus on the JSON-LD Schema which is great for SEO.

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "RoofingContractor",
        "name": "Apex Residential Roofing",
        "image": ogImage,
        "description": description,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Austin",
            "addressRegion": "TX",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 30.2672,
            "longitude": -97.7431
        },
        "url": canonical,
        "telephone": "+1-512-555-0199",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/apexroofingaustin",
            "https://www.instagram.com/apexroofingaustin"
        ],
        "priceRange": "$$"
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(schemaData)}
        </script>
    );
};
