"use strict";

$(document).ready(function() {

	let questionNum = null;
	let lastQuestionNum = null;
	let choice = null;
	let comment = null;
	let currentQuestion = null;
	let score = 0;

	let questions = [];
	questions[0] = {};
	questions[0].question = "Which artist painted <span class='italic'>Christina's World</span>?";
	questions[0].choice1 = "Grant Wood";
	questions[0].choice2 = "Andrew Wyeth";
	questions[0].choice3 = "Childe Hassam";
	questions[0].painting = "images/wyeth.jpg";
	questions[0].answer = "Andrew Wyeth"
	questions[0].answerDescription = "Andrew Wyeth painted <span class='italic'>Christina’s World</span> in 1948. The woman in the painting" +
												" is Anna Christina Olsen who suffered from polio and was paralyzed from the" +
												" waist down. One day Wyeth saw her crawling across the field and was inspired" +
												" to do the painting.";

	questions[1] = {};
	questions[1].question = "Which artist painted <span class='italic'>The Gulf Stream</span>?";
	questions[1].choice1 = "Horace Pippin";
	questions[1].choice2 = "Thomas Hart Benton";
	questions[1].choice3 = "Winslow Homer";
	questions[1].painting = "images/homer.jpg";
	questions[1].answer = "Winslow Homer"
	questions[1].answerDescription = "Winslow Homer painted <span class='italic'>The Gulf Stream</span> in 1899." +
												" It shows a man in a small dismasted boat surrounded by waves and sharks.";

	questions[2] = {};
	questions[2].question = "Which artist painted <span class='italic'>Automat</span>?";
	questions[2].choice1 = "Edward Hopper";
	questions[2].choice2 = "Jackson Pollock";
	questions[2].choice3 = "Andy Warhol";
	questions[2].painting = "images/hopper.jpg";
	questions[2].answer = "Edward Hopper"
	questions[2].answerDescription = "Edward Hopper painted <span class='italic'>Automat</span> in 1927." +
												" It shows a woman staring at a cup of coffee in an Automat at night." +
												" She is alone, and the lack of activity adds to the sense of loneliness.";

	questions[3] = {};
	questions[3].question = "Which artist painted <span class='italic'>Jimson Weed/White Flower No. 1</span>?";
	questions[3].choice1 = "Beauford Delaney";
	questions[3].choice2 = "Georgia O’Keeffe";
	questions[3].choice3 = "Lee Krasner";
	questions[3].painting = "images/okeeffe.jpg";
	questions[3].answer = "Georgia O’Keeffe"
	questions[3].answerDescription = "Georgia O’Keeffe painted <span class='italic'>Jimson Weed/White Flower No. 1</span> in 1932." +
												" Alice Walton, the Walmart heiress, paid $44.4 million for the portrait in November 2014," +
												" making it the highest price for a painting by a woman ever to sell at auction.";

	questions[4] = {};
	questions[4].question = "Which artist painted <span class='italic'>Murder in Mississippi</span>?";
	questions[4].choice1 = "Norman Rockwell";
	questions[4].choice2 = "William Merritt Chase";
	questions[4].choice3 = "Peggy Bacon";
	questions[4].painting = "images/rockwell1.jpg";
	questions[4].answer = "Norman Rockwell"
	questions[4].answerDescription = "Norman Rockwell painted <span class='italic'>Murder in Mississippi</span> in 1965." +
												" On June 21, 1964, civil rights activists Michael Schwerner, Andrew Goodman, and James Chaney" +
												" were brutally murdered in Mississippi. Several months later, LOOK Magazine asked Norman Rockwell" +
												" to provide an illustration for an investigative article.";

	function startQuiz() {
		questionNum = 1;
		lastQuestionNum = 5;
		score = 0;
		$(".start-page").css("display", "block");
		$(".answer-page").css("display", "none");
		$(".question-page").css("display", "none");
		$(".end-page").css("display", "none");
	}

	function goToQuestionPage() {
		$(".start-page").css("display", "none");
		$(".answer-page").css("display", "none");
		$(".question-page").css("display", "block");
		$(".end-page").css("display", "none");
	}

	$(".btn-start").click(function(){
		setQuestionPage();
	});

	function setQuestionPage() {
		if (questionNum > lastQuestionNum) {
			goToEndPage();
		}
		else {
			$('input[name="artist"]').prop('checked', false);
			currentQuestion = questions[questionNum - 1];

			$(".question-text").html(currentQuestion.question);
			$(".choice-value-1").val(currentQuestion.choice1);
			$(".choice-value-2").val(currentQuestion.choice2);
			$(".choice-value-3").val(currentQuestion.choice3);
			$(".choice-text-1").text(currentQuestion.choice1);
			$(".choice-text-2").text(currentQuestion.choice2);
			$(".choice-text-3").text(currentQuestion.choice3);
			$('.painting').attr("src",currentQuestion.painting);

			questionNum++;	
			goToQuestionPage();		
		}
	}

	function goToEndPage() {
		$(".right-answers").text(score);
		$(".start-page").css("display", "none");
		$(".question-page").css("display", "none");
		$(".answer-page").css("display", "none");
		$(".end-page").css("display", "block");
	}

	$(".btn-try-again").click(function(){
		startQuiz();
	});

	function goToQuestionPage() {
		$(".start-page").css("display", "none");
		$(".question-page").css("display", "block");
		$(".answer-page").css("display", "none");
		$(".end-page").css("display", "none");
	}

	$(".btn-submit").click(function(){
		choice = $('input[name=artist]:checked', '#choices-form').val();
		console.log("choice =  " + choice);
		if (choice === undefined) {
			$(".select-artist").css("display", "block");
		}
		else {
			$(".select-artist").css("display", "none");
			setAnswerPage()
			goToAnswerPage();
		}
	});

	function setAnswerPage() {
		choice = $('input[name=artist]:checked', '#choices-form').val();
		if (choice === currentQuestion.answer) {
			$(".answer-short").text("That's correct!");
			score++;
		}
		else {
			$(".answer-short").text("Good try!");
		}
		$(".answer-description").html(currentQuestion.answerDescription);
		$('.painting-small').attr("src",currentQuestion.painting);
	}

	function goToAnswerPage() {
		$(".start-page").css("display", "none");
		$(".question-page").css("display", "none");
		$(".answer-page").css("display", "block");
		$(".end-page").css("display", "none");
	}

	$(".btn-next").click(function(){
		setQuestionPage();
	});

	startQuiz();

});