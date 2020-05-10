const ul = document.querySelector('#ul'); 
const btn = document.getElementById('button');
const scoreCard = document.getElementById('scoreCard');
const quizBox = document.getElementById('questionBox');
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

let score = 0; 


var app = {
        questions: [
                    {q: 'HTML stands for ?', options:['Higher Text Markup Language', 'Hiper Text Markup Language', 'Hyper Text Markup Language', 'Higher Text Markup Language'], answer:3},

                    {q: 'Which of the following tags is used to mark the beginning of a paragraph ?', options:['TD', 'BR', 'P', 'TR'], answer:3},

                    {q: 'The corret HTML tag for the largest heading is ?', options:['h4', 'h1', 'h8', 'h9'], answer:2},

                    {q: ' Which of the following property is used to set the background color of an element?', options:['background-color', 
                    'bckground-image', 'background-repeat', 'background-position'], answer:1},

                    {q: 'Which of the following property changes the style of bottom border?', options:[':border-bottom-style', ':border-top-style', ':border-left-style', ':border-right-style'], answer:1},
                    ],
        index:0,
        load:function() {
                this.clearState(op1); 
                this.clearState(op2);
                this.clearState(op3);
                this.clearState(op4);

                if(this.index<=this.questions.length-1) {
                quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;
                op1.innerHTML=this.questions[this.index].options[0];
                op2.innerHTML=this.questions[this.index].options[1];
                op3.innerHTML=this.questions[this.index].options[2];
                op4.innerHTML=this.questions[this.index].options[3];

                
                    // this.scoreCard();
                }
                else {
                    quizBox.innerHTML="Quiz Over....!";
                    op1.style.display="none";
                    op2.style.display="none";
                    op3.style.display="none";
                    op4.style.display="none";
                    btn.style.display="none";
                }
        },
        next:function() {
            this.index++;
            this.load();
        },

        clearState: function(element) {
            element.classList.remove('correct');
            element.classList.remove('wrong');

        }, 
        check:function(ele) {
            this.clearState(ele); 
            

            var id = ele.id.split('');
            
            if(id[id.length-1]== this.questions[this.index].answer) {
                ele.classList.add("correct");
                ele.innerHTML="Correct";
                this.scoreCard();
            }
            else {
                ele.classList.add("wrong");
                ele.innerHTML="Wrong";
            }

        },
        notClickAble:function() {
                for (let i = 0; i < ul.children.length; i++) {
                    ul.children[i].style.pointerEvents = "none";
                    
                }

                
        },

        
        clickAble:function() {
            for (let i = 0; i < ul.children.length; i++) {
                ul.children[i].style.pointerEvents = "auto";
                ul.children[i].style.className = '';
                
            }

            
    },
        scoreCard:function() {
            score += 20; 
            scoreCard.innerText = score; 

        }


    }


    window.onload=app.load();

    function button(ele) {
        app.clearState(ele); 
        app.check(ele);
        app.notClickAble();
    }

    function next() {
        app.next();
        app.clickAble();

    }