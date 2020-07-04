import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from './customer/components/App/App'
import DashboardView from './customer/components/DashboardView/DashboardView/DashboardView'
import CustomOrderView from './customer/components/CustomOrderView/CustomOrderView/CustomOrderView'
import SelectShopView from './customer/components/SelectShopView/SelectShopView/SelectShopView'
import AdditionalInfoView from './customer/components/AdditionalInfoView/AdditionalInfoView/AdditionalInfoView'
import OrderSummaryView from './customer/components/OrderSummaryView/OrderSummaryView/OrderSummaryView'
import ConfirmationView from './customer/components/ConfirmationView/ConfirmationView/ConfirmationView'
import PreviousOrdersView from './customer/components/PreviousOrdersView/PreviousOrdersView/PreviousOrdersView'
import FavoriteOrdersView from './customer/components/FavoriteOrdersView/FavoriteOrdersView/FavoriteOrdersView'
import AppBusiness from './business-admin/components/App'
import BusinessAdminView from './business-admin/components/BusinessAdminView/BusinessAdminView/BusinessAdminView'


var Routes = <div> <Route path="/" component={App}>
    <IndexRoute component={DashboardView} />
    <Route path="select-shop" component={SelectShopView} />
    <Route path="previous-orders" component={PreviousOrdersView} />
    <Route path="favorite-orders" component={FavoriteOrdersView} />

</Route>
    <Route path="/admin" component={AppBusiness}>
        <IndexRoute component={BusinessAdminView} />
    </Route>
    <Route path="/custom-order" component={CustomOrderView} />
    <Route path="additional-info" component={AdditionalInfoView} />
    <Route path="order-summary" component={OrderSummaryView} />
    <Route path="confirmation" component={ConfirmationView} />




</div>

export default Routes;
