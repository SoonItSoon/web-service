import routes from "../routes";

export const getHome = (req, res) => {
    res.render('home', { pageTitle: 'Home'});
}

export const getSignUp = (req, res) => {
    res.render('sign-up', { pageTitle: 'Sign Up' });
}

export const postSignUp  = (req, res) => {
    // 계정 생성 정보
    const {
        body: { name, email, password, password2 }
    } = req;

    // 입력한 확인비밀번호가 맞는지 확인
    if(password !== password2) {
        res.status(400) // Bad Request
        console.log('Post /join password and password2 were not same');
        res.render('join', { pageTitle: 'Join' });
    } else {
        // TODO : Register User
        // TODO : Log User In
        res.redirect(routes.home.href);
    }
}

export const getSignIn = (req, res) => {
    res.render('sign-in', { pageTitle: 'Sign In' });
}

export const postSignIn = (req, res) => {
    res.redirect(routes.home.href);
}

export const getSignOut = (req, res) => {
    // TODO : Process Logout
    res.redirect(routes.home.href);
}

export const getHelp = (req, res) => {
    res.render('help');
}