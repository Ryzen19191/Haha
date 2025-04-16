function handler(m) {
  const ownerContacts = global.owner.map(([number, name]) => [
    number,
    name || 'Unknown',
    number,
    "kashmirix3@gmail.com",
    "https://github.com/KASHMIRICRASHER/KASHMIRI-MD",
    "💫OWNER NUMBER"
  ]);

  console.log("Sending Contacts:", ownerContacts);
  this.sendContact(m.chat, ownerContacts, m);
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator'];

export default handler;