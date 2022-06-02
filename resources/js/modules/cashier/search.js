import React from 'react';
import { render } from 'react-dom';

import Search from 'components/cashier/index/Search';

const app = document.getElementById('page');

if (app !== null) {
    
     
	const players = JSON.parse(app.dataset.players);
	
	render(<Search players={players} />, app);
}

