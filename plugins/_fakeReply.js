import 'node-fetch';

export async function before(m, { conn }) {
  let profilePicUrl = await this.profilePictureUrl(m.sender, 'image').catch(() => 'https://ibb.co/7xLTpy5Z.png');

  global.princech = 'https://whatsapp.com/channel/0029VaieFO2HFxOtUtwLvQ0b';
  global.id_canal = '120363312991035785@newsletter';

  const newsletterInfo = {
    newsletterJid: global.id_canal,
    serverMessageId: 100,
    newsletterName: "Follow KASHMIRI♥️"
  };

  const adReply = (description, title, body) => ({
    mediaUrl: global.princech,
    mediaType: 'VIDEO',
    description,
    title,
    body,
    thumbnailUrl: profilePicUrl,
    sourceUrl: global.princech
  });

  const contextWithAd = (desc, title, body) => ({
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: newsletterInfo,
      externalAdReply: adReply(desc, title, body)
    }
  });

  const contextOnly = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: newsletterInfo
    }
  };

  global.rpl = contextWithAd('support group', packname, 'Support Group');
  global.rcanal = contextWithAd('prince channel', packname, 'KASHMIRI channel');
  global.fwc = contextOnly;
  global.rpyp = contextWithAd('Donate', 'PayPal', 'Help keep the bot active');
  global.rpig = contextWithAd('Follow me on Instagram', 'Instagram', 'Follow me on Instagram');

  global.rpyt = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: newsletterInfo,
      externalAdReply: {
        showAdAttribution: true,
        mediaUrl: global.princech,
        mediaType: 'VIDEO',
        description: "Subscribe: " + global.princech,
        title: "KASHMIRI YouTube",
        body: "Learn how to create your own bots",
        thumbnailUrl: profilePicUrl,
        sourceUrl: global.princech
      }
    }
  };

  global.business = await conn.getBusinessProfile(conn.user.jid);
}