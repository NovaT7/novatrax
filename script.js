const chatBody = document.getElementById('chatBody');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

function addMessage(text, isBot) {
  const message = document.createElement('div');
  message.className = 'message ' + (isBot ? 'bot-message' : 'user-message');
  message.textContent = text;
  chatBody.appendChild(message);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotResponse(msg) {
  const lower = msg.toLowerCase();
  
  // Greetings
  if (lower.match(/^(hi|hello|hey|greetings|sup|yo)/)) {
    return 'Hello! I\'m here to help you with anything about Anik\'s games and work. What would you like to know?';
  }
  
  // Download related
  if (lower.includes('download') || lower.includes('get game') || lower.includes('install')) {
    if (lower.includes('tiny trax')) {
      return 'You can download Tiny Trax 2D by visiting the home page and clicking the "Download Now" button in the games section. It\'s an APK file for Android devices!';
    }
    return 'Currently, Tiny Trax 2D is available for download on the home page. The Legend of Tenma is coming soon! Which game are you interested in?';
  }
  
  // Tiny Trax questions
  if (lower.includes('tiny trax') || lower.includes('tinytrax')) {
    if (lower.includes('what') || lower.includes('about')) {
      return 'Tiny Trax 2D is a fast-paced 2D platformer with parkour action and neon vibes. It features challenging levels, secret paths, and smooth gameplay. Version 1.0 is currently available as a demo build!';
    }
    if (lower.includes('play') || lower.includes('run')) {
      return 'Tiny Trax 2D is designed for Android devices. Download the APK from the home page, install it on your Android phone or tablet, and start playing!';
    }
    if (lower.includes('size') || lower.includes('mb') || lower.includes('storage')) {
      return 'The Tiny Trax 2D APK is optimized for mobile devices. Check the file size when downloading from the home page!';
    }
    return 'Tiny Trax 2D is Anik\'s fast-paced platformer game. You can download it from the home page. What else would you like to know about it?';
  }
  
  // The Legend of Tenma
  if (lower.includes('tenma') || lower.includes('legend')) {
    if (lower.includes('when') || lower.includes('release') || lower.includes('coming')) {
      return 'The Legend of Tenma is currently in development! It\'s an upcoming 2D adventure game with a Japanese theme. Stay tuned to this website for release updates!';
    }
    if (lower.includes('what') || lower.includes('about')) {
      return 'The Legend of Tenma is Anik\'s upcoming 2D adventure game inspired by Japanese aesthetics and ninja action games like Shadow Fight 2 and Ninja Arashi 2. It will feature puzzle elements and exciting gameplay!';
    }
    if (lower.includes('platform') || lower.includes('android') || lower.includes('pc')) {
      return 'Platform details for The Legend of Tenma will be announced closer to release. Follow Anik\'s updates for more information!';
    }
    return 'The Legend of Tenma is an epic 2D adventure game with Japanese theme currently in development. It\'s coming soon! Want to know more?';
  }
  
  // About Anik
  if (lower.includes('anik') || lower.includes('developer') || lower.includes('creator') || lower.includes('who made')) {
    if (lower.includes('age') || lower.includes('old')) {
      return 'Anik Paul is 20 years old and based in Assam, India. He\'s a self-taught indie game developer and graphic designer!';
    }
    if (lower.includes('experience') || lower.includes('how long')) {
      return 'Anik started graphic design and editing in 2021 and is now a fresh indie game developer. He\'s completely self-taught and passionate about creating games and graphics!';
    }
    if (lower.includes('skills') || lower.includes('tools') || lower.includes('software')) {
      return 'Anik uses Unity and Godot for game development, Photoshop and Illustrator for graphics, and codes in C, C++, Java, Python, HTML, CSS, and JavaScript. He also does 3D edits and video editing!';
    }
    return 'Anik Paul is a 20-year-old self-taught indie game developer and graphic designer from Assam, India. He creates games, edits graphics, and codes for fun! Check the About page for more details.';
  }
  
  // Contact information
  if (lower.includes('contact') || lower.includes('email') || lower.includes('reach') || lower.includes('message')) {
    return 'You can contact Anik through:\n📧 Email: paulanik055@gmail.com\n📍 Location: Assam, India\n\nOr visit the Contact page to send a message directly!';
  }
  
  // Games in general
  if (lower.includes('games') || lower.includes('what game')) {
    return 'Anik has created Tiny Trax 2D (available now) and is working on The Legend of Tenma (coming soon). He develops games using Unity and Godot engines!';
  }
  
  // Graphics/Editing
  if (lower.includes('graphic') || lower.includes('design') || lower.includes('edit') || lower.includes('gfx')) {
    if (lower.includes('see') || lower.includes('view') || lower.includes('show')) {
      return 'You can see Anik\'s graphics and edits in the "My Edits & Graphics" section on the home page. It features his GFX work, posters, and creative designs!';
    }
    return 'Anik has been doing graphic design and editing since 2021. He specializes in 2D/3D edits and video editing using Photoshop and Illustrator. Check out his work on the home page!';
  }
  
  // Technical questions
  if (lower.includes('unity') || lower.includes('godot')) {
    return 'Anik uses both Unity and Godot game engines to develop his games. These are powerful tools for creating 2D and 3D games!';
  }
  
  if (lower.includes('learn') || lower.includes('tutorial') || lower.includes('how to')) {
    return 'Anik is self-taught and learned everything through practice and experimentation! He believes in "learning by doing" and coding for fun. If you\'re interested in game dev or design, just start creating!';
  }
  
  // Social media
  if (lower.includes('social') || lower.includes('follow') || lower.includes('facebook') || lower.includes('instagram') || lower.includes('twitter') || lower.includes('youtube')) {
    return 'You can find Anik\'s social media links in the footer of any page. Connect with him on Facebook, Twitter, Instagram, or YouTube!';
  }
  
  // Help/Support
  if (lower.includes('help') || lower.includes('support') || lower.includes('problem') || lower.includes('issue')) {
    return 'I\'m here to help! You can ask me about:\n- Downloading games\n- Anik\'s work and projects\n- Contact information\n- Game development tools\n- Graphic design\n\nWhat would you like to know?';
  }
  
  // Inspiration
  if (lower.includes('inspire') || lower.includes('favorite') || lower.includes('influence')) {
    return 'Anik is inspired by games like Assassin\'s Creed Mirage, Shadow Fight 2, and Ninja Arashi 2. His favorites are Ninja Arashi 2 and AC Mirage! These games inspire him to create challenging and visually captivating experiences.';
  }
  
  // Future plans
  if (lower.includes('future') || lower.includes('plan') || lower.includes('next')) {
    return 'Anik is currently focused on completing The Legend of Tenma and continuing to create more games and graphics. He does this because he loves it! Stay tuned for more updates.';
  }
  
  // Thanks
  if (lower.includes('thank') || lower.includes('thanks')) {
    return 'You\'re welcome! Feel free to ask me anything else. 😊';
  }
  
  // Bye
  if (lower.match(/^(bye|goodbye|see you|cya)/)) {
    return 'Goodbye! Thanks for visiting Anik\'s Game Hub. Come back anytime! 👋';
  }
  
  // Default response
  return 'That\'s an interesting question! Here\'s what I can help you with:\n- Information about Tiny Trax 2D and The Legend of Tenma\n- Anik\'s background and skills\n- How to contact Anik\n- Game development and graphic design\n\nTry asking me something specific!';
}

function sendMessage() {
  const text = userInput.value.trim();
  if (text) {
    addMessage(text, false);
    userInput.value = '';
    
    setTimeout(() => {
      addMessage(getBotResponse(text), true);
    }, 500);
  }
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});