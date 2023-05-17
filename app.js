// identify content in an array
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'ux designer',
        img: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=300',
        text:"The web design of this site is top-notch. The layout is clean, the navigation is easy to use, and the color scheme is appealing to the eye. The site's design is intuitive and responsive, making it easy to access on any device. Overall, a great example of effective and functional web design",
    },


    {
        id: 2,
        name: 'josh johnson',
        job: 'web developer',
        img: 'https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&w=300',
        text: "I was really impressed with the creativity and originality of this website's design. The use of unique graphics and visual elements made the site stand out and kept me engaged. The design also effectively communicated the brand's personality and message, which is crucial in building a strong online presence",
    },

    {
        id: 3,
        name: 'anna anderson',
        job: 'Sales Manager',
        img: 'https://images.pexels.com/photos/7507786/pexels-photo-7507786.jpeg?auto=compress&cs=tinysrgb&w=300',
        text: "The web design of this site is simply stunning. The use of typography, imagery, and whitespace is expertly executed, resulting in a design that is both beautiful and functional. The attention to detail is evident throughout the site, making for a seamless user experience that is both visually appealing and easy to navigate.",
    },

    {
        id: 4,
        name: 'chris colombo',
        job: 'Digital Developer',
        img: 'https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=300',
        text: "The web design of this site is impressive in its simplicity. The minimalist design creates a clean and uncluttered look, which enhances the site's usability and makes it easy to find what you're looking for. The site also features a responsive design, ensuring that it looks great on any device. Overall, a great example of how less can sometimes be more in web design",
    },

];

// select items
const img = document.getElementById('person1-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// set starting item
let currentItem = 0;


// load initial item
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});


// show person based on item id
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


// show next person
nextBtn.addEventListener('click', function () {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0
    } showPerson(currentItem);
});


// show prev person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    } showPerson(currentItem);
});


// show random person
randomBtn.addEventListener('click', function () {
    console.log('hello');

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});