const Discord = require('discord.js')


exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('**Você não tem permissão para usar esse comando!**')
        message.channel.overwritePermissions([{ 

            id: message.guild.id, 
            
            deny: ['SEND_MESSAGES'], 
            
            }]); 
            
            let embed = new Discord.MessageEmbed()
               .setColor('#ff0000')
               .setTitle('🔒 | Chat trancado, utilize wg!unlock para destrancar.')
               .setImage('')
               .setFooter(`Comando solicitado por: ${message.author.username}`)


            return message.reply(embed)
    }
