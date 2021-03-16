// Global
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const HELP = '/help';

// Users
const USERS = '/users';
const USER_DETAIL = '/:id';
const EDIT_PROFILE = '/edit-profile';

// Export
const routes = {
    home: {
        single: HOME,
        href: HOME
    },
    join: {
        single: JOIN,
        href: JOIN
    },
    login: {
        single: LOGIN,
        href: LOGIN
    },
    logout: {
        single: LOGOUT,
        href: LOGOUT
    },
    help: {
        single: HELP,
        href: HELP
    },
    users: {
        single: USERS,
        href: USERS
    },
    userDetail: {
        single: (id) => {
            if(id){
                return `/${id}`;
            } else {
                return USER_DETAIL;
            }
        },
        href: (id) => {
            if(id){
                return `${USERS}/${id}`;
            } else {
                return `${USERS}${USER_DETAIL}`;
            }
        }
    },
    editProfile: {
        single: EDIT_PROFILE,
        href: `${USERS}${EDIT_PROFILE}`
    }
}

export default routes;