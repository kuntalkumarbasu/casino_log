import React from 'react';
import { render } from 'react-dom';

import AdminProfile from 'components/admin/index/AdminProfile';

const app = document.getElementById('page');

if (app !== null) {
    
    const adminname = app.dataset.adminname;

    const admindetails = JSON.parse(app.dataset.admindetails);

	render(<AdminProfile adminname={adminname} admindetails={admindetails} />, app);
}

