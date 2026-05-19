import ProgramPage from '../../../components/ProgramPage';

const explorerData = {
  stage: 'Explorer (4–5 Years)',
  ageRange: '4–5 Years',
  headline: 'Where Curiosity Turns Into Understanding',
  subheadline: 'At this stage, children begin to ask more questions, connect ideas, and explore the world with greater independence. Braindemics nurtures this natural curiosity and transforms it into structured learning experiences.',
  diffTitle: 'What Makes the Explorer Stage Different?',
  diffPoints: [
    { title: 'Psychologically Designed Learning', desc: 'Built around how children actually learn. Our curriculum matches how 4–5 year olds think, feel, and absorb knowledge.' },
    { title: 'Concept-Based Learning Approach', desc: 'From "What" to "Why". Children move beyond basic learning and begin understanding concepts, patterns, and relationships.' },
    { title: 'Strengthening Cognitive Development', desc: 'Activities are designed to improve memory, reasoning, and decision-making abilities at this crucial stage.' },
  ],
  guidingTitle: 'Channelising Every Child\'s Curiosity',
  guidingText: 'At the Explorer stage, every child begins to show unique interests and abilities. Braindemics helps identify these strengths early and guides them in the right direction — building confidence, clarity, and a love for learning.',
  milestoneTitle: 'Developmental Milestones That Shape Your Child\'s Growth',
  tabs: [
    { title: 'Social', points: ['Learns to take turns and follow simple rules', 'Expresses feelings through singing, dancing, role-play', 'Shows independence by helping with daily tasks'] },
    { title: 'Language', points: ['Tells simple stories with beginning and ending', 'Answers questions about stories or experiences', 'Engages in longer back-and-forth conversations'] },
    { title: 'Cognitive', points: ['Recognises numbers and begins counting', 'Understands simple time concepts', 'Stays focused on activities longer', 'Identifies letters and begins early writing'] },
    { title: 'Movement', points: ['Hops, balances, and moves with coordination', 'Manages self-care tasks like dressing', 'Uses hands precisely for drawing or threading'] },
    { title: 'Motor', points: ['Rides a tricycle', 'Climbs stairs with better balance', 'Strings beads or similar objects', 'Uses basic tools like a spoon or fork'] },
  ],
  perksTitle: 'What Your Child Truly Gains with Braindemics',
  perks: [
    { title: 'Ensures age-appropriate milestones', desc: 'Structured activities that align with how 4–5 year olds naturally develop.' },
    { title: 'Helps children express what they think and feel', desc: 'Building communication and emotional intelligence together.' },
    { title: 'Daily hands-on activities for real-world learning', desc: 'Every day brings new opportunities to explore, create, and discover.' },
    { title: 'Builds emotional, social, and cognitive strength', desc: 'A balanced approach to developing the whole child.' },
  ],
  whyTitle: 'Why Schools & Parents Choose Braindemics',
  whyText: 'Braindemics transforms early education into a structured, engaging, and scientifically designed learning experience — built for real child development, not just academics.',
  whyPoints: [
    { title: 'Paediatric & Psychology-Based Foundation', desc: 'Designed with expert understanding of how children think and grow at this age.' },
    { title: 'Nurtures Multiple Intelligence', desc: 'Supporting creativity, logic, language, and emotional skills in parallel.' },
    { title: 'Concept-Based Learning Approach', desc: 'Focus on understanding, not memorisation — ideas that stick.' },
    { title: '360° Skill Assessment System', desc: 'Track growth across all key developmental areas.' },
  ],
  uniqueTitle: 'What Makes Braindemics Different?',
  uniquePoints: [
    'Thematic learning that connects subjects naturally',
    'Strong concept clarity, not rote memorisation',
    'Helps children understand the world around them',
    'Develops multiple intelligence in every child',
  ],
};

export default function ExplorerPage() {
  return <ProgramPage data={explorerData} />;
}
