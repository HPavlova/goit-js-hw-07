const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('ul');
galleryEl.style.display = 'flex';
galleryEl.style.flexDirection = 'column';
galleryEl.style.padding = '20';

const elements = option => {
  const { url, alt } = option;
  return `<li><img class="gallery__img" src="${url}" alt="${alt}" width="100"></li>`;
};

const itemEl = images.map(elements).join(' ');

galleryEl.insertAdjacentHTML('afterbegin', itemEl);

console.log(galleryEl);
