export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
  approved: boolean;
  date: string;
}

export const sampleTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Head of Marketing",
    company: "Flowstate",
    avatar: "SC",
    text: "ProofBase completely transformed how we showcase customer love. Our conversion rate jumped 34% after adding the wall of love to our landing page. The setup took less than 5 minutes!",
    rating: 5,
    approved: true,
    date: "2024-01-15",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "Founder & CEO",
    company: "Launchpad.io",
    avatar: "MJ",
    text: "We tried 4 different testimonial tools before finding ProofBase. The AI enhancement feature is a game-changer — it polishes rough feedback into compelling stories while keeping the authentic voice.",
    rating: 5,
    approved: true,
    date: "2024-01-20",
  },
  {
    id: "3",
    name: "Aisha Patel",
    role: "Product Designer",
    company: "Creatify",
    avatar: "AP",
    text: "The embed widgets are gorgeous and match our brand perfectly. I love the carousel style — it adds movement and life to our testimonials section. Highly recommend!",
    rating: 5,
    approved: true,
    date: "2024-02-01",
  },
  {
    id: "4",
    name: "David Kim",
    role: "Growth Lead",
    company: "ScaleUp",
    avatar: "DK",
    text: "The collection form is so easy for customers to use. We went from getting maybe 1 testimonial a month to 10+ per week. ProofBase made social proof effortless.",
    rating: 4,
    approved: true,
    date: "2024-02-05",
  },
  {
    id: "5",
    name: "Emma Watson",
    role: "CMO",
    company: "BrightSide",
    avatar: "EW",
    text: "I was blown away by how professional everything looks. The wall of love widget is stunning and our visitors spend 40% more time on pages with testimonials.",
    rating: 5,
    approved: true,
    date: "2024-02-10",
  },
  {
    id: "6",
    name: "Tom Rivera",
    role: "Freelance Developer",
    company: "Self-employed",
    avatar: "TR",
    text: "As a freelancer, client testimonials are everything. ProofBase lets me collect them painlessly and display them beautifully on my portfolio. Worth every penny.",
    rating: 5,
    approved: false,
    date: "2024-02-14",
  },
  {
    id: "7",
    name: "Lisa Nguyen",
    role: "VP of Sales",
    company: "CloudReach",
    avatar: "LN",
    text: "Our sales team uses ProofBase testimonials in proposals and it's been a massive trust builder. The ability to curate and categorize reviews is incredibly useful.",
    rating: 4,
    approved: true,
    date: "2024-02-18",
  },
  {
    id: "8",
    name: "James O'Brien",
    role: "Startup Founder",
    company: "Nimbus AI",
    avatar: "JO",
    text: "Simple, beautiful, effective. ProofBase is exactly what every SaaS landing page needs. Setup was a breeze and the results speak for themselves.",
    rating: 5,
    approved: true,
    date: "2024-02-22",
  },
];

export const formQuestions = [
  { id: "q1", label: "What's your name?", type: "text", required: true },
  { id: "q2", label: "Your role & company", type: "text", required: true },
  {
    id: "q3",
    label: "How would you rate your experience?",
    type: "rating",
    required: true,
  },
  {
    id: "q4",
    label: "Tell us about your experience",
    type: "textarea",
    required: true,
  },
  {
    id: "q5",
    label: "Would you recommend us? Why?",
    type: "textarea",
    required: false,
  },
];
