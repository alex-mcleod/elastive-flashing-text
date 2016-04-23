import React from 'react';

import _ from 'lodash';

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

  constructor() {
    super();
    this.state = {
      on: true
    };
  }

  componentDidMount() {
    _.delay(this.doToggle, 1000);
  }

  doToggle = () => {
    this.setState({ on: !this.state.on });
    _.delay(this.doToggle, 1000);
  }

  render() {
    return (
      <p style={this.props.style} onClick={ this.startEditing }>
        {this.state.on && this.props.text}
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
