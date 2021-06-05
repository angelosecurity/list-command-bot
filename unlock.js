const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Você não tem permissão para usar esse comando!')
        message.channel.overwritePermissions([{ 

            id: message.guild.id, 
            
            accept: ['SEND_MESSAGES'], 
            
            }]); 
            
            let embed = new Discord.MessageEmbed()
               .setColor('#ff0000')
               .setTitle('🔓 | Chat destrancado, utilize wg!lock para trancar.')
               .setImage('')
               .setFooter(`Comando solicitado por: ${message.author.username}`)


            return message.reply(embed)
    }
