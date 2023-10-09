const quotes = 
        [
            `The only way to do great work is to love what you do. - Steve Jobs`,
            `"In three words I can sum up everything I've learned about life: it goes on." - Robert Frost`,
            `"The best time to plant a tree was 20 years ago. The second best time is now." - Chinese Proverb`,
            `"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill`,
            `"The only thing necessary for the triumph of evil is for good men to do nothing." - Edmund Burke`,
            `"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." - Ralph Waldo Emerson`,
            `"The journey of a thousand miles begins with one step." - Lao Tzu`,
            `"Don't count the days, make the days count." - Muhammad Ali`,
            `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." - Albert Einstein`,
            `"The only thing we have to fear is fear itself." - Franklin D. Roosevelt`,
            `"You are never too old to set another goal or to dream a new dream." - C.S. Lewis`,
            `"The only true wisdom is in knowing you know nothing." - Socrates`,
            `"Life is really simple, but we insist on making it complicated." - Confucius`,
            `"It does not matter how slowly you go as long as you do not stop." - Confucius`,
            `"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt`,




        ]


const quoteArea = document.querySelector('.quote')
const btn = document.querySelector('#qbtn')



btn.addEventListener ('click', function(){
    let randomQuote = quotes [Math.floor(Math.random() * quotes.length )]
    quoteArea.innerHTML = randomQuote
})