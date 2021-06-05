const Discord = require('discord.js')
const config = require ("../../config.json");
const color = config.color
exports.run = async (bot, message, args, arg_txt, chat) => {
  
  let member = message.mentions.members.first();
  var user = message.mentions.users.first()
    
        if(message.member.permissions.has('BAN_MEMBERS')) { 
        if(!message.guild.member(bot.user).permissions.has("BAN_MEMBERS")) return message.channel.send("**<a:Erroua:618121595352907834> ⇾ Não tenho permissão para banir**");
        if(!args[0]) return  message.channel.send('**<a:Erroua:618121595352907834> ⇾ Mencione o id do usuário!**');
        if(args[0].length < 16) return message.channel.send('** Este ID não é o id de um usuário!**');
        message.guild.fetchBans().then(bans => { 
            var Found = bans.find(m => m.user.id === args[0]);
            console.log(bans)
            if(!Found) return message.channel.send(`**<a:Erroua:618121595352907834> ⇾ Eu não encontrei <@${args[0]}> na ban list**`);
          
            message.guild.members.unban(args[0]);
          
          let staff = new Discord.MessageEmbed()
              .setColor(` ${color}`)
              .setTitle("✅ » Unban")
              .setDescription("Membro desbanido » <@"+args[0]+"> /nDesbanido por » <@"+message.author.id+">")
              .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({Size: 32}))
              .setTimestamp()
              .setFooter("ID do usuário » "+args[0])  
    message.channel.send("O Usuário <@"+args[0]+"> foi desbanido!")
 
          })   
        } else {
          return message.channel.send("**Você não tem permissão para banir**");
        }
} 
exports.help = {
  name: 'unban',
  aliases: ['desbanir']
}
