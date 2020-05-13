/* eslint-disable react/jsx-props-no-spreading */
import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, TInput} from './styles';

function Input({style, icon, ...rest}, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={30} color="#203a47" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
