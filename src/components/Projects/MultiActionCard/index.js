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
    description: 'A chess game developped with java. This simple game was developped as part of my course.',
    image: knightsTour,
    link: 'https://github.com/Arushi818/Project_', // Adjust the link to your route
  },
  {
    title: 'Can\'t Stop',
    description: 'A board game developped with java. This project was a group project for my software engineering course.',
    image: cantStop,
    link: 'https://github.com/Arushi818/Project_', // Adjust the link to your route
  },
  {
    title: 'Password Manager',
    description: 'A personal project to encrypt and store passwords in a database.',
    image: passwordManager,
    link: 'https://github.com/Arushi818/Project_', // Adjust the link to your route
  },
  {
    title: 'Image Dehazing',
    description: 'A paper based project that replicates the pioneer paper on dark-channel prior image dehazing.',
    image:imageDehazing,
    link: 'https://github.com/Arushi818/Project_', // Adjust the link to your route
  },
  {
    title: 'Portfolio Website',
    description: 'A portfolio website to introduce myself and showcase my work so far!',
    image: portfolioWebsite,
    link: 'https://github.com/Arushi818/Project_', // Adjust the link to your route
  },
  {
    title: 'Simple game',
    description: 'A simple game devised in my free time to explore OpenCV library',
    image: minigame,
    link: 'https://github.com/Arushi818/Project_', // Adjust the link to your route
  },
  {
    title: 'Path-finding AI',
    description: 'Path-finding algorithms using AI search technique, namely A* algorithm',
    image: labyrinth,
    link: 'https://github.com/Arushi818/Project_', // Adjust the link to your route
  },
  {
    title: 'Connect-4',
    description: 'Connect-4 game that includes several fine tuning options and the option to play against an AI',
    image: connect4,
    link: 'https://github.com/Arushi818/Project_', // Adjust the link to your route
  },
  {
    title: 'Self-solving Sudoku',
    description: 'Self solving sudoku game that uses evolutionary algorithm to solve the game.',
    image: sudoku,
    link: 'https://github.com/Arushi818/Project_', // Adjust the link to your route
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
              height="80" // Adjust the height as needed
              image={card.image}
              alt={`Card ${index + 1}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
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
