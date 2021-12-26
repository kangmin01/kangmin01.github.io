const quotes = [
    {
        quote: "The way get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Anyone who has never made a mistake has never tried anything new.",
        author:"Albert Einstein",
    },
    {
        quote: "Let me assert my firm belief that the only thing we have to fear is fear itself.",
        author:"F.D. Roosevelt",
    },
    {
        quote: "Fake it till you make it.",
        author:"-",
    },
    {
        quote: "If you really want to do something, you'll find a way. If you do not, you'll find an excuse.",
        author:"Jim Rohn",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"Nelson Mandela",
    },
    {
        quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author:"Kamal Ravikant",
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author:"Theodore Roosevelt",
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        author:"Mark Twain",
    },
    {
        quote: "Do one thing every day that scares you.",
        author:"Anonymous",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = `- ${todaysQoute.author} -`;