import gemstones from "../../public/gemstones.png"
import rudraksha from "../../public/rudraksha.png"

export type Product = {
    name: string;
    description: string;
    image: any;
};

export type ProductCategory = "Gem Stones" | "Rudraksha";

export const productData: Record<ProductCategory, Product[]> = {
    "Gem Stones": [
        {
            name: "Blue Sapphire (Neelam)",
            description: "A powerful stone for Saturn, believed to bring instant wealth, fame, and abundance to the wearer.",
            image: gemstones,
        },
        {
            name: "Emerald (Panna)",
            description: "The stone of Mercury, perfect for enhancing communication, intelligence, and business success.",
            image: gemstones,
        },
        {
            name: "Ruby (Manik)",
            description: "Representing the Sun, this stone boosts leadership qualities, confidence, and vital energy.",
            image: gemstones,
        },
        {
            name: "Yellow Sapphire (Pukhraj)",
            description: "Associated with Jupiter, it brings wisdom, fortune, and prosperity to one's life.",
            image: gemstones,
        },
    ],
    "Rudraksha": [
        {
            name: "1 Mukhi Rudraksha",
            description: "The most sacred bead, representing Lord Shiva. It brings enlightenment and divine connection.",
            image: rudraksha,
        },
        {
            name: "5 Mukhi Rudraksha",
            description: "Used for general well-being, health, and peace of mind. Excellent for meditation.",
            image: rudraksha,
        },
        {
            name: "7 Mukhi Rudraksha",
            description: "Representing Goddess Lakshmi, it is believed to attract wealth and new opportunities.",
            image: rudraksha,
        },
        {
            name: "Ganesh Rudraksha",
            description: "Bead with a trunk-like protrusion, believed to remove obstacles and bring success in new ventures.",
            image: rudraksha,
        },
    ],
};
