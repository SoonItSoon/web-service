// Global
const HOME = '/';
const SIGNUP = '/sign-up';
const SIGNIN = '/sign-in';
const SIGNOUT = '/sign-out';
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
    signup: {
        single: SIGNUP,
        href: SIGNUP
    },
    signin: {
        single: SIGNIN,
        href: SIGNIN
    },
    signout: {
        single: SIGNOUT,
        href: SIGNOUT
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