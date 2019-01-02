import * as nodemailer from 'nodemailer'
import * as env from '../environment/environment-handler'

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        // @ts-ignore
        user : env.app.gmail.id,
        // @ts-ignore
        pass : env.app.gmail.pw
    }
});


export default transporter;