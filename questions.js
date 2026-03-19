/* ============================================================
   QUESTIONS.JS
   25 binary-choice questions across 4 categories.

   Each answer maps to 8 career dimensions:
   d: [Analytical, Creative, Social, Leadership,
       Structured, Entrepreneurial, Empathetic, Technical]
         0          1         2       3
         4              5             6           7
============================================================ */

const QUESTIONS = [

  // ── PERSONALITY ───────────────────────────────────────────
  {
    id: 1, cat: 'Personality',
    text: 'I am more of a…',
    answers: [
      { text: 'Planner',  d: [1, 0, 0, 0, 3, 0, 0, 0] },
      { text: 'Doer',     d: [0, 1, 0, 0, 0, 3, 0, 1] },
    ]
  },
  {
    id: 2, cat: 'Personality',
    text: 'I tend to trust my…',
    answers: [
      { text: 'Head',  d: [3, 0, 0, 0, 1, 0, 0, 1] },
      { text: 'Gut',   d: [0, 2, 0, 1, 0, 2, 1, 0] },
    ]
  },
  {
    id: 3, cat: 'Personality',
    text: "I'd rather be remembered as…",
    answers: [
      { text: 'Smart',  d: [2, 1, 0, 1, 0, 1, 0, 1] },
      { text: 'Kind',   d: [0, 0, 1, 0, 0, 0, 3, 0] },
    ]
  },
  {
    id: 4, cat: 'Personality',
    text: 'I get more excited by…',
    answers: [
      { text: 'New ideas',          d: [0, 3, 0, 0, 0, 2, 0, 0] },
      { text: 'Making things work', d: [2, 0, 0, 0, 2, 0, 0, 2] },
    ]
  },
  {
    id: 5, cat: 'Personality',
    text: "I'm naturally more…",
    answers: [
      { text: 'Detail-oriented', d: [2, 0, 0, 0, 3, 0, 0, 1] },
      { text: 'Big-picture',     d: [0, 2, 0, 2, 0, 2, 0, 0] },
    ]
  },
  {
    id: 6, cat: 'Personality',
    text: 'When something goes wrong, I…',
    answers: [
      { text: 'Analyze exactly what happened', d: [3, 0, 0, 0, 1, 0, 0, 1] },
      { text: 'Move on and try something new', d: [0, 2, 0, 0, 0, 3, 0, 0] },
    ]
  },

  // ── PREFERENCES ───────────────────────────────────────────
  {
    id: 7, cat: 'Preferences',
    text: "I'd rather spend my days…",
    answers: [
      { text: 'Working quietly, on my own',         d: [2, 1, 0, 0, 1, 0, 0, 1] },
      { text: 'Collaborating with a team',          d: [0, 0, 3, 1, 0, 0, 1, 0] },
    ]
  },
  {
    id: 8, cat: 'Preferences',
    text: 'I prefer…',
    answers: [
      { text: 'Stability and routine',     d: [1, 0, 0, 0, 3, 0, 1, 0] },
      { text: 'Variety and constant change', d: [0, 2, 0, 0, 0, 3, 0, 0] },
    ]
  },
  {
    id: 9, cat: 'Preferences',
    text: "I'd rather have…",
    answers: [
      { text: 'More money',     d: [1, 0, 0, 1, 0, 2, 0, 0] },
      { text: 'More free time', d: [0, 1, 1, 0, 0, 0, 2, 0] },
    ]
  },
  {
    id: 10, cat: 'Preferences',
    text: 'I find it more satisfying to…',
    answers: [
      { text: 'Crack a hard problem',   d: [3, 0, 0, 0, 0, 1, 0, 2] },
      { text: 'Help someone in need',   d: [0, 0, 1, 0, 0, 0, 3, 0] },
    ]
  },
  {
    id: 11, cat: 'Preferences',
    text: 'I work better with…',
    answers: [
      { text: 'Clear rules and structure',    d: [1, 0, 0, 0, 3, 0, 0, 1] },
      { text: 'Freedom to do it my own way', d: [0, 2, 0, 1, 0, 3, 0, 0] },
    ]
  },
  {
    id: 12, cat: 'Preferences',
    text: "I'd rather…",
    answers: [
      { text: 'Master one thing deeply',       d: [2, 0, 0, 0, 1, 0, 0, 2] },
      { text: 'Know a bit about everything',   d: [0, 2, 1, 1, 0, 2, 0, 0] },
    ]
  },

  // ── INTELLECTUAL ──────────────────────────────────────────
  {
    id: 13, cat: 'Intellectual',
    text: 'I prefer learning by…',
    answers: [
      { text: 'Reading and studying theory', d: [2, 0, 0, 0, 2, 0, 0, 1] },
      { text: 'Jumping in and trying things', d: [0, 1, 0, 0, 0, 2, 0, 2] },
    ]
  },
  {
    id: 14, cat: 'Intellectual',
    text: 'When something breaks, I want to…',
    answers: [
      { text: 'Understand exactly why it broke', d: [3, 0, 0, 0, 1, 0, 0, 1] },
      { text: 'Fix it and keep moving',          d: [0, 0, 0, 0, 0, 2, 0, 2] },
    ]
  },
  {
    id: 15, cat: 'Intellectual',
    text: "I'm more comfortable with…",
    answers: [
      { text: 'Numbers and data',       d: [3, 0, 0, 0, 1, 0, 0, 2] },
      { text: 'Words and storytelling', d: [0, 2, 1, 0, 0, 0, 1, 0] },
    ]
  },
  {
    id: 16, cat: 'Intellectual',
    text: 'I enjoy…',
    answers: [
      { text: 'Finding the one right answer',     d: [3, 0, 0, 0, 2, 0, 0, 1] },
      { text: 'Exploring many possible answers',  d: [0, 3, 0, 0, 0, 2, 0, 0] },
    ]
  },
  {
    id: 17, cat: 'Intellectual',
    text: "I'd rather…",
    answers: [
      { text: 'Build something with my hands',   d: [0, 1, 0, 0, 0, 1, 0, 3] },
      { text: 'Design how something works',      d: [2, 3, 0, 0, 1, 1, 0, 1] },
    ]
  },
  {
    id: 18, cat: 'Intellectual',
    text: 'I find it easier to…',
    answers: [
      { text: 'Remember specific facts and details', d: [2, 0, 0, 0, 3, 0, 0, 1] },
      { text: 'See the big connections and patterns', d: [1, 2, 0, 1, 0, 1, 0, 0] },
    ]
  },
  {
    id: 19, cat: 'Intellectual',
    text: 'Facing a tough challenge, I…',
    answers: [
      { text: 'Research thoroughly before starting', d: [3, 0, 0, 0, 2, 0, 0, 0] },
      { text: 'Start experimenting right away',      d: [0, 1, 0, 0, 0, 3, 0, 2] },
    ]
  },

  // ── SOCIAL ────────────────────────────────────────────────
  {
    id: 20, cat: 'Social',
    text: 'At a party, I usually…',
    answers: [
      { text: 'Talk to as many people as possible', d: [0, 0, 3, 2, 0, 1, 0, 0] },
      { text: 'Have one really deep conversation',  d: [1, 0, 0, 0, 0, 0, 2, 0] },
    ]
  },
  {
    id: 21, cat: 'Social',
    text: 'I prefer…',
    answers: [
      { text: 'Leading the group',       d: [0, 0, 1, 3, 0, 1, 0, 0] },
      { text: 'Being the key contributor', d: [2, 0, 0, 0, 1, 0, 0, 2] },
    ]
  },
  {
    id: 22, cat: 'Social',
    text: 'After a long day around lots of people, I feel…',
    answers: [
      { text: 'Energized — I love people',      d: [0, 0, 3, 1, 0, 1, 0, 0] },
      { text: 'Drained — I need time to recharge', d: [2, 1, 0, 0, 1, 0, 0, 1] },
    ]
  },
  {
    id: 23, cat: 'Social',
    text: "I'm better at…",
    answers: [
      { text: 'Convincing people',      d: [1, 1, 1, 2, 0, 1, 0, 0] },
      { text: 'Understanding people',   d: [0, 0, 1, 0, 0, 0, 3, 0] },
    ]
  },
  {
    id: 24, cat: 'Social',
    text: "I'd rather…",
    answers: [
      { text: 'Be in charge of decisions', d: [0, 0, 0, 3, 0, 2, 0, 0] },
      { text: 'Execute and make things happen', d: [1, 0, 0, 0, 2, 0, 0, 2] },
    ]
  },
  {
    id: 25, cat: 'Social',
    text: 'My best workday looks like…',
    answers: [
      { text: 'Deep focus, mostly alone',          d: [2, 1, 0, 0, 1, 0, 0, 2] },
      { text: 'Collaborating with brilliant people', d: [0, 0, 2, 1, 0, 1, 1, 0] },
    ]
  },

];
