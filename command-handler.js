const welcome = require("./welcome");
const { addParticipantData, addEmail } = require("./db-functions");

const channelNames = ["general", "team-formation", "logistics", "workshops"];

const getChannelMapping = (ref) => {
  let channelIDMap = {};
  channelNames.forEach((name) => {
    const id = ref.guild.channels.cache
      .find((channel) => channel.name === name)
      .toString();
    channelIDMap[name] = id;
  });
  return channelIDMap;
};

const newMemberHandler = (member) => {
  let username = member.user.username;
  let channelIDMap = getChannelMapping(member);
  const message = welcome(username, channelIDMap);
  member.send(message);
};

const newMemberHandlerDebugging = (message) => {
  let channelIDMap = getChannelMapping(message);
  message.reply(welcome(message.author.username, channelIDMap));
};

// TODO: refactor next 2 functions, lots of code duplication here.
const githubUsernameHandler = async (message) => {
  const userId = message.author.id;
  const username = message.author.username;
  const githubName = message.content.split(" ")[1];
  message.reply("Please wait...");
  try {
    await addParticipantData(userId, username, githubName);
  } catch (err) {
    return message.reply(err.message);
  }
  message.reply("We've successfully registered your GitHub account!");
};

const emailHandler = async (message) => {
  const userId = message.author.id;
  const username = message.author.username;
  const email = message.content.split(" ")[1];
  message.reply("Please wait, adding your email...");
  try {
    await addEmail(userId, username, email);
  } catch (err) {
    if (err.message === "IE") {
      return message.reply(
        "It seems like you've entered an invalid email. Please enter the command like this: `!addemail foo@bar.com`"
      );
    }
    return message.reply(
      "Oops, something went wrong. Please contact one of the organizers"
    );
  }
  message.reply("We've successfully registered your email account!");
};

module.exports = {
  newMemberHandler,
  newMemberHandlerDebugging,
  githubUsernameHandler,
  emailHandler,
};
