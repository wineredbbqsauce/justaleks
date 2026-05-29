// Central content store — edit here to update the site.

export const PROFILE = {
    name: "Just Aleks",
    domain: "justaleks.no",
    tagline: "IT Developer && Visual Artist",
    location: "Norway",
    email: "hello@justaleks.no",
    github: "https://github.com/justaleks",
    linkedin: "https://www.linkedin.com/in/justaleks",
};

export const MEDIA = {
    hero: "https://static.prod-images.emergentagent.com/jobs/75d8837c-c363-4b19-9a5a-312b1b3be6ac/images/adb4491ee434e1fc120ab8b677079d1a0c3f3184d28403485e08bfbd6ff96e5a.png",
    portrait:
        "https://static.prod-images.emergentagent.com/jobs/75d8837c-c363-4b19-9a5a-312b1b3be6ac/images/8c10d4ed09e7e850e955f8a76fb0cdecc7a0a8894562d18cae42eb4eff6ea9d4.png",
    code1: "https://static.prod-images.emergentagent.com/jobs/75d8837c-c363-4b19-9a5a-312b1b3be6ac/images/08fada2c575406c039363a473d8a3f1e53bdf2a2406b4bb3dadf244630fbb1cc.png",
    code2: "https://static.prod-images.emergentagent.com/jobs/75d8837c-c363-4b19-9a5a-312b1b3be6ac/images/33fc7ab17df6871ffae5a1ccffefaa1e6dc2575fb4b973b8baaf158df02053d4.png",
    art1: "https://static.prod-images.emergentagent.com/jobs/75d8837c-c363-4b19-9a5a-312b1b3be6ac/images/9e764fd71f8062bf355eda1fd87b97af143f15be2b02dc250be0ab9f9f7e9986.png",
    art2: "https://static.prod-images.emergentagent.com/jobs/75d8837c-c363-4b19-9a5a-312b1b3be6ac/images/9e7d8ebe1494ff5e316127d7e75a0e4efd8b2417235a9f64391fd009a8335504.png",
};

export const IT_PROJECTS = [
    {
        id: "p01",
        index: "01",
        title: "Atelier OS",
        year: "2025",
        stack: ["React", "FastAPI", "MongoDB"],
        summary:
            "A studio management platform for independent creatives — invoicing, archive, and exhibition planning.",
        link: "https://github.com/justaleks/atelier-os",
        image: MEDIA.code1,
        size: "large",
    },
    {
        id: "p02",
        index: "02",
        title: "Lumen.cli",
        year: "2024",
        stack: ["Rust", "WASM"],
        summary:
            "A terminal companion that translates plain Norwegian into shell commands.",
        link: "https://github.com/justaleks/lumen-cli",
        image: MEDIA.code2,
        size: "small",
    },
    {
        id: "p03",
        index: "03",
        title: "Nordlys API",
        year: "2024",
        stack: ["Go", "PostgreSQL"],
        summary:
            "Open-source weather + aurora-forecast API for Northern Norway.",
        link: "https://github.com/justaleks/nordlys",
        image: null,
        size: "small",
    },
    {
        id: "p04",
        index: "04",
        title: "Grain Studio",
        year: "2023",
        stack: ["TypeScript", "WebGL"],
        summary:
            "Browser-native film grain & color grading tool used by indie photographers.",
        link: "https://github.com/justaleks/grain-studio",
        image: null,
        size: "wide",
    },
];

export const ART_WORKS = [
    {
        id: "a01",
        title: "Untitled (Stone, Iron)",
        medium: "Sculpture · 2025",
        image: MEDIA.art1,
        aspect: "tall",
    },
    {
        id: "a02",
        title: "Raw Umber Studies",
        medium: "Oil on linen · 2024",
        image: MEDIA.art2,
        aspect: "square",
    },
    {
        id: "a03",
        title: "Field Notes, Vol. II",
        medium: "Mixed media · 2024",
        image: MEDIA.art1,
        aspect: "square",
    },
    {
        id: "a04",
        title: "Atelier, Late Hour",
        medium: "Oil, charcoal · 2023",
        image: MEDIA.art2,
        aspect: "tall",
    },
];

export const SKILLS = [
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "Go",
    "Rust",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Figma",
    "Oil Painting",
    "Sculpture",
    "Analog Photography",
    "Letterpress",
    "WebGL",
    "Shaders",
    "Linux",
];

export const TIMELINE = [
    {
        year: "2025",
        title: "Studio practice + freelance development",
        place: "Oslo, NO",
    },
    {
        year: "2022",
        title: "Lead engineer — small product teams",
        place: "Remote / EU",
    },
    {
        year: "2019",
        title: "BFA, Painting & Digital Media",
        place: "Bergen Academy of Art",
    },
    {
        year: "2017",
        title: "First commit — first canvas",
        place: "Tromsø, NO",
    },
];
