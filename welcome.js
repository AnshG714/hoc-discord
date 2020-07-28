module.exports = (name, channelIDOBj) => {
  return `Welcome to HackOurCampus, ${name}! We're glad to have you here. Here's a quick overview of what is going on in this Discord server:\n
- ${channelIDOBj["general"]}: This is our central hub. We will be using this channel to make announcements and answer general questions about HackOurCampus and to socialize and form a 🔥 community!
    
- ${channelIDOBj["logistics"]}: Here, we will be coordinating submission dates/times, giving information about speakers/workshops, and answering any questions you might have about how this hackathon is structured! 🕑

- ${channelIDOBj["brainstorming"]}: In the coming weeks, we will coordinate virtual hangouts for all hackers so they can come together and think of dope ideas 💡

- ${channelIDOBj["workshops"]}: We will be periodically updating that channel whenever a workshop is about to start. You can also interact with our speakers for a short while after their workshop has ended 🤓

You can also expect more channels more tailored to your hackathon needs, such as channels with your mentor, and maybe even your hackathon group.
    
We are really excited to see what you build in this hackathon. Learn some stuff, help your peers, and have fun! 💯 
  `;
};
