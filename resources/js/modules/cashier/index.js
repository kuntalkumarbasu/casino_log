import React from 'react';
import { render } from 'react-dom';

import Login from 'components/cashier/index/Login';

const app = document.getElementById('page');


console.log(app);

if (app !== null) {
    
	render(<Login />, app);
}

