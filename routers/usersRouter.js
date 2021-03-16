import express from 'express';
import routes from '../routes';
import { editProfile, postDetail, userDetail } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.editProfile.single, editProfile);
userRouter.get(routes.userDetail.single(), userDetail);
userRouter.post(routes.userDetail.single(), postDetail);

export default userRouter;