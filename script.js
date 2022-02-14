const q_Form= document.getElementById('quiz-form');
const q_answers = Array.from(document.querySelectorAll('.answer'));
const q_questionItem = document.querySelectorAll('.question-item');
const q_alert = document.querySelector('#alert')
//Array.from -- will convert into the array--> html to array



q_Form.addEventListener("submit", e =>
{
    q_questionItem.forEach(qi =>
        {
        qi.classList.add('incorrect');
        qi.classList.remove('correct');
        }
    )
    e.preventDefault();  // preveting the default behviour like refreshing
    
    const checkedAnswer = q_answers.filter(answer => answer.checked);
    //console.log(checkedAnswer);

    checkedAnswer.forEach(answer =>
        {
        const isCorrect = answer.value==="true";
        const questionItem = answer.closest('.question-item'); //question item selects css  
        
        if(isCorrect)
        {
            questionItem.classList.add('correct'); // classList.add it will add the class
            questionItem.classList.remove('incorrect');
        }
        else
        {
            questionItem.classList.add('incorrect');
            questionItem.classList.add('correct');
        }
        
        
       const allTrue = checkedAnswer.every(answer => answer.value ==="true" );
            console.log(allTrue);
            //answer.value ==="true" );not working norml function
        const q_answerd = checkedAnswer.length === q_questionItem.length ;
        if(allTrue && q_answerd){
            q_alert.classList.add('active');
            setTimeout(() => {
                q_alert.classList.remove('active');
            }, 4000);
        }
        })
    })


