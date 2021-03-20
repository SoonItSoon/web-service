import express from 'express';
import routes from '../routes';
import { getEditProfile, postUserDetail, getUserDetail } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.editProfile.single, getEditProfile);
userRouter.get(routes.userDetail.single(), getUserDetail);
userRouter.post(routes.userDetail.single(), postUserDetail);

export default userRouter;