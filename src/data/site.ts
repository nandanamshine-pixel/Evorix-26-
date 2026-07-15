import {
  Camera,
  CheckCircle2,
  CircleDollarSign,
  Cpu,
  Drama,
  Eye,
  Gamepad2,
  Mail,
  MapPin,
  Mic2,
  Palette,
  Phone,
  Presentation,
  Puzzle,
  School,
  ShieldCheck,
  Sparkles as SparklesIcon,
  Utensils,
  Trophy,
  Users,
} from "lucide-react";

export const registrationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSd0kjYu2gtUt5mPa0lA4QbBKKtnCah-Bp_b5v4WWNU63kvEsw/viewform";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Schedule", href: "/schedule" },
  { label: "Contact", href: "/contact" },
];
export const stats = [
  { value: "11", label: "competitions" },
  { value: "30+", label: "invited schools" },
  { value: "800+", label: "expected participants" },
];

export const sponsors = [
  "PRESENTING PARTNER",
  "Innovation Partner",
  "Refreshment Partner",
  "Media Partner",
];

export const faqs = [
  {
    question: "Who can participate in EVORIX?",
    answer:
      "Students from invited schools can participate through their school coordinator once event registrations open.",
  },
  {
    question: "Will there be separate junior and senior categories?",
    answer:
      "There shall be no seperate categories for all events",
  },
  {
    question: "Is registration live right now?",
    answer:
      "Yes. Schools should use the official EVORIX Google Form linked throughout the website.",
  },
  {
    question: "Where will schedules and rules be published?",
    answer:
      "Event rules, reporting times, and venue details will be published on the website before registrations open.",
  },
];

export const contactItems = [
  { label: "Fest Office", value: "EVORIX Coordination Desk", icon: MapPin },
  { label: "Email", value: "evorixcarmel@gmail.com", icon: Mail },
  { label: "Phone", value: "+91 97460 83150", icon: Phone },
];

export const aboutTimeline = [
  { year: "2022", title: "Genesis Edition", stat: "18 schools", description: "EVORIX began as a compact interschool celebration of science, arts, and debate." },
  { year: "2023", title: "Expansion Edition", stat: "26 events", description: "New technology, design, and stage categories gave more students a strong platform." },
  { year: "2024", title: "Collaboration Edition", stat: "1,400 participants", description: "Cross-school teamwork rounds and leadership challenges became signature experiences." },
  { year: "2025", title: "Momentum Edition", stat: "42 schools", description: "The fest matured into a polished two-day campus experience with dedicated arenas." },
];

export const aboutHighlights = [
  { title: "Competition With Care", description: "Every event is planned with clear rules, age-appropriate categories, and visible coordination support.", icon: ShieldCheck },
  { title: "Many Forms Of Talent", description: "EVORIX values technical skill, creative courage, communication, teamwork, and sportsmanship equally.", icon: CheckCircle2 },
  { title: "Campus-Wide Energy", description: "Students move through themed arenas, stage showcases, idea pitches, and collaborative challenges.", icon: School },
];

export const eventCategories = [
  "All",
  "Tech expo",
  "Communication",
  "Stage",
  "Technology",
  "Strategy",
  "Creative",
  "Marketing",
];

export const events = [
  { title: "Genesis", category: "Tech expo", description: "A dynamic tech expo that showcases innovative projects, cutting-edge technology, and creative ideas developed by young innovators. It inspires exploration, collaboration, and pursuit of solutions that shape a smarter and sustainable future.", teamSize: "2-3", venue: "TBA", date: "06/08/2026", time: "TBA", icon: SparklesIcon, banner: "radial" },
  { title: "Arguvox", category: "Communication", description: "Where intellect meets innovation. Step in a stage of compelling arguments and bold perspectives as participants. Explore the evolving world of technology and its influence on society. More than a debate, ArguVox celebrates critical thinking, articulate expression, and the courage to challenge ideas.", teamSize: "2", venue: "TBA", date: "06/08/2026", time: "TBA", icon: Mic2, banner: "waves" },
  { title: "Rhythmera", category: "Stage", description: "It is a symphony of movement and emotion. Every performance weaves rhythm , creativity and passsion into a captivating spectacle, celebrating the timeless art of dance and the stories that come alive through every graceful step.", teamSize: "Individual, 2 per school", venue: "TBA", date: "06/08/2026", time: "TBA", icon: Drama, banner: "pulse" },
  { title: "Nullpointer", category: "Technology", description: "It is a chase for meaning in the undefined. Every problem begins as a reference to nothing, every solver a mind determined to give it value, as logic battles against the clock to turn null into knowledge. One pointer, one breakthrough, one Accepted at a time.", teamSize: "Individual, 2 per school", venue: "TBA", date: "06/08/2026", time: "TBA", icon: Cpu, banner: "circuit" },
  { title: "Assemble X", category: "Technology", description: "An exciting hardware challenger that celebrates technical expertise, logical thinking, and precision. Participants put their computer hardware knowledge and problem-solving skill to the test, showcasing the skills needed to build and understand the technology that powers the digital world.", teamSize: "2", venue: "TBA", date: "06/08/2026", time: "TBA", icon: Gamepad2, banner: "grid" },
  { title: "Cipher Chase", category: "Strategy", description: "A thrilling treasure hunt where every clue conceals a deeper mystery. Navigate hidden paths, unravel cryptic puzzles, and pieve together the unknown as intuition, teamwork, and determination guide you toward the ultimate discovery.", teamSize: "3-5", venue: "TBA", date: "06/08/2026", time: "TBA", icon: Puzzle, banner: "maze" },
  { title: "Stratix", category: "Marketing", description: " A dynamic marketing challenge that inspres innovation, strategic thinking, and persuasive communication. Participants debelop creative solutions, analyze market scenarios, and showcase the skills needed to craft impactful strategies in a competitive business landscape", eligibility: "Invited schools", teamSize: "Individual, 2 per school", venue: "TBA", date: "06/08/2026", time: "TBA", icon: Trophy, banner: "nodes" },
  { title: "Metamorph", category: "Strategy", description: "A challenge that transdorms discarded materials into extraodinary creations. It celebrates creativity, resourcefulness, and innovative thinking, encouraging participants to reimagine waste as opportunity and turn simple ideas into meaningful solutions.", eligibility: "Invited schools", teamSize: "3", venue: "TBA", date: "06/08/2026", time: "TBA", icon: Palette, banner: "prism" },
  { title: "Chronoscope", category: "Creative", description: "A creative painting compeition that invites participants to visualize the world beyond today. Through imagination and artistic expression, they bring tomorrow's possibilities to life, transforming bold ideas into captivating works of art.", eligibility: "Invited schools", teamSize: "3", venue: "TBA", date: "06/08/2026", time: "TBA", icon: Eye, banner: "lens" },
  { title: "Decktron", category: "Creative", description: "A prsentation challenge that showcases the art of impactfl storytelling through compelling slides and confident delivery. Participants combine creativity, clarity, and communication skills to transform ideas into engaging and memorable presentations.", eligibility: "Invited schools", teamSize: "2", venue: "TBA", date: "06/08/2026", time: "TBA", icon: Presentation, banner: "deck" },
  { title: "Animatrix", category: "Creative", description: "An animation competition where imagination comes to life through motion and storytelling. Participants blend creativity, desogn, and technical skill to craft visually captivating animations that inspire, engage, and leave a lasting impression.", eligibility: "Invited schools", teamSize: "2", venue: "TBA", date: "06/08/2026", time: "TBA", icon: Camera, banner: "frames" },
];

export const scheduleItems = [
  { day: "Day 1", time: "08:00 AM", title: "Registration and school reporting", venue: "Registration Plaza", category: "General" },
  { day: "Day 1", time: "09:00 AM", title: "Opening ceremony", venue: "Main Stage", category: "General" },
  { day: "Day 1", time: "TBA", title: "Genesis", venue: "TBA", category: "Flagship" },
  { day: "Day 1", time: "TBA", title: "Arguvox", venue: "TBA", category: "Communication" },
  { day: "Day 1", time: "TBA", title: "Nullpointer", venue: "TBA", category: "Technology" },
  { day: "Day 1", time: "TBA", title: "Assemble X", venue: "TBA", category: "Technology" },
  { day: "Day 1", time: "TBA", title: "Cipher Chase", venue: "TBA", category: "Strategy" },
  { day: "Day 1", time: "TBA", title: "Stratix", venue: "TBA", category: "Strategy" },
  { day: "Day 1", time: "TBA", title: "Rhythmera", venue: "TBA", category: "Stage" },
  { day: "Day 1", time: "TBA", title: "Metamorph", venue: "TBA", category: "Creative" },
  { day: "Day 1", time: "TBA", title: "Chronoscope", venue: "TBA", category: "Creative" },
  { day: "Day 1", time: "TBA", title: "Decktron", venue: "TBA", category: "Business" },
  { day: "Day 1", time: "TBA", title: "Animatrix", venue: "TBA", category: "Creative" },
  { day: "Day 1", time: "TBA", title: "Valedictory and awards", venue: "Main Stage", category: "General" },
];

