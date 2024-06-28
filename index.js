const sendEmail = () => {
    const url = 'https://api.sendgrid.com/v3/mail/send';
    const apiKey = process.env.SENDGRID_API_KEY;

    const payload = {
        "personalizations": [
            {
                "to": [
                    {
                        "email": "alexmayolc@gmail.com"
                    }
                ]
            }
        ],
        "from": {
            "email": "alexmayol@hotmail.com"
        },
        "subject": "Entradas de Pantomina Full",
        "content": [
            {
                "type": "text/plain",
                "value": "Puede que las entradas ya estén disponibles"
            }
        ]
    };


    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)

    })
}

sendEmail()
