import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import knightsTour from '../../../assets/images/knightsTour.png';
import cantStop from '../../../assets/images/cantstop.webp';
import passwordManager from '../../../assets/images/passwordManager.webp';
import imageDehazing from '../../../assets/images/imageDehazing.jpg';
import portfolioWebsite from '../../../assets/images/website.png';
import minigame from '../../../assets/images/minigame.png';
import labyrinth from '../../../assets/images/labyrinth.webp';
import connect4 from '../../../assets/images/connect4.png';
import sudoku from '../../../assets/images/sudoku.avif';

const cardData = [
  {
    title: 'Knight\'s Tour',
    description: 'A game based on chess, developped using Java. The aim of this game is to visit every square once, using just the Knight.',
    image: knightsTour,
    link: 'https://github.com/Arushi818/Knight-s-Tour-Game', 
  },
  {
    title: 'Can\'t Stop',
    description: 'This board game was a group work for my software engineering course. The game can be played alone or with other players!',
    image: cantStop,
    link: 'https://github.com/Arushi818/can-t-stop-game', 
  },
  {
    title: 'Password Manager',
    description: 'A personal project to encrypt and store passwords in a database.This project explores encryption and Mongodb.',
    image: passwordManager,
    link: 'https://github.com/Arushi818/Password-Manager',
  },
  {
    title: 'Image Dehazing',
    description: 'A project that replicates the pioneer paper on image dehazing using dark-channel prior. This project involved mainly Python.',
    image:imageDehazing,
    link: 'https://github.com/Arushi818/Image-Dehazing', 
  },
  {
    title: 'Portfolio Website',
    description: 'A portfolio website to introduce myself and showcase my work so far. This project helped me learn React!',
    image: portfolioWebsite,
    link: 'https://github.com/Arushi818/Arushi818.github.io', 
  },
  {
    title: 'Simple game',
    description: 'A simple game devised to explore OpenCV library.This project was developped using Python. I intend to refine this game soon!',
    image: minigame,
    link: 'https://github.com/Arushi818/simple-game', 
  },
  {
    title: 'Path-finding AI',
    description: 'This project showcases path-finding using search methods, namely A*,BFS, Weighted A* algorithm. This project mainly involves Javascript.',
    image: labyrinth,
    link: 'https://github.com/Arushi818/Path-finding-AI',
  },
  {
    title: 'Connect-4',
    description: 'Connect-4 game that includes options for players to choose the AI\'s algorithm and the option to play against another human.This project mainly involves Javascript.',
    image: connect4,
    link: 'https://github.com/Arushi818/Connect-4', 
  },
  {
    title: 'Self-solving Sudoku',
    description: 'Self solving sudoku game that uses genetic algorithm to solve the game. The UI provides fine tuning options. This project mainly involves Javascript.',
    image: sudoku,
    link: 'https://github.com/Arushi818/self-solving-sudoku',
  }
];

const MultiActionAreaCard = () => {
  return (
    <>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ width: 150, marginBottom: 2 }}>
          <CardActionArea style={{ marginTop: -3 }}>
            <CardMedia
              component="img"
              height="80" 
              image={card.image}
              alt={`Card ${index + 1}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={card.link}>
              <Button size="small" color="info">
                Learn More
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

export default MultiActionAreaCard;
