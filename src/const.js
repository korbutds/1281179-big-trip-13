import {getRandomInt, getRandomFishText, createPhotosArr} from "./utils.js";
import dayjs from "dayjs";

const OFFERS_LIST = {
  orderUber: {
    id: `order-uber`,
    name: `Order uber`,
    price: 20
  },
  addLuggage: {
    id: `add-luggage`,
    name: `Add luggage`,
    price: 15
  },
  switchToComfort: {
    id: `switch-to-comfort`,
    name: `Switch to comfort`,
    price: 100
  },
  rentACar: {
    id: `rent-a-car`,
    name: `Rent a car`,
    price: 150
  },
  addBreakfast: {
    id: `add-breakfast`,
    name: `Add breakfast`,
    price: 25
  },
  bookTickets: {
    id: `book-tickets`,
    name: `Book tickets`,
    price: 12
  },
  lunchInCity: {
    id: `lunch-in-city`,
    name: `Lunch in city`,
    price: 45
  },
};

const ROUTE_POINT_TYPES = {
  taxi: {
    name: `Taxi`,
    offers: [OFFERS_LIST.orderUber, OFFERS_LIST.switchToComfort],
    iconSrc: `./img/icons/taxi.png`,
    price: getRandomInt(2, 20) * 20,
  },
  bus: {
    name: `Bus`,
    offers: [OFFERS_LIST.bookTickets],
    iconSrc: `./img/icons/bus.png`,
    price: getRandomInt(2, 20) * 20,
  },
  train: {
    name: `Train`,
    offers: [OFFERS_LIST.bookTickets, OFFERS_LIST.switchToComfort],
    iconSrc: `./img/icons/train.png`,
    price: getRandomInt(2, 20) * 20,
  },
  ship: {
    name: `Ship`,
    offers: [OFFERS_LIST.bookTickets, OFFERS_LIST.switchToComfort],
    iconSrc: `./img/icons/ship.png`,
    price: getRandomInt(2, 20) * 20,
  },
  transport: {
    name: `Transport`,
    offers: [OFFERS_LIST.bookTickets],
    iconSrc: `./img/icons/transport.png`,
    price: getRandomInt(2, 20) * 20,
  },
  drive: {
    name: `Drive`,
    offers: [OFFERS_LIST.rentACar],
    iconSrc: `./img/icons/drive.png`,
    price: getRandomInt(2, 20) * 20,
  },
  flight: {
    name: `Flight`,
    offers: [OFFERS_LIST.bookTickets, OFFERS_LIST.switchToComfort, OFFERS_LIST.addLuggage],
    iconSrc: `./img/icons/flight.png`,
    price: getRandomInt(2, 20) * 20,
  },
  checkIn: {
    name: `Check-in`,
    offers: [OFFERS_LIST.lunchInCity],
    iconSrc: `./img/icons/check-in.png`,
    price: getRandomInt(2, 20) * 20,
  },
  sightseeng: {
    name: `Sightseeng`,
    offers: [OFFERS_LIST.bookTickets, OFFERS_LIST.lunchInCity, OFFERS_LIST.addBreakfast],
    iconSrc: `./img/icons/sightseeing.png`,
    price: getRandomInt(2, 20) * 20,
  },
  restaurant: {
    name: `Restaurant`,
    offers: [OFFERS_LIST.lunchInCity, OFFERS_LIST.switchToComfort],
    iconSrc: `./img/icons/restaurant.png`,
    price: getRandomInt(2, 20) * 20,
  },
};

// const ROUTE_POINT_TYPES = {
//   taxi: {
//     name: `Taxi`,
//     offers: getRandomArray(getRandomInt(0, 5), Object.keys(OFFERS_LIST)),
//     iconSrc: `../img/icons/taxi.png`,
//     price: getRandomInt(2, 20) * 20,
//   },
//   bus: {
//     name: `Bus`,
//     offers: getRandomArray(getRandomInt(0, 5), Object.keys(OFFERS_LIST)),
//     iconSrc: `../img/icons/bus.png`,
//     price: getRandomInt(2, 20) * 20,
//   },
//   train: {
//     name: `Train`,
//     offers: getRandomArray(getRandomInt(0, 5), Object.keys(OFFERS_LIST)),
//     iconSrc: `../img/icons/train.png`,
//     price: getRandomInt(2, 20) * 20,
//   },
//   ship: {
//     name: `Ship`,
//     offers: getRandomArray(getRandomInt(0, 5), Object.keys(OFFERS_LIST)),
//     iconSrc: `../img/icons/ship.png`,
//     price: getRandomInt(2, 20) * 20,
//   },
//   transport: {
//     name: `Transport`,
//     offers: getRandomArray(getRandomInt(0, 5), Object.keys(OFFERS_LIST)),
//     iconSrc: `../img/icons/transport.png`,
//     price: getRandomInt(2, 20) * 20,
//   },
//   drive: {
//     name: `Drive`,
//     offers: getRandomArray(getRandomInt(0, 5), Object.keys(OFFERS_LIST)),
//     iconSrc: `../img/icons/drive.png`,
//     price: getRandomInt(2, 20) * 20,
//   },
//   flight: {
//     name: `Flight`,
//     offers: getRandomArray(getRandomInt(0, 5), Object.keys(OFFERS_LIST)),
//     iconSrc: `../img/icons/flight.png`,
//     price: getRandomInt(2, 20) * 20,
//   },
//   checkIn: {
//     name: `Check-in`,
//     offers: getRandomArray(getRandomInt(0, 5), Object.keys(OFFERS_LIST)),
//     iconSrc: `../img/icons/check-in.png`,
//     price: getRandomInt(2, 20) * 20,
//   },
//   sightseeng: {
//     name: `Sightseeng`,
//     offers: getRandomArray(getRandomInt(0, 5), Object.keys(OFFERS_LIST)),
//     iconSrc: `../img/icons/sightseeing.png`,
//     price: getRandomInt(2, 20) * 20,
//   },
//   restaurant: {
//     name: `Restaurant`,
//     offers: getRandomArray(getRandomInt(0, 5), Object.keys(OFFERS_LIST)),
//     iconSrc: `../img/icons/restaurant.png`,
//     price: getRandomInt(2, 20) * 20,
//   },
// };

const DESTINATIONS_ARRAY = [
  {
    name: `San-Francisco`,
    description: getRandomFishText(getRandomInt(1, 5)),
    photos: createPhotosArr(),
  },
  {
    name: `Los-Angeles`,
    description: getRandomFishText(getRandomInt(1, 5)),
    photos: createPhotosArr(),
  },
  {
    name: `New-York`,
    description: getRandomFishText(getRandomInt(1, 5)),
    photos: createPhotosArr(),
  },
  {
    name: `Kokkari restaurant`,
    description: getRandomFishText(getRandomInt(1, 5)),
    photos: createPhotosArr(),
  },
  {
    name: `Hollywood Hills`,
    description: getRandomFishText(getRandomInt(1, 5)),
    photos: createPhotosArr(),
  },
];

const BLANK_POINT = {
  times: dayjs(),
  type: ROUTE_POINT_TYPES.checkIn.name,
  destination: DESTINATIONS_ARRAY[0].name,
  offers: ROUTE_POINT_TYPES.checkIn.offers,
  description: getRandomFishText(getRandomInt(1, 5)),
  photos: DESTINATIONS_ARRAY[0].photos,
  isFavorite: false,
};

const Keys = {
  ESCAPE: [`Esc`, `Escape`]
};

export {OFFERS_LIST, ROUTE_POINT_TYPES, DESTINATIONS_ARRAY, BLANK_POINT, Keys};
