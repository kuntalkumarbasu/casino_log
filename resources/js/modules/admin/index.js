import React from 'react';
import { render } from 'react-dom';

import Login from 'components/admin/index/Login';

const app = document.getElementById('page');

if (app !== null) {
    
	render(<Login />, app);
}

