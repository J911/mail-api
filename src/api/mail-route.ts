import RouterAbstract from '../router-abstract'
import {Requset, Response} from 'express'
import * as env from '../environment/environment-handler'
import mailService from '../service/mail-service'

class MailRoute extends RouterAbstract {
  
  private static instance = new MailRoute();
  
  constructor() {
    if (!!MailRoute.instance) return MailRoute.instance;
    super();
    this.setRoutes();
  }
  
  private setRoutes(): void {
    this.router.post('/send', this.sendMail);
  }

  private async sendMail(req: Requset, res: Response): Promise<void> {
    const to = req.body.to,
        subject = req.body.subject || '',
        text = req.body.text || '',
        user = req.body.user,
        pass = req.body.pass,
        service = req.body.service;

    if (!to || !user || !pass || !service) return res.sendStatus(400);

    const mailOption = {
        from : user,
        to : to,
        subject : subject,
        text : text
    };

    try {await mailService(service, user, pass).sendMail(mailOption) }
    catch (e) { return res.sendStatus(500) }

    return res.sendStatus(200);
  }
  
}

export default new MailRoute;