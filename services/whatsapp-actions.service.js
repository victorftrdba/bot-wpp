class WhatsAppActionsService {
    client;
    groupId = "120363197733854256@g.us";
    isShowGroups = false;

    constructor(client) {
        this.client = client
    }

    listGroups() {
        if (this.isShowGroups === false) return console.log('isShowGroups is false')

        return this.client.getAllChatsGroups().then(chats => console.log(chats.map(chat => ({
            name: chat.name,
            id: chat.id._serialized
        }))))
    }

    sendMessageToGroup(message) {
        this.client.sendText(
            this.groupId,
            message
        )

        setInterval(() => this.client.sendText(
            this.groupId,
            message
        ), 60000)
    }
}

module.exports = WhatsAppActionsService