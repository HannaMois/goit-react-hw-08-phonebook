export const selectUserName = state => state.auth.user?.name;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectRefreshed = state => state.auth.isRefreshing;
export const getToken = state => state.auth.token;
export const selectIsLoading = state => state.auth.isLoading;
export const selectUserData = state => state.auth.user;
export const selectError = state => state.auth.error;
