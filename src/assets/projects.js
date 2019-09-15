import IMAGES from './images';
import FILES from './files';
import LINKS from './links';

export default [
  {
    url: LINKS.dubdev,
    image: IMAGES.dubdev,
    desc:
      "React web application built for Andrew's web development company, DubDev. Check out DubDev's portfolio on the site for more of Andrew's current web work.",
  },
  {
    url: 'https://github.com/andrewmahoneyf/CryptoBot',
    image: IMAGES.cryptobot,
    desc:
      "NodeJS terminal bot for swing trading crypto currencies using Binance's API. Andrew configured this bot with Docker and runs it on a Raspberry Pi to automate his trading.",
  },
  {
    url: 'https://algoswitch.web.app/',
    image: IMAGES.algoswitch,
    desc:
      'A user authenticated portal for mining pool monitoring. Andrew led the development of this project, but as Coinglomerate stopped operations, this project was never fully completed.',
  },
  {
    url: 'https://andrewmahoneyf.github.io/Altalova-Exchange-Calculator/',
    image: IMAGES.similator,
    desc:
      "An interactive currency exchange calculator developed for Altalova, fetching data from Brazil's central bank and outputting prices for competitors. Spanish/Portuguese versions are available on GitHub.",
  },
  {
    url: 'https://andrewmahoneyf.shinyapps.io/CryptoCorrelation/',
    image: IMAGES.cryptoCorrelation,
    desc:
      'This is an R visualization project using multiple data resources to showcase the correlation between crytocurrency prices and google search volume as well as overall trade volume.',
  },
  {
    url: 'http://bl.ocks.org/andrewmahoneyf/960680d47d184775ad858c4220b29cba',
    image: IMAGES.graph,
    desc:
      "This is a graph Andrew made to highlight exports and imports in Brazil for Sidera Consult. The graph uses D3's chord design and data from the world bank.",
  },
  {
    url: LINKS.coinglomerate,
    image: IMAGES.coinglomeratesite,
    desc:
      "Here is a link to Andrew's computational power company, Coinglomerate. Coinglomerate has since stopped opperations, but Andrew developed and managed this website himself.",
  },
  {
    url: 'https://www.youtube.com/watch?v=xkplrUksInY',
    image: IMAGES.app,
    desc: 'This video was created by Andrew for an app idea with his friend James to help showcase its use.',
  },
  {
    url: 'https://github.com/andrewmahoneyf/Data-Structures-Algorithms',
    image: IMAGES.cse373,
    desc: "Link to Andrew's repository of work completed in the Data Structures and Algorithms class at UW.",
  },
  {
    url: 'https://www.youtube.com/watch?v=e35Bv9aQhQs',
    image: IMAGES.radium,
    desc: "Andrew's tutorial video on how to use Radium to manage inline styling with React",
  },
  {
    url: 'https://andrewmahoneyf.github.io/Goal-Guys-Project/',
    image: IMAGES.goal,
    desc:
      'A React website built with a small team as a way to educate voters on current officials and bills to make sure every voter has easy access to this information for future elections.',
  },
  {
    url: FILES.bizplan,
    image: IMAGES.bizplan,
    desc:
      'This is a business plan Andrew wrote for Altalova that was later sent to multiple investors to successfully secure funding so they could launch the project.',
  },
];
