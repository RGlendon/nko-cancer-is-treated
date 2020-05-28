export default ({ store }) => {
  store.app.router.beforeEach((to, from, next) => {
    store.commit('mobile-menu/closeMobileMenu');
    next();
  });
};
