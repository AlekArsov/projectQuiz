	serial_number = 0;
	correctAnswers = 0;
    const questions_all = [
      {
        question: "Vo koja drzhava e Prilep?",
        answers: ["Makedonija", "Srbija", "Bugarija"],
        correct: "Makedonija"
      },
	  {
        question: "Vo koja drzhava e Paris?",
        answers: ["Makedonija", "Belgija", "Francija"],
        correct: "Francija"
      },
	  {
        question: "Vo koja drzhava e Brisel?",
        answers: ["Belgija", "Srbija", "Bugarija"],
        correct: "Belgija"
      },
      {
        question: "Vo koja drzhava e Kumanovo?",
        answers: ["Bosna", "Makedonija", "Letonija"],
        correct: "Makedonija"
      }
    ];
	questions = questions_all.sort(() => Math.random() > 0.5 ? 1 : -1);

    function getInnerHtml(h1) {
      var innerHtml = h1.innerHTML;
      if (innerHtml == questions[serial_number].correct) {
        serial_number = serial_number + 1;
		correctAnswers = correctAnswers + 1;
        document.getElementById("answer").innerHTML = "Tochen odgovor";
		document.getElementById("answer").style.color = "green";
		document.getElementById("answer").style.display = "block";
		setTimeout(function() {
        document.getElementById("answer").style.display = "none";
}, 1000);
      } 
	  else {
	    serial_number = serial_number + 1;
		correctAnswers = correctAnswers + 0;
        document.getElementById("answer").innerHTML = "Netochen odgovor";
		document.getElementById("answer").style.color = "red";
		document.getElementById("answer").style.display = "block";
		setTimeout(function() {
        document.getElementById("answer").style.display = "none";
}, 1000);
      }

      if (serial_number < questions.length) {setTimeout(() => {
        document.getElementById("title").innerHTML = questions[serial_number].question;
        document.getElementById("button1").innerHTML = questions[serial_number].answers[0];
        document.getElementById("button2").innerHTML = questions[serial_number].answers[1];
        document.getElementById("button3").innerHTML = questions[serial_number].answers[2];
		}, 1000)}
		if (serial_number == questions.length) {
		setTimeout(() => {document.write("Kraj na igrata.<br>Imate " + correctAnswers + " tochni answers!");
		}, 3000);
		}
    }

    // Initialize the first question
    document.getElementById("title").innerHTML = questions[serial_number].question;
    document.getElementById("button1").innerHTML = questions[serial_number].answers[0];
    document.getElementById("button2").innerHTML = questions[serial_number].answers[1];
    document.getElementById("button3").innerHTML = questions[serial_number].answers[2];