import express from 'express';
import routes from '../routes';
import { editProfile, userDetail } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.editProfile.single, editProfile);
userRouter.get(routes.userDetail.single(), userDetail);

export default userRouter;