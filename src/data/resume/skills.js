const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Languages', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Spring Boot',
    competency: 5,
    category: ['Frameworks'],
  },
  {
    title: 'Django',
    competency: 3,
    category: ['Frameworks'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Cloud'],
  },
  {
    title: 'MySQL/SQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Flask',
    competency: 2,
    category: ['Framework'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Cloud'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
