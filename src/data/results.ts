// src/data/results.ts

export interface MBTIResult {
  name: string;
  description: string;
  recommendation: string;
  characteristics: string[];
  famous_figures: string[];
  best_environments: string[];
  growth_tips: string[];
}

export const results: { [key: string]: MBTIResult } = {
  "ISTJ": {
    name: "The Duty Fulfiller",
    description: "You think based on facts, are highly responsible, and realistic.",
    recommendation: "Accounting, Data Analysis, Engineering",
    characteristics: ["Cautious and realistic", "Strong sense of responsibility", "Well-organized", "Values principles"],
    famous_figures: ["George Washington", "Angela Merkel", "Warren Buffett"],
    best_environments: ["Systematic and stable environments", "Places with clear rules and procedures", "Roles where accuracy and detail are important"],
    growth_tips: ["Be open to new ideas.", "Practice expressing your emotions.", "Sometimes enjoy spontaneous experiences without a plan."]
  },
  "ISFJ": {
    name: "The Protector",
    description: "Quiet, calm, dedicated, and considerate. You see tasks through to the end.",
    recommendation: "Nurse, Educator, Administrative Professional",
    characteristics: ["Warm and dedicated", "Strong sense of responsibility", "Meticulous and observant", "Sensitive to others' feelings"],
    famous_figures: ["Mother Teresa", "Beyoncé", "Selena Gomez"],
    best_environments: ["Professions helping people", "Stable and harmonious environments", "Fields requiring meticulous care"],
    growth_tips: ["Practice prioritizing your own needs and feelings.", "Learn to clearly express your opinions in conflict situations.", "Don't be afraid of new experiences and changes."]
  },
  "INFJ": {
    name: "The Advocate",
    description: "Highly insightful, an idealist who inspires people.",
    recommendation: "Counselor, Writer, Human Rights Activist",
    characteristics: ["Insightful and intuitive", "Idealistic", "Helps others grow", "Deep empathy"],
    famous_figures: ["Martin Luther King Jr.", "Nelson Mandela", "Oprah Winfrey"],
    best_environments: ["Where meaningful work can be done", "Creative and independent work environments", "Roles that bring out people's potential"],
    growth_tips: ["Set realistic goals and practice achieving them step by step.", "Take enough time for yourself to recharge your energy.", "Don't try to please everyone."]
  },
  "INTJ": {
    name: "The Architect",
    description: "Analytical in all matters, a commander who pursues perfect plans.",
    recommendation: "Strategic Planning, Scientist, Software Development",
    characteristics: ["Analytical and logical", "Independent and decisive", "Long-term perspective", "Thirst for knowledge"],
    famous_figures: ["Elon Musk", "Stephen Hawking", "Isaac Newton"],
    best_environments: ["Roles solving complex problems", "Independent research and development environments", "Fields requiring strategic thinking"],
    growth_tips: ["Practice listening to and respecting others' opinions.", "Practice recognizing and expressing your emotions.", "Sometimes accept that it's okay not to be perfect."]
  },
  "ISTP": {
    name: "The Virtuoso",
    description: "Quiet and observant, a master skilled in using machines and tools.",
    recommendation: "Technician, Pilot, Sports Coach",
    characteristics: ["Practical and realistic", "Excellent problem-solving skills", "Challenging and adventurous", "Sharp observation skills"],
    famous_figures: ["Clint Eastwood", "Steve Jobs", "Bear Grylls"],
    best_environments: ["Hands-on creation and manipulation", "Free and flexible work environments", "Roles dealing with crisis situations"],
    growth_tips: ["Practice sharing your thoughts through communication with others.", "Try to set long-term plans and consistently put them into practice.", "Invest time in understanding and expressing your emotional side."]
  },
  "ISFP": {
    name: "The Adventurer",
    description: "Warm-hearted and humble, with artistic sensibility and flexibility.",
    recommendation: "Designer, Musician, Veterinarian",
    characteristics: ["Excellent artistic sense", "Gentle and humble", "Free-spirited and spontaneous", "Enjoys the present"],
    famous_figures: ["Michael Jackson", "Britney Spears", "Avril Lavigne"],
    best_environments: ["Creative and artistic fields", "Work environments with a free atmosphere", "Professions connected with nature"],
    growth_tips: ["Practice clarifying and expressing your values and beliefs.", "Invest time in planning for the future and setting goals.", "Sometimes practice constructively accepting criticism from others."]
  },
  "INFP": {
    name: "The Mediator",
    description: "Imaginative and always exploring new ideas, an idealist.",
    recommendation: "Writer, Psychologist, Editor",
    characteristics: ["Idealistic and creative", "Deep empathy", "Open-minded and flexible", "Values personal values"],
    famous_figures: ["William Shakespeare", "Johnny Depp", "Julia Roberts"],
    best_environments: ["Roles where personal values can be realized", "Creative and independent work environments", "Roles that help people grow"],
    growth_tips: ["Practice developing realistic problem-solving skills.", "Learn to clearly recognize and express your emotions.", "Sometimes practice analyzing situations with a critical perspective."]
  },
  "INTP": {
    name: "The Logician",
    description: "An innovative inventor with an endless thirst for knowledge.",
    recommendation: "Researcher, Philosopher, University Professor",
    characteristics: ["Logical and analytical", "Strong intellectual curiosity", "Independent and critical", "Explores new ideas"],
    famous_figures: ["Albert Einstein", "Bill Gates", "Marie Curie"],
    best_environments: ["Research roles exploring complex theories", "Fields requiring independent thought and analysis", "Roles creating new knowledge"],
    growth_tips: ["Practice clearly communicating your thoughts through interaction with others.", "Try to take an interest in practical problem-solving.", "Sometimes make an effort to understand and respect the emotional side."]
  },
  "ESTP": {
    name: "The Entrepreneur",
    description: "An active person who brings joy to those around them with overflowing energy and vitality.",
    recommendation: "Sales, Firefighter, Emergency Responder",
    characteristics: ["Active and spontaneous", "Realistic and practical", "Excellent problem-solving skills", "Enjoys socializing"],
    famous_figures: ["Donald Trump", "Madonna", "James Bond (fictional)"],
    best_environments: ["Roles interacting with diverse people", "Fields requiring quick judgment and action", "Environments where new challenges can be enjoyed"],
    growth_tips: ["Try to set long-term plans and consistently put them into practice.", "Practice understanding and empathizing with others' emotions.", "Sometimes take time to restrain impulsive actions and think carefully."]
  },
  "ESFP": {
    name: "The Entertainer",
    description: "Optimistic and sociable, a natural entertainer who shines on stage.",
    recommendation: "Actor, Event Planner, Entertainment Industry",
    characteristics: ["Optimistic and sociable", "Excellent sense of humor", "Enjoys the present", "Enjoys attention"],
    famous_figures: ["Elvis Presley", "Marilyn Monroe", "Avril Lavigne"],
    best_environments: ["Roles expressing oneself in front of people", "Work environments with a free and joyful atmosphere", "Event and entertainment fields"],
    growth_tips: ["Set long-term goals and practice acting systematically.", "Take time to deeply examine and understand your emotions.", "Sometimes take time alone to reflect on your inner self."]
  },
  "ENFP": {
    name: "The Campaigner",
    description: "A free-thinking individual who lives life with overflowing energy and passion.",
    recommendation: "Marketing, Content Creator, Counselor",
    characteristics: ["Passionate and creative", "Overflowing with new ideas", "Values relationships with people", "Positive and optimistic"],
    famous_figures: ["Walt Disney", "Robin Williams", "Oprah Winfrey"],
    best_environments: ["Creative and free-spirited roles", "Roles collaborating with diverse people", "Fields exploring and developing new ideas"],
    growth_tips: ["Set realistic goals and practice consistently putting them into practice.", "Sometimes take time to deeply examine and organize your emotions.", "Don't try to please everyone and prioritize your own values."]
  },
  "ENTP": {
    name: "The Debater",
    description: "Enjoys intellectual challenges and discovers new ideas through debate and discussion.",
    recommendation: "Lawyer, Consultant, Entrepreneur",
    characteristics: ["Intellectual and logical", "Challenging and critical", "Explores new ideas", "Enjoys debate"],
    famous_figures: ["Steve Jobs", "Benjamin Franklin", "Thomas Edison"],
    best_environments: ["Roles solving complex problems", "Roles presenting and developing new ideas", "Environments growing through debate and discussion"],
    growth_tips: ["Practice understanding and empathizing with others' emotions.", "Try to set long-term plans and consistently put them into practice.", "Sometimes be flexible enough to yield your arguments and accept others' opinions."]
  },
  "ESTJ": {
    name: "The Executive",
    description: "Systematic and realistic, you demonstrate leadership and handle tasks cleanly.",
    recommendation: "Business Management, Military Officer, Project Manager",
    characteristics: ["Systematic and realistic", "Strong leadership", "Excellent sense of responsibility", "Values rules and procedures"],
    famous_figures: ["George W. Bush", "Hillary Clinton", "John D. Rockefeller"],
    best_environments: ["Leadership roles managing and guiding organizations", "Environments with clear goals and rules", "Fields prioritizing efficiency and productivity"],
    growth_tips: ["Practice listening to and respecting others' opinions.", "Sometimes practice flexibly responding to situations.", "Invest time in recognizing and expressing your emotions."]
  },
  "ESFJ": {
    name: "The Consul",
    description: "Kind and sociable, you enjoy serving people.",
    recommendation: "Teacher, HR Professional, Social Worker",
    characteristics: ["Sociable and kind", "Enjoys helping others", "Strong sense of responsibility", "Seeks harmonious relationships"],
    famous_figures: ["Bill Clinton", "Anne Hathaway", "Jennifer Garner"],
    best_environments: ["Roles communicating and collaborating with people", "Work environments with a warm and harmonious atmosphere", "Roles that help others grow"],
    growth_tips: ["Practice prioritizing your own needs and feelings.", "Learn to clearly express your opinions in conflict situations.", "Sometimes take time alone to reflect on your inner self."]
  },
  "ENFJ": {
    name: "The Protagonist",
    description: "Charismatic and passionate, you command an audience and demonstrate leadership.",
    recommendation: "Politician, Coach, PR Professional",
    characteristics: ["Charismatic and passionate", "Helps others grow", "Excellent communication skills", "Idealistic and optimistic"],
    famous_figures: ["Barack Obama", "Mahatma Gandhi", "Oprah Winfrey"],
    best_environments: ["Leadership roles inspiring and guiding people", "Roles pursuing meaningful social change", "Environments communicating and collaborating with diverse people"],
    growth_tips: ["Set realistic goals and practice achieving them step by step.", "Take time to deeply examine and organize your emotions.", "Don't try to please everyone and prioritize your own values."]
  },
  "ENTJ": {
    name: "The Commander",
    description: "Intellectually capable and decisive, you move forward without hesitation towards your goals.",
    recommendation: "CEO, Investment Banker, Patent Attorney",
    characteristics: ["Intellectual and decisive", "Strong leadership", "Strategic thinking ability", "Goal-oriented"],
    famous_figures: ["Steve Jobs", "Margaret Thatcher", "Gordon Ramsay"],
    best_environments: ["Leadership roles guiding organizations and presenting visions", "Roles solving complex problems and making decisions", "Competitive and challenging environments"],
    growth_tips: ["Practice understanding and empathizing with others' emotions.", "Sometimes practice flexibly responding to situations.", "Invest time in recognizing and expressing your emotions."]
  }
};