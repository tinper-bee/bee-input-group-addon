import classNames from 'classnames';
import React from 'react';


class InputGroupAddon extends React.Component {
  render() {
    const { className, ...others } = this.props;

    let classes = {
    	'input-group-addon' : true
    }
    return (
      <span
        {...others}
        className={classNames(className, classes)}
      />
    );
  }
}

export default InputGroupAddon;