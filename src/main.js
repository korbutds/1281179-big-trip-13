import TripInfo from "./view/trip-info.js";
import FilterMenu from "./view/trip-filters.js";
import TripSort from "./view/trip-sort.js";
import TripList from "./view/trip-list.js";
import {creatNewPointTemplate} from "./view/trip-new-point.js";
import {createEditPointTemplate} from "./view/trip-edit-point.js";
import {createTripPointTemplate} from "./view/trip-point.js";
import {generatePoint} from "./mock/point.js";
import {renderTemplate, RenderPosition, renderElement} from "./utils.js";

const POINT_COUNT = 20;

const points = new Array(POINT_COUNT).fill().map(generatePoint);

const pageHeader = document.querySelector(`.page-header`);
const tripMainElement = pageHeader.querySelector(`.trip-main`);
const tripControlsElement = pageHeader.querySelector(`.trip-main__trip-controls`);
const pageMain = document.querySelector(`.page-body__page-main`);
const tripEventsSection = pageMain.querySelector(`.trip-events`);

renderElement(tripMainElement, new TripInfo(points).getElement(), RenderPosition.AFTERBEGIN);
renderElement(tripControlsElement, new FilterMenu().getElement(), RenderPosition.AFTERBEGIN);
renderElement(tripEventsSection, new TripSort().getElement(), RenderPosition.BEFOREBEGIN);
const tripBoard = new TripList();
renderElement(tripEventsSection, tripBoard.getElement(), RenderPosition.BEFOREBEGIN);

const tripList = tripEventsSection.querySelector(`.trip-events__list`);
renderTemplate(tripList, creatNewPointTemplate(points[points.length - 1]), `beforeend`);
renderTemplate(tripList, createEditPointTemplate(points[0]), `beforeend`);

for (let i = 1; i < POINT_COUNT - 1; i++) {
  renderTemplate(tripList, createTripPointTemplate(points[i]), `beforeend`);
}
