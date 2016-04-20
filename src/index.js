import React from 'react';

import { applyElastiveMixin, BasicPreview, Types, exportComponent } from 'elastive-component';


@applyElastiveMixin({
  editableProps: ['text', 'style'],
  name: 'Flashing Text'
})
export default class FlashingText extends React.Component {

  static propTypes = {
    text: Types.string,
    style: Types.style
  }

  static defaultProps = {
    text: 'New text',
    style: {}
  }

  render() {
    return (
      <p style={this.props.style} onClick={ this.startEditing }>
        {this.props.text} SHOULD FLASH
      </p>
    );
  }
}


exportComponent(FlashingText);
