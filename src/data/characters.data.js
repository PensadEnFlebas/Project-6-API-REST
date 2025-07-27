const characters = [
  {
    name: 'Death',
    mainSaga: 'Death',
    books: [
      '687ffa50a7edcc6113eeb21c',
      '687ffa50a7edcc6113eeb21d',
      '687ffa50a7edcc6113eeb223',
      '687ffa50a7edcc6113eeb228',
      '687ffa50a7edcc6113eeb22c',
      '687ffa50a7edcc6113eeb232'
    ],
    race: 'supernatural entity',
    job: 'harvester of souls',
    picture: '/assets/characters/death.jpg',
    description:
      'The anthropomorphic personification of death on the Discworld. He appears as the traditional Grim Reaper, with a skeletal body, a black robe and a scythe (or sometimes a sword for royalty) and TALKS IN UNQUOTED SMALL CAPS'
  },
  {
    name: 'Rincewind',
    mainSaga: 'Unseen University',
    books: [
      '687ffa50a7edcc6113eeb219',
      '687ffa50a7edcc6113eeb21a',
      '687ffa50a7edcc6113eeb21d',
      '687ffa50a7edcc6113eeb221',
      '687ffa50a7edcc6113eeb229',
      '687ffa50a7edcc6113eeb22e',
      '687ffa50a7edcc6113eeb233'
    ],
    race: 'human',
    job: 'wizard',
    picture: '/assets/characters/rincewind.jpg',
    description:
      'A polite yet cowardly wizard with (almost) no magical ability and whose ambition in life is simply to continue having a life. He is however gifted with languages'
  },
  {
    name: "Samuel 'Sam' Vimes",
    mainSaga: 'City Watch',
    books: [
      '687ffa50a7edcc6113eeb220',
      '687ffa50a7edcc6113eeb227',
      '687ffa50a7edcc6113eeb22b',
      '687ffa50a7edcc6113eeb22d',
      '687ffa50a7edcc6113eeb230',
      '687ffa50a7edcc6113eeb235',
      '687ffa50a7edcc6113eeb237',
      '687ffa50a7edcc6113eeb23a',
      '687ffa50a7edcc6113eeb23f',
      '687ffa50a7edcc6113eeb240'
    ],
    race: 'human',
    job: 'Commander of the City Watch',
    picture: '/assets/characters/commander_vimes.jpg',
    description:
      "The Commander of the Ankh-Morpork City Watch. He presides over the Watch's transformation into a modern police force"
  },
  {
    name: 'Mustrum Ridcully',
    mainSaga: 'Unseen University',
    books: [
      '687ffa50a7edcc6113eeb223',
      '687ffa50a7edcc6113eeb226',
      '687ffa50a7edcc6113eeb228',
      '687ffa50a7edcc6113eeb229',
      '687ffa50a7edcc6113eeb22c',
      '687ffa50a7edcc6113eeb22e',
      '687ffa50a7edcc6113eeb233'
    ],
    race: 'human',
    job: 'Archchancellor of the Unseen University',
    picture: '/assets/characters/the_archchancellor_mustrum_ridcully.jpg',
    description:
      'The current Archchancellor of Unseen University. He holds the following UU degrees and honours: DThau, DM, BS, DMn, DG, DD, DMPhil, DMS, DCM, DW & BElL. Before becoming the Archchancellor he had been away from the University for almost 40 years living in the countryside in the Ramtops'
  },
  {
    name: "Esmerelda 'Esme' Weatherwax",
    mainSaga: 'Witches',
    books: [
      '687ffa50a7edcc6113eeb21b',
      '687ffa50a7edcc6113eeb21e',
      '687ffa50a7edcc6113eeb224',
      '687ffa50a7edcc6113eeb226',
      '687ffa50a7edcc6113eeb22a',
      '687ffa50a7edcc6113eeb22f',
      '687ffa50a7edcc6113eeb23b',
      '687ffa50a7edcc6113eeb23e',
      '687ffa50a7edcc6113eeb241'
    ],
    race: 'human',
    job: 'witch',
    picture: '/assets/characters/granny_weatherwax.jpg',
    description:
      "Granny Weatherwax is a witch, who lives in a small cottage outside the village of Bad Ass, in the kingdom of Lancre, on the Sto Plains face of the Ramtops. She is considered (not least of all by herself) to be the best witch on the Discworld and is refered to by the Pictsies as the 'Hag O' Hags'. She is the resident witch of Bad Ass, but she tends to regard the whole kingdom"
  },
  {
    name: 'Cohen the Barbarian',
    mainSaga: 'Unseen University',
    books: [
      '687ffa50a7edcc6113eeb21a',
      '687ffa50a7edcc6113eeb229',
      '687ffa50a7edcc6113eeb233'
    ],
    race: 'human',
    job: 'adventurer',
    picture: '/assets/characters/cohen_the_barbarian.jpg',
    description:
      "Also known as Ghenghiz Cohen, Cohen the Barbarian is the last and greatest of the barbarian heroes. He is over 90 years old, which just goes to show how good Cohen is at not dying. The best things in life according to him are 'hot water, good dentishtry and shoft lavatory paper'. Cohen's charisma is powerful enough for him to have attracted the Silver Horde, despite the notoriously individualistic nature of barbarians"
  },
  {
    name: 'Tiffany Aching',
    mainSaga: 'Tiffany Aching',
    books: [
      '687ffa50a7edcc6113eeb236',
      '687ffa50a7edcc6113eeb238',
      '687ffa50a7edcc6113eeb23b',
      '687ffa50a7edcc6113eeb23e',
      '687ffa50a7edcc6113eeb241'
    ],
    race: 'human',
    job: 'young witch',
    picture: '/assets/characters/tiffany_aching.jpg',
    description:
      'Tiffany Aching grew up in a sheep-grazing region known as The Chalk, rimwards of the Ramtops on the hubward margin of the Sto Plains. She has one little brother (Wentworth) and six older sisters, including Hannah and Fastidia. She is an expert at cheese-making, to the point of making it sentient. She has second and third thoughts, and occasionally fourth thoughts. Her connection with the Chalk is important to her, which makes it very strong'
  },
  {
    name: 'Carrot Ironfoundersson',
    mainSaga: 'City Watch',
    books: [
      '687ffa50a7edcc6113eeb220',
      '687ffa50a7edcc6113eeb227',
      '687ffa50a7edcc6113eeb22b',
      '687ffa50a7edcc6113eeb22d',
      '687ffa50a7edcc6113eeb230',
      '687ffa50a7edcc6113eeb231',
      '687ffa50a7edcc6113eeb233',
      '687ffa50a7edcc6113eeb235',
      '687ffa50a7edcc6113eeb23a',
      '687ffa50a7edcc6113eeb23f'
    ],
    race: 'human-dwarf',
    job: 'Captain of the City Watch',
    picture: '/assets/characters/captain-carrot-ironfoundersson.jpg',
    description:
      'Technically Carrot (Kzad-bhat) Ironfoundersson is a dwarf, for he was adopted and raised by dwarfs, even though he is biologically human. This made growing up difficult, especially since dwarfs are smaller than the typical human. It is rumoured that Carrot is the last remaining descendant of the kings of Ankh-Morpork, but it has never been voiced too loudly'
  },
  {
    name: 'Gytha Ogg',
    mainSaga: 'Witches',
    books: [
      '687ffa50a7edcc6113eeb21e',
      '687ffa50a7edcc6113eeb224',
      '687ffa50a7edcc6113eeb226',
      '687ffa50a7edcc6113eeb22a',
      '687ffa50a7edcc6113eeb22f',
      '687ffa50a7edcc6113eeb23b',
      '687ffa50a7edcc6113eeb23e',
      '687ffa50a7edcc6113eeb241'
    ],
    race: 'human',
    job: 'witch',
    picture: '/assets/characters/nanny_ogg.jpg',
    description:
      "Gytha 'Nanny' Ogg is a witch from the Ramtop Mountains, Granny Weatherwax's oldest and perhaps only friend, sometime conscience and reality-check. As skilled a witch as Granny, but in other ways, able to manipulate events and people (even Granny) by being herself – in capital letters – fond of a dram, or three; fond of a lad, or three; she is Granny's connection to a different world. She lives in Lancre town and is the matriarch of a very big family. It has been mentioned (especially by Granny Weatherwax) that in her youth, Nanny had an enthusiastic appreciation for the company of men"
  },
  {
    name: 'Fred Colon',
    mainSaga: 'City Watch',
    books: [
      '687ffa50a7edcc6113eeb220',
      '687ffa50a7edcc6113eeb227',
      '687ffa50a7edcc6113eeb228',
      '687ffa50a7edcc6113eeb22b',
      '687ffa50a7edcc6113eeb22d',
      '687ffa50a7edcc6113eeb230',
      '687ffa50a7edcc6113eeb231',
      '687ffa50a7edcc6113eeb233',
      '687ffa50a7edcc6113eeb235',
      '687ffa50a7edcc6113eeb23a'
    ],
    race: 'human',
    job: 'Sergeant of the City Watch',
    picture: '/assets/characters/sergeant_fred_colon.jpg',
    description:
      "A long-time member of the Ankh-Morpork City Watch, for most of that time a sergeant. Currently the most senior member of the Watch, he is 'one of nature's sergeants': good at organising small tasks, rotas of various descriptions, whip-rounds and other informal funds; he is extremely bad at paperwork, keeping the wage chitty safe, and other officer's tasks. Physically, he is somewhat rotund and has been described as looking something like a pork butcher"
  },
  {
    name: 'Magrat Garlick',
    mainSaga: 'Witches',
    books: [
      '687ffa50a7edcc6113eeb21e',
      '687ffa50a7edcc6113eeb224',
      '687ffa50a7edcc6113eeb226',
      '687ffa50a7edcc6113eeb22f',
      '687ffa50a7edcc6113eeb241'
    ],
    race: 'human',
    job: 'witch and queen',
    picture: '/assets/characters/magrat_garlick.jpg',
    description:
      "She is the Queen Of Lancre, consort of H.M. King Verence II. Previously, however, she was the junior witch in the Lancre coven with Granny Weatherwax and Nanny Ogg. She isn't much good at witching magic, despite her large collection of magical jewellery, charms, and such ordered from Ankh-Morpork. The other witches sometimes refer to her as a 'wet hen'. Her insecurity may stem from her mother's poor spelling. As the Queen, she tries to support Verence's ambition to modernise and democratise Lancre although she knows that the citizens have little appetite for change and less for democracy"
  },
  {
    name: 'Lord Havelock Vetinari',
    mainSaga: 'City Watch',
    books: [
      '687ffa50a7edcc6113eeb21d',
      '687ffa50a7edcc6113eeb220',
      '687ffa50a7edcc6113eeb222',
      '687ffa50a7edcc6113eeb227',
      '687ffa50a7edcc6113eeb229',
      '687ffa50a7edcc6113eeb22b',
      '687ffa50a7edcc6113eeb230',
      '687ffa50a7edcc6113eeb231',
      '687ffa50a7edcc6113eeb239',
      '687ffa50a7edcc6113eeb23a',
      '687ffa50a7edcc6113eeb23c',
      '687ffa50a7edcc6113eeb23d',
      '687ffa50a7edcc6113eeb240'
    ],
    race: 'human',
    job: 'patrician',
    picture: '/assets/characters/lord_havelock_vetinari.jpg',
    description:
      "The current Patrician of Ankh-Morpork. He has been the supreme ruler for some years and is the successor of Mad Lord Snapcase. The Assassins' Guild have an AM$ 1,000,000 fee for his inhumation, though rumour says that they are not accepting contracts on him at present. As a former Assassin himself, he is probably just too difficult to kill. He seems to have no vices whatsoever, since some guild or other would otherwise undoubtedly have made use of them by now. Lord Vetinari has a vast spy network, and he himself is the head of intelligence, the only man who knows all of the information so far collected. Unlike previous Patricians, Vetinari truly works to make the city work, not for personal gain or vanity"
  },
  {
    name: 'Greebo',
    mainSaga: 'Witches',
    books: [
      '687ffa50a7edcc6113eeb21e',
      '687ffa50a7edcc6113eeb224',
      '687ffa50a7edcc6113eeb226',
      '687ffa50a7edcc6113eeb22a',
      '687ffa50a7edcc6113eeb22f',
      '687ffa50a7edcc6113eeb23b'
    ],
    race: 'cat',
    job: 'cat',
    picture: '/assets/characters/greebo.jpg',
    description:
      "Greebo is Nanny Ogg's tomcat, he is feared in the forests of Lancre by all animals, and he is the father of most of the cat population in the area. Flea bitten, with scars all over his face and his partially present ears he is a huge swaggering bully of a cat - renowned for once chasing a bear up a tree. Despite the scars and the bad eye, the human Greebo's other eye glitters like the sins of angels, and his lazy smile is the downfall of saints. Female saints, anyway. Greebo still changes into human form when in a situation in which being a cat just doesn't cut the mustard. Unfortunately, he changes into a naked human"
  },
  {
    name: 'Giamo Casanunda',
    mainSaga: 'Witches',
    books: [
      '687ffa50a7edcc6113eeb224',
      '687ffa50a7edcc6113eeb226',
      '687ffa50a7edcc6113eeb22f'
    ],
    race: 'dwarf',
    job: 'soldier of fortune',
    picture: '/assets/characters/giamo_casanunda.jpg',
    description:
      "World's 2nd Greatest Lover, swordsman, liar, soldier of fortune, stepladder repairer. Casanunda rejects the work ethic, the reserve, the conformity of the dwarfs. He has immense confidence in his abilities as a highwayman and all kinds of swordsman, and sometimes it's even rewarded. Count Casanunda walks tall, dreams big and rides a big horse... with the aid of his trusty stepladder"
  },
  {
    name: 'Cut-Me-Own-Throat Dibbler',
    mainSaga: 'Unseen University',
    books: [
      '687ffa50a7edcc6113eeb220',
      '687ffa50a7edcc6113eeb222',
      '687ffa50a7edcc6113eeb223',
      '687ffa50a7edcc6113eeb228',
      '687ffa50a7edcc6113eeb231',
      '687ffa50a7edcc6113eeb235',
      '687ffa50a7edcc6113eeb23c'
    ],
    race: 'human',
    job: 'salesman',
    picture: '/assets/characters/cut_me_own_throat_dibbler.jpg',
    description:
      "A fixture in the street life of Ankh-Morpork, where he is a perpetually failing salesman. He gets fancy new ideas (such as feng-shui consulting, or selling stale rocks to trolls) which never work. His product line includes Dibbler's Homoeopathic Shampoo, which failed to meet the expectations of the customer. His mercantile aspirations, and lack of aptitude for it, make the Dibbler-like character instantly recognisable, as does the appalling food that is his fall-back product"
  },
  {
    name: 'Otto Von Chriek',
    mainSaga: 'Industrial Revolution',
    books: ['687ffa50a7edcc6113eeb231'],
    race: 'vampire',
    job: 'iconographer',
    picture: '/assets/characters/otto_von_chriek.jpg',
    description:
      'A vampire who moved from Überwald and is now living in Ankh-Morpork. Like most vampires in Ankh-Morpork, he is a Black Ribboner, meaning that he has joined the League of Temperance and sworn off blood. However, the energy that was once spent devising ways of capturing young virgins must be re-directed. Otto has successfully transferred that obsession to iconography, and so he makes quite a good iconographer'
  },
  {
    name: 'Verence II of Lancre',
    mainSaga: 'Witches',
    books: [
      '687ffa50a7edcc6113eeb21e',
      '687ffa50a7edcc6113eeb224',
      '687ffa50a7edcc6113eeb226',
      '687ffa50a7edcc6113eeb22f',
      '687ffa50a7edcc6113eeb241'
    ],
    race: 'human',
    job: 'king',
    picture: '/assets/characters/verence_ii_king_of_lancre.jpg',
    description:
      "He is actually quite tall, but bandied his legs and pranced in a half crouch so that he appeared to be a small man. He has a runny nose, a strong dislike of custard and absolutely no sense of humour. This is because he was educated in the Fools' Guild, to which his abusive grandfather sent him as a child. He befriended Magrat Garlick one day, and this was the start of a rather unusual relationship, even for a Fool, in which both people were too embarrassed to discuss their situation. However, when Verence was elevated from a Fool to King of Lancre by Granny Weatherwax in response to Felmet's reign of oppression, their relationship continued to escalate into true love"
  },
  {
    name: 'Erzulie Gogol',
    mainSaga: 'Witches',
    books: ['687ffa50a7edcc6113eeb224'],
    race: 'human',
    job: 'witch',
    picture: '/assets/characters/mrs_erzulie_gogol.jpg',
    description:
      "A voodoo witch. She's also a great cook. She lives in the swamp just outside Genua, in a hut on legs, together with Baron Saturday. She smokes a pipe. Her cottage can move about on duck-like feet over land or water. Mrs. Gogol's Genuan style of magic, besides the entrancing cooking, includes the raising of gods and zombies. She is adept at scrying and headology. The cooking itself may be used as a means of predicting the future, by the bubbles and patterns of ingredients: an edible Ching Aling"
  }
]

module.exports = characters
