import ProgramPage from '../../../components/ProgramPage';

const beginnerData = {
  stage: 'Beginner (3–4 Years)',
  ageRange: '3–4 Years',
  headline: 'Building confident, curious learners through play, exploration, and meaningful experiences.',
  subheadline: 'At the Beginner stage, children take their first steps into structured learning. Braindemics creates a gentle, nurturing environment where exploration and curiosity are encouraged every single day.',
  diffTitle: 'What Makes Braindemics Different?',
  diffPoints: [
    { title: 'Child-Centred Learning', desc: 'Every child learns differently. Our approach focuses on understanding each child\'s pace, interests, and strengths.' },
    { title: 'Concept-Based Exploration', desc: 'We don\'t teach for memorisation. We help children understand ideas by connecting them to everyday experiences.' },
    { title: 'Strong Cognitive Foundations', desc: 'Activities are designed to develop thinking, problem-solving, and decision-making skills from an early age.' },
  ],
  guidingTitle: 'Guiding Every Child in the Right Direction',
  guidingText: 'Every child is unique. Our role is to recognise their strengths early and guide them in ways that help them grow with confidence. Through gentle guidance and structured play, we help children build independence, social skills, and a natural love for learning.',
  milestoneTitle: 'Building Strong Foundations for Lifelong Learning',
  tabs: [
    { title: 'Social & Emotional', points: ['Settles more easily after separation', 'Shows interest in other children', 'Starts expressing feelings using words', 'Begins learning to share and take turns'] },
    { title: 'Language', points: ['Can tell simple stories', 'Answers basic questions', 'Engages in back-and-forth conversations', 'Follows simple instructions'] },
    { title: 'Cognitive', points: ['Recognises shapes, colours, patterns', 'Begins drawing simple shapes', 'Understands cause and effect', 'Starts making simple decisions'] },
    { title: 'Physical', points: ['Can climb, run, and move with balance', 'Uses hands for drawing and stacking', 'Manages simple self-care tasks', 'Shows improved coordination'] },
    { title: 'Motor Skills', points: ['Climbs stairs with support', 'Jumps with better control', 'Strings beads', 'Holds crayons for drawing'] },
  ],
  perksTitle: 'How Braindemics Prepares Your Child for the Future',
  perks: [
    { title: 'Supports age-appropriate milestones', desc: 'We guide children through every stage of growth with structured, play-based learning.' },
    { title: 'Encourages thinking, curiosity, and self-expression', desc: 'Children are given the space to explore ideas, ask questions, and share what they understand.' },
    { title: 'Hands-on learning, every single day', desc: 'Activities are designed to help children learn by doing — not memorising.' },
    { title: 'Builds confidence across all areas', desc: 'We focus on emotional, social, and cognitive growth — shaping well-rounded learners.' },
  ],
  whyTitle: 'Why Choose Braindemics?',
  whyText: 'Braindemics transforms early learning into a meaningful, engaging, and joyful experience — where children don\'t just learn, they thrive.',
  whyPoints: [
    { title: 'Paediatric & Psychological Foundation', desc: 'Built by experts in child development. Designed with inputs from paediatricians and psychologists.' },
    { title: 'Multiple Intelligence Approach', desc: 'We nurture different learning styles including logical, creative, linguistic, and social intelligence.' },
    { title: 'Concept-Based Learning', desc: 'Children build strong foundations by truly understanding concepts, not just repeating them.' },
    { title: '360° Skill Assessment', desc: 'Our structured assessments help monitor growth across skills, behaviour, and development.' },
  ],
  uniqueTitle: 'What Makes Braindemics Different?',
  uniquePoints: [
    'Thematic learning that connects everything',
    'Stronger concept clarity, not rote learning',
    'Encourages curiosity and independent thinking',
    'Nurtures multiple intelligences in every child',
  ],
};

export default function BeginnerPage() {
  return <ProgramPage data={beginnerData} />;
}
