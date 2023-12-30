import SortView from '../view/sort-view.js';
import EventView from '../view/event-view.js';
import EventDetailsView from '../view/event-details-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import TripEventsListItemView from '../view/trip-events-list-item-view.js';

import {render, RenderPosition} from '../render.js';

import {EVENT_COUNT} from '../const.js';

export default class EventPresenter {
  sortComponent = new SortView();
  eventDetailsComponent = new EventDetailsView();
  tripEventsListItemView = new TripEventsListItemView();
  tripEventsListView = new TripEventsListView();

  init = (container) => {
    this.container = container;

    render(this.sortComponent, this.container);
    render(this.tripEventsListItemView, this.tripEventsListView.getElement());
    render(this.eventDetailsComponent, this.tripEventsListItemView.getElement(), RenderPosition.AFTERBEGIN);

    for (let i = 0; i < EVENT_COUNT; i++) {
      render(new EventView(), this.tripEventsListItemView.getElement());
    }

    render(this.tripEventsListView, this.container);
  };
}
