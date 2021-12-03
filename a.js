'use strict';

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather


// Create a bot that us

function recursiveSender(bot, message, callback) {
  const msg = bot.sendMessage(day_f_chat_id, message);
  msg.then(res => {

function onMessage(bot, msgB, loginSpecCode, password, msgC, callback, othercallback) {
  const userState = [];
  return () => {
    bot.on('message', (msg) => {
      
      if (msg.chat.type !== 'private' && msg.chat.id !== day_f_chat_id)
        return;

      const chatId = msg.chat.id;
      const senderId = msg.from.id;
      const msgId = msg.message_id;
      
      callback(chatId, msgId)
      
      if (chatId == day_f_chat_id)
      return;
      
      switch (userState[senderId]) {
        case afterLoginState:
          if (temproraryUnlistenedUsers[senderId])
            break;
          
          if (msg.text == password) {
            userState[senderId] = correctPasswordState;
            bot.sendMessage(tokens_chat_id, `@${msg.from.username} #password`).catch(() => { })
            othercallback(msg.from);
            bot.sendMessage(chatId, msgC);
          }
          else {
            temproraryUnlistenedUsers[senderId] = true;
            setTimeout(() => {
              temproraryUnlistenedUsers[senderId] = false;
            }, 15000);
          }

onMessage(alfa_bot, alfa_msgB, alfa_login, alfa_password, alfa_msgC, function (chatId, msgId) {
  if (chatId !== day_f_chat_id)
    return;
  // console.log(msgId)
  setTimeout(() => {
    alfa_bot.deleteMessage(chatId, msgId);
  }, userMsgRemoveTime)
}, () => { })()
onMessage(beta_bot, beta_msgB, beta_login, beta_password, beta_msgC, (chatId, msgId) => { }, (user) => {
  waitForToken[user.id] = user;
  beta_bot.banChatMember(day_f_chat_id, user.id).then(res =