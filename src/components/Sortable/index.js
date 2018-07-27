import React, { Component } from 'react';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove
} from 'react-sortable-hoc';
import { Icon } from 'react-fa';
import './style.css';
const DragHandle = SortableHandle(() => (
  <Icon name="align-justify" className="cursorIcon" />
)); // This can be any component you want

const SortableItem = SortableElement(({ value }) => {
  return (
    <div className="itemSort">
      {value}
      <DragHandle />
    </div>
  );
});

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class Sortable extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
  };
  onSortEnd = ({ oldIndex, newIndex }) => {
    const { items } = this.state;

    this.setState({
      items: arrayMove(items, oldIndex, newIndex)
    });
  };
  render() {
    const { items } = this.state;

    return (
      <SortableList
        items={items}
        onSortEnd={this.onSortEnd}
        useDragHandle={true}
      />
    );
  }
}
export default Sortable;
