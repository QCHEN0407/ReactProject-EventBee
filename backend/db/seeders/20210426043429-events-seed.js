'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        id:1,
        title: 'Poetry & the Creative Mind — Virtual Gala Supporting National Poetry Month',
        description: 'Poetry & the Creative Mind is presented by the Academy of American Poets, the nation\'s leading organization championing poets and poetry. This special event celebrates poetry\'s important place in our culture and its impact on the lives of readers, and National Poetry Month.\n'+
        '\n'+
        'For the first time, in 2021, Poetry & the Creative Mind will be presented free and virtually as an exclusive broadcast for one night only.\n'+
        '\n'+
        'The gala reading will feature performances of favorite poems by distinguished guests, including:\n'+
        '\n'+
        'Meryl Streep, Event Chair\n'+
        '\n'+
        'with\n'+
        '\n'+
        'Elizabeth Alexander, Master of Ceremonies\n'+
        '\n'+
        'Lauren Ambrose\n'+
        '\n'+
        'John Darnielle\n'+
        '\n'+
        'Terrance Hayes\n'+
        '\n'+
        'Regina King\n'+
        '\n'+
        'Delroy Lindo\n'+
        '\n'+
        'Samin Nosrat\n'+
        '\n'+
        'Sandra Oh\n'+
        '\n'+
        'Jason Reynolds\n'+
        '\n'+
        'Sarah Sze\n'+
        '\n'+
        'with special appearances by U.S. Poet Laureate Joy Harjo and the Academy of American Poets Education Ambassador Richard Blanco.\n'+
        '\n'+
        'Jonathan Galassi, President of Farrar, Straus & Giroux, will be presented with the 2021 Leadership Award in recognition of his important role in launching National Poetry Month and as a champion of poetry in the field of publishing.\n'+
        '\n'+
        'Closed captioning will be available.\n'+
        '\n'+
        'Free to attend, Poetry & the Creative Mind is a gala fundraiser to support the Academy of American Poets Education Program and materials for teachers. Please consider making a contribution during registration, if you\'re able, or at poets.org.\n'+
        '\n'+
        'Don\'t miss the live broadcast!',
        event_img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F132979895%2F149205410631%2F1%2Foriginal.20210421-221013?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C22%2C1920%2C960&s=5b59dc08506eda12cf7582ab51d8af96',
        event_date: new Date(),
        location: 'Online Event',
        creater_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        title: 'An evening with Hilary Mantel',
        description: 'These three novels, including Wolf Hall and Bring Up The Bodies, chronicle a time in which Henry VIII’s appetite for marriage plunged England into religious turmoil, and create a fascinating portrait of the mercurial Cromwell. The Mirror and the Light concludes Mantel’s story of Cromwell’s rise to power as the volatile king’s right-hand man, and his inevitable fall from grace.\n'+
        '\n'+
        'This epic tale of power, faith and Englishness, earned a huge and devoted readership, two Booker prizes and adaptations for stage and TV. As The Mirror and The Light is released in paperback, one of our greatest living writers will join Alex Clark to reflect on this remarkable literary project.\n'+
        '\n'+
        'Running time: 75 minutes\n'+
        '\n'+
        'If you live in the UK, you can purchase a ticket with a paperback copy of The Mirror and the Light at checkout for the special combined price of £14 including postage and packing (RRP £9.99).*\n'+
        '\n'+
        'This event will be hosted on a third-party live streaming platform BlueJeans, please refer to their privacy policy before purchasing a ticket to the event. After registering, please refer to your confirmation email for access to the event.\n'+
        '\n'+
        'If you require closed captions to be available on this event please notify us on your booking form when making your purchase.\n'+
        '\n'+
        '*Books will be dispatched on 29 April 2021. However, please note that in the current circumstances, some books may be delayed. If we experience any delay in getting your copy to you, we will contact you by email to let you know.\n'+
        '\n'+
        'This event is being streamed globally.\n'+
        '\n'+
        '7pm BST | 8pm CEST | 11am PDT | 2pm EDT\n'+
        '\n'+
        'Or see this time zone converter to check your local live streaming time.\n'+
        '\n'+
        'If you are unable to join at the time of streaming, this event will be available to watch on demand in the days following. A link to the recording will be sent to all ticket holders by email.\n'+
        '\n'+
        '',
        event_img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F128347801%2F354665342601%2F1%2Foriginal.20210308-151231?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C41%2C1280%2C640&s=6bcaa86d1ce6fd14c871bb47f306abb2',
        event_date: new Date(),
        location: 'New York',
        creater_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:3,
        title: 'Vegan For Beginners',
        description: 'Sumptuous Vegan\n'+
        'Vegan For Beginners Online Workshop & Live Cooking (2 separate events on 2 separate dates) - I recommend doing both! First you learn the basics, then you watch it in action.\n'+
        'More and more people are interested in vegan/plant-based eating. Some are just curious, some want to get their feet wet, and some are ready to come to the V-side! LOL\n'+
        'I am here for you all! I offer information to introduce you to what eating vegan is like.\n'+
        'EVENT 1: ATTEND THE WORKSHOP - LEARN THE BASICS\n'+
        'EVENT 2: WATCH A LIVE COOKING DEMO - SEPARATE DATE\n'+
        'This workshop occurs on Zoom and it would be awesome if you turned your camera on! That part isn\'t necessary, so no worries if you\'re not able to.\n'+
        '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n'+
        'What you and I will do together during the workshop:\n'+
        'Intro/Mixer\n'+
        'Vegan/Plant-based presentation (Does not involve cooking)\n'+
        'Q & A session\n'+
        'What you and I will do together during the cooking demo:\n'+
        'I will prepare a delicious dish from somwhere in the world\n'+
        'You will relax, observe, and ask me questions at the end\n'+
        'All recipes will be sent out in the Sumptuous Vegan newsletter\n'+
        '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n'+
        'I am super excited to share my experiences and knowledge with you!\n'+
        'STEPS TO JOIN WORKSHOP & LIVE COOKING\n'+
        'Grab tickets today (there are 2 separate tickets for each event on separate dates)\n'+
        'Mark your calendar right away\n'+
        'Invite a friend or 2\n'+
        'Download the ZOOM app to your cell phone, tablet, desktop, or laptop\n'+
        'Show up on to workshop or cooking demo with a beverage, a pen, and a pad.\n'+
        'RELAX, CHAT, ASK QUESTIONS, & ENJOY!\n'+
        'Don\'t hesitate to contact me with any questions you have!\n'+
        'Thank you in advance for joining me.. Be safe, be healthy, and stay blessed!\n'+
        'Disclaimer: By registering for this event, you consent to audio recording, video recording and its/their release, publication, exhibition, or reproduction to be used for promotional purposes, advertising, inclusion on websites, social media, or any other purpose by Sumptuous Vegan and it\'s sponsors and partners',
        event_img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F128272541%2F208521885653%2F1%2Foriginal.20210307-192437?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C399%2C1080%2C540&s=a6433abd4c41fc11984e2fb8fb53e362',
        event_date: new Date(),
        location: 'Washington D.C.',
        creater_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:4,
        title: 'RECONVENE 2021: The Event for Event Creators',
        description: 'THE EVENT FOR EVENT CREATORS\n'+
        'Let’s get together to discuss the future of getting together. Introducing RECONVENE, a two-day virtual summit made by and for independent event makers and doers (we call them “creators”), featuring some of the most forward-thinking entrepreneurs, artists, producers, and promoters in the event world. You’ll also hear from some of the biggest stars in health, equity, and wellness. On Day One, you’ll get access to the latest guidelines for re-opening. On Day Two, you’ll get your hands dirty at workshops with some of your industry heroes and peers. We hope you’ll join us to explore where the event world is heading — or better yet, where you’d like to take it.\n'+
        '\n'+
        'REOPEN. REBUILD. RETHINK. RECONVENE.\n'+
        'Learn how to reopen your events, safely\n'+
        '\n'+
        'You’ll get access to the latest insights and guidelines for reopening from top public health experts, leaving you informed, safe, and confident about COVID-era best practices.\n'+
        'Get dirty with hands-on workshops\n'+
        '\n'+
        'Roll up your sleeves for some exclusive hands-on workshops to help you create better events, build your community, and grow your business.\n'+
        '(Net)work the virtual room\n'+
        '\n'+
        'Interact, network, and skillshare with event creators from one of the largest and most diverse event communities in the world.\n'+
        'Help shape the future of events\n'+
        '\n'+
        'We want this gathering of gatherers to reflect the excitement and hope we have for the future of all events. Now it’s your time to help shape it.\n'+
        '',
        event_img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F132096765%2F272601395150%2F1%2Foriginal.20210413-182406?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C3000%2C1500&s=793c28dc521665c4f74ba8f7467afc90',
        event_date: new Date(),
        location: 'Seattle',
        creater_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:5,
        title: 'A FEMINISTS GUIDE TO BOTANY PART 3: HILMA AF KLINT & ABSTRACTION',
        description: 'Join London Drawing Group as we step inside the magical world of BOTANY for our newest class dedicated to the intersection between FEMINISM, BOTANY, and this time... SPIRITUALITY AND ABSTRACTION!\n'+
        '\n'+
        'This class is dedicated to the life and work of one of the most visionary female artists you\'ve never heard of - Hilma Af Klint was a swedish victorian woman, who, obsessed with the natural world around her, envisioned a kind of art no one had ever dreamed of before.\n'+
        '\n'+
        'Now lauded with \'inventing\' abstraction at least five years before Kandinsky (the man previously accredited with this concept), Hilma AF Klint is FINALLY starting to be recognised for the unique and incredible talent she was, over 70 years after her death.\n'+
        '\n'+
        'As well as being a visionary artist, she was also a unique character in terms of her beliefs, inspired by Theosophy and cutting edge scientific discoveries of the time, Her paintings became a unique visual representation of her complex spiritual ideas.\n'+
        '\n'+
        'This class will explore Hilma\'s Life, Works AND her links to Spirituality in a 30 minute lecture before the practical element of the class kicks off.\n'+
        '\n'+
        'Students will then be guided through the creation of their own abstract works in the manner of Hilma\'s beautiful paintings. We will work from both imagery on the screen, but also from your own houseplants, inviting you to consider the beauty and interconnectedness of life as she saw it, creating our own works in watercolour or gouache in a state of mindful creativity.\n'+
        '\n'+
        'This will truly be a totally unique class and we are very excited to get drawing with you all!\n'+
        '\n'+
        '--------------------------------\n'+
        '\n'+
        'Please read the following FAQ\'s as you may find the answer you are looking for already listed below. If these do not answer your question, then please email us with the subject heading "UNRESOLVED ENQUIRY" and we will be in touch as soon as possible.\n'+
        '\n'+
        'Thank you for your patience!\n'+
        '\n'+
        'Love, LDG',
        event_img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F127431543%2F185750211993%2F1%2Foriginal.20210227-183540?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1920%2C960&s=288db07ee1cd82362653a77136e4c9e9',
        event_date: new Date(),
        location: 'San Francisco',
        creater_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:6,
        title: '48 hours of Bite Sized Mindfulness',
        description: 'This course is a short-term commitment each day and can be slotted around your existing work and home commitments.\n'+
        '\n'+
        'PLEASE IGNORE THE TIME ON THE TICKET IT IS SELF PACED/PRE RECORDED AND SENT TO YOUR EMAILS OVER 2 DAYS TO WATCH IN YOUR OWN TIME. Starting April 3rd\n'+
        '\n'+
        'Designed to demonstrate how effective the practice of Mindfulness can be when applied to work and home situations, Sabina will show you what Mindfulness is and how it works.\n'+
        '\n'+
        'Mindfulness simply means to live in the ‘present’ in your thoughts, actions and behaviours and scientific research shows it’s hugely effective to boost focus, productivity and connection whilst reducing stress and overwhelm.\n'+
        '\n'+
        'The best part is that it can all be achieved with bite sized actions. You can complete this short program with just 15 minutes a day.\n'+
        '\n'+
        'If you’re someone:\n'+
        '\n'+
        '- Feeling the strain of isolation or working from home\n'+
        '\n'+
        '- Finding it challenging to remain focused or productive at work\n'+
        '\n'+
        '- Feeling overwhelmed by our current environment\n'+
        '\n'+
        '- Wanting to learn how to better communicate and connect to your team or colleagues\n'+
        '\n'+
        '- Who’d love to learn the secrets of ‘switching off’ at night and being able to relax, even during busy times\n'+
        '\n'+
        'Then this short course is for you!\n'+
        '\n'+
        'This 48-hour bite-sized Mindfulness course can be completed at your own leisure and if you love it, there are more programs for you to enjoy. Tap into pre-recorded videos sharing Sabina’s Mindfulness expertise, all for FREE! You’ll be sent the bite sized materials to your inbox.\n'+
        '\n'+
        'We look forward to sharing Mindfulness with you virtually.',
        event_img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F116837057%2F321310090885%2F1%2Foriginal.20201105-075340?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=2bfd614ae913d4186ea38bf126ab3be4',
        event_date: new Date(),
        location: 'Boston',
        creater_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // {
      //   id:7,
      //   title:'',
      //   description:'',
      //   event_img: '',
      //   event_date: new Date(),
      //   location: '',
      //   creater_id: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }
      {
        id:7,
        title:'Crosscut Festival',
        description:'Journalists, politicians, authors, and newsmakers from our community and across the nation come together to take a hard look at the people, policy and events that shape our lives.\n'+
        '\n'+
        'This year\'s speakers include Jane Goodall, Ibram X. Kendi, Nancy Pelosi, Judy Woodruff, Rick Steves, Bill Nye, Pramila Jayapal, Robert Reich and many more. View the full schedule here!\n'+
        '\n'+
        'A virtual Headliners Night will kick-off the festival on May 3rd to celebrate and support great public media and journalism in the Pacific Northwest. A fundraiser for KCTS 9 and Crosscut, this event honors newsmakers who take us beyond the headlines and celebrates the creativity of our community. The evening will include special guest appearances by Judy Woodruff, Rick Steves and Seattle band Ladies. Please note that VIP options for the festival and Headliners Night are sold out.\n'+
        '\n'+
        'Watch virtual sessions live or on-demand throughout the week, with select sessions on KCTS 9 the following week.',
        event_img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F120724877%2F53994006732%2F1%2Foriginal.20201211-222441?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=d66e6e50b8067ab2353799f650a33827',
        event_date: new Date(),
        location: 'Online Event',
        creater_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
          id:8,
          title:'MARCELA & CARINA SHOW MOTHER\'S DAY MARIACHI EVENT!',
          description:'Familia! Get ready to celebrate all the beautiful mother\'s on this planet alongside an amazing menu of exquisite mexican recipes and the magical sounds of the great Mariachi Estrella!\n'+
          '\n'+
          'TACOS GOBERNADOR: A childhood favorite for Marcela & Carina! Slightly fried quesadilla filled with garlicky poblano and shrimp filling!\n'+
          '\n'+
          'BIRRIA QUESATACOS: All over the interwebs! This slow-braised Chile drenched shredded beef is broken down and simplified so you can reproduce one of Mexico\'s most iconic dishes at home. No need to build an outdoor pit!\n'+
          '\n'+
          '',
          event_img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F132353945%2F496610908579%2F1%2Foriginal.20210415-185246?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C11%2C1280%2C640&s=ebb9e4a24afc8c0111919574e46e6ad1',
          event_date: new Date(),
          location: 'Online Event',
          creater_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id:9,
          title:'Comedy Crossing: The Animal Crossing Standup Comedy Show',
          description:'It\'s the world\'s first-ever Animal Crossing standup comedy show.\n'+
          '\n'+
          'And yes, ANYONE can watch this show online (in the world\'s CUTEST ZOOM MEETING) even if you do NOT play Animal Crossing. (I mean...anyone means anyone over 18 years old. This is STILL a grownup\'s comedy show)\n'+
          '\n'+
          '#ComedyCrossing is a free online standup comedy show held inside Animal Crossing, the world\'s cutest and most gentle video game. #TomNookIsOverParty #TomNookIsACrook\n'+
          '\n'+
          'As featured in The New York Times, New York Magazine\'s Vulture, Harper\'s Bazaar Magazine, Now This News, and Vulture\'s Good One podcast with Jesse Fox.',
          event_img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F102937900%2F34743739568%2F1%2Foriginal.20200608-063252?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C91%2C400%2C200&s=547fad629624025e15ca0b9c18762f57',
          event_date: new Date(),
          location: 'Online Event',
          creater_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        id:10,
        title:'B&N Virtually Presents: Victoria Aveyard celebrates REALM BREAKER!',
        description:'Barnes & Noble welcomes bestselling author, Victoria Aveyard, for a live virtual event to discuss REALM BREAKER, the stunning new fantasy series from the #1 New York Times bestselling author of the Red Queen series. Irresistibly action-packed and full of lethal surprises, this novel begins where hope is lost and asks: When the heroes have fallen, who will take up the sword?\n'+
        '\n'+
        'She will be in-conversation with special guest, Sabaa Tahir!\n'+
        '\n'+
        '',
        event_img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F128401545%2F57848390869%2F1%2Foriginal.20210303-164720?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=95a69584899a027639dcc071a7ae0a5c',
        event_date: new Date(),
        location: 'Paris, France',
        creater_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:11,
        title:'Career Day',
        description:'The Studio at TFD presents: Career Day At TFD, a digital summit to help you gain the confidence and skills to grow in your career!',
        event_img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124249165%2F223901959787%2F1%2Foriginal.20210126-195823?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=447e6f14b3e3fccc6adae51a878cc9ed',
        event_date: new Date(),
        location: 'New York',
        creater_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:12,
        title:'The Beginner\'s Guide To Investing',
        description:'BACK BY POPULAR DEMAND!\n'+
        'One of our most popular and highly requested workshops is back! If you either missed the first \'The Beginner\'s Guide To Investing,\' or just need a refresher, this workshop is for you!\n'+
        '\n'+
        'For anyone who has been wanting to learn how to invest but hesitating to dive in, this is the interactive workshop for you.\n'+
        '\n'+
        'Join investing expert Amanda Holden as she breaks down everything you need to understand about the market, various types of investments, and how to get started on a solid plan (at any income level). As the market continues to evolve,\'s helpful to think long-term about your money, and this workshop will teach you how to do just that.',
        event_img: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F128049763%2F223901959787%2F1%2Foriginal.20210304-235713?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=cf58cd472769a301afb00f9568d1f103',
        event_date: new Date(),
        location: 'New York',
        creater_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Events', null, {});

  }
};
