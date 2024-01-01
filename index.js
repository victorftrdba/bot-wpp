const venom = require('venom-bot');
const WhatsAppActionsService = require('./services/whatsapp-actions.service');

const isShowGroups = false

venom
    .create({
        session: 'bot-wpp'
    })
    .then((client) => {
        const whatsappActionsService = new WhatsAppActionsService(client)

        if (isShowGroups === true) {
            whatsappActionsService.listGroups()
        }

        whatsappActionsService.sendMessageToGroup(
            "\n🚀 *LANÇAMENTO DE PLATAFORMA NOVA* 🚀\n\n🌍 *LINK PARA CADASTRO* 🌍\nhttps://www.google.com.br/\n\n⚠️ *ATENÇÃO* ⚠️\n✅ SAQUE E DEPÓSITO MIN: R$ 50,00\n✅ SEM TAXA DE SAQUE\n"
        )
    })
    .catch((error) => {
        console.log(error);
    });