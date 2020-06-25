//https://scontent.ftun4-1.fna.fbcdn.net/v/t1.15752-9/p1080x2048/91753282_1604357046394680_7475611284172439552_n.png?_nc_cat=104&_nc_sid=b96e70&_nc_oc=AQkuboRmUMsx7HZX1PTMKT_L0H40evEtweA7dVAYZmrkHYO483dFQnuAuqGmFUkTWok&_nc_ht=scontent.ftun4-1.fna&oh=c7f4697d31a1e65f1b2bcaa46d457116&oe=5EDBF415
const { MessageAttachment } = require("discord.js");
module.exports = {
  name: "logo",
  description: "Display maseer logo !",
  execute(message) {
    const attachment = new MessageAttachment(
      "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.15752-9/p1080x2048/91753282_1604357046394680_7475611284172439552_n.png?_nc_cat=104&_nc_sid=b96e70&_nc_oc=AQkuboRmUMsx7HZX1PTMKT_L0H40evEtweA7dVAYZmrkHYO483dFQnuAuqGmFUkTWok&_nc_ht=scontent.ftun4-1.fna&oh=c7f4697d31a1e65f1b2bcaa46d457116&oe=5EDBF415"
    );
    message.channel.send(attachment);
  },
};
