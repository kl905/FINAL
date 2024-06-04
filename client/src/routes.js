import {
    COMPANIES_ROUTE,
    COMPANYPAGE_ROUTE,
    FINDJOB_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE, TEST_ROUTE, WORKERPAGE_ROUTE, WORKERS_ROUTE, ACCOUNT_ROUTE
} from "./utils/consts";
import Findjob from "./pages/Findjob";
import Companies from "./pages/Companies";
import Companypage from "./pages/Companypage";
import Workers from "./pages/Workers";
import Auth from "./pages/Auth";
import Workerpage from "./pages/Workerpage";
import Testpage from "./pages/Testpage"
import Account from "./pages/Account";

export const authRoutes = [
    {
        path: COMPANYPAGE_ROUTE +'/:id',
        Component: Companypage
    },
    {
        path: WORKERPAGE_ROUTE +'/:id',
        Component: Workerpage
    },
    {
        path: TEST_ROUTE + '/:id',
        Component: Testpage
    },
    {
        path: ACCOUNT_ROUTE + '/:email',
        Component: Account
    },
]
export const publicRoutes = [
    {
        path: FINDJOB_ROUTE,
        Component: Findjob
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: COMPANIES_ROUTE,
        Component: Companies
    },
    {
        path: WORKERS_ROUTE,
        Component: Workers
    },


]