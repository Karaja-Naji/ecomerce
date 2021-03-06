import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Import miscellaneous routes and other requirements
import App from './components/app';
import NotFoundPage from './components/pages/not-found-page';

// Import static pages
import HomePage from './components/pages/home-page';

//products
import ProductsPage from './components/pages/products';
import ProductForm from './components/products/productForm';

//categouries
import CategouriesPage from './components/dashboared/categouries';


// import ContactPage from './components/pages/contact-page';
// import ComponentSamplesPage from './components/pages/component-samples';

// Import authentication related pages
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import ForgotPassword from './components/auth/forgot_password';
import ResetPassword from './components/auth/reset_password';

// Import dashboard pages
// import Dashboard from './components/dashboard/dashboard';
// import ViewProfile from './components/dashboard/profile/view-profile';
// import Inbox from './components/dashboard/messaging/inbox';
// import Conversation from './components/dashboard/messaging/conversation';
// import ComposeMessage from './components/dashboard/messaging/compose-message';
// import BillingSettings from './components/billing/settings';

// Import billing pages
// import InitialCheckout from './components/billing/initial-checkout';

// // Import admin pages
// import AdminDashboard from './components/admin/dashboard';

// Import higher order components
import RequireAuth from './components/auth/require_auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />

    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
    <Route path="forgot-password" component={ForgotPassword} />
    <Route path="reset-password/:resetToken" component={ResetPassword} />

    //products
    <Route path="products" component={ProductsPage} />

    <Route path="products/new" component={ProductForm} />


    <Route path="categouries" component={CategouriesPage} />




    <Route path="*" component={NotFoundPage} />
  </Route>
);
