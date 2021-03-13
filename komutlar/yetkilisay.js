const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
let yetkili = message.guild.roles.cache.get("ENALT YETKİLİ ROL İD")
let x = message.guild.members.cache.filter(s => !s.user.bot && !s.voice.channel && s.roles.highest.position >= yetkili.position && s.presence.status !== "offline").array()

message.channel.send(`
Aktifsiniz olup seste olmayan yetkililer;
${x}`)

};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yetkilises"],
  permLvl: 0,
}

  exports.help = {
  name: 'yetkilises'
}