export const sponsorGroups = [
  { tier: "Partnership Partner", description: "Headline partners supporting the complete EVORIX experience.", sponsors: ["Astra Learning Labs", "NovaTech Education"] },
  { tier: "Platinum", description: "Partners enabling arenas, awards, and student engagement zones.", sponsors: ["BrightPath Academy", "CodeCraft Studio", "EduSpark"] },
  { tier: "Gold", description: "Event supporters for category prizes and coordination resources.", sponsors: ["Campus Print Hub", "STEMWorks", "StageLine"] },
  { tier: "Silver", description: "Local collaborators helping visiting schools feel welcome.", sponsors: ["Green Basket", "City Books", "Youth Radio"] },
];

export const galleryItems = [
  { title: "Opening lights", year: "2025", category: "Ceremony", height: "h-72" },
  { title: "Robotics arena", year: "2025", category: "STEM", height: "h-96" },
  { title: "Dance finals", year: "2024", category: "Stage", height: "h-80" },
  { title: "Quiz champions", year: "2024", category: "Awards", height: "h-64" },
  { title: "Art studio", year: "2023", category: "Arts", height: "h-96" },
  { title: "Pitch room", year: "2025", category: "Business", height: "h-72" },
  { title: "Campus quest", year: "2023", category: "Strategy", height: "h-80" },
  { title: "Music showcase", year: "2024", category: "Stage", height: "h-72" },
  { title: "Science lab", year: "2025", category: "STEM", height: "h-96" },
];

export const faqCategories = [
  { question: "How will schools register for EVORIX?", answer: "A school coordinator should complete the official EVORIX Google Form. Individual student entries should be routed through the school.", icon: "School" },
  { question: "Can students register independently?", answer: "No. Participation is school-nominated to keep verification, attendance, and permissions organized.", icon: "Users" },
  { question: "Is there a registration fee?", answer: "Any participation fee, if applicable, will be published with the official circular before registrations open.", icon: "CircleDollarSign" },
  { question: "Will food be provided?", answer: "Basic refreshments are planned for participants and coordinators. Detailed food arrangements will be shared with the final schedule.", icon: "Utensils" },
  { question: "Are certificates provided?", answer: "Participation certificates and winner certificates are planned for verified participants across eligible events.", icon: "Trophy" },
  { question: "Can one student join multiple events?", answer: "Yes, where timings do not clash. Schools should check the schedule before final team submission.", icon: "CheckCircle2" },
  { question: "Will accommodation be available?", answer: "EVORIX is currently planned as a day-school event. Accommodation support is not included in this phase.", icon: "MapPin" },
  { question: "What should participants carry?", answer: "Students should carry school ID cards, approved materials for their events, water bottles, and any consent forms required by their school.", icon: "ShieldCheck" },
  { question: "Are mobile phones allowed?", answer: "Phones may be restricted inside specific competition venues. Event coordinators will announce rules before each round.", icon: "Phone" },
  { question: "How are disputes handled?", answer: "Each venue will have event coordinators and judges. Appeals must be routed through the school coordinator.", icon: "ShieldCheck" },
  { question: "Can parents attend?", answer: "Parent access depends on school policy and venue capacity. Visitor guidelines will be announced closer to the fest.", icon: "Users" },
  { question: "Where can rules be downloaded?", answer: "Rules will be available on each event page in a later phase, with downloadable PDFs planned before launch.", icon: "CheckCircle2" },
  { question: "Will there be emergency support?", answer: "Yes. A help desk and first-aid contact point will be visible on campus during fest hours.", icon: "Phone" },
  { question: "Can schools bring banners?", answer: "School identity material may be allowed in designated areas, subject to decorum and campus rules.", icon: "School" },
  { question: "How will winners be announced?", answer: "Results will be announced during the valedictory ceremony and later published through official school channels.", icon: "Trophy" },
];

export const coordinators = {
  faculty: [
    { name: "Deepthi SR", role: "Faculty Coordinator", phone: "+91 97460 83150" },
    { name: "Ranjitha RS", role: "Faculty Coordinator", phone: "+91 90209 32444" },
    {name: "Josna Thomas", role: "Faculty Coordinator", phone: "+91 70125 94448" },
  ],
};
