import axios from 'axios'

// /**
//  * @param {('error'|'success')} AlertType
//  */
export async function sendMail({ from, name, message }) {
  const responseSender = await axios({
    method: 'post',
    timeout: 120000,
    url: 'https://sender.s256.ru/api/v1/send/message',
    data: {
      to: ['dmitrywork256@gmail.com'],
      // from: 'Команда Med.studio <info@med.studio>',
      from: 'info@email.s256.ru',
      subject: 'wefwef',
      sender: 'info@email.s256.ru',
      html_body: `<p>Имя ${name}</p><p>Контакт: ${from}</p><p>Сообщение: ${message}</p>`,
      tag: 'tag-mail',
      headers: {
        Precedence: 'bulk',
      },
    },
    headers: {
      'X-Server-API-Key': 'token',
      'Content-Type': 'application/json',
    },
  })

  return responseSender
}
