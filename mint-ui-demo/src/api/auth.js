/**
 * Created by shaoyongkai on 2017/8/28.
 */
const API_URL = '/api/auth';
export default {
  login(context, name, pwd) {
    return context.$http({
      url: API_URL + '/login',
      method: 'post',
      data: {
        name,
        pwd
      }
    });
  }
}
