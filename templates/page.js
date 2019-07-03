import React from 'react';
import { withRouter } from 'react-router-dom';
import useAsync from 'utils/hooks/useAsync';

import View from 'components/View';

const COMPONENT_NAMEPage = () => {
	const [state] = useAsync(() => getPageById(4));

	if (!state.loaded) {
		return <div />;
	}

	// let { acf } = state.data;

	return <View title="Some view" />;
};

COMPONENT_NAMEPage.propTypes = {};

COMPONENT_NAMEPage.defaultTypes = {};

export default withRouter(COMPONENT_NAMEPage);
