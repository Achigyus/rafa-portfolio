let cName = document.getElementById('client_name')
let cEmail = document.getElementById('client_email')
let cText = document.getElementById('client_text')
let contact_form = document.getElementById('contact_form')

async function sendTGMessage(text)
{   
    let token = 'fill_in_token'
    const url = `https://api.telegram.org/bot${token}/sendMessage` // The url to request

    const obj = {
        chat_id: 1301341495, // Telegram chat id
        text: text // The text to send
    };

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    });
}

async function sendEmail(text) {
    var data = {
        service_id: 'fill_in_service_id',
        template_id: 'fill_in_template_id',
        user_id: 'fill_in_user_id',
        template_params: {
            message: text
        }
    };

    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

const submitMessage = async (e) => {
    e.preventDefault()

    let nameValue = cName.value
    let emailValue = cEmail.value
    let cTextValue = cText.value

    let msgToSend = `Hey there, Dr Rafa tapfer.\n\nYou have received a new message from ${nameValue}.\nHere is the message:\n\n${cTextValue}\n\nYou can respond by sending a mail to ${nameValue} on ${emailValue}`
    sendTGMessage(msgToSend)
    sendEmail(msgToSend)
    alert(msgToSend)

    cName.value = ''
    cEmail.value = ''
    cText.value = ''
    
}

contact_form.addEventListener('submit', submitMessage)