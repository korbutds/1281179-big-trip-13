import TripInfo from "./view/trip-info.js";
import FilterMenu from "./view/trip-filters.js";
import TripSort from "./view/trip-sort.js";
import TripList from "./view/trip-list.js";
import TripPointEdit from "./view/trip-edit-point.js";
// import {creatNewPointTemplate} from "./view/trip-new-point.js";
import TripPoint from "./view/trip-point.js";
import {generatePoint} from "./mock/point.js";
import {RenderPosition, render} from "./utils.js";

const POINT_COUNT = 20;

const points = new Array(POINT_COUNT).fill().map(generatePoint);

const pageHeader = document.querySelector(`.page-header`);
const tripMainElement = pageHeader.querySelector(`.trip-main`);
const tripControlsElement = pageHeader.querySelector(`.trip-main__trip-controls`);
const pageMain = document.querySelector(`.page-body__page-main`);
const tripEventsSection = pageMain.querySelector(`.trip-events`);

const renderPoint = (pointContainer, point) => {
  const pointComponent = new TripPoint(point);
  const pointEditComponent = new TripPointEdit(point);

  const replaceCardToForm = () => {
    pointContainer.replaceChild(pointEditComponent.getElement(), pointComponent.getElement());
    document.addEventListener(`keydown`, onEscKeyDown);
  };

  const replaceFormToCard = () => {
    pointContainer.replaceChild(pointComponent.getElement(), pointEditComponent.getElement());
    document.removeEventListener(`keydown`, onEscKeyDown);
  };

  pointComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, replaceCardToForm);

  pointEditComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, replaceFormToCard);

  pointEditComponent.getElement().querySelector(`.event--edit`).addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceFormToCard();
  });

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  render(pointContainer, pointComponent.getElement(), RenderPosition.BEFOREBEGIN);
};

render(tripMainElement, new TripInfo(points).getElement(), RenderPosition.AFTERBEGIN);
render(tripControlsElement, new FilterMenu().getElement(), RenderPosition.AFTERBEGIN);
render(tripEventsSection, new TripSort().getElement(), RenderPosition.BEFOREBEGIN);
const tripBoard = new TripList();
render(tripEventsSection, tripBoard.getElement(), RenderPosition.BEFOREBEGIN);
for (let i = 0; i < POINT_COUNT - 1; i++) {
  renderPoint(tripBoard.getElement(), points[i]);
}

