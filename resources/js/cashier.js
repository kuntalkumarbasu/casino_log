import '@babel/polyfill';
import moment from 'moment';

window.Locale = 'EN';
moment.locale('EN-ca');

const page = document.getElementById('page');



if(page.dataset.page === 'index'){
	import('modules/cashier/index');
}
else if(page.dataset.page === 'search'){
	import('modules/cashier/search');
}
else if(page.dataset.page === 'adminindex'){
	import('modules/admin/index');
}
else if(page.dataset.page === 'adminprofile'){ 
	import('modules/admin/adminprofile');
}
