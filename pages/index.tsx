import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

import Project from "../components/Project";

;

export default function Home({}) {
  return (
    <div className="container mx-auto px-20 m-20">
    <div className="grid h-screen text-left">
    <Head>
        <title>Holt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    
    

    <div className=" grid grid-cols-2 gap-5 ">

    <div className="col-start-1">
      <h1 className="text-2xl font-semi-bold ">Holt.</h1>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt quae fuga, exercitationem veritatis enim sit aperiam eligendi, obcaecati qui repellat! Eius, soluta. Iste amet fugit consectetur, voluptatum tempore aliquam!
   </div>
    
    <div className="col-start-2 items-stretch content-center justify-self-center">

        <Project ProjectTitle='test' ProjectId={1} ProjectLink='https://example.com/' ProjectImg='/mac.png' ProjectDescription="A cool project to learn 👨‍🎓"/>
        <Project 
        ProjectImg='/open_book.png'
          ProjectId={2}
          ProjectLink='https://openbook-solana.vercel.app'
          ProjectTitle='📖 Open Book'
          ProjectDescription='My first web3 project! Everyone can write something in the web3 book✨'
        />
        <Project 
          ProjectId={3}
          ProjectImg='/coingecko-cli.png'
          ProjectLink='https://coingecko-cli.vercel.app/'
          ProjectTitle='️💻 CoinGecko-CLI'
          ProjectDescription='Query everything from coingecko right in your command line'
        />
        <Project 
        ProjectImg='/doggo.png'
          ProjectId={4}
          ProjectLink='https://randomdoggo.vercel.app/'
          ProjectTitle='️🐶 Random Doggo'
          ProjectDescription='Display a random image of a dog'
        />
           <Project 
           ProjectImg='/kenmerkde_aspecten.png'
          ProjectId={5}
          ProjectLink='https://kenmerkende-aspecten.vercel.app/'
          ProjectTitle='️🗒️ Leer de kenmerkende aspecten'
          ProjectDescription='(Dutch) Een app die ik gemaakt heb om de kenmerkende aspecten te leren voor mijn geschiedenis examen.'
        />
          <Project
          ProjectImg='/self-driving-js.jpeg'
            ProjectId={6}
            ProjectLink='https://self-driving-js.vercel.app/'
            ProjectTitle='🚙 Self driving car'
            ProjectDescription={<>A self driving car simulation made with the wonderfull <a className='hover:underline' href='https://www.youtube.com/watch?v=NkI9ia2cLhc&list=PLB0Tybl0UNfYoJE7ZwsBQoDIG4YN9ptyY'>youtube course from Radu</a></>}
          />
        </div>

    </div>
    </div>
    </div>

  );
}