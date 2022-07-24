import { Route, Switch } from 'react-router-dom';

import AboutCompany from '../../pages/aboutcompany-screen';
import AboutDevs from '../../pages/aboutdevs-screen';
import ArticleScreen from '../../pages/article-screen';
import ContactScreen from '../../pages/contact-screen';
import EventsScreen from '../../pages/events-screen';
import FaqScreen from '../../pages/faq-screen'
import FindFoodScreen from '../../pages/find-food-screen';
import LandingpageScreen from '../../pages/landingpage-screen';
import LoginScreen from '../../pages/login-screen';
import ProfileScreen from '../../pages/profile-screen';
import React from "react";
import ReviewScreen from '../../pages/review-screen';
import SignupScreen from '../../pages/signup-screen';
import UserHomeScreen from '../../pages/userhome-screen';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={LandingpageScreen} />
            <Route exact path={'/userhome'} component={UserHomeScreen} />
            <Route exact path={'/about-developers'} component={AboutDevs} />
            <Route exact path={'/about-company'} component={AboutCompany} />
            <Route exact path={'/contact'} component={ContactScreen} />
            <Route exact path={'/article'} component={ArticleScreen} />
            <Route exact path={'/events'} component={EventsScreen} />
            <Route exact path={'/faq'} component={FaqScreen}/>
            <Route exact path={'/findfood'} component={FindFoodScreen} />
            <Route exact path={'/login'} component={LoginScreen} />
            <Route exact path={'/profile'} component={ProfileScreen} />
            <Route exact path={'/review'} component={ReviewScreen} />
            <Route exact path={'/signup'} component={SignupScreen} />

        </Switch>
    );
}

export default AppRouter;