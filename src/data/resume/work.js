/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Next Generation Robotics',
    position: 'Senior Software Engineer',
    url: 'https://ngr.ai',
    startDate: '2023-04-01',
    summary: `Next Generation Robotics works in 2 domains. First is developing scheduling algorithms for robots. A large 
    number of robots are deployed in warehouses. These robots work in a sequential manner. NGR develops algorithms to make 
    the robots work in a smart manner. As a Senior Software Engineer, I have single-handedly designed and developed APIs for 
    third party clients to use. The API documentation can be found <a href="https://documenter.getpostman.com/view/28893225/2s9Xy6op3f">here</a>.
    The second domain is the fitness scheduling app named Hiero. This app allows fitness trainers to get connected with 
    fitness enthusiasts, and vice-versa. Hiero is soon to be launched on PlayStore and AppStore. I have single-handedly 
    designed and developed the backend microservice for the app, and led a team of 3 Frontend engineers. I set up the AWS 
    Infrastructure from scratch. Also, I have developed a monitoring and alerting system for the backend server. App links 
    to be posted soon!`,
    highlights: [
      'Developing a Spring Boot-based backend, using Microservice architecture and REST API principles.',
      'Utilized AWS services like Lambda, Elastic Beanstalk, EC2, Relational Database Service (RDS), S3, Simple Email Service (SES), Simple Notification Service (SNS), Secrets Manager, Certificate Manager and Route 53.',
      'Worked on Google Firebase, Google Distance Matrix API and Google Maps Java Client.',
      'Designed and developed push notification service using Google Firebase and AWS SNS, and email notification service using AWS SES.',
      'Worked on Uber H3 indexing APIs and developed Search Service, to find gym locations in a given-mile radius.',
    ],
  },
  {
    name: 'Amazon Web Services',
    position: 'Software Development Engineer',
    url: 'https://aws.amazon.com/rds/aurora/',
    startDate: '2021-11-29',
    endDate: '2022-08-30',
    summary: 'SDE in the Aurora DB Team.',
    highlights: [
      "Designed and developed 'Dynamic Configuration' project, utilizing AWS RDS Parameter Groups, reducing cross-team code modifications by 100% and providing a no-code solution to launching new database parameters. This project was developed with C++ and Java.",
      'Worked in C++ on File I/O, avoiding deadlocks using mutex, locks and atomic variables, and thread management. Used advanced C++ Standard Template Library, Templates and Lambda functions.',
      "Modified the algorithm for 'read' queries, reducing an average of 5 high-severity tickets per week.",
      'Mentored an SDE intern, designing projects, performing code reviews, holding weekly 1:1 meetings, determining project stretch goals, and leading the completion of 3 projects.',
    ],
  },
  {
    name: 'Postman',
    position: 'Software Developer',
    url: 'https://learning.postman.com/docs/postman-flows/gs/flows-overview/',
    startDate: '2021-05-18',
    endDate: '2021-11-26',
    summary: 'SDE in the Postman Flows team',
    highlights: [
      "Developed full-stack applications in the 'Flows' module of the Postman desktop and web application. Used JavaScript and worked on Node.js, React and MongoDB.",
      'Maintained a library to fetch and verify access tokens in HTTP requests.',
      "Implemented Google's differential synchronization algorithm, enabling real-time collaboration in 'Flows.'",
      "Designed access control permissions in 'Flows,' following the Role-Based Access Control (RBAC) model.",
      'Developed a library to merge multiple JSON data.',
    ],
  },
  {
    name: 'Javis Technologies',
    position: 'Software Developer',
    url: 'https://www.linkedin.com/company/okjavis/?originalSubdomain=in',
    startDate: '2020-07-13',
    endDate: '2021-05-17',
    summary: `Javis is an 'Enterprise Works Platform' that integrates multiple systems both within and across organizations 
    to enable users to get their work done easily over a single interface. Javis powers an end-to-end automated Order-to-Cash 
    platform between multiple organizations, to fulfill order processing.'`,
    highlights: [
      'Developed an end-to-end module to perform checks and balances in purchase orders, parsing more than 100 files a day for clients like Reckitt Benckiser, Dabur, and PepsiCo. Worked on Java and Spring Boot.',
      'Worked on building REST APIs and developing backend using Microservice architecture.',
      "Worked on advanced Java concepts of asynchronous programming using 'CompletableFuture', Generics, Lambda functions and JDBC.",
      'Developed and maintained a microservice to parse incoming emails, reducing manual parsing by 100%. This micro-service was developed in Java.',
      'Developed code to insert Excel files with up to 1 lakh rows in MySQL database tables.',
      'Developed asynchronous code in Spring Boot Framework to fetch data from MySQL database, performing 98% faster than synchronous code.',
    ],
  },
];

export default work;
