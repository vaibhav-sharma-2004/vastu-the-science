import childAstrology from "../../public/childAstology.jpeg"
import careerVastu from "../../public/careerVastu.jpeg"
import coorporateAstro from "../../public/coorporateAstro.jpeg"
import officeVastu from "../../public/officeVastu.jpeg"
import residentialVastu from "../../public/residentialVastu.jpeg"
import templeVastu from "../../public/templeVastu.jpeg"
import industrialVastu from "../../public/industrialVastu.jpeg"
import medicalAstro from "../../public/medicalAstro.jpeg"
import loveAstro from "../../public/loveVastu.jpeg"
import astroNumerology from "../../public/numerologyReport.png"
import nameNumerology from "../../public/nameNumerology.png"
import mobileNumerology from "../../public/mobileNumerology.png"


export type SubService = {
    name: string;
    description: string;
    image: any;
};

export type Category = "Astrology" | "Vastu" | "Numerology";

export const serviceData: Record<Category, SubService[]> = {
    Vastu: [
        {
            name: "Residential Vastu",
            description: "Balance the five elements in your home to invite peace, health, and prosperity for your family.",
            image: residentialVastu,

        },
        {
            name: "Industrial Vastu",
            description: "Strategic layout planning for factories and plants to ensure machine stability and production growth.",
            image: industrialVastu,
        },
        {
            name: "Commercial Vastu",
            description: "Optimize offices and retail spaces for better cash flow, employee productivity, and business expansion.",
            image: officeVastu,
        },
        {
            name: "Temple Vastu",
            description: "Deep dive into your planetary positions to understand destiny, strengths, and upcoming life cycles.",
            image: templeVastu,
        },
        

    ],
    Astrology: [
        {
            name: "Relationship Astrology",
            description: "Deep dive into your planetary positions to understand destiny, strengths, and upcoming life cycles.",
            image:loveAstro,
        },
        {
            name: "Career Astrology",
            description: "Understand the professional path best suited for your cosmic profile and time your growth moves.",
            image: careerVastu,
        },
        {
            name: "Corporate Astrology",
            description: "Choose auspicious timings (muhurat), leadership planning, branding, investments, and strategic decisions by aligning business actions with cosmic energies.",
            image: coorporateAstro,
        },
        {
            name: "Medical Astrology",
            description: "Connect planets, zodiac signs, and houses with different parts of the human body and diseases by analyzing planetary transits on physical and mental well-being.",
            image: medicalAstro,
        },
        {
            name: "Child Astrology",
            description: "Identify child's strengths, learning style, emotional needs, and suitable fields for growth from an early age by using planetary periods and remedies.",
            image: childAstrology,
        }
    ],
    Numerology: [
        {
            name: "Astro Numerology Report",
            description: "Analyze Guna Milan and planetary compatibility for a harmonious and lasting marriage alliance.",
            image: astroNumerology,
        },
        {
            name: "Name Numerology",
            description: "Align the vibrations of your name with your birth date to remove obstacles and attract success.",
            image: nameNumerology,
        },
        {
            name: "Mobile Numerology",
            description: "Ensure your primary communication digits are in harmony with your destiny for better networking.",
            image: mobileNumerology,
        },
        {
            name: "Business Numerology",
            description: "Select the perfect business name and launch dates to ensure brand resonance and global success.",
            image: "/numerology_thumb.png",
        },
    ],
};