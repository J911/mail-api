import RouterAbstract from '../router-abstract'
import MailRoute from './mail-route'

class Api extends RouterAbstract {
  
  private static instance = new Api();
  
  constructor() {
    if (!!Api.instance) return Api.instance;
    super();
    this.setRoutes();
  }
  
  private setRoutes(): void {
    this.router.use('/mail', MailRoute.route);
  }
  
}

export default new Api;