import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';

import EventPresenter from './presenter/event-presenter.js';

import {render, RenderPosition} from './render.js';

const bodyElement = document.querySelector('body');
const tripMain = bodyElement.querySelector('.trip-main');
const tripControls = bodyElement.querySelector('.trip-controls__filters');
const tripEvents = bodyElement.querySelector('.trip-events');

const eventPresenter = new EventPresenter();

render(new TripInfoView(), tripMain, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripControls);

eventPresenter.init(tripEvents);
