import React, { Component } from 'react';
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc';
import Item from './Item';

const SortableItem = SortableElement(({ value }) => <Item value={value} />);

const SortableList = SortableContainer(({ items }) => (
  <ul>
    {items.map((value, index) => (
      <SortableItem key={`item-${index}`} index={index} value={value} />
    ))}
  </ul>
));

export default class SortableComponent extends Component {
  constructor() {
    super();
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    };
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    const { items } = this.state;
    this.setState({
      items: arrayMove(items, oldIndex, newIndex),
    });
  };
  render() {
    const { items } = this.state;
    return <SortableList items={items} onSortEnd={this.onSortEnd} />;
  }
}
