'use strict';

function applyForVisa(document) {
  console.log('Обработка заявления...');
  let promise = new Promise(((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0 ? resolve({ visa: '1235621' }) : reject('В визе отказано: нехватка документов');
      resolve();
      reject();
      resolve();
    }, 2000);
  }));
  return promise;
}

function getVisa(visa) {
  console.info('Виза получена');
  return new Promise(((resolve, reject) => {
    resolve(visa);
  }));
}

function bookHotel(visa) {
  console.log(visa);
  console.log('Бронируем отель');
  return { hotel: 'Hotel "Maria"'};
}

function buyTickets(visa, hotel) {
  console.log('Покупаем билеты');
  console.log(visa, hotel);
}

applyForVisa({})
  .then(getVisa)
  .then(bookHotel)
  .then(buyTickets)
  .catch(error => console.error(error));
