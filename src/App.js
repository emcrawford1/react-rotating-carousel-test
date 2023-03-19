import React from 'react';
import { Component } from 'react';
import { InnerContainer } from './components/Carousel';
import { calculateAnimations } from './helpers/animationEngine';
import Burger_Logo from "../src/images/Burger_Logo.jpeg";
import Flight_Logo from "../src/images/Flight_Logo.jpeg";
import Planit from "../src/images/planit.jpg";
import Trivia_Logo from "../src/images/Trivia_Logo.jpeg";



let projects = [
  {
    carouselStyle: {},
    outerContStyle: {},
    key: 'none'
  },
  {
    name: "Flight!  The Boring Guessing Game.",
    description:
      'This game is essentially a "Hangman" game in which the user tries to guess the letters of a word that the computer has selected. The user has a limited number of wrong guesses and the user wins if they are able to guess all letters without guessing incorrectly too many times.',
    source: Flight_Logo,
    deployed: "https://emcrawford1.github.io/Word-Guess-Game/",
    github: "https://github.com/emcrawford1/Word-Guess-Game",
    key: "https://github.com/emcrawford1/Word-Guess-Game",
    style: {height: '400px', width: '400px'}
  },
  {
    name: "Burger",
    description:
      "Burger app demonstrating the manipulation of DOM elements and storing data about those elements in a database.",
    source: Burger_Logo,
    github: "https://github.com/emcrawford1/burger",
    key: "https://github.com/emcrawford1/burger",
    style: {height: '400px', width: '400px'}
  },
  {
    name: "Trivia",
    description:
      "This game asks the user a series of questions related to the Nashville Predators. After the user selects an answer, the game notifies the user of the correct answer and displays a GIF related to the question. At the end of the game, the user's statistics are displayed.",
    source: Trivia_Logo,
    deployed: "https://emcrawford1.github.io/TriviaGame/",
    github: "https://github.com/emcrawford1/TriviaGame",
    key: "https://github.com/emcrawford1/TriviaGame",
    style: {height: '400px', width: '400px'}
  },
  {
    name: "PlanIt",
    description:
      "This quasi-social media app will help you plan events with friends - seeing their invitation status in real-time.",
    source: Planit,
    github: "https://github.com/emcrawford1/Project1",
    key: "https://github.com/emcrawford1/Project1",
    style: {height: '400px', width: '400px'}
  }
]

let animations = calculateAnimations(projects);


function App() {
  return (
    <div className="App">
      <InnerContainer carouselItems={animations} /> 
    </div>
  );
}

export default App;
