import { professionalData } from "@/data/professionalData";

export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: professionalData.name,
        url: professionalData.site,
        jobTitle: professionalData.role,
        knowsAbout: professionalData.skills,
        sameAs: Object.values(professionalData.socialLinks),
        address: {
            "@type": "PostalAddress",
            addressLocality: professionalData.location.split(", ")[0],
            addressRegion: professionalData.location.split(", ")[1],
            addressCountry: "BR",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
