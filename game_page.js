player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;


function send() 
{ 
    get_word = document.getElementById("word").Value;
    word = get_word.loverCase();
    console.log("word in loverCase = " + word);

    chartAt1 = word.chartat(1);
    console.log(chartAt1);

    length_divide_2 = 


function check()

{
        get_answer = document.getElementById("inpute_check_box").value;
        answer = get_answer.loverCase();
        console.log("answer in loverCase - "+ answer);
        if(answer == word)
        {
            if (answer_turn == "player1")
            {
                player1_score = player1_score +1;
                document.getElementById("player1_sore").innerHTML = player1_score;

            }
            else
            {
                player2_score = player2_score +1;
                document.getElementById("player2_score ").innerHTML =player2_score;

            }


        }

        if(question_turn == "player1")
        {
            document.getElementById("player_question").innerHTML = "questionTurn -" + player2_name;
        }
        else
        {
                question_turn
        }

}
