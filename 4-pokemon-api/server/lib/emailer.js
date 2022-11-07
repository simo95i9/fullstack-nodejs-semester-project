import Nodemailer from "nodemailer"

const transporter = Nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'alexandro36@ethereal.email',
        pass: 'zmaxnzCc64v9Ku8FRQ'
    }
});

/***
 * @param message
 * @param callback
 * @returns {Promise<any>}
 */
export function send(message, callback) {
    return transporter.sendMail(message, callback)
}