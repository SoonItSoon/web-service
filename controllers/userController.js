import routes from "../routes";

export const getUserDetail = (req, res) => {
    res.render('userDetail', { pageTitle: 'User Detail' });
}
export const postUserDetail = (req, res) => {
    const { body: id } = req;
    res.render('userDetail', { pageTitle: 'User Detail' });
}
export const getEditProfile = (req, res) => {
    res.render('editProfile', { pageTitle: 'Edit Profile' });
}