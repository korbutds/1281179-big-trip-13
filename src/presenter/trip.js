// import TripPoint from "../view/trip-point.js";
// import TripPointEdit from "../view/trip-edit-point.js";
import FilterMenu from "../view/trip-filters.js";
import TripEmpty from "../view/trip-empty.js";
import TripInfo from "../view/trip-info.js";
import TripSort from "../view/trip-sort.js";
import TripBoard from "../view/trip-board.js";
import {render, RenderPosition} from "../view/utils/render.js";
import Point from "./point.js";
import {updateItem} from "../view/utils/common.js";
import {sortPointPriceToUp, sortPointTimeToUp} from "../view/utils/points.js";
import {SortType} from "../const.js";

export default class Trip {
  constructor(tripListContainer, pointsModel) {
    this._tripListContainer = tripListContainer;
    this._pointsModel = pointsModel;

    this._pointPresenter = {};
    this._currentSortType = SortType.DAY;

    this._header = document.querySelector(`.page-header`);
    this._tripControlsContainer = this._header.querySelector(`.trip-main__trip-controls`);
    this._tripInfoContainer = this._header.querySelector(`.trip-main`);

    this._filterComponent = new FilterMenu();
    this._emptyComponent = new TripEmpty();
    this._sortComponent = new TripSort();
    this._boardComponent = new TripBoard();

    this._handlePointChange = this._handlePointChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init() {
    this._renderFilters();
    this._renderTrip();
  }

  _getPoints() {
    switch (this._currentSortType) {
      case SortType.PRICE:
        return this._pointsModel.getPoints().slice().sort(sortPointPriceToUp);
      case SortType.TIME:
        return this._pointsModel.getPoints().slice().sort(sortPointTimeToUp);
    }

    return this._pointsModel.getPoints();
  }

  _renderPoint(point) {
    const pointPresenter = new Point(this._boardComponent, this._handlePointChange, this._handleModeChange);
    pointPresenter.init(point);
    this._pointPresenter[point.id] = pointPresenter;
  }

  _clearTrip() {
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.destroy());
    this._pointPresenter = {};
  }

  _handlePointChange(updatedPoint) {
    this._pointPresenter[updatedPoint.id].init(updatedPoint);
  }

  _handleModeChange() {
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }
    this._currentSortType = sortType;
    this._clearTrip();
    this._renderPointsList();
  }

  _renderPoints(points) {
    points.forEach((point) => this._renderPoint(point));
  }

  _renderPointsList() {
    const points = this._getPoints().slice();
    this._renderPoints(points);
  }

  _renderFilters() {
    render(this._tripControlsContainer, this._filterComponent, RenderPosition.AFTERBEGIN);

  }

  _renderEmptyTrip() {
    render(this._tripListContainer, this._emptyComponent, RenderPosition.AFTERBEGIN);
  }

  _renderInfo() {
    render(this._tripInfoContainer, this._infoComponent, RenderPosition.AFTERBEGIN);
  }

  _renderSort() {
    render(this._tripListContainer, this._sortComponent, RenderPosition.BEFOREBEGIN);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderTripBoard() {
    render(this._tripListContainer, this._boardComponent, RenderPosition.BEFOREBEGIN);
    this._renderPointsList();

  }

  _renderTrip() {
    this._infoComponent = new TripInfo(this._getPoints());
    if (this._getPoints().length === 0) {
      this._renderEmptyTrip();
      this._filterComponent.disableElement();
    } else {
      this._renderInfo();
      this._renderSort();
      this._renderTripBoard();
    }
  }
}
