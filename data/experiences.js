const experiences = [
  {
    start: "Aug 2019",
    end: "Present",
    company: "PT. Padi Internet",
    title: "Software Engineer",
    projects: [
      {
        name: "SLA report - Get log from Checkmk Livestatus and generate timeline",
        tools: [
          "Angular",
          "Angular Material UI",
          "AWS Dynamodb",
          "AWS Cognito",
          "AWS API",
          "AWS Lambda",
          "Checkmk Livestatus",
        ],
      },
      {
        name: "CRM",
        tools: [
          "Angular",
          "Angular Material UI",
          "AWS Dynamodb",
          "AWS Cognito",
          "AWS API",
          "AWS Lambda",
        ],
      },
      {
        name: "Assessments - create list of questions with different type of answers (input, single choice, multiple choices, date)",
        tools: ["Angular", "Ionic", "AWS Dynamodb", "AWS Cognito", "AWS API"],
      },
      {
        name: "Work Order - Request work order and set flexible data for planning and report",
        tools: ["Angular", "Ionic", "AWS Dynamodb", "AWS Cognito", "AWS API"],
      },
      {
        name: "Online Menu for restaurant",
        tools: ["Next.js", "NextAuth.js", "MySQL", "Sequelize"],
      },
      {
        name: "Telegram bot for mikrotik",
        tools: ["Flask", "Bootstrap", "MySQL"],
      },
      {
        name: "Receive message using MQTT to control Air Conditioner",
        tools: ["Arduino", "MQTT"],
      },
      {
        name: "Sending temperature data using MQTT",
        tools: ["Arduino", "MQTT"],
      },
      { name: "Timer for UV light", tools: ["Arduino"] },
      {
        name: "Change openHAB logo for rebranding",
        tools: ["Maven", "openhab-android", "openhab-core", "openhab-webui"],
      },
    ],
  },
  {
    start: "Nov 2009",
    end: "Jul 2019",
    company: "PT. Dutakom Wibawa Putra",
    title: "IT Application Supervisor",
    projects: [
      {
        name: "DREAMS - Platform for communication (Cloud Email Server [postfix, dovecot, clamav, spamassasin], Team Collaboration [Mattermost], Newsletter Builder [Mosaico])",
        tools: [
          "Ruby On Rails",
          "PostgreSQL",
          "RabbitMQ",
          "device",
          "Capistrano",
          "Mattermost",
          "Mosaico",
        ],
      },
      {
        name: "OAuth2 Provider",
        tools: [
          "Ruby On Rails",
          "Doorkeeper",
          "PostgreSQL",
          "device",
          "Capistrano",
        ],
      },
      {
        name: "Customer's billing application",
        tools: ["Ruby On Rails", "PostgreSQL", "device", "Capistrano"],
      },
      { name: "Automatons and Bots", tools: ["Hubot"] },
      { name: "Human Resource Application", tools: ["PHP"] },
      { name: "Warehouse Application", tools: ["PHP"] },
    ],
  },
];

module.exports = experiences;
