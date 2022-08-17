import { Route, Switch } from 'react-router-dom';

import AboutCompany from '../../pages/aboutcompany-screen/data';
import AboutDevs from '../../pages/aboutdevs-screen';
import Accordion from '../../pages/aboutcompany-screen/accordionValue';
import AdminContentScreen from '../../admin/pages/content-screen';
import AdminPictureScreen from '../../admin/pages/picture-screen';
import AdminRoleScreen from '../../admin/pages/role-screen';
import AdminUserScreen from '../../admin/pages/user-screen';
import ArticleScreen from '../../pages/article-screen';
import ContactScreen from '../../pages/contact-screen';
import ErrorPage from '../../pages/error-page';
import EventsScreen from '../../pages/events-screen';
import FaqScreen from '../../pages/faq-screen';
import FindFoodScreen from '../../pages/find-food-screen';
import LandingpageScreen from '../../pages/landingpage-screen';
import LoginScreen from '../../pages/login-screen';
import ProfileScreen from '../../pages/profile-screen';
import React from "react";
import ReviewScreen from '../../pages/review-screen';
import SignupScreen from '../../pages/signup-screen';
import UserHomeScreen from '../../pages/userhome-screen';
import AllUsers from '../all-users';
import OneUser from '../one-user';

import AllPost from '../all-posts';
import AllFoodPosted from '../all-food-posted';
import HOmeSlider from '../home-slider';

import feeds from '../../feeds';
import posts from '../../post';
import userinfo from '../../userinfo';

// import AboutScreen from '../../pages/aboutcompany-screen';


const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={LandingpageScreen} />
            <Route exact path={'/userhome'} component={UserHomeScreen} />
            <Route exact path={'/about-developers'} component={AboutDevs} />
            <Route exact path={'/about-company'} component={AboutCompany} />
            <Route exact path={'/about-company-value'} component={Accordion} />
            {/* <Route exact path={'/contact'} component={ContactScreen} /> */}
            <Route exact path={'/article'} component={ArticleScreen} />
            <Route exact path={'/events'} component={EventsScreen} />
            <Route exact path={'/faq'} component={FaqScreen}/>
            <Route exact path={'/findfood'} component={FindFoodScreen} />
            <Route exact path={'/feeds'} component={UserHomeScreen} />
            <Route exact path={'/login'} component={LoginScreen} />
            <Route exact path={'userinfo'} component={UserHomeScreen} />
            <Route exact path={'/signup'} component={SignupScreen} />
            <Route exact path={'/profile'} component={ProfileScreen} />
            <Route exact path={'/posts'} component={UserHomeScreen} />
            <Route exact path={'/review'} component={ReviewScreen} />
            <Route exact path={'/admin/role'} component={AdminRoleScreen} />
            <Route exact path={'/admin/user'} component={AdminUserScreen} /> 
            <Route exact path={'/admin/content'} component={AdminContentScreen} /> 
            <Route exact path={'/admin/picture'} component={AdminPictureScreen} /> 
            <Route exact path={'/all-post'} component={AllPost} /> 
            <Route exact path={'/all-food-posted'} component={AllFoodPosted} />
            <Route exact path={'/all-users'} component={AllUsers} />
            <Route exact path={'/one-user'} component={OneUser} />
            <Route exact path={'/home-slider'} component={HOmeSlider} />
            
            <Route exact path={'*'} component={ErrorPage} /> 
            
        </Switch>
    );
}

export default AppRouter;