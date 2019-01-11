import * as nodemailer from 'nodemailer'
import * as env from '../environment/environment-handler'


const transporter = (service: string, user: string, pass: string) => nodemailer.createTransport({
    service, auth: { user, pass}
});


export default transporter;