import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ShopsList } from "./shops/ShopsList";
import { ShopsCreate } from "./shops/ShopsCreate";
import { ShopsEdit } from "./shops/ShopsEdit";
import { ShopsShow } from "./shops/ShopsShow";
import { GoodsList } from "./goods/GoodsList";
import { GoodsCreate } from "./goods/GoodsCreate";
import { GoodsEdit } from "./goods/GoodsEdit";
import { GoodsShow } from "./goods/GoodsShow";
import { BookingsList } from "./bookings/BookingsList";
import { BookingsCreate } from "./bookings/BookingsCreate";
import { BookingsEdit } from "./bookings/BookingsEdit";
import { BookingsShow } from "./bookings/BookingsShow";
import { JobOpportunitiesList } from "./jobOpportunities/JobOpportunitiesList";
import { JobOpportunitiesCreate } from "./jobOpportunities/JobOpportunitiesCreate";
import { JobOpportunitiesEdit } from "./jobOpportunities/JobOpportunitiesEdit";
import { JobOpportunitiesShow } from "./jobOpportunities/JobOpportunitiesShow";
import { InstitutionsList } from "./institutions/InstitutionsList";
import { InstitutionsCreate } from "./institutions/InstitutionsCreate";
import { InstitutionsEdit } from "./institutions/InstitutionsEdit";
import { InstitutionsShow } from "./institutions/InstitutionsShow";
import { RatingsList } from "./ratings/RatingsList";
import { RatingsCreate } from "./ratings/RatingsCreate";
import { RatingsEdit } from "./ratings/RatingsEdit";
import { RatingsShow } from "./ratings/RatingsShow";
import { FreelancerServicesList } from "./freelancerServices/FreelancerServicesList";
import { FreelancerServicesCreate } from "./freelancerServices/FreelancerServicesCreate";
import { FreelancerServicesEdit } from "./freelancerServices/FreelancerServicesEdit";
import { FreelancerServicesShow } from "./freelancerServices/FreelancerServicesShow";
import { MarketTrendsList } from "./marketTrends/MarketTrendsList";
import { MarketTrendsCreate } from "./marketTrends/MarketTrendsCreate";
import { MarketTrendsEdit } from "./marketTrends/MarketTrendsEdit";
import { MarketTrendsShow } from "./marketTrends/MarketTrendsShow";
import { ReviewsList } from "./reviews/ReviewsList";
import { ReviewsCreate } from "./reviews/ReviewsCreate";
import { ReviewsEdit } from "./reviews/ReviewsEdit";
import { ReviewsShow } from "./reviews/ReviewsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Socio-Economic Platform Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Shops"
          list={ShopsList}
          edit={ShopsEdit}
          create={ShopsCreate}
          show={ShopsShow}
        />
        <Resource
          name="Goods"
          list={GoodsList}
          edit={GoodsEdit}
          create={GoodsCreate}
          show={GoodsShow}
        />
        <Resource
          name="Bookings"
          list={BookingsList}
          edit={BookingsEdit}
          create={BookingsCreate}
          show={BookingsShow}
        />
        <Resource
          name="JobOpportunities"
          list={JobOpportunitiesList}
          edit={JobOpportunitiesEdit}
          create={JobOpportunitiesCreate}
          show={JobOpportunitiesShow}
        />
        <Resource
          name="Institutions"
          list={InstitutionsList}
          edit={InstitutionsEdit}
          create={InstitutionsCreate}
          show={InstitutionsShow}
        />
        <Resource
          name="Ratings"
          list={RatingsList}
          edit={RatingsEdit}
          create={RatingsCreate}
          show={RatingsShow}
        />
        <Resource
          name="FreelancerServices"
          list={FreelancerServicesList}
          edit={FreelancerServicesEdit}
          create={FreelancerServicesCreate}
          show={FreelancerServicesShow}
        />
        <Resource
          name="MarketTrends"
          list={MarketTrendsList}
          edit={MarketTrendsEdit}
          create={MarketTrendsCreate}
          show={MarketTrendsShow}
        />
        <Resource
          name="Reviews"
          list={ReviewsList}
          edit={ReviewsEdit}
          create={ReviewsCreate}
          show={ReviewsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
