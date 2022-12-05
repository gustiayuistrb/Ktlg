import 'regenerator-runtime';
import '../styles/style.css';
import DATA from '../DATA.json';

function getRestaurantList (data) {
    let restoHTML = '';
    data.restaurants.forEach((resto) => {
        restoHTML += `
        <div class="card">
            <div class="box">
                <h1 class="restaurant_title">
                    <a href="#">${resto.name}</a>
                </h1>
                <div class="image">
                    <img class="restaurant-image" src="${resto.pictureId}" alt="${resto.name}">
                </div>
                    <div class="top">
                        <p class="location">
                            <img src="./images/location.png" alt="location" style="width:15px;height:15px">
                                ${resto.city}
                        </p>
                        <p class="rating">
                            <img src="./images/star.png" alt="rating" style="width:15px;height:15px">
                                ${resto.rating}
                        </p>
                    </div>
                        <div class="restaurant-content">
                        <div class="restaurant-description">
                            ${resto.description}
                        </div>
                    </div>
                </div>
            </div>
        </div >
          `;
    });

    document.querySelector('#viewrestaurant').innerHTML = restoHTML;

}
getRestaurantList(DATA);

const hamburgerButtonElement = document.querySelector('#menu');
const drawerElement = document.querySelector('#drawer');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

const mainElement = document.querySelector('main');

mainElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
});

const heroElement = document.querySelector('.hero');

heroElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
});

const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');
