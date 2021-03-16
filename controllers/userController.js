import routes from "../routes";

export const userDetail = (req, res) => {
    res.render('userDetail', { pageTitle: 'User Detail' });
}
export const postDetail = (req, res) => {
    const { body: id } = req;
    res.render('userDetail', { pageTitle: 'User Detail' });
}
export const editProfile = (req, res) => {
    res.render('editProfile', { pageTitle: 'Edit Profile' });
}