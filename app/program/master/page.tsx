import ProgramPage from '../../../components/ProgramPage';

const masterData = {
  stage: 'Master (5–6 Years)',
  ageRange: '5–6 Years',
  headline: 'Where Confidence Turns into School Readiness',
  subheadline: 'At this stage, children strengthen thinking, communication, and independence — preparing them to confidently step into formal schooling.',
  diffTitle: 'What Makes the Master Stage Different?',
  diffPoints: [
    { title: 'Advanced Concept Understanding', desc: 'Children begin to connect ideas, not just learn them. Building bridges between different areas of knowledge.' },
    { title: 'Real-World Learning Connections', desc: 'Applies knowledge to everyday situations. Making learning practical and memorable.' },
    { title: 'Stronger Cognitive Development', desc: 'Improves memory, focus, and problem-solving ability — essential skills for school success.' },
  ],
  guidingTitle: 'Channelising Every Child\'s Potential',
  guidingText: 'Every child has unique strengths. At the Master stage, we identify these strengths and guide them in the right direction — helping children build confidence, sharpen skills, and prepare for the next level of learning.',
  milestoneTitle: 'Developmental Milestones Are the Building Blocks for School and Life',
  tabs: [
    { title: 'Social', points: ['Engages in imaginative role play confidently', 'Initiates interaction with other children', 'Shows empathy by comforting friends', 'Understands safety and avoids risky behaviour'] },
    { title: 'Language', points: ['Speaks clearly using full sentences', 'Retells stories with sequence and detail', 'Expresses thoughts, needs, and experiences confidently', 'Engages in meaningful conversations'] },
    { title: 'Cognitive', points: ['Recognises numbers, patterns, sequences', 'Understands time concepts', 'Solves simple problems independently', 'Shows curiosity by asking questions'] },
    { title: 'Movement', points: ['Balances, runs, and jumps with coordination', 'Rides a cycle or plays physical games confidently', 'Holds pencil correctly and begins writing', 'Uses tools like crayons, scissors with control'] },
    { title: 'Motor', points: ['Climbs, balances, and moves with improved control', 'Performs tasks requiring coordination', 'Shows independence in daily activities', 'Manages buttons, zips, and simple fasteners'] },
  ],
  perksTitle: 'How Braindemics Prepares Your Child for School Success',
  perks: [
    { title: 'Builds strong school readiness skills', desc: 'Academic, social, and emotional preparation for the transition to formal schooling.' },
    { title: 'Develops independent thinking and decision-making', desc: 'Children learn to solve problems and make choices with confidence.' },
    { title: 'Encourages confident communication and expression', desc: 'Strong language skills that help children thrive in classroom settings.' },
    { title: 'Strengthens emotional and social intelligence', desc: 'Preparing children to build positive relationships and manage their feelings.' },
  ],
  whyTitle: 'Why Braindemics for the Master Stage?',
  whyText: 'Braindemics goes beyond basic learning — it prepares your child with the confidence, thinking skills, and independence needed for real school success.',
  whyPoints: [
    { title: 'Child Psychology–Driven Learning', desc: 'Designed with expert understanding of how children think and grow at this stage.' },
    { title: 'Multiple Intelligence Development', desc: 'Nurturing creativity, logic, language, and emotional skills together.' },
    { title: 'Concept-Based Learning', desc: 'Focus on understanding, not memorisation — knowledge that lasts.' },
    { title: '360° Skill Assessment', desc: 'Tracking your child\'s growth across all key areas.' },
  ],
  uniqueTitle: 'What Makes Braindemics Different?',
  uniquePoints: [
    'Thematic learning approach',
    'Strong conceptual understanding',
    'Real-world connection of ideas',
    'Development of multiple intelligences',
  ],
};

export default function MasterPage() {
  return <ProgramPage data={masterData} />;
}
