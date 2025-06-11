const users = [
  {
    username: 'user1',
    password: 'password1',
    first_name: 'Steven',
    last_name: 'Ngov',
    email: 'steven.ngov@mail.com'
  },
  {
    username: 'user2',
    password: 'password2',
    first_name: 'Jacob',
    last_name: 'Moore',
    email: 'jacob.moore@mail.com'
  },
  {
    username: 'user3',
    password: 'password3',
    first_name: 'Emma',
    last_name: 'Piage',
    email: 'emma.paige@mail.com'
  }
]

const boardGames = [
  {
    title: 'Ark Nova',
    description: `In Ark Nova, you will plan and design a modern, scientifically managed zoo. With the ultimate goal of owning the most successful zoological establishment, you will build enclosures, accommodate animals, and support conservation projects all over the world. Specialists and unique buildings will help you in achieving this goal. At the heart of Ark Nova are 255 cards featuring animals, specialists, unique enclosures, and conservation projects, each with a particular ability. Use them to increase the appeal and scientific reputation of your zoo and to collect conservation points.
      Each player has a set of action cards, which you will use and upgrade to carry out your plans. Each player has a set of five action cards to manage their gameplay, and the power of an action is determined by the slot the card currently occupies. The cards in question  are:
      BUILD: Allows you to build standard or special enclosures, kiosks, and pavilions.
      ANIMALS: Allows you to accommodate animals in your zoo.
      CARDS: Allows you to gain new zoo cards (animals, sponsors, and conservation project cards).
      ASSOCIATION: Allows your association workers to carry out different tasks.
      SPONSORS: Allows you to play a sponsor card in your zoo or to raise money.
      With a lot of love for the theme, game designer Mathias Wigge has created an interestingly interwoven game. With high replayability and rich components, Ark Nova provides a remarkable gaming experience that will bring the game to the table again and again.`,
    min_players: 1,
    max_players: 4,
    min_playing_time: 90,
    max_playing_time: 150,
    min_age: 14,
    image: '/ark-nova.webp',
    year_released: 2021
  },
  {
    title: 'Wingspan',
    description: `Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games. It's designed by Elizabeth Hargrave and features over 170 birds illustrated by Beth Sobel, Natalia Rojas, and Ana Maria Martinez.
    You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your network of wildlife preserves. Each bird extends a chain of powerful combinations in one of your habitats (actions). These habitats focus on several key aspects of growth:
    Gain food tokens via custom dice in a birdfeeder dice tower.
    Lay eggs using egg miniatures in a variety of colors.
    Draw from hundreds of unique bird cards and play them.
    The winner is the player with the most points after 4 rounds.`,
    min_players: 1,
    max_players: 5,
    min_playing_time: 40,
    max_playing_time: 70,
    min_age: 10,
    image: '/wingspan.webp',
    year_released: 2019
  },
  {
    title: 'Everdell',
    description: `Within the charming valley of Everdell, beneath the boughs of towering trees, among meandering streams and mossy hollows, a civilization of forest critters is thriving and expanding. From Everfrost to Bellsong, many a year have come and gone, but the time has come for new territories to be settled and new cities established. You will be the leader of a group of critters intent on just such a task. There are buildings to construct, lively characters to meet, events to host—you have a busy year ahead of yourself. Will the sun shine brightest on your city before the winter moon rises?
    Everdell is a game of dynamic tableau building and worker placement.
    On their turn a player can take one of three actions:
    a) Place a Worker: Each player has a collection of Worker pieces. These are placed on the board locations, events, and on Destination cards. Workers perform various actions to further the development of a player's tableau: gathering resources, drawing cards, and taking other special actions.
    b) Play a Card: Each player is building and populating a city; a tableau of up to 15 Construction and Critter cards. There are five types of cards: Travelers, Production, Destination, Governance, and Prosperity. Cards generate resources (twigs, resin, pebbles, and berries), grant abilities, and ultimately score points. The interactions of the cards reveal numerous strategies and a near infinite variety of working cities.
    c) Prepare for the next Season: Workers are returned to the players supply and new workers are added. The game is played from Winter through to the onset of the following winter, at which point the player with the city with the most points wins.`,
    min_players: 1,
    max_players: 4,
    min_playing_time: 40,
    max_playing_time: 80,
    min_age: 10,
    image: '/everdell.webp',
    year_released: 2018
  },
  {
    title: 'Food Chain Magnate',
    description: `"Lemonade? They want lemonade? What is the world coming to? I want commercials for burgers on all channels, every 15 minutes. We are the Home of the Original Burger, not a hippie health haven. And place a billboard next to that new house on the corner. I want them craving beer every second they sit in their posh new garden." The new management trainee trembles in front of the CEO and tries to politely point out that... "How do you mean, we don't have enough staff? The HR director reports to you. Hire more people! Train them! But whatever you do, don't pay them any real wages. I did not go into business to become poor. And fire that discount manager, she is only costing me money. From now on, we'll sell gourmet burgers. Same crap, double the price. Get my marketing director in here!"
    Food Chain Magnate is a heavy strategy game about building a fast food chain. The focus is on building your company using a card-driven (human) resource management system. Players compete on a variable city map through purchasing, marketing and sales, and on a job market for key staff members. The game can be played by 2-5 serious gamers in 2-4 hours.`,
    min_players: 2,
    max_players: 5,
    min_playing_time: 120,
    max_playing_time: 240,
    min_age: 14,
    image: '/food-chain-magnate.webp',
    year_released: 2015
  },
  {
    title: 'Viticulture Essential Edition',
    description: `In Viticulture, the players find themselves in the roles of people in rustic, pre-modern Tuscany who have inherited meagre vineyards. They have a few plots of land, an old crush pad, a tiny cellar, and three workers. They each have a dream of being the first to call their winery a true success.
    The players are in the position of determining how they want to allocate their workers throughout the year. Every season is different on a vineyard, so the workers have different tasks they can take care of in the summer and winter. There's competition over those tasks, and often the first worker to get to the job has an advantage over subsequent workers.
    Fortunately for the vineyard owners, people love to visit wineries, and it just so happens that many of those visitors are willing to help out around the vineyard when they visit as long as you assign a worker to take care of them. Their visits (in the form of cards) are brief but can be very helpful. Using those workers and visitors, the vineyard owners can expand their vineyards by building structures, planting vines, and filling wine orders, working towards the goal of running the most successful winery in Tuscany.
    Viticulture Essential Edition includes the base game of Viticulture and a few of the most popular modules from the original Tuscany expansion, including Mamas & Papas, Fields (previously known as Properties), expanded and revised Visitors, and Automa cards for a solo variant, along with a few minor rule changes.`,
    min_players: 1,
    max_players: 6,
    min_playing_time: 45,
    max_playing_time: 90,
    min_age: 13,
    image: '/viticulture-essential-edition.webp',
    year_released: 2015
  },
  {
    title: 'Azul',
    description: `Introduced by the Moors, azulejos (originally white and blue ceramic tiles) were fully embraced by the Portuguese when their king Manuel I, on a visit to the Alhambra palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The king, awestruck by the interior beauty of the Alhambra, immediately ordered that his own palace in Portugal be decorated with similar wall tiles. As a tile-laying artist, you have been challenged to embellish the walls of the Royal Palace of Evora.
    In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how they've placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the player's score. The player with the most points at the end of the game wins.`,
    min_players: 2,
    max_players: 4,
    min_playing_time: 30,
    max_playing_time: 45,
    min_age: 8,
    image: '/azul.webp',
    year_released: 2017
  },
  {
    title: 'Root',
    description: `Root is a game of adventure and war in which 2 to 4 (1 to 6 with the 'Riverfolk' expansion) players battle for control of a vast wilderness. Like Vast: The Crystal Caverns, each player in Root has unique capabilities and a different victory condition. Now, with the aid of gorgeous, multi-use cards, a truly asymmetric design has never been more accessible.
    The nefarious Marquise de Cat has seized the great woodland, intent on harvesting its riches. Under her rule, the many creatures of the forest have banded together. This Alliance will seek to strengthen its resources and subvert the rule of Cats. In this effort, the Alliance may enlist the help of the wandering Vagabonds who are able to move through the more dangerous woodland paths. Though some may sympathize with the Alliance’s hopes and dreams, these wanderers are old enough to remember the great birds of prey who once controlled the woods.
    Meanwhile, at the edge of the region, the proud, squabbling Eyrie have found a new commander who they hope will lead their faction to resume their ancient birthright. The stage is set for a contest that will decide the fate of the great woodland. It is up to the players to decide which group will ultimately take root.
    In Root, players drive the narrative, and the differences between each role create an unparalleled level of interaction and replayability. Leder Games invites you and your family to explore the fantastic world of Root!`,
    min_players: 2,
    max_players: 4,
    min_playing_time: 60,
    max_playing_time: 90,
    min_age: 10,
    image: '/root.webp',
    year_released: 2018
  },
  {
    title: 'Catan',
    description: `In CATAN (formerly The Settlers of Catan), players try to be the dominant force on the island of Catan by building settlements, cities and roads. On each turn dice are rolled to determine which resources the island produces. Players build structures by 'spending' resources (sheep, wheat, wood, brick and ore) which are represented by the relevant resource cards; each land type, with the exception of the unproductive desert, produces a specific resource: hills produce brick, forests produce wood, mountains produce ore, fields produce wheat, and pastures produce sheep.
    Set-up includes randomly placing large hexagonal tiles (each depicting one of the five resource-producing terrain types--or the desert) in a honeycomb shape and surrounding them with water tiles, some of which contain ports of exchange. A number disk, the value of which will correspond to the roll of two 6-sided dice, are placed on each terrain tile. Each player is given two settlements (think: houses) and roads (sticks) which are placed on intersections and borders of the terrain tiles. Players collect a hand of resource cards based on which terrain tiles their last-placed settlement is adjacent to. A robber pawn is placed on the desert tile.
    A turn consists of rolling the dice, collecting resource cards based on this dice roll and the position of settlements (or upgraded cities—think: hotels), turning in resource cards (if possible and desired) for improvements, trading cards at a port, possibly playing a development card, or trading resource cards with other players. If the dice roll is a 7, the active player moves the robber to a new terrain tile and steals a resource card from another player who has a settlement adjacent to that tile.
    Points are accumulated by building settlements and cities, having the longest road or the largest army (from some of the development cards), and gathering certain development cards that simply award victory points. When a player has gathered 10 points (some of which may be held in secret), s/he announces this and claims the win.`,
    min_players: 3,
    max_players: 4,
    min_playing_time: 60,
    max_playing_time: 120,
    min_age: 10,
    image: '/catan.webp',
    year_released: 1995
  },
  {
    title: '7 Wonders',
    description: `You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes, and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times.
    7 Wonders lasts three ages. In each age, players receive seven cards from a particular deck, choose one of those cards, then pass the remainder to an adjacent player. Players reveal their cards simultaneously, paying resources if needed or collecting resources or interacting with other players in various ways. (Players have individual boards with special powers on which to organize their cards, and the boards are double-sided). Each player then chooses another card from the deck they were passed, and the process repeats until players have six cards in play from that age. After three ages, the game ends.
    In essence, 7 Wonders is a card development game. Some cards have immediate effects, while others provide bonuses or upgrades later in the game. Some cards provide discounts on future purchases. Some provide military strength to overpower your neighbors and others give nothing but victory points. Each card is played immediately after being drafted, so you'll know which cards your neighbor is receiving and how her choices might affect what you've already built up. Cards are passed left-right-left over the three ages, so you need to keep an eye on the neighbors in both directions.
    Though the box of earlier editions is listed as being for 3–7 players, there is an official 2-player variant included in the instructions.`,
    min_players: 2,
    max_players: 7,
    min_playing_time: 30,
    max_playing_time: 30,
    min_age: 10,
    image: '/7-wonders.webp',
    year_released: 2010
  },
  {
    title: 'Ticket to Ride',
    description: `With elegantly simple gameplay, Ticket to Ride can be learned in under 15 minutes. Players collect cards of various types of train cars they then use to claim railway routes in North America. The longer the routes, the more points they earn. Additional points come to those who fulfill Destination Tickets – goal cards that connect distant cities; and to the player who builds the longest continuous route.
    "The rules are simple enough to write on a train ticket – each turn you either draw more cards, claim a route, or get additional Destination Tickets," says Ticket to Ride author, Alan R. Moon. "The tension comes from being forced to balance greed – adding more cards to your hand, and fear – losing a critical route to a competitor."
    Ticket to Ride continues in the tradition of Days of Wonder's big format board games featuring high-quality illustrations and components including: an oversize board map of North America, 225 custom-molded train cars, 144 illustrated cards, and wooden scoring markers.
    Since its introduction and numerous subsequent awards, Ticket to Ride has become the BoardGameGeek epitome of a "gateway game" -- simple enough to be taught in a few minutes, and with enough action and tension to keep new players involved and in the game for the duration.
    Part of the Ticket to Ride series.`,
    min_players: 2,
    max_players: 5,
    min_playing_time: 30,
    max_playing_time: 60,
    min_age: 8,
    image: '/ticket-to-ride.webp',
    year_released: 2004
  },
  {
    title: 'Dune',
    description: `Imagine you can control the forces of a noble family, guild, or religious order on a barren planet which is the only source for the most valuable substance in the known universe.

Imagine you can rewrite the script for one of the most famous science fiction books of all time. Welcome to the acclaimed 40-year-old board game which allows you to recreate the incredible world of Frank Herbert’s DUNE.

In DUNE you will become the leader of one of six great factions. Each wishes to control the most valuable resource in the universe - melange, the mysterious spice only found at great cost on the planet DUNE. As Duke Leto Atreides says “All fades before melange. A handful of spice will buy a home on Tupile. It cannot be manufactured, it must be mined on Arrakis. It is unique and it has true geriatric properties.” And without melange space travel would be impossible. Only by ingesting the addictive drug can the Guild Steersman continue to experience visions of the future, enabling them to plot a safe path through hyperspace.

Who will control DUNE? Become one of the characters and their forces from the book and . . . You decide!`,
    min_players: 2,
    max_players: 6,
    min_playing_time: 120,
    max_playing_time: 180,
    min_age: 14,
    image: '/dune.webp',
    year_released: 2019
  },
  {
    title: 'Decrypto',
    description: `Players compete in two teams in Decrypto, with each trying to correctly interpret the coded messages presented to them by their teammates while cracking the codes they intercept from the opposing team.

In more detail, each team has their own screen, and in this screen they tuck four cards in pockets numbered 1-4, letting everyone on the same team see the words on these cards while hiding the words from the opposing team. In the first round, each team does the following: One team member takes a code card that shows three of the digits 1-4 in some order, e.g., 4-2-1. They then give a coded message that their teammates must use to guess this code. For example, if the team's four words are "pig", "candy", "tent", and "son", then I might say "Sam-striped-pink" and hope that my teammates can correctly map those words to 4-2-1. If they guess correctly, great; if not, we receive a black mark of failure.

Starting in the second round, a member of each team must again give a clue about their words to match a numbered code. If I get 2-4-3, I might now say, "sucker-prince-stake". The other team then attempts to guess our numbered code. If they're correct, they receive a white mark of success; if not, then my team must guess the number correctly or take a black mark of failure. (Guessing correctly does nothing except avoid failure and give the opposing team information about what our hidden words might be.)

The rounds continue until a team collects either its second white mark (winning the game) or its second black mark (losing the game). Games typically last between 4-7 rounds. If neither team has won after eight rounds, then each team must attempt to guess the other team's words; whichever team guesses more words correctly wins.`,
    min_players: 3,
    max_players: 8,
    min_playing_time: 15,
    max_playing_time: 45,
    min_age: 12,
    image: '/decrypto.webp',
    year_released: 2018
  },
  {
    title: 'Expeditions',
    description: `The sequel to Scythe sends players on a new adventure into Siberia, where a massive meteorite crashed near the Tunguska River, awakening ancient corruption. An expedition led by Dr. Tarkovsky ventures into the taiga to learn about the meteorite and its impact on the land. Itching for adventure, heroes from the war privately fund their own expeditions to Siberia, hoping to find artifacts, overcome challenges, and ultimately achieve glory. Expeditions has completely different mechanisms than Scythe, though the goal was to capture some of the same feelings that Scythe evokes, with a slightly darker, more supernatural theme.

Expeditions is a competitive, card-driven, engine-building game of exploration. Play cards to gain power, guile, and unique worker abilities; move your mech to mysterious locations and gain cards found among the tiles; use workers, items, meteorites, and quests to enhance your mech; and use power and guile to vanquish corruption.`,
    min_players: 1,
    max_players: 5,
    min_playing_time: 60,
    max_playing_time: 90,
    min_age: 14,
    image: '/expeditions.webp',
    year_released: 2023
  },
  {
    title: 'Dixit',
    description: `Each turn in Dixit, one player is the storyteller who chooses one of the six cards in their hand, then expresses an idea, with sounds or words, that is reflected on that card's image, and places the card face down on the playing surface. Each other player then selects the card that best matches that expression, and passes the selected card to the storyteller, face down.

The storyteller shuffles all the cards together, then turns them over to reveal them. Each player other than the storyteller then secretly guesses which card belongs to the storyteller. If nobody or everybody guesses the correct card, the storyteller scores 0 points, and each other player scores 2 points. Otherwise, the storyteller and whoever found the correct answer score 3 points. Additionally, the non-storyteller players score 1 point for every vote received by their card.

The game ends when the deck is empty or if a player has scored at least 30 points. In either case, the player with the most points wins.

The Dixit base game and each expansion contain 84 cards, and the cards can be mixed together as desired.`,
    min_players: 3,
    max_players: 8,
    min_playing_time: 30,
    min_age: 8,
    image: '/dixit.webp',
    year_released: 2008
  },
  {
    title: 'Carpe Diem',
    description: `The players slip into the role of rich patricians in ancient Rome. Everyone is trying to build a lucrative city district to score as many prestige points as possible. The novel way to get to the individual buildings of a district combined with a large variety of score cards make for an unusual game with a large number of strategies. From the successful designer, Stefan Feld.`,
    min_players: 2,
    max_players: 4,
    min_playing_time: 45,
    max_playing_time: 75,
    min_age: 10,
    image: '/carpe-diem.webp',
    year_released: 2018
  }
]

export { users, boardGames }
