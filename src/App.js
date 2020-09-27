import React, { useState } from 'react';
import Header from './components/header';

// import jumbotron from 'bootstrap/dist/css/bootstrap.css'

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'What is the main fruit in Ribena?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: false },
				{ answerText: 'Blackberry', isCorrect: false },
				{ answerText: 'Grape', isCorrect: false },
				{ answerText: 'Blackcurrant', isCorrect: true },
			],
		},
		{
			questionText: "Who wrote The Handmaid's Tale?",
			answerOptions: [
				{ answerText: 'Barack Obama', isCorrect: false },
				{ answerText: 'Margaret Attwood', isCorrect: true },
				{ answerText: 'Chris Martin', isCorrect: false },
				{ answerText: 'Zoe Sugg', isCorrect: false },
			],
		},{
			questionText: "What year did World War II end?",
			answerOptions: [
				{ answerText: '1944', isCorrect: false },
				{ answerText: '1945', isCorrect: true },
				{ answerText: '1948', isCorrect: false },
				{ answerText: '1950', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: "Complete the well-known phrase: 'A leopard never changes its ____'?",
			answerOptions: [
				{ answerText: 'speed', isCorrect: false },
				{ answerText: 'color', isCorrect: false },
				{ answerText: 'tail', isCorrect: false },
				{ answerText: 'spots', isCorrect: true },
			],
		},
		{
			questionText: 'In fashion, what does YSL stand for?',
			answerOptions: [
				{ answerText: 'Lois Viutton', isCorrect: false },
				{ answerText: 'YSL', isCorrect: false },
				{ answerText: 'Yves Saint Laurent', isCorrect: true },
				{ answerText: 'Adidas', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the lead singer of Coldplay?',
			answerOptions: [
				{ answerText: 'Barack Obama', isCorrect: false },
				{ answerText: 'Margaret Attwood', isCorrect: false },
				{ answerText: 'Chris Martin', isCorrect: true },
				{ answerText: 'Zoe Sugg', isCorrect: false },
			],
		},
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

	return (
		<>
		 <Header />
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions. Added media querries for small screen */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
	        	<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
	          ))}
					</div>
				</>
			)}
		</div>
		</>
	);
}
