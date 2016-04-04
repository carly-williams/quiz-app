"use strict";

$(document).ready(function() {

	let questionNum = 1;
	let answerNum = 1;
	let lastQuestionNum = 1

	$(".start-page").css("display", "block");

	$(".btn-start").click(function(){
		goToQuestion(questionNum);
	});

	$(".btn-submit").click(function(){
		goToAnswer(answerNum);
	});

	$(".btn-next").click(function(){
		goToQuestion(questionNum);
	});

	function goToQuestion(questionNumber) {
		console.log(questionNum);
		$(".start-page").css("display", "none");
		$(".answer-page").css("display", "none");
		$(".question-page").css("display", "block");
		$(".end-page").css("display", "none");
		
		if (questionNumber > lastQuestionNum) {
			goToEndPage();
		}
		questionNum++;
	}

	function goToAnswer(answerNum) {
		$(".start-page").css("display", "none");
		$(".answer-page").css("display", "block");
		$(".question-page").css("display", "none");

		answerNum++;
	}

	function goToEndPage() {
		$(".start-page").css("display", "none");
		$(".answer-page").css("display", "none");
		$(".question-page").css("display", "none");
		$(".end-page").css("display", "block");
	}
});