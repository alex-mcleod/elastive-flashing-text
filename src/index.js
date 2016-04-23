import React from 'react';

import { Types, exportLibrary } from 'elastive-component';


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


exportLibrary({
  name: 'Flashing Fun',
  components: {
    'Flashing Text': {
      component: FlashingText,
      editableProps: ['text', 'style']
    }
  }
});
