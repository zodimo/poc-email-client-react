const messages = {
    inbox: [
        {
            id: "1",
            from: "from@email.com",
            to: "me@domain.com",
            subject: "Test the email stuff",
            body: "<p>the full body</p>",
            datetime: "2021-09-13 12:20"
        },
        {
            id: "2",
            from: "from2@email.com",
            to: "me@domain.com",
            subject: "Test the email stuff 2",
            body: "<p>the full body 2</p>",
            datetime: "2021-09-13 12:23"
        }
    ],
    sent: [
        {
            id: "3",
            from: "testing@email.com",
            to: "me@domain.com",
            subject: "testing the 'sent' list",
            body: "<p>the full <strong>body</strong> 3</p>",
            datetime: "2021-09-13 12:33"
        }
    ],
    deleted: []
};
export default messages;