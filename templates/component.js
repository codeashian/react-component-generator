import React from 'react';
import { color, height, size, space } from 'styled-system';
import styled from 'styled-components';

const COMPONENT_NAMEStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	${color};
	${height};
	${size};
	${space};
`;

const COMPONENT_NAME = props => <COMPONENT_NAMEStyled {...props}>hejjlo</COMPONENT_NAMEStyled>;

COMPONENT_NAME.propTypes = {
	...color.propTypes,
	...height.propTypes,
	...size.propTypes,
	...space.propTypes
};

COMPONENT_NAME.defaultProps = {};

export default COMPONENT_NAME;
