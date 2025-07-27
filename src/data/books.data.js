const books = [
  {
    title: 'The Colour of Magic',
    year: 1983,
    mainSaga: 'Unseen University',
    subSagas: ['Rincewind'],
    cover: '/assets/books/the_colour_of_magic.jpg',
    orderInSaga: 1,
    globalOrder: 1,
    characters: ['68810c987591848fa62c09d5']
  },
  {
    title: 'The Light Fantastic',
    year: 1986,
    mainSaga: 'Unseen University',
    subSagas: ['Rincewind'],
    cover: '/assets/books/the_light_fantastic.jpg',
    orderInSaga: 2,
    globalOrder: 2,
    characters: ['68810c987591848fa62c09d5']
  },
  {
    title: 'Equal Rites',
    year: 1987,
    mainSaga: 'Witches',
    subSagas: ['Unseen University'],
    cover: '/assets/books/equal_rites.jpg',
    orderInSaga: 1,
    globalOrder: 3,
    characters: ['68810c987591848fa62c09d8']
  },
  {
    title: 'Mort',
    year: 1987,
    mainSaga: 'Death',
    subSagas: [],
    cover: '/assets/books/mort.jpg',
    orderInSaga: 1,
    globalOrder: 4,
    characters: ['68810c987591848fa62c09d4']
  },
  {
    title: 'Sourcery',
    year: 1988,
    mainSaga: 'Unseen University',
    subSagas: ['Rincewind'],
    cover: '/assets/books/sourcery.jpg',
    orderInSaga: 3,
    globalOrder: 5,
    characters: ['68810c987591848fa62c09d5']
  },
  {
    title: 'Wyrd Sisters',
    year: 1988,
    mainSaga: 'Witches',
    subSagas: [
      '68810c987591848fa62c09d8',
      '68810c987591848fa62c09dc',
      '68810c987591848fa62c09de'
    ],
    cover: '/assets/books/wyrd_sisters.jpg',
    orderInSaga: 2,
    globalOrder: 6,
    characters: []
  },
  {
    title: 'Pyramids',
    year: 1989,
    mainSaga: 'Stand-alone',
    subSagas: ['Gods'],
    cover: '/assets/books/pyramids.jpg',
    orderInSaga: 1,
    globalOrder: 7,
    characters: []
  },
  {
    title: 'Guards! Guards!',
    year: 1989,
    mainSaga: 'City Watch',
    subSagas: [
      '68810c987591848fa62c09d6',
      '68810c987591848fa62c09db',
      '68810c987591848fa62c09dd',
      '68810c987591848fa62c09df'
    ],
    cover: '/assets/books/guards_guards.jpg',
    orderInSaga: 1,
    globalOrder: 8,
    characters: []
  },
  {
    title: 'Eric',
    year: 1990,
    mainSaga: 'Unseen University',
    subSagas: ['Rincewind'],
    cover: '/assets/books/eric.jpg',
    orderInSaga: 4,
    globalOrder: 9,
    characters: ['68810c987591848fa62c09d5', '68810c987591848fa62c09d4']
  },
  {
    title: 'Moving Pictures',
    year: 1990,
    mainSaga: 'Unseen University',
    subSagas: ['Industrial Revolution'],
    cover: '/assets/books/moving_pictures.jpg',
    orderInSaga: 5,
    globalOrder: 10,
    characters: []
  },
  {
    title: 'Reaper Man',
    year: 1991,
    mainSaga: 'Death',
    subSagas: ['Unseen University'],
    cover: '/assets/books/reaper_man.jpg',
    orderInSaga: 6,
    globalOrder: 11,
    characters: ['68810c987591848fa62c09d4', '68810c987591848fa62c09d7']
  },
  {
    title: 'Witches Abroad',
    year: 1991,
    mainSaga: 'Witches',
    subSagas: [],
    cover: '/assets/books/witches_abroad.jpg',
    orderInSaga: 3,
    globalOrder: 12,
    characters: [
      '68810c987591848fa62c09d8',
      '68810c987591848fa62c09dc',
      '68810c987591848fa62c09de'
    ]
  },
  {
    title: 'Small Gods',
    year: 1992,
    mainSaga: 'Stand-alone',
    subSagas: ['Gods'],
    cover: '/assets/books/small_gods.jpg',
    orderInSaga: 2,
    globalOrder: 13,
    characters: []
  },
  {
    title: 'Lords and Ladies',
    year: 1992,
    mainSaga: 'Witches',
    subSagas: ['Unseen University'],
    cover: '/assets/books/moving_pictures.jpg',
    orderInSaga: 4,
    globalOrder: 14,
    characters: [
      '68810c987591848fa62c09d8',
      '68810c987591848fa62c09dc',
      '68810c987591848fa62c09de',
      '68810c987591848fa62c09d7'
    ]
  },
  {
    title: 'Men at Arms',
    year: 1993,
    mainSaga: 'City Watch',
    subSagas: [],
    cover: '/assets/books/men_at_arms.jpg',
    orderInSaga: 2,
    globalOrder: 15,
    characters: [
      '68810c987591848fa62c09d6',
      '68810c987591848fa62c09db',
      '68810c987591848fa62c09dd',
      '68810c987591848fa62c09df'
    ]
  },
  {
    title: 'Soul Music',
    year: 1994,
    mainSaga: 'Death',
    subSagas: ['Unseen University'],
    cover: '/assets/books/soul_music.jpg',
    orderInSaga: 3,
    globalOrder: 16,
    characters: ['68810c987591848fa62c09d4']
  },
  {
    title: 'Interesting Times',
    year: 1994,
    mainSaga: 'Unseen University',
    subSagas: ['Rincewind'],
    cover: '/assets/books/interesting_times.jpg',
    orderInSaga: 7,
    globalOrder: 17,
    characters: ['68810c987591848fa62c09d5', '68810c987591848fa62c09d9']
  },
  {
    title: 'Maskerade',
    year: 1995,
    mainSaga: 'Witches',
    subSagas: [],
    cover: '/assets/books/maskerade.jpg',
    orderInSaga: 5,
    globalOrder: 18,
    characters: ['68810c987591848fa62c09d8', '68810c987591848fa62c09dc']
  },
  {
    title: 'Feet of Clay',
    year: 1996,
    mainSaga: 'City Watch',
    subSagas: [],
    cover: '/assets/books/feet_of_clay.jpg',
    orderInSaga: 3,
    globalOrder: 19,
    characters: ['68810c987591848fa62c09db', '68810c987591848fa62c09d6']
  },
  {
    title: 'Hogfather',
    year: 1996,
    mainSaga: 'Death',
    subSagas: ['Unseen University'],
    cover: '/assets/books/hogfather.jpg',
    orderInSaga: 4,
    globalOrder: 20,
    characters: ['68810c987591848fa62c09d4']
  },
  {
    title: 'Jingo',
    year: 1997,
    mainSaga: 'City Watch',
    subSagas: [],
    cover: '/assets/books/jingo.jpg',
    orderInSaga: 4,
    globalOrder: 21,
    characters: [
      '68810c987591848fa62c09d6',
      '68810c987591848fa62c09db',
      '68810c987591848fa62c09dd',
      '68810c987591848fa62c09df'
    ]
  },
  {
    title: 'The Last Continent',
    year: 1998,
    mainSaga: 'Unseen University',
    subSagas: ['Rincewind'],
    cover: '/assets/books/the_last_continent.jpg',
    orderInSaga: 8,
    globalOrder: 22,
    characters: ['68810c987591848fa62c09d5']
  },
  {
    title: 'Carpe Jugulum',
    year: 1998,
    mainSaga: 'Witches',
    subSagas: [],
    cover: '/assets/books/carpe_jugulum.jpg',
    orderInSaga: 6,
    globalOrder: 23,
    characters: ['68810c987591848fa62c09d8', '68810c987591848fa62c09dc']
  },
  {
    title: 'The Fifth Elephant',
    year: 1999,
    mainSaga: 'City Watch',
    subSagas: [],
    cover: '/assets/books/the_fifth_elephant.jpg',
    orderInSaga: 5,
    globalOrder: 24,
    characters: ['68810c987591848fa62c09d6', '68810c987591848fa62c09db']
  },
  {
    title: 'The Truth',
    year: 2000,
    mainSaga: 'Industrial Revolution',
    subSagas: [],
    cover: '/assets/books/the_truth.jpg',
    orderInSaga: 1,
    globalOrder: 25,
    characters: ['68810c987591848fa62c09e3']
  },
  {
    title: 'Thief of Time',
    year: 2001,
    mainSaga: 'Death',
    subSagas: [],
    cover: '/assets/books/thief_of_time.jpg',
    orderInSaga: 6,
    globalOrder: 26,
    characters: []
  },
  {
    title: 'The Last Hero',
    year: 2001,
    mainSaga: 'Stand-alone',
    subSagas: ['Rincewind'],
    cover: '/assets/books/the_last_hero.jpg',
    orderInSaga: 1,
    globalOrder: 27,
    characters: [
      '68810c987591848fa62c09d9',
      '68810c987591848fa62c09d5',
      '68810c987591848fa62c09db'
    ]
  },
  {
    title: 'The Amazing Maurice and His Educated Rodents',
    year: 2001,
    mainSaga: 'Stand-alone',
    subSagas: ['Maurice'],
    cover: '/assets/books/the_amazing_maurice_and_his_educated_rodents.jpg',
    orderInSaga: 1,
    globalOrder: 28,
    characters: []
  },
  {
    title: 'Night Watch',
    year: 2002,
    mainSaga: 'City Watch',
    subSagas: [],
    cover: '/assets/books/night_watch.jpg',
    orderInSaga: 6,
    globalOrder: 29,
    characters: ['68810c987591848fa62c09d6']
  },
  {
    title: 'The Wee Free Men',
    year: 2003,
    mainSaga: 'Tiffany Aching',
    subSagas: ['Witches'],
    cover: '/assets/books/the_wee_free_men.jpg',
    orderInSaga: 1,
    globalOrder: 30,
    characters: ['68810c987591848fa62c09da']
  },
  {
    title: 'Monstrous Regiment',
    year: 2003,
    mainSaga: 'City Watch',
    subSagas: ['Industrial Revolution'],
    cover: '/assets/books/monstrous_regiment.jpg',
    orderInSaga: 7,
    globalOrder: 31,
    characters: ['68810c987591848fa62c09d6']
  },
  {
    title: 'A Hat Full of Sky',
    year: 2004,
    mainSaga: 'Tiffany Aching',
    subSagas: ['Witches'],
    cover: '/assets/books/a_hat_full_of_sky.jpg',
    orderInSaga: 2,
    globalOrder: 32,
    characters: ['68810c987591848fa62c09da']
  },
  {
    title: 'Going Postal',
    year: 2004,
    mainSaga: 'Industrial Revolution',
    subSagas: ['Moist von Lipwig'],
    cover: '/assets/books/going_postal.jpg',
    orderInSaga: 2,
    globalOrder: 33,
    characters: []
  },
  {
    title: 'Thud!',
    year: 2005,
    mainSaga: 'City Watch',
    subSagas: [],
    cover: '/assets/books/thud.jpg',
    orderInSaga: 8,
    globalOrder: 34,
    characters: ['68810c987591848fa62c09db']
  },
  {
    title: 'Wintersmith',
    year: 2006,
    mainSaga: 'Tiffany Aching',
    subSagas: ['Witches'],
    cover: '/assets/books/wintersmith.jpg',
    orderInSaga: 3,
    globalOrder: 35,
    characters: ['68810c987591848fa62c09da', '68810c987591848fa62c09d8']
  },
  {
    title: 'Making Money',
    year: 2007,
    mainSaga: 'Industrial Revolution',
    subSagas: ['Moist von Lipwig'],
    cover: '/assets/books/the_wee_free_men.jpg',
    orderInSaga: 3,
    globalOrder: 36,
    characters: []
  },
  {
    title: 'Unseen Academicals',
    year: 2009,
    mainSaga: 'Unseen University',
    subSagas: ['Rincewind', 'Industrial Revolution'],
    cover: '/assets/books/unseen_academicals.jpg',
    orderInSaga: 9,
    globalOrder: 37,
    characters: []
  },
  {
    title: 'I Shall Wear Midnight',
    year: 2010,
    mainSaga: 'Tiffany Aching',
    subSagas: ['Witches'],
    cover: '/assets/books/i_shall_wear_midnight.jpg',
    orderInSaga: 4,
    globalOrder: 38,
    characters: ['68810c987591848fa62c09da']
  },
  {
    title: 'Snuff',
    year: 2011,
    mainSaga: 'City Watch',
    subSagas: ['Industrial Revolution'],
    cover: '/assets/books/snuff.jpg',
    orderInSaga: 9,
    globalOrder: 39,
    characters: ['68810c987591848fa62c09d6']
  },
  {
    title: 'Raising Steam',
    year: 2013,
    mainSaga: 'Industrial Revolution',
    subSagas: ['Moist von Lipwig'],
    cover: '/assets/books/raising_steam.jpg',
    orderInSaga: 4,
    globalOrder: 40,
    characters: []
  },
  {
    title: "The Shepherd's Crown",
    year: 2015,
    mainSaga: 'Tiffany Aching',
    subSagas: ['Witches'],
    cover: '/assets/books/the_shepherds_crown.jpg',
    orderInSaga: 5,
    globalOrder: 41,
    characters: ['68810c987591848fa62c09da']
  }
]

module.exports = books
