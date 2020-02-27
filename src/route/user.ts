import router from 'koa-router';

const UserRouter = new router();

UserRouter.post('login');
UserRouter.post('register');
module.exports = UserRouter;
