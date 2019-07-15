import { IMAGES, FILES } from './assets';
import { LINKS } from './routes';

export const PROJECTS = [
  {
    url: LINKS.dubdev,
    image: IMAGES.dubdev,
    desc: "React web application built for Andrew's web development company, DubDev. Check out DubDev's portfolio on the site for more of Andrew's current web work.",
  },
  {
    url: 'https://andrewmahoneyf.github.io/Altalova-Exchange-Calculator/',
    image: IMAGES.similator,
    desc: "An interactive currency exchange calculator developed for Altalova, fetching data from Brazil's central bank and outputting prices for competitors. Spanish/Portuguese versions are available on GitHub.",
  },
  {
    url: 'https://andrewmahoneyf.shinyapps.io/CryptoCorrelation/',
    image: IMAGES.cryptoCorrelation,
    desc: 'This is an R visualization project using multiple data resources to showcase the correlation between crytocurrency prices and google search volume as well as overall trade volume.',
  },
  {
    url: 'http://bl.ocks.org/andrewmahoneyf/960680d47d184775ad858c4220b29cba',
    image: IMAGES.graph,
    desc: "This is a graph Andrew made to highlight exports and imports in Brazil for Sidera Consult. The graph uses D3's chord design and data from the world bank.",
  },
  {
    url: LINKS.coinglomerate,
    image: IMAGES.coinglomeratesite,
    desc: "Here is a link to Andrew's computational power company, Coinglomerate. He developed this website himself and continues to manage and update it.",
  },
  {
    url: 'https://www.youtube.com/watch?v=e35Bv9aQhQs',
    image: IMAGES.radium,
    desc: "Andrew's tutorial video on how to use Radium to manage inline styling with React",
  },
  {
    url: 'https://github.com/andrewmahoneyf/Data-Structures-Algorithms',
    image: IMAGES.cse373,
    desc: "Link to Andrew's repository of work completed in the Data Structures and Algorithms class at UW.",
  },
  {
    url: 'https://www.youtube.com/watch?v=xkplrUksInY',
    image: IMAGES.app,
    desc: 'This video was created by Andrew for an app idea with his friend James to help showcase its use.',
  },
  {
    url: 'https://andrewmahoneyf.github.io/Goal-Guys-Project/#/',
    image: IMAGES.goal,
    desc: 'A React website built with a small team as a way to educate voters on current officials and bills to make sure every voter has easy access to this information for future elections.',
  },
  {
    url: FILES.bizplan,
    image: IMAGES.bizplan,
    desc: 'This is a business plan Andrew wrote for Altalova that was later sent to multiple investors to successfully secure funding so they could launch the project.',
  },
  {
    url: 'https://info343-au16.github.io/challenges-andrewmahoneyf/chat/build/#/channels',
    image: IMAGES.slack,
    desc: 'Test site developed for a chatroom platform like Slack utilizing Firebase for membership log-in features and a feed for messages.',
  },
  {
    url: 'https://public.tableau.com/profile/andrew.mahoney.fernandes#!/vizhome/BrazilIndicators/PriceLevelIndices_1',
    image: IMAGES.tableau,
    desc: "This is a graph made using data from the world bank and Tableau's software to visualize and use on Sidera Consult's website.",
  },
];
