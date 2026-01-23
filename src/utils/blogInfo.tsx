export interface BlogItem {
    id: string;
    question: string;
    answer: string;
}

 export const blogs: BlogItem[] = [
    {
        id: "vastu-intro",
        question: "What is Vastu?",
        answer: "Vastu Shastra is an ancient Indian traditional system of architecture originating in the Indian subcontinent. It literally translates to 'science of architecture'. These are texts found on the Indian subcontinent that describe principles of design, layout, measurements, ground preparation, space arrangement, and spatial geometry."
    },
    {
        id: "vastu-purpose",
        question: "Purpose of Vastu",
        answer: "The primary purpose of Vastu is to align the home or workspace with the laws of nature. By balancing the five elements (Earth, Water, Fire, Air, and Space), Vastu aims to create a harmonious environment that enhances the physical and psychological well-being of its occupants, promoting health, prosperity, and happiness."
    },
    {
        id: "vastu-works",
        question: "How Vastu works?",
        answer: "Vastu works by optimizing the flow of cosmic energy (Prana) within a structure. It considers the magnetic field of the Earth and the energy from the Sun. By placing specific rooms and objects in designated directions, it ensures that the inhabitants are in sync with these natural forces, thereby minimizing obstacles and maximizing positive outcomes."
    },
    {
        id: "astro-works",
        question: "How Astrology works?",
        answer: "Astrology works on the principle of 'As above, so below'. It posits that the positions and movements of celestial bodies at the time of one's birth influence their personality, relationships, and destiny. By analyzing a birth chart, astrologers can identify planetary patterns that offer insights into life's challenges and opportunities."
    },
    {
        id: "num-works",
        question: "How Numerology works?",
        answer: "Numerology is the study of the mystical relationship between numbers and events. It works by assigning numerical values to letters in names and using birth dates to calculate key numbers (like Life Path or Destiny numbers). These numbers vibrate with specific energies that can reveal a person's character traits and life purpose."
    }
];