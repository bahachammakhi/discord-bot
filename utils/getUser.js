exports.getUserFromMention = (mention, client) => {
  if (!mention) return;

  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);
    if (mention.startsWith("!")) {
      mention = mention.slice(1);
    }
    console.log("mention", mention);
    return client.users.cache.get("id", mention);
    // return client.fetchUser(mention);
  }
};
