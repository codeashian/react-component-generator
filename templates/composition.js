import React from 'react';
import { space } from 'styled-system';
import styled from 'styled-components';

const COMPONENT_NAMEStyled = styled.div`
	${space};
`;

const COMPONENT_NAME = props => <COMPONENT_NAMEStyled {...props}>hejjlo</COMPONENT_NAMEStyled>;

COMPONENT_NAME.propTypes = {
	...space.propTypes
};

COMPONENT_NAME.defaultProps = {};

export default COMPONENT_NAME;
