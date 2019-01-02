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
        key = req.body.key;

    // @ts-ignore
    if (key !== env.app.key) return res.sendStatus(401);
    if (!to) return res.sendStatus(400);

    var mailOption = {
        // @ts-ignore
        from : env.app.gmail.id,
        to : to,
        subject : subject,
        text : text
    };

    try {await mailService.sendMail(mailOption) }
    catch { return res.sendStatus(500) }

    return res.sendStatus(200);
  }
  
}

export default new MailRoute;