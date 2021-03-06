interface Project {
    title: string;
    link: string;
    description: any;
    img: string;
  }

const Projects = [
     {
        title:'test',
        link:'https://example.com/',
        img:'/mac.png',
        description:"A cool project to learn ð¨âð",
     },
     {
        img:'/open_book.png',
        link:'https://openbook-solana.vercel.app',
        title:'ð Open Book',
        description:'My first web3 project! Everyone can write something in the web3 bookâ¨'
    },
    {
        img:'/coingecko-cli.png',
        link:'https://coingecko-cli.vercel.app/',
        title:'ï¸ð» CoinGecko-CLI',
        description:'Query everything from coingecko right in your command line',
    },
    {
        img:'/doggo.png',
        link:'https://randomdoggo.vercel.app/',
        title:'ï¸ð¶ Random Doggo',
        description:'Display a random image of a dog',
    },
    {
        img:'/kenmerkde_aspecten.png',
        link:'https://kenmerkende-aspecten.vercel.app/',
        title:'ï¸ðï¸ Leer de kenmerkende aspecten',
        description:'(Dutch) Een app die ik gemaakt heb om de kenmerkende aspecten te leren voor mijn geschiedenis examen.',
    },
    {
        img:'/self-driving-js.jpeg',
        link:'https://self-driving-js.vercel.app/',
        title:'ð Self driving car',
        description:'A self driving car simulation made with a youtube course from Radu'
    }
    
]

export default Projects