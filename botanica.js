//
//  VERDANT II -- THE GRAND BOTANICA
//  The most comprehensive plant/mushroom dictionary in any game.
//  500+ species across 30 categories, 8 rarity tiers, 7 continents.
//

// RARITY TIERS
// 1: Common        - Found everywhere, starter plants
// 2: Uncommon      - Regional, need exploration  
// 3: Rare          - Specific biomes, worth hunting
// 4: Epic          - Remote locations, low drop rate
// 5: Legendary     - Continent-locked, boss-guarded
// 6: Mythic        - Single biome on 1 continent
// 7: Primordial    - Once per run, ultra-rare spawn
// 8: Void          - Never drops naturally, fusion-only unlock

const RARITY_NAMES = ['','Common','Uncommon','Rare','Epic','Legendary','Mythic','Primordial','Void'];
const RARITY_COLORS = ['','#6ec850','#38a0e8','#a858e8','#e89830','#e83838','#f0d040','#ffffff','#c84cff'];
const RARITY_DROP_RATE = [0, 0.85, 0.55, 0.30, 0.15, 0.07, 0.03, 0.01, 0.00];

//
// atk: Attack power
// def: Defense/HP scaling
// int: Intelligence (research/fusion power bonus)
// spd: Speed (exploration bonus)
// heal: Healing output
// lore: Lore points (unlocks story content)
// toxic: Poison damage (unique to toxic plants)
// aura: Passive field effect strength

const P = {}; // master plant dictionary

//
// CATEGORY 1: COMMON FLOWERS (global)
//
Object.assign(P, {
  rose:         {id:'rose',name:'Rose',sci:'Rosa canina',r:1,type:'flower',con:'global',biome:'temperate',e:'🌹',col:'#e85d6b',flavor:"Symbol of love and war across all civilizations.",stats:{atk:2,def:1,int:3,spd:1,heal:2,lore:2,toxic:0,aura:1}},
  white_rose:   {id:'white_rose',name:'White Rose',sci:'Rosa alba',r:1,type:'flower',con:'europe',biome:'temperate',e:'🌸',col:'#f0f0e8',flavor:"Purity incarnate. War of the Roses survivor.",stats:{atk:1,def:2,int:3,spd:1,heal:3,lore:2,toxic:0,aura:2}},
  black_rose:   {id:'black_rose',name:'Black Rose',sci:'Rosa chinensis nigra',r:4,type:'flower',con:'asia',biome:'garden',e:'🖤',col:'#1a0a0a',flavor:"Dyed, not born. Represents mystery and death.",stats:{atk:5,def:2,int:4,spd:2,heal:0,lore:4,toxic:2,aura:3}},
  sunflower:    {id:'sunflower',name:'Sunflower',sci:'Helianthus annuus',r:1,type:'flower',con:'global',biome:'plains',e:'🌻',col:'#f5c842',flavor:"Always faces the sun. Solar energy stored in petals.",stats:{atk:1,def:1,int:2,spd:2,heal:3,lore:1,toxic:0,aura:3}},
  daisy:        {id:'daisy',name:'Daisy',sci:'Bellis perennis',r:1,type:'flower',con:'global',biome:'meadow',e:'🌼',col:'#fff5a0',flavor:"First flower children learn. Indicator of healthy soil.",stats:{atk:1,def:2,int:2,spd:2,heal:2,lore:1,toxic:0,aura:1}},
  tulip:        {id:'tulip',name:'Tulip',sci:'Tulipa gesneriana',r:1,type:'flower',con:'europe',biome:'temperate',e:'🌷',col:'#e870c0',flavor:"Once worth more than gold during Dutch tulip mania.",stats:{atk:1,def:3,int:2,spd:1,heal:2,lore:3,toxic:0,aura:2}},
  poppy:        {id:'poppy',name:'Poppy',sci:'Papaver rhoeas',r:1,type:'flower',con:'europe',biome:'fields',e:'🌺',col:'#f04040',flavor:"Remembrance of the fallen. Opium dreams.",stats:{atk:3,def:1,int:3,spd:1,heal:2,lore:3,toxic:1,aura:2}},
  lily:         {id:'lily',name:'Lily',sci:'Lilium candidum',r:1,type:'flower',con:'global',biome:'temperate',e:'🌸',col:'#f8a0c0',flavor:"Madonna flower. Toxic to cats, healing to humans.",stats:{atk:2,def:2,int:3,spd:1,heal:3,lore:2,toxic:1,aura:2}},
  marigold:     {id:'marigold',name:'Marigold',sci:'Tagetes erecta',r:1,type:'flower',con:'global',biome:'garden',e:'🟡',col:'#f0a020',flavor:"Day of the Dead flower. Wards off insects naturally.",stats:{atk:2,def:2,int:2,spd:2,heal:3,lore:2,toxic:0,aura:2}},
  carnation:    {id:'carnation',name:'Carnation',sci:'Dianthus caryophyllus',r:1,type:'flower',con:'europe',biome:'temperate',e:'💮',col:'#f070a0',flavor:"The first cultivated flowers. 2000 years of breeding.",stats:{atk:1,def:2,int:3,spd:1,heal:3,lore:2,toxic:0,aura:2}},
  chrysanthemum:{id:'chrysanthemum',name:'Chrysanthemum',sci:'Chrysanthemum morifolium',r:1,type:'flower',con:'asia',biome:'temperate',e:'🌸',col:'#f8d040',flavor:"Japanese royal flower. 10,000 year cultivation history.",stats:{atk:1,def:3,int:4,spd:1,heal:3,lore:4,toxic:0,aura:3}},
  peony:        {id:'peony',name:'Peony',sci:'Paeonia officinalis',r:2,type:'flower',con:'asia',biome:'temperate',e:'🌺',col:'#f090b0',flavor:"Goddess flower of China. Symbol of prosperity and honor.",stats:{atk:2,def:3,int:4,spd:1,heal:3,lore:4,toxic:0,aura:3}},
  hibiscus:     {id:'hibiscus',name:'Hibiscus',sci:'Hibiscus rosa-sinensis',r:1,type:'flower',con:'global',biome:'tropical',e:'🌺',col:'#e84060',flavor:"National flower of Malaysia and South Korea.",stats:{atk:2,def:2,int:3,spd:2,heal:3,lore:2,toxic:0,aura:2}},
  magnolia:     {id:'magnolia',name:'Magnolia',sci:'Magnolia grandiflora',r:2,type:'flower',con:'north_america',biome:'temperate',e:'🌸',col:'#f0e8e0',flavor:"Ancient flower, existed before bees evolved.",stats:{atk:2,def:3,int:4,spd:1,heal:2,lore:4,toxic:0,aura:3}},
  iris:         {id:'iris',name:'Iris',sci:'Iris germanica',r:1,type:'flower',con:'europe',biome:'wetland',e:'🟣',col:'#8060c0',flavor:"Named for the Greek goddess of rainbows.",stats:{atk:2,def:2,int:4,spd:1,heal:2,lore:3,toxic:0,aura:3}},
});

//
// CATEGORY 2: EXOTIC & RARE FLOWERS
//
Object.assign(P, {
  orchid:        {id:'orchid',name:'Purple Orchid',sci:'Vanda coerulea',r:2,type:'flower',con:'asia',biome:'tropical',e:'🪷',col:'#c050e0',flavor:"Most diverse plant family. 28,000 species and counting.",stats:{atk:2,def:2,int:5,spd:2,heal:2,lore:5,toxic:0,aura:4}},
  lotus:         {id:'lotus',name:'Sacred Lotus',sci:'Nelumbo nucifera',r:2,type:'flower',con:'asia',biome:'aquatic',e:'🪷',col:'#f090c0',flavor:"Rises from mud to bloom. Symbol of purity across religions.",stats:{atk:1,def:3,int:5,spd:1,heal:4,lore:5,toxic:0,aura:5}},
  cherry_blossom:{id:'cherry_blossom',name:'Cherry Blossom',sci:'Prunus serrulata',r:3,type:'flower',con:'asia',biome:'temperate',e:'🌸',col:'#f8b0d0',flavor:"Sakura -- ephemeral beauty. Lasts only 2 weeks.",stats:{atk:2,def:3,int:5,spd:3,heal:4,lore:5,toxic:0,aura:5}},
  bird_of_paradise:{id:'bird_of_paradise',name:'Bird of Paradise',sci:'Strelitzia reginae',r:2,type:'flower',con:'africa',biome:'tropical',e:'🦜',col:'#f08030',flavor:"Looks exactly like a bird in flight. Pollinated by sunbirds.",stats:{atk:4,def:2,int:3,spd:3,heal:1,lore:3,toxic:0,aura:4}},
  heliconia:     {id:'heliconia',name:'Heliconia',sci:'Heliconia rostrata',r:2,type:'flower',con:'south_america',biome:'tropical',e:'🌺',col:'#f84040',flavor:"Lobster claw flower. Hummingbirds evolved with it.",stats:{atk:5,def:2,int:2,spd:3,heal:1,lore:3,toxic:0,aura:3}},
  passionflower: {id:'passionflower',name:'Passionflower',sci:'Passiflora incarnata',r:2,type:'flower',con:'south_america',biome:'tropical',e:'🌺',col:'#a060d8',flavor:"Spanish missionaries saw the Passion of Christ in its structure.",stats:{atk:2,def:2,int:4,spd:2,heal:2,lore:4,toxic:0,aura:4}},
  wisteria:      {id:'wisteria',name:'Wisteria',sci:'Wisteria sinensis',r:2,type:'flower',con:'asia',biome:'temperate',e:'🌿',col:'#9878c8',flavor:"Can live 1000 years. A single vine can weigh 1500 lbs.",stats:{atk:2,def:3,int:3,spd:2,heal:2,lore:3,toxic:0,aura:4}},
  ghost_orchid:  {id:'ghost_orchid',name:'Ghost Orchid',sci:'Dendrophylax lindenii',r:4,type:'flower',con:'north_america',biome:'swamp',e:'👻',col:'#e8f0e8',flavor:"No leaves. No chlorophyll. Floats ghostly in Florida swamps.",stats:{atk:2,def:3,int:8,spd:3,heal:3,lore:8,toxic:0,aura:7}},
  corpse_flower: {id:'corpse_flower',name:'Corpse Flower',sci:'Amorphophallus titanum',r:4,type:'flower',con:'asia',biome:'rainforest',e:'💀',col:'#d05080',flavor:"Blooms once per decade. Smells of rotting flesh for 48 hours.",stats:{atk:7,def:4,int:4,spd:2,heal:0,lore:7,toxic:3,aura:5}},
  rafflesia:     {id:'rafflesia',name:'Rafflesia',sci:'Rafflesia arnoldii',r:4,type:'flower',con:'asia',biome:'rainforest',e:'🌺',col:'#c04040',flavor:"World's largest flower. No roots, stems, or leaves. Pure parasite.",stats:{atk:6,def:4,int:5,spd:1,heal:1,lore:8,toxic:2,aura:5}},
  black_lotus:   {id:'black_lotus',name:'Black Lotus',sci:'Nelumbo nucifera var. nigra',r:5,type:'flower',con:'asia',biome:'sacred_lake',e:'⚫',col:'#303050',flavor:"Does not exist in nature. Born of grief and enlightenment.",stats:{atk:5,def:5,int:8,spd:5,heal:5,lore:9,toxic:0,aura:8}},
  jade_vine:     {id:'jade_vine',name:'Jade Vine',sci:'Strongylodon macrobotrys',r:4,type:'flower',con:'asia',biome:'rainforest',e:'💚',col:'#40c090',flavor:"Turquoise-green. Nearly extinct. Pollinated only by bats.",stats:{atk:3,def:4,int:5,spd:3,heal:4,lore:6,toxic:0,aura:5}},
  middlemist_red:{id:'middlemist_red',name:"Middlemist's Red",sci:'Camellia japonica',r:6,type:'flower',con:'europe',biome:'greenhouse',e:'❤️',col:'#cc2040',flavor:"Rarest flower on Earth. Only 2 specimens exist worldwide.",stats:{atk:3,def:5,int:7,spd:2,heal:5,lore:10,toxic:0,aura:8}},
  night_blooming_cereus:{id:'night_blooming_cereus',name:'Night-Blooming Cereus',sci:'Selenicereus grandiflorus',r:4,type:'flower',con:'central_america',biome:'desert',e:'🌙',col:'#f0e0c0',flavor:"Blooms once a year for a single night. Scent travels half a mile.",stats:{atk:2,def:3,int:6,spd:3,heal:4,lore:7,toxic:0,aura:6}},
  chocolate_cosmos:{id:'chocolate_cosmos',name:'Chocolate Cosmos',sci:'Cosmos atrosanguineus',r:4,type:'flower',con:'central_america',biome:'meadow',e:'🍫',col:'#3d1a0d',flavor:"Smells of chocolate. Extinct in the wild since 1902.",stats:{atk:2,def:3,int:5,spd:2,heal:3,lore:7,toxic:0,aura:6}},
  parrot_beak:   {id:'parrot_beak',name:"Parrot's Beak",sci:'Lotus berthelotii',r:5,type:'flower',con:'europe',biome:'volcanic',e:'🦜',col:'#e85020',flavor:"From the Canary Islands. Critically endangered. Pollinators extinct.",stats:{atk:4,def:3,int:5,spd:3,heal:2,lore:7,toxic:0,aura:5}},
  titan_arum:    {id:'titan_arum',name:'Titan Arum',sci:'Amorphophallus titanum',r:5,type:'flower',con:'asia',biome:'rainforest',e:'🌋',col:'#800040',flavor:"World's tallest flower spike. 10-year bloom cycle. Smells of death.",stats:{atk:8,def:5,int:5,spd:1,heal:0,lore:9,toxic:4,aura:7}},
  ghost_pipe:    {id:'ghost_pipe',name:'Ghost Pipe',sci:'Monotropa uniflora',r:3,type:'flower',con:'north_america',biome:'forest',e:'👁️',col:'#f0f0f8',flavor:"No chlorophyll. Ghost-white. Parasitizes mycorrhizal fungi.",stats:{atk:2,def:3,int:7,spd:2,heal:4,lore:7,toxic:0,aura:6}},
  youtan_poluo:  {id:'youtan_poluo',name:'Youtan Poluo',sci:'Barclaya longifolia',r:6,type:'flower',con:'asia',biome:'sacred_lake',e:'✨',col:'#fffcd4',flavor:"Buddhist legend: blooms once every 3000 years.",stats:{atk:2,def:4,int:9,spd:2,heal:6,lore:10,toxic:0,aura:9}},
});

//
// CATEGORY 3: MEDICINAL HERBS
//
Object.assign(P, {
  lavender:    {id:'lavender',name:'Lavender',sci:'Lavandula angustifolia',r:1,type:'herb',con:'europe',biome:'mediterranean',e:'💜',col:'#b06adc',flavor:"Used since ancient Rome for bathing, cooking, and healing.",stats:{atk:1,def:2,int:4,spd:1,heal:3,lore:2,toxic:0,aura:3}},
  mint:        {id:'mint',name:'Spearmint',sci:'Mentha spicata',r:1,type:'herb',con:'global',biome:'temperate',e:'🌿',col:'#60e090',flavor:"Fastest-spreading herb. Grows anywhere. Ancient Egyptians used it.",stats:{atk:1,def:2,int:3,spd:4,heal:2,lore:1,toxic:0,aura:2}},
  sage:        {id:'sage',name:'Sage',sci:'Salvia officinalis',r:1,type:'herb',con:'north_america',biome:'desert',e:'🌿',col:'#90b878',flavor:"Salvia means \"to heal\". Used in smudging ceremonies.",stats:{atk:2,def:2,int:4,spd:1,heal:3,lore:3,toxic:0,aura:3}},
  thyme:       {id:'thyme',name:'Thyme',sci:'Thymus vulgaris',r:1,type:'herb',con:'europe',biome:'mediterranean',e:'🌿',col:'#78a060',flavor:"Embalmed Egyptian mummies. Medieval knights' courage herb.",stats:{atk:2,def:3,int:2,spd:2,heal:3,lore:2,toxic:0,aura:2}},
  basil:       {id:'basil',name:'Holy Basil',sci:'Ocimum tenuiflorum',r:1,type:'herb',con:'asia',biome:'tropical',e:'🌿',col:'#50c870',flavor:"Sacred to Vishnu. \"Tulsi\" -- the queen of herbs in Ayurveda.",stats:{atk:1,def:3,int:3,spd:2,heal:3,lore:3,toxic:0,aura:3}},
  rosemary:    {id:'rosemary',name:'Rosemary',sci:'Salvia rosmarinus',r:1,type:'herb',con:'europe',biome:'mediterranean',e:'🌿',col:'#688048',flavor:"Remembrance herb. Boosts memory and cognitive function.",stats:{atk:1,def:2,int:5,spd:1,heal:2,lore:3,toxic:0,aura:3}},
  chamomile:   {id:'chamomile',name:'Chamomile',sci:'Matricaria chamomilla',r:1,type:'herb',con:'europe',biome:'meadow',e:'🌼',col:'#f0e060',flavor:"Ancient Egyptian remedy. One of the oldest herbs used by humans.",stats:{atk:1,def:2,int:3,spd:1,heal:4,lore:2,toxic:0,aura:3}},
  echinacea:   {id:'echinacea',name:'Echinacea',sci:'Echinacea purpurea',r:2,type:'herb',con:'north_america',biome:'plains',e:'🌸',col:'#d870a0',flavor:"Native American immune booster. Antiviral properties confirmed.",stats:{atk:2,def:3,int:3,spd:2,heal:4,lore:3,toxic:0,aura:3}},
  aloe:        {id:'aloe',name:'Aloe Vera',sci:'Aloe barbadensis',r:2,type:'herb',con:'africa',biome:'desert',e:'🪴',col:'#88d870',flavor:"The plant of immortality. Used for 6000 years medicinally.",stats:{atk:1,def:4,int:2,spd:1,heal:5,lore:3,toxic:0,aura:4}},
  ginger:      {id:'ginger',name:'Ginger Root',sci:'Zingiber officinale',r:2,type:'herb',con:'asia',biome:'tropical',e:'🌱',col:'#d4a060',flavor:"Most traded spice in history. Anti-nausea, anti-inflammatory.",stats:{atk:3,def:2,int:3,spd:2,heal:3,lore:2,toxic:0,aura:2}},
  turmeric:    {id:'turmeric',name:'Turmeric',sci:'Curcuma longa',r:2,type:'herb',con:'asia',biome:'tropical',e:'🌱',col:'#e8a020',flavor:"Golden spice. Curcumin fights inflammation at cellular level.",stats:{atk:2,def:3,int:4,spd:1,heal:3,lore:3,toxic:0,aura:3}},
  dandelion:   {id:'dandelion',name:'Dandelion',sci:'Taraxacum officinale',r:1,type:'herb',con:'global',biome:'meadow',e:'🌾',col:'#f0e060',flavor:"Every part edible. Tells time. Predicts rain.",stats:{atk:1,def:1,int:3,spd:3,heal:2,lore:1,toxic:0,aura:1}},
  yarrow:      {id:'yarrow',name:'Yarrow',sci:'Achillea millefolium',r:1,type:'herb',con:'global',biome:'meadow',e:'🌿',col:'#d0c880',flavor:"Achilles used it to heal wounds. Still used in wound care.",stats:{atk:2,def:3,int:2,spd:2,heal:4,lore:3,toxic:0,aura:2}},
  st_johns_wort:{id:'st_johns_wort',name:"St. John's Wort",sci:'Hypericum perforatum',r:2,type:'herb',con:'europe',biome:'meadow',e:'⭐',col:'#e8d040',flavor:"Medieval demon-repellent. Now proven antidepressant.",stats:{atk:2,def:2,int:4,spd:1,heal:4,lore:4,toxic:1,aura:4}},
  valerian:    {id:'valerian',name:'Valerian Root',sci:'Valeriana officinalis',r:2,type:'herb',con:'europe',biome:'wetland',e:'🌿',col:'#c8a0c0',flavor:"Pied Piper legend. Cats love it. Humans sleep deeply with it.",stats:{atk:1,def:2,int:5,spd:1,heal:4,lore:4,toxic:1,aura:4}},
  ashwagandha: {id:'ashwagandha',name:'Ashwagandha',sci:'Withania somnifera',r:3,type:'herb',con:'asia',biome:'desert',e:'🌿',col:'#d08840',flavor:"Adaptogen king. 3000 years in Ayurvedic medicine.",stats:{atk:2,def:4,int:5,spd:2,heal:4,lore:5,toxic:0,aura:4}},
  ginseng:     {id:'ginseng',name:'Ginseng',sci:'Panax ginseng',r:3,type:'herb',con:'asia',biome:'mountain',e:'🌱',col:'#c8a868',flavor:"Panacea of East Asia. Wild specimens sell for $10,000.",stats:{atk:3,def:3,int:5,spd:3,heal:4,lore:5,toxic:0,aura:4}},
  mugwort:     {id:'mugwort',name:'Mugwort',sci:'Artemisia vulgaris',r:2,type:'herb',con:'global',biome:'temperate',e:'🌿',col:'#808840',flavor:"Dream herb. Burns in acupuncture. Repels dark spirits.",stats:{atk:2,def:2,int:5,spd:2,heal:3,lore:5,toxic:1,aura:4}},
  feverfew:    {id:'feverfew',name:'Feverfew',sci:'Tanacetum parthenium',r:1,type:'herb',con:'europe',biome:'meadow',e:'🌸',col:'#f0f0a0',flavor:"Medieval migraine cure. Still clinically validated.",stats:{atk:1,def:2,int:3,spd:2,heal:4,lore:2,toxic:0,aura:2}},
});

//
// CATEGORY 4: TOXIC / POISONOUS PLANTS
//
Object.assign(P, {
  poison_ivy:   {id:'poison_ivy',name:'Poison Ivy',sci:'Toxicodendron radicans',r:2,type:'toxic',con:'north_america',biome:'forest',e:'☠️',col:'#b0d830',flavor:"Urushiol causes rash on 85% of humans. Spreads via smoke.",stats:{atk:5,def:3,int:2,spd:3,heal:0,lore:2,toxic:5,aura:3}},
  nightshade:   {id:'nightshade',name:'Deadly Nightshade',sci:'Atropa belladonna',r:2,type:'toxic',con:'europe',biome:'woodland',e:'🟣',col:'#800090',flavor:"Belladonna means \"beautiful woman.\" Dilates pupils for attractiveness.",stats:{atk:6,def:2,int:3,spd:2,heal:0,lore:4,toxic:6,aura:3}},
  wolfsbane:    {id:'wolfsbane',name:'Wolfsbane',sci:'Aconitum napellus',r:3,type:'toxic',con:'europe',biome:'mountain',e:'💙',col:'#5050d8',flavor:"Most poisonous plant in Europe. Used on arrow tips in battle.",stats:{atk:7,def:2,int:3,spd:2,heal:0,lore:4,toxic:7,aura:4}},
  hemlock:      {id:'hemlock',name:'Hemlock',sci:'Conium maculatum',r:3,type:'toxic',con:'europe',biome:'meadow',e:'⚗️',col:'#a0c060',flavor:"Killed Socrates. Paralyzes while mind stays conscious.",stats:{atk:6,def:2,int:4,spd:1,heal:0,lore:5,toxic:7,aura:3}},
  manchineel:   {id:'manchineel',name:'Manchineel Tree',sci:'Hippomane mancinella',r:4,type:'toxic',con:'central_america',biome:'coastal',e:'🌳',col:'#608040',flavor:"World's most dangerous tree. Standing under it in rain causes blisters.",stats:{atk:8,def:4,int:2,spd:1,heal:0,lore:6,toxic:9,aura:4}},
  venus_flytrap:{id:'venus_flytrap',name:'Venus Flytrap',sci:'Dionaea muscipula',r:3,type:'toxic',con:'north_america',biome:'swamp',e:'🪤',col:'#e03050',flavor:"Only grows naturally in North/South Carolina. Nearly extinct wild.",stats:{atk:6,def:3,int:3,spd:2,heal:1,lore:4,toxic:4,aura:4}},
  pitcher_plant:{id:'pitcher_plant',name:'Pitcher Plant',sci:'Nepenthes rajah',r:3,type:'toxic',con:'asia',biome:'highland',e:'🫙',col:'#c05040',flavor:"Some species trap rats, frogs, and small mammals.",stats:{atk:5,def:3,int:4,spd:1,heal:2,lore:5,toxic:4,aura:4}},
  sundew:       {id:'sundew',name:'Sundew',sci:'Drosera rotundifolia',r:2,type:'toxic',con:'global',biome:'bog',e:'💧',col:'#d04860',flavor:"Sticky death. Darwin studied it obsessively for 16 years.",stats:{atk:5,def:2,int:4,spd:2,heal:2,lore:4,toxic:4,aura:3}},
  oleander:     {id:'oleander',name:'Oleander',sci:'Nerium oleander',r:2,type:'toxic',con:'mediterranean',biome:'coastal',e:'🌸',col:'#e890c0',flavor:"Most poisonous ornamental plant. Beautiful killer in every garden.",stats:{atk:6,def:3,int:2,spd:2,heal:0,lore:3,toxic:6,aura:3}},
  monkshood:    {id:'monkshood',name:'Monkshood',sci:'Aconitum carmichaelii',r:3,type:'toxic',con:'asia',biome:'mountain',e:'🎭',col:'#4848a8',flavor:"Used in poison-tipped arrows across Asia and Europe.",stats:{atk:7,def:3,int:4,spd:2,heal:0,lore:5,toxic:7,aura:4}},
  death_camas:  {id:'death_camas',name:'Death Camas',sci:'Anticlea elegans',r:3,type:'toxic',con:'north_america',biome:'mountain',e:'💀',col:'#e0e8a0',flavor:"Kills livestock. Mistaken for wild onions. Has no smell.",stats:{atk:7,def:2,int:3,spd:2,heal:0,lore:4,toxic:7,aura:3}},
  strychnine_tree:{id:'strychnine_tree',name:'Strychnine Tree',sci:'Strychnos nux-vomica',r:4,type:'toxic',con:'asia',biome:'tropical',e:'🌳',col:'#688030',flavor:"Seeds contain strychnine. Convulsant poison. Used in rat wars.",stats:{atk:8,def:3,int:4,spd:1,heal:0,lore:5,toxic:8,aura:4}},
  water_hemlock:{id:'water_hemlock',name:'Water Hemlock',sci:'Cicuta virosa',r:3,type:'toxic',con:'europe',biome:'wetland',e:'💀',col:'#90b860',flavor:"North America's most violently toxic plant. Kills in 15 minutes.",stats:{atk:8,def:2,int:3,spd:2,heal:0,lore:5,toxic:8,aura:3}},
});

//
// CATEGORY 5: VINES & CLIMBERS
//
Object.assign(P, {
  ivy:          {id:'ivy',name:'English Ivy',sci:'Hedera helix',r:1,type:'vine',con:'europe',biome:'temperate',e:'🍃',col:'#308030',flavor:"Covers ruins. Purifies air. Can bring down castle walls over centuries.",stats:{atk:3,def:4,int:1,spd:3,heal:1,lore:2,toxic:0,aura:2}},
  kudzu:        {id:'kudzu',name:'Kudzu',sci:'Pueraria montana',r:2,type:'vine',con:'asia',biome:'subtropical',e:'🍃',col:'#406840',flavor:"Grows 1 foot per day. Eating the American South alive since 1876.",stats:{atk:4,def:3,int:1,spd:5,heal:1,lore:2,toxic:0,aura:2}},
  morning_glory:{id:'morning_glory',name:'Morning Glory',sci:'Ipomoea purpurea',r:1,type:'vine',con:'global',biome:'tropical',e:'🌅',col:'#8060d0',flavor:"Seeds contain LSA, related to LSD. Sacred to Aztecs.",stats:{atk:2,def:2,int:4,spd:3,heal:2,lore:4,toxic:1,aura:3}},
  virginia_creeper:{id:'virginia_creeper',name:'Virginia Creeper',sci:'Parthenocissus quinquefolia',r:1,type:'vine',con:'north_america',biome:'temperate',e:'🍂',col:'#c03020',flavor:"Turns blood-red in autumn. Feeds 39 bird species.",stats:{atk:3,def:4,int:2,spd:3,heal:1,lore:2,toxic:1,aura:2}},
  bougainvillea:{id:'bougainvillea',name:'Bougainvillea',sci:'Bougainvillea spectabilis',r:2,type:'vine',con:'south_america',biome:'tropical',e:'🌺',col:'#e050a0',flavor:"Named after Louis-Antoine de Bougainville, first Frenchman to circumnavigate Earth.",stats:{atk:3,def:3,int:2,spd:3,heal:2,lore:3,toxic:0,aura:3}},
  clematis:     {id:'clematis',name:'Clematis',sci:'Clematis vitalba',r:2,type:'vine',con:'europe',biome:'temperate',e:'🌸',col:'#c8a0e8',flavor:"Old Man\'s Beard. Used in basket-weaving since Neolithic times.",stats:{atk:2,def:3,int:3,spd:2,heal:2,lore:2,toxic:1,aura:3}},
  honeysuckle:  {id:'honeysuckle',name:'Honeysuckle',sci:'Lonicera japonica',r:1,type:'vine',con:'global',biome:'temperate',e:'🌼',col:'#f0d060',flavor:"Sweetest smell at dusk. Beloved by moths and fairies.",stats:{atk:1,def:2,int:3,spd:2,heal:4,lore:3,toxic:0,aura:4}},
  grapevine:    {id:'grapevine',name:'Wild Grapevine',sci:'Vitis vinifera sylvestris',r:2,type:'vine',con:'europe',biome:'mediterranean',e:'🍇',col:'#8040a0',flavor:"8000 years of cultivation. Foundation of Mediterranean civilization.",stats:{atk:2,def:3,int:3,spd:2,heal:3,lore:4,toxic:0,aura:3}},
  black_pepper_vine:{id:'black_pepper_vine',name:'Black Pepper Vine',sci:'Piper nigrum',r:2,type:'vine',con:'asia',biome:'tropical',e:'🌶️',col:'#404020',flavor:"Once used as currency. Wars fought over its trade routes.",stats:{atk:4,def:2,int:3,spd:2,heal:2,lore:4,toxic:2,aura:2}},
});

//
// CATEGORY 6: TREES & ANCIENT WOOD
//
Object.assign(P, {
  oak:          {id:'oak',name:'Oak Bark',sci:'Quercus robur',r:2,type:'tree',con:'europe',biome:'forest',e:'🌳',col:'#806040',flavor:"3500+ year lifespan. Supports 500+ species. Heart of empires.",stats:{atk:3,def:6,int:2,spd:1,heal:2,lore:3,toxic:0,aura:4}},
  willow:       {id:'willow',name:'Weeping Willow',sci:'Salix babylonica',r:2,type:'tree',con:'global',biome:'riparian',e:'🌿',col:'#70a050',flavor:"Aspirin derived from willow bark. Ancient pain relief.",stats:{atk:2,def:4,int:3,spd:2,heal:4,lore:3,toxic:0,aura:4}},
  bamboo:       {id:'bamboo',name:'Giant Bamboo',sci:'Dendrocalamus giganteus',r:2,type:'tree',con:'asia',biome:'subtropical',e:'🎋',col:'#70d040',flavor:"Fastest growing plant. 91cm per day. Stronger than steel.",stats:{atk:4,def:3,int:2,spd:5,heal:2,lore:2,toxic:0,aura:3}},
  baobab:       {id:'baobab',name:'Baobab',sci:'Adansonia digitata',r:3,type:'tree',con:'africa',biome:'savanna',e:'🌳',col:'#a08060',flavor:"Tree of life. Stores 120,000 liters of water. Lives 3000 years.",stats:{atk:3,def:6,int:3,spd:1,heal:4,lore:5,toxic:0,aura:5}},
  sequoia:      {id:'sequoia',name:'Giant Sequoia',sci:'Sequoiadendron giganteum',r:4,type:'tree',con:'north_america',biome:'forest',e:'🌲',col:'#805840',flavor:"Largest living thing on Earth. 3500+ years old. Requires fire to reproduce.",stats:{atk:4,def:8,int:3,spd:1,heal:4,lore:6,toxic:0,aura:6}},
  banyan:       {id:'banyan',name:'Banyan Tree',sci:'Ficus benghalensis',r:3,type:'tree',con:'asia',biome:'tropical',e:'🌳',col:'#608840',flavor:"Grows for centuries. A single tree becomes an entire forest.",stats:{atk:3,def:6,int:4,spd:1,heal:3,lore:5,toxic:0,aura:6}},
  eucalyptus:   {id:'eucalyptus',name:'Eucalyptus',sci:'Eucalyptus globulus',r:2,type:'tree',con:'oceania',biome:'woodland',e:'🌿',col:'#90b870',flavor:"Fastest growing tree. Koalas die without it. Oil cures everything.",stats:{atk:3,def:3,int:3,spd:3,heal:3,lore:2,toxic:1,aura:3}},
  cedar:        {id:'cedar',name:'Cedar of Lebanon',sci:'Cedrus libani',r:3,type:'tree',con:'middle_east',biome:'mountain',e:'🌲',col:'#608050',flavor:"Symbol of Lebanon. Biblical holy wood. Noah built arks from it.",stats:{atk:3,def:5,int:3,spd:1,heal:3,lore:5,toxic:0,aura:5}},
  birch:        {id:'birch',name:'Silver Birch',sci:'Betula pendula',r:2,type:'tree',con:'europe',biome:'forest',e:'🌲',col:'#e0e0d0',flavor:"Pioneer species. First to colonize bare ground after glaciers.",stats:{atk:2,def:4,int:3,spd:2,heal:3,lore:2,toxic:0,aura:3}},
  yew:          {id:'yew',name:'English Yew',sci:'Taxus baccata',r:3,type:'tree',con:'europe',biome:'temperate',e:'🌲',col:'#204020',flavor:"Oldest living thing in Britain at 5000 years. Taxol cures cancer.",stats:{atk:5,def:5,int:4,spd:1,heal:3,lore:6,toxic:4,aura:5}},
  dragon_blood_tree:{id:'dragon_blood_tree',name:'Dragon Blood Tree',sci:'Dracaena cinnabari',r:5,type:'tree',con:'middle_east',biome:'island',e:'🔴',col:'#8a1510',flavor:"Only on Socotra Island. Red sap used as varnish since ancient times.",stats:{atk:5,def:6,int:4,spd:1,heal:3,lore:8,toxic:2,aura:7}},
  franklinia:   {id:'franklinia',name:'Franklin Tree',sci:'Franklinia alatamaha',r:5,type:'tree',con:'north_america',biome:'swamp',e:'🌸',col:'#f0e8d0',flavor:"Extinct in the wild since 1803. All specimens from 1 collection.",stats:{atk:2,def:4,int:6,spd:2,heal:4,lore:9,toxic:0,aura:7}},
  palo_santo:   {id:'palo_santo',name:'Palo Santo',sci:'Bursera graveolens',r:3,type:'tree',con:'south_america',biome:'coastal',e:'🪵',col:'#d0a858',flavor:"Holy wood. Must die naturally for its magic to work.",stats:{atk:2,def:3,int:5,spd:2,heal:5,lore:6,toxic:0,aura:6}},
  suicide_palm: {id:'suicide_palm',name:'Suicide Palm',sci:'Tahina spectabilis',r:6,type:'tree',con:'africa',biome:'highland',e:'🌴',col:'#80a040',flavor:"Grows for 50 years, flowers once, then dies. Discovered in 2005.",stats:{atk:4,def:5,int:5,spd:1,heal:2,lore:8,toxic:0,aura:7}},
  welwitschia:  {id:'welwitschia',name:'Welwitschia',sci:'Welwitschia mirabilis',r:4,type:'tree',con:'africa',biome:'desert',e:'🏺',col:'#c0a060',flavor:"Living fossil. 2 leaves for 1000+ years. Found only in Namib Desert.",stats:{atk:4,def:5,int:6,spd:1,heal:3,lore:8,toxic:0,aura:7}},
  encephalartos:{id:'encephalartos',name:"Wood's Cycad",sci:"Encephalartos woodii",r:7,type:'tree',con:'africa',biome:'garden',e:'🌿',col:'#205830',flavor:"Extinct in wild. All plants are male. No reproduction possible.",stats:{atk:3,def:6,int:8,spd:1,heal:4,lore:10,toxic:0,aura:9}},
});

//
// CATEGORY 7: CACTI & SUCCULENTS
//
Object.assign(P, {
  saguaro:      {id:'saguaro',name:'Saguaro Cactus',sci:'Carnegiea gigantea',r:2,type:'cactus',con:'north_america',biome:'desert',e:'🌵',col:'#70a050',flavor:"Arizona symbol. Lives 200 years. Arms don\'t grow until age 75.",stats:{atk:4,def:5,int:1,spd:1,heal:2,lore:3,toxic:0,aura:3}},
  prickly_pear: {id:'prickly_pear',name:'Prickly Pear',sci:'Opuntia ficus-indica',r:1,type:'cactus',con:'north_america',biome:'desert',e:'🌵',col:'#80b840',flavor:"The original edible cactus. Used for food, dye, and medicine.",stats:{atk:3,def:4,int:1,spd:1,heal:3,lore:2,toxic:0,aura:2}},
  dragon_fruit_cactus:{id:'dragon_fruit_cactus',name:'Dragon Fruit Cactus',sci:'Selenicereus undatus',r:2,type:'cactus',con:'central_america',biome:'tropical',e:'🐉',col:'#d870b8',flavor:"Blooms only at night. Pollinated only by bats and moths.",stats:{atk:2,def:3,int:3,spd:2,heal:3,lore:3,toxic:0,aura:3}},
  monkey_tail_cactus:{id:'monkey_tail_cactus',name:'Monkey Tail Cactus',sci:'Hildewintera colademononis',r:5,type:'cactus',con:'south_america',biome:'mountain',e:'🐒',col:'#d4b060',flavor:"Critically endangered. Hangs from cliffs in Bolivia.",stats:{atk:3,def:4,int:4,spd:3,heal:2,lore:7,toxic:0,aura:5}},
  stone_plant:  {id:'stone_plant',name:'Living Stone',sci:'Lithops salicola',r:3,type:'cactus',con:'africa',biome:'desert',e:'🪨',col:'#c8b890',flavor:"Mimics pebbles perfectly. A master of camouflage.",stats:{atk:1,def:5,int:4,spd:1,heal:3,lore:5,toxic:0,aura:4}},
  ice_plant:    {id:'ice_plant',name:'Ice Plant',sci:'Delosperma cooperi',r:2,type:'cactus',con:'africa',biome:'coastal',e:'💎',col:'#a0e0f0',flavor:"Crystals on leaves look like frost. Stops erosion.",stats:{atk:2,def:5,int:3,spd:2,heal:4,lore:2,toxic:0,aura:3}},
});

//
// CATEGORY 8: AQUATIC PLANTS
//
Object.assign(P, {
  kelp:         {id:'kelp',name:'Giant Kelp',sci:'Macrocystis pyrifera',r:2,type:'aquatic',con:'global',biome:'ocean',e:'🌊',col:'#308060',flavor:"Underwater forests. Fastest growing marine organism. 60cm per day.",stats:{atk:2,def:4,int:3,spd:3,heal:3,lore:3,toxic:0,aura:3}},
  water_lily:   {id:'water_lily',name:'Victoria Lily',sci:'Victoria amazonica',r:2,type:'aquatic',con:'south_america',biome:'freshwater',e:'🪷',col:'#f0c0e0',flavor:"Leaves support 65kg. Changed architectural design when seen in 1849.",stats:{atk:1,def:3,int:4,spd:2,heal:4,lore:4,toxic:0,aura:4}},
  mangrove:     {id:'mangrove',name:'Red Mangrove',sci:'Rhizophora mangle',r:3,type:'aquatic',con:'global',biome:'coastal',e:'🌿',col:'#507040',flavor:"Walks with prop roots. Births land from sea.",stats:{atk:3,def:5,int:3,spd:2,heal:3,lore:4,toxic:0,aura:4}},
  seagrass:     {id:'seagrass',name:'Neptune Grass',sci:'Posidonia oceanica',r:2,type:'aquatic',con:'global',biome:'ocean',e:'🌿',col:'#80c060',flavor:"The oldest living organism: 100,000 year old meadow in Mediterranean.",stats:{atk:1,def:3,int:4,spd:3,heal:4,lore:6,toxic:0,aura:4}},
  blue_water_lily:{id:'blue_water_lily',name:'Blue Water Lily',sci:'Nymphaea caerulea',r:3,type:'aquatic',con:'africa',biome:'river',e:'💙',col:'#4080c0',flavor:"Sacred to ancient Egyptians. Mild entheogen in Nile rituals.",stats:{atk:2,def:3,int:6,spd:2,heal:4,lore:7,toxic:1,aura:5}},
  duckweed:     {id:'duckweed',name:'Giant Duckweed',sci:'Spirodela polyrhiza',r:1,type:'aquatic',con:'global',biome:'freshwater',e:'🟢',col:'#70c830',flavor:"Smallest flowering plant. Contains 40% protein. Future food source.",stats:{atk:1,def:2,int:3,spd:4,heal:3,lore:2,toxic:0,aura:1}},
  bladderwort:  {id:'bladderwort',name:'Bladderwort',sci:'Utricularia gibba',r:3,type:'aquatic',con:'global',biome:'bog',e:'💛',col:'#f0d040',flavor:"Fastest known trap in nature. Catches prey in 0.5 milliseconds.",stats:{atk:6,def:2,int:5,spd:5,heal:1,lore:5,toxic:3,aura:4}},
  water_hyacinth:{id:'water_hyacinth',name:'Water Hyacinth',sci:'Pontederia crassipes',r:2,type:'aquatic',con:'south_america',biome:'freshwater',e:'🌸',col:'#9090e0',flavor:"Most prolific plant on Earth. Doubles in 2 weeks. Ecosystem destroyer.",stats:{atk:4,def:3,int:2,spd:5,heal:2,lore:2,toxic:0,aura:2}},
});

//
// CATEGORY 9: MOSSES, FERNS & ANCIENT PLANTS
//
Object.assign(P, {
  moss:         {id:'moss',name:'Sphagnum Moss',sci:'Sphagnum papillosum',r:1,type:'moss',con:'global',biome:'forest',e:'🟢',col:'#507040',flavor:"Holds 20x its weight in water. Preserved bodies for 2000 years.",stats:{atk:1,def:3,int:2,spd:1,heal:5,lore:2,toxic:0,aura:3}},
  fern:         {id:'fern',name:'Tree Fern',sci:'Cyathea medullaris',r:1,type:'fern',con:'global',biome:'forest',e:'🌿',col:'#408040',flavor:"360 million years old unchanged. Survived 5 mass extinctions.",stats:{atk:1,def:3,int:3,spd:2,heal:4,lore:4,toxic:0,aura:3}},
  horsetail:    {id:'horsetail',name:'Horsetail',sci:'Equisetum arvense',r:2,type:'fern',con:'global',biome:'wetland',e:'🌿',col:'#60a060',flavor:"Living fossil. Used by Romans to clean pots (contains silica).",stats:{atk:2,def:3,int:3,spd:3,heal:3,lore:4,toxic:0,aura:3}},
  clubmoss:     {id:'clubmoss',name:'Club Moss',sci:'Lycopodium clavatum',r:2,type:'fern',con:'global',biome:'forest',e:'🌿',col:'#408030',flavor:"Spores ignite explosively. Used in 19th century theater for lighting effects.",stats:{atk:3,def:3,int:2,spd:2,heal:3,lore:3,toxic:0,aura:3}},
  resurrection_plant:{id:'resurrection_plant',name:'Resurrection Plant',sci:'Selaginella lepidophylla',r:3,type:'fern',con:'north_america',biome:'desert',e:'🔁',col:'#909040',flavor:"Comes back from completely dead. Can survive 100 years without water.",stats:{atk:1,def:4,int:4,spd:2,heal:6,lore:6,toxic:0,aura:6}},
  staghorn_fern:{id:'staghorn_fern',name:'Staghorn Fern',sci:'Platycerium bifurcatum',r:2,type:'fern',con:'oceania',biome:'rainforest',e:'🦌',col:'#60a040',flavor:"Grows on trees without roots in soil. Collects its own mulch.",stats:{atk:2,def:3,int:3,spd:2,heal:3,lore:3,toxic:0,aura:3}},
  walking_fern: {id:'walking_fern',name:'Walking Fern',sci:'Asplenium rhizophyllum',r:3,type:'fern',con:'north_america',biome:'rocky',e:'🚶',col:'#50a030',flavor:"Propagates by touching ground with frond tips. Literally walks.",stats:{atk:2,def:3,int:4,spd:3,heal:3,lore:4,toxic:0,aura:4}},
});

//
// CATEGORY 10: GRASSES & GRAINS
//
Object.assign(P, {
  wheat:        {id:'wheat',name:'Einkorn Wheat',sci:'Triticum monococcum',r:1,type:'grass',con:'global',biome:'plains',e:'🌾',col:'#e8d080',flavor:"First cultivated plant. Trigger of human civilization 10,000 years ago.",stats:{atk:1,def:2,int:3,spd:2,heal:4,lore:4,toxic:0,aura:2}},
  switchgrass:  {id:'switchgrass',name:'Switchgrass',sci:'Panicum virgatum',r:1,type:'grass',con:'north_america',biome:'plains',e:'🌾',col:'#c0a850',flavor:"Prairie engine. Biofuel potential. Carbon sink extraordinaire.",stats:{atk:2,def:3,int:2,spd:4,heal:2,lore:1,toxic:0,aura:2}},
  bamboo_grass: {id:'bamboo_grass',name:'Black Bamboo',sci:'Phyllostachys nigra',r:3,type:'grass',con:'asia',biome:'temperate',e:'🎋',col:'#202020',flavor:"Turns jet black in sunlight. Ninja weapon of choice.",stats:{atk:5,def:4,int:3,spd:4,heal:1,lore:4,toxic:0,aura:4}},
  pampas_grass: {id:'pampas_grass',name:'Pampas Grass',sci:'Cortaderia selloana',r:2,type:'grass',con:'south_america',biome:'plains',e:'🌾',col:'#d0c090',flavor:"Razor-edged leaves. Swaying plumes visible for miles.",stats:{atk:4,def:3,int:1,spd:3,heal:1,lore:1,toxic:1,aura:2}},
  blue_fescue:  {id:'blue_fescue',name:'Blue Fescue',sci:'Festuca glauca',r:1,type:'grass',con:'europe',biome:'mountain',e:'🔵',col:'#8098b0',flavor:"Silver-blue blades. Thrives in poor soil. Indicator of glacier retreat.",stats:{atk:1,def:3,int:3,spd:2,heal:2,lore:2,toxic:0,aura:3}},
  corn:         {id:'corn',name:'Maize',sci:'Zea mays',r:1,type:'grass',con:'central_america',biome:'plains',e:'🌽',col:'#f0e040',flavor:"Aztec sacred crop. Bred from a single grass over 9000 years.",stats:{atk:2,def:2,int:3,spd:2,heal:3,lore:3,toxic:0,aura:2}},
});

//
// CATEGORY 11: ARCTIC & ALPINE
//
Object.assign(P, {
  edelweiss:    {id:'edelweiss',name:'Edelweiss',sci:'Leontopodium alpinum',r:3,type:'rare',con:'europe',biome:'alpine',e:'❄️',col:'#e8f0e8',flavor:"Alpine legend. Only grows above 1800m. Symbol of Swiss courage.",stats:{atk:2,def:5,int:4,spd:2,heal:4,lore:5,toxic:0,aura:5}},
  arctic_poppy: {id:'arctic_poppy',name:'Arctic Poppy',sci:'Papaver radicatum',r:3,type:'rare',con:'arctic',biome:'tundra',e:'🌼',col:'#fff080',flavor:"Blooms 2cm from permafrost. Follows the sun to stay warm.",stats:{atk:3,def:4,int:4,spd:2,heal:3,lore:4,toxic:0,aura:4}},
  moss_campion: {id:'moss_campion',name:'Moss Campion',sci:'Silene acaulis',r:3,type:'rare',con:'arctic',biome:'tundra',e:'💗',col:'#f090c0',flavor:"Cushion plant. Lives 300 years. Grows 1cm per decade in arctic.",stats:{atk:1,def:5,int:3,spd:1,heal:5,lore:5,toxic:0,aura:5}},
  snowdrop:     {id:'snowdrop',name:'Snowdrop',sci:'Galanthus nivalis',r:2,type:'rare',con:'europe',biome:'forest',e:'🌨️',col:'#f0f8ff',flavor:"First flower after winter. Breaks through snow. Symbol of hope.",stats:{atk:1,def:4,int:3,spd:2,heal:5,lore:4,toxic:1,aura:4}},
  purple_saxifrage:{id:'purple_saxifrage',name:'Purple Saxifrage',sci:'Saxifraga oppositifolia',r:3,type:'rare',con:'arctic',biome:'tundra',e:'💜',col:'#a040a0',flavor:"First plant to recolonize after glaciers. Thrives at 83°N latitude.",stats:{atk:2,def:5,int:4,spd:2,heal:4,lore:5,toxic:0,aura:5}},
  ice_lotus:    {id:'ice_lotus',name:'Ice Lotus',sci:'Saussurea laniceps',r:5,type:'rare',con:'asia',biome:'himalayan',e:'🧊',col:'#c8e8f8',flavor:"Grows at 4500m in Himalayas. Translucent petals like ice.",stats:{atk:2,def:6,int:6,spd:2,heal:5,lore:7,toxic:0,aura:7}},
});

//
// CATEGORY 12: TROPICAL RARITIES
//
Object.assign(P, {
  black_bat_flower:{id:'black_bat_flower',name:'Black Bat Flower',sci:'Tacca chantrieri',r:4,type:'rare',con:'asia',biome:'tropical',e:'🦇',col:'#101018',flavor:"Rarest black flower in nature. Whisker filaments 28cm long.",stats:{atk:5,def:3,int:6,spd:3,heal:1,lore:8,toxic:0,aura:7}},
  parrot_flower: {id:'parrot_flower',name:'Parrot Flower',sci:'Impatiens psittacina',r:5,type:'rare',con:'asia',biome:'highland',e:'🦜',col:'#e86030',flavor:"Looks exactly like a flying parrot. Discovered 1901, barely seen since.",stats:{atk:3,def:3,int:6,spd:4,heal:3,lore:9,toxic:0,aura:7}},
  lady_slipper_orchid:{id:'lady_slipper_orchid',name:"Lady's Slipper Orchid",sci:'Cypripedium calceolus',r:4,type:'rare',con:'europe',biome:'forest',e:'👠',col:'#f0c040',flavor:"Takes 15 years to first bloom. Protected by armed guards in UK.",stats:{atk:2,def:4,int:7,spd:2,heal:4,lore:8,toxic:0,aura:7}},
  shenzhen_orchid:{id:'shenzhen_orchid',name:'Shenzhen Nongke Orchid',sci:'Shenzhen Nongke var.',r:6,type:'rare',con:'asia',biome:'greenhouse',e:'🌟',col:'#f0e0d0',flavor:"Man-made. Took 8 years to develop. Sold for $200,000.",stats:{atk:2,def:4,int:9,spd:2,heal:5,lore:10,toxic:0,aura:9}},
  rothschild_slipper:{id:'rothschild_slipper',name:"Rothschild's Slipper",sci:'Paphiopedilum rothschildianum',r:5,type:'rare',con:'asia',biome:'highland',e:'👑',col:'#f0a040',flavor:"Blooms after 15 years. $5000 per blossom. Borneo highlands only.",stats:{atk:2,def:4,int:8,spd:2,heal:4,lore:9,toxic:0,aura:8}},
  westem_underground_orchid:{id:'westem_underground_orchid',name:'Underground Orchid',sci:'Rhizanthella gardneri',r:6,type:'rare',con:'oceania',biome:'underground',e:'🕳️',col:'#f0d0e0',flavor:"Entire life underground. Never sees sunlight. Discovered 1928.",stats:{atk:2,def:4,int:9,spd:1,heal:5,lore:10,toxic:0,aura:9}},
  kadupul:       {id:'kadupul',name:'Kadupul Flower',sci:'Epiphyllum oxypetalum',r:5,type:'rare',con:'asia',biome:'tropical',e:'🌙',col:'#fffce0',flavor:"Priceless. Only blooms in the dead of night and wilts by dawn.",stats:{atk:1,def:3,int:9,spd:4,heal:6,lore:10,toxic:0,aura:9}},
});

//
// CATEGORY 13: PSYCHEDELIC & ENTHEOGENIC PLANTS
//
Object.assign(P, {
  ayahuasca:    {id:'ayahuasca',name:'Ayahuasca Vine',sci:'Banisteriopsis caapi',r:4,type:'entheogen',con:'south_america',biome:'rainforest',e:'🌀',col:'#6030b0',flavor:"Vine of the soul. Used for 1000+ years in Amazonian shamanism.",stats:{atk:3,def:2,int:9,spd:2,heal:3,lore:9,toxic:2,aura:8}},
  peyote:       {id:'peyote',name:'Peyote Cactus',sci:'Lophophora williamsii',r:4,type:'entheogen',con:'north_america',biome:'desert',e:'🟢',col:'#80a030',flavor:"Native American sacrament. Mescaline. Grows 1cm per year.",stats:{atk:2,def:2,int:9,spd:2,heal:3,lore:9,toxic:3,aura:8}},
  datura:       {id:'datura',name:'Datura',sci:'Datura stramonium',r:3,type:'entheogen',con:'global',biome:'desert',e:'🌸',col:'#e8f0c0',flavor:"Devil\'s trumpet. Delirium, not visions. Thin line to death.",stats:{atk:6,def:2,int:6,spd:2,heal:0,lore:6,toxic:7,aura:4}},
  blue_lotus:   {id:'blue_lotus',name:'Blue Lotus',sci:'Nymphaea caerulea',r:3,type:'entheogen',con:'africa',biome:'river',e:'🔵',col:'#4080c0',flavor:"Ancient Egyptian ritual plant. Mild euphoric alkaloids.",stats:{atk:2,def:3,int:7,spd:2,heal:4,lore:7,toxic:1,aura:6}},
  salvia:       {id:'salvia',name:'Salvia Divinorum',sci:'Salvia divinorum',r:3,type:'entheogen',con:'central_america',biome:'cloud_forest',e:'🌿',col:'#40b840',flavor:"Seer\'s sage. Used by Mazatec shamans. Most potent natural hallucinogen.",stats:{atk:2,def:2,int:10,spd:3,heal:2,lore:9,toxic:1,aura:8}},
  kava:         {id:'kava',name:'Kava',sci:'Piper methysticum',r:3,type:'entheogen',con:'oceania',biome:'tropical',e:'🫖',col:'#a08840',flavor:"Pacific Islands ceremonial drink. Kavalactones induce calm bliss.",stats:{atk:1,def:3,int:5,spd:2,heal:5,lore:5,toxic:1,aura:5}},
  blue_agave:   {id:'blue_agave',name:'Blue Agave',sci:'Agave tequilana',r:2,type:'entheogen',con:'central_america',biome:'desert',e:'🌵',col:'#4080a0',flavor:"Tequila origin. Blooms once after 10 years, then dies.",stats:{atk:4,def:4,int:3,spd:2,heal:2,lore:4,toxic:2,aura:3}},
});

//
// CATEGORY 14: MEDICINAL ROOTS & FUNGI-ASSOCIATED PLANTS
//
Object.assign(P, {
  turmeric_root:{id:'turmeric_root',name:'Wild Turmeric',sci:'Curcuma aromatica',r:3,type:'root',con:'asia',biome:'forest',e:'🟡',col:'#e8a020',flavor:"Anti-inflammatory comparable to ibuprofen. Sacred in Hinduism.",stats:{atk:2,def:3,int:5,spd:1,heal:4,lore:4,toxic:0,aura:4}},
  ginseng_wild: {id:'ginseng_wild',name:'Wild Ginseng',sci:'Panax ginseng',r:4,type:'root',con:'asia',biome:'old_growth',e:'🌱',col:'#c8a868',flavor:"Wild specimens take 100 years to mature. $50,000 per root.",stats:{atk:3,def:4,int:7,spd:3,heal:5,lore:7,toxic:0,aura:6}},
  mandrake:     {id:'mandrake',name:'Mandrake Root',sci:'Mandragora officinarum',r:3,type:'root',con:'europe',biome:'mediterranean',e:'🧙',col:'#a06030',flavor:"Root shaped like a human. Screams when pulled. Anesthetic used in Rome.",stats:{atk:5,def:3,int:7,spd:2,heal:3,lore:8,toxic:3,aura:6}},
  black_cohosh: {id:'black_cohosh',name:'Black Cohosh',sci:'Actaea racemosa',r:3,type:'root',con:'north_america',biome:'forest',e:'🌿',col:'#404020',flavor:"Cherokee medicine. Hormone regulator. Growing scarce from overharvesting.",stats:{atk:2,def:3,int:5,spd:1,heal:5,lore:5,toxic:1,aura:4}},
  goldenseal:   {id:'goldenseal',name:'Goldenseal',sci:'Hydrastis canadensis',r:3,type:'root',con:'north_america',biome:'forest',e:'⭐',col:'#d0a820',flavor:"Cherokee healing root. Berberine fights drug-resistant bacteria.",stats:{atk:2,def:4,int:5,spd:1,heal:5,lore:5,toxic:0,aura:4}},
  bloodroot:    {id:'bloodroot',name:'Bloodroot',sci:'Sanguinaria canadensis',r:3,type:'root',con:'north_america',biome:'forest',e:'🩸',col:'#c02030',flavor:"Blood-red sap. Kills cancer cells topically but destroys healthy tissue too.",stats:{atk:6,def:3,int:5,spd:2,heal:2,lore:6,toxic:4,aura:4}},
});

//
//
//  THE GRAND MYCOLOGY -- MUSHROOMS
//  150+ species across 12 subcategories
//  The rarest and most powerful ingredients
//
//

// MUSHROOM SUBCATEGORY A: MEDICINAL POWERHOUSES
Object.assign(P, {
  shiitake:     {id:'shiitake',name:'Shiitake',sci:'Lentinula edodes',r:5,type:'mushroom',mtype:'medicinal',con:'asia',biome:'temperate_forest',e:'🍄',col:'#a06030',flavor:"Lentinan boosts immune system. 3 million tons cultivated yearly.",stats:{atk:4,def:5,int:6,spd:3,heal:5,lore:4,toxic:0,aura:5}},
  reishi:       {id:'reishi',name:'Reishi',sci:'Ganoderma lucidum',r:5,type:'mushroom',mtype:'medicinal',con:'asia',biome:'old_growth',e:'🍄',col:'#c04020',flavor:"Mushroom of immortality. 2000 years in TCM. Boosts NK cells.",stats:{atk:3,def:6,int:7,spd:2,heal:6,lore:5,toxic:0,aura:6}},
  lions_mane:   {id:'lions_mane',name:"Lion's Mane",sci:'Hericium erinaceus',r:5,type:'mushroom',mtype:'medicinal',con:'asia',biome:'deciduous',e:'🦁',col:'#f0e8c0',flavor:"Regrows neurons. NGF synthesis. Dementia research breakthrough.",stats:{atk:3,def:4,int:9,spd:2,heal:5,lore:5,toxic:0,aura:7}},
  turkey_tail:  {id:'turkey_tail',name:'Turkey Tail',sci:'Trametes versicolor',r:5,type:'mushroom',mtype:'medicinal',con:'north_america',biome:'forest',e:'🦃',col:'#806840',flavor:"FDA-approved cancer immunotherapy. PSK approved in Japan since 1977.",stats:{atk:3,def:7,int:6,spd:3,heal:6,lore:5,toxic:0,aura:6}},
  chaga:        {id:'chaga',name:'Chaga',sci:'Inonotus obliquus',r:6,type:'mushroom',mtype:'medicinal',con:'europe',biome:'birch_boreal',e:'🟤',col:'#503020',flavor:"Siberian shaman's tea. World's highest ORAC antioxidant value.",stats:{atk:4,def:7,int:7,spd:2,heal:7,lore:6,toxic:0,aura:7}},
  maitake:      {id:'maitake',name:'Maitake',sci:'Grifola frondosa',r:4,type:'mushroom',mtype:'medicinal',con:'asia',biome:'oak_forest',e:'🍂',col:'#b07840',flavor:"Dancing mushroom. D-fraction fights cancer. Regulates blood sugar.",stats:{atk:4,def:5,int:7,spd:3,heal:6,lore:5,toxic:0,aura:6}},
  chaga_siberian:{id:'chaga_siberian',name:'Siberian Chaga',sci:'Inonotus obliquus subsp.',r:7,type:'mushroom',mtype:'medicinal',con:'europe',biome:'siberian_boreal',e:'⬛',col:'#1a0800',flavor:"From birches over 200 years old. 1000x ORAC of blueberries.",stats:{atk:5,def:8,int:8,spd:2,heal:8,lore:7,toxic:0,aura:8}},
  mesima:       {id:'mesima',name:'Mesima',sci:'Phellinus linteus',r:5,type:'mushroom',mtype:'medicinal',con:'asia',biome:'deciduous',e:'🟠',col:'#a05020',flavor:"Super-immune mushroom. Used with chemo in Korean medicine.",stats:{atk:3,def:6,int:6,spd:2,heal:6,lore:5,toxic:0,aura:6}},
  agarikon:     {id:'agarikon',name:'Agarikon',sci:'Laricifomes officinalis',r:6,type:'mushroom',mtype:'medicinal',con:'north_america',biome:'old_growth',e:'🌰',col:'#d0b080',flavor:"Ancient Roman remedy. Anti-pox activity. 500-year hyphae.",stats:{atk:3,def:6,int:7,spd:2,heal:7,lore:7,toxic:0,aura:7}},
});

// MUSHROOM SUBCATEGORY B: CULINARY KINGS
Object.assign(P, {
  chanterelle:  {id:'chanterelle',name:'Golden Chanterelle',sci:'Cantharellus cibarius',r:5,type:'mushroom',mtype:'culinary',con:'europe',biome:'mixed_forest',e:'🍂',col:'#f09020',flavor:"Europe's most prized wild mushroom. Cannot be cultivated.",stats:{atk:4,def:5,int:6,spd:4,heal:5,lore:4,toxic:0,aura:5}},
  porcini:      {id:'porcini',name:'Porcini',sci:'Boletus edulis',r:5,type:'mushroom',mtype:'culinary',con:'europe',biome:'mixed_forest',e:'🍄',col:'#b07040',flavor:"Italy's king mushroom. Dried adds umami impossible to replicate.",stats:{atk:4,def:5,int:6,spd:3,heal:5,lore:4,toxic:0,aura:5}},
  matsutake:    {id:'matsutake',name:'Matsutake',sci:'Tricholoma matsutake',r:6,type:'mushroom',mtype:'culinary',con:'asia',biome:'pine_forest',e:'🍄',col:'#c08050',flavor:"$2000/kg. Japans most prized. Cannot be farmed. Scarcer each year.",stats:{atk:5,def:6,int:7,spd:3,heal:5,lore:6,toxic:0,aura:6}},
  truffle_black:{id:'truffle_black',name:'Perigord Truffle',sci:'Tuber melanosporum',r:7,type:'mushroom',mtype:'culinary',con:'europe',biome:'oak_forest',e:'⚫',col:'#201818',flavor:"$3000 per kg. The black diamond. Hunted by pigs and dogs. Underground god.",stats:{atk:5,def:6,int:9,spd:2,heal:5,lore:7,toxic:0,aura:8}},
  truffle_white:{id:'truffle_white',name:'White Truffle',sci:'Tuber magnatum',r:7,type:'mushroom',mtype:'culinary',con:'europe',biome:'riparian_forest',e:'⚪',col:'#f8f0d8',flavor:"$10000 per kg. Worlds most expensive food. No cultivation possible.",stats:{atk:4,def:6,int:10,spd:2,heal:6,lore:8,toxic:0,aura:9}},
  morel:        {id:'morel',name:'Black Morel',sci:'Morchella elata',r:4,type:'mushroom',mtype:'culinary',con:'north_america',biome:'mixed_forest',e:'🏺',col:'#403020',flavor:"Appears after forest fires. Cannot be cultivated. Spring ghost.",stats:{atk:4,def:4,int:6,spd:4,heal:4,lore:5,toxic:0,aura:5}},
  king_oyster:  {id:'king_oyster',name:'King Oyster',sci:'Pleurotus eryngii',r:4,type:'mushroom',mtype:'culinary',con:'europe',biome:'meadow',e:'🦪',col:'#e0d8c8',flavor:"Largest Pleurotus. Grows on eryngo root. Meaty texture.",stats:{atk:3,def:5,int:5,spd:3,heal:5,lore:3,toxic:0,aura:4}},
  oyster:       {id:'oyster',name:'Pearl Oyster',sci:'Pleurotus ostreatus',r:5,type:'mushroom',mtype:'medicinal',con:'global',biome:'hardwood',e:'🦪',col:'#d0e0d0',flavor:"First mushroom cultivated at scale. Contains lovastatin (cholesterol drug).",stats:{atk:3,def:5,int:6,spd:3,heal:6,lore:3,toxic:0,aura:5}},
});

// MUSHROOM SUBCATEGORY C: DEADLY KILLERS
Object.assign(P, {
  death_cap:    {id:'death_cap',name:'Death Cap',sci:'Amanita phalloides',r:6,type:'mushroom',mtype:'toxic',con:'europe',biome:'oak_forest',e:'💀',col:'#d0e020',flavor:"Causes 90% of mushroom fatalities. Sweet taste. Symptoms delayed 24hrs.",stats:{atk:10,def:3,int:5,spd:3,heal:0,lore:7,toxic:10,aura:5}},
  fly_agaric:   {id:'fly_agaric',name:'Fly Agaric',sci:'Amanita muscaria',r:6,type:'mushroom',mtype:'toxic',con:'europe',biome:'birch_forest',e:'🍄',col:'#f03020',flavor:"Santa Claus mushroom theory. Viking berserkers. Shaman visions.",stats:{atk:9,def:3,int:5,spd:4,heal:0,lore:7,toxic:8,aura:6}},
  destroying_angel:{id:'destroying_angel',name:'Destroying Angel',sci:'Amanita virosa',r:6,type:'mushroom',mtype:'toxic',con:'europe',biome:'forest',e:'👼',col:'#f8f0d0',flavor:"Pure white, pure death. α-amanitin destroys liver. No antidote.",stats:{atk:10,def:3,int:5,spd:3,heal:0,lore:7,toxic:10,aura:4}},
  death_angel:  {id:'death_angel',name:'Death Angel',sci:'Amanita ocreata',r:6,type:'mushroom',mtype:'toxic',con:'north_america',biome:'oak_forest',e:'👹',col:'#f0e8c0',flavor:"California species. Responsible for dozens of deaths yearly.",stats:{atk:10,def:3,int:5,spd:3,heal:0,lore:6,toxic:10,aura:4}},
  conocybe_filaris:{id:'conocybe_filaris',name:'Deadly Conocybe',sci:'Conocybe filaris',r:5,type:'mushroom',mtype:'toxic',con:'north_america',biome:'lawn',e:'🟡',col:'#d0c040',flavor:"Deadlier than death cap gram for gram. Found in lawns.",stats:{atk:9,def:2,int:4,spd:3,heal:0,lore:5,toxic:9,aura:3}},
  galerina:     {id:'galerina',name:'Funeral Bell',sci:'Galerina marginata',r:5,type:'mushroom',mtype:'toxic',con:'global',biome:'forest',e:'🔔',col:'#c0a040',flavor:"Mistaken for edibles. Killed 7 in 2014 Oregon. Grows on wood.",stats:{atk:8,def:2,int:4,spd:3,heal:0,lore:5,toxic:8,aura:3}},
});

// MUSHROOM SUBCATEGORY D: BIOLUMINESCENT & RARE
Object.assign(P, {
  ghost_fungus:  {id:'ghost_fungus',name:'Ghost Fungus',sci:'Omphalotus nidiformis',r:7,type:'mushroom',mtype:'bioluminescent',con:'oceania',biome:'eucalyptus',e:'👻',col:'#d8f8d8',flavor:"Glows green in darkness. Only glows while actively respiring.",stats:{atk:6,def:5,int:8,spd:4,heal:4,lore:8,toxic:3,aura:9}},
  jack_o_lantern:{id:'jack_o_lantern',name:"Jack-O'-Lantern",sci:'Omphalotus olearius',r:5,type:'mushroom',mtype:'bioluminescent',con:'north_america',biome:'oak_forest',e:'🎃',col:'#f07020',flavor:"Orange glow in darkness. Violently toxic. Campsite ghost stories.",stats:{atk:7,def:4,int:5,spd:3,heal:0,lore:6,toxic:5,aura:7}},
  foxfire:       {id:'foxfire',name:'Foxfire Mushroom',sci:'Panellus stipticus',r:5,type:'mushroom',mtype:'bioluminescent',con:'north_america',biome:'oak_forest',e:'🦊',col:'#80c040',flavor:"Blue-green foxfire. Led Civil War soldiers to safety in Shiloh swamps.",stats:{atk:5,def:4,int:7,spd:4,heal:3,lore:7,toxic:1,aura:8}},
  mycena_chlorophos:{id:'mycena_chlorophos',name:'Glowing Mycena',sci:'Mycena chlorophos',r:7,type:'mushroom',mtype:'bioluminescent',con:'asia',biome:'subtropical',e:'✨',col:'#60f0a0',flavor:"Bright green glow. Found only on Hachijojima island, Japan.",stats:{atk:4,def:4,int:9,spd:5,heal:5,lore:8,toxic:0,aura:9}},
  bleeding_tooth:{id:'bleeding_tooth',name:'Bleeding Tooth',sci:'Hydnellum peckii',r:7,type:'mushroom',mtype:'rare',con:'north_america',biome:'conifer',e:'🩸',col:'#f04060',flavor:"Weeps blood-red drops. Contains anticoagulant compound atromentin.",stats:{atk:9,def:4,int:7,spd:3,heal:2,lore:8,toxic:2,aura:8}},
  amethyst_deceiver:{id:'amethyst_deceiver',name:'Amethyst Deceiver',sci:'Laccaria amethystina',r:4,type:'mushroom',mtype:'rare',con:'global',biome:'forest',e:'💜',col:'#8040c0',flavor:"Shockingly purple. Fades with age, deceiving foragers.",stats:{atk:4,def:4,int:6,spd:3,heal:4,lore:5,toxic:0,aura:6}},
  violet_webcap:{id:'violet_webcap',name:'Violet Webcap',sci:'Cortinarius violaceus',r:5,type:'mushroom',mtype:'rare',con:'europe',biome:'forest',e:'🔮',col:'#5020a0',flavor:"Deepest violet in nature. Poisonous but too rare to risk eating.",stats:{atk:5,def:4,int:7,spd:3,heal:2,lore:6,toxic:3,aura:7}},
  parrot_waxcap:{id:'parrot_waxcap',name:'Parrot Waxcap',sci:'Hygrocybe psittacina',r:4,type:'mushroom',mtype:'rare',con:'europe',biome:'ancient_meadow',e:'🦜',col:'#40c060',flavor:"Changes through every color as it ages. Indicator of pristine meadow.",stats:{atk:3,def:4,int:6,spd:4,heal:4,lore:6,toxic:0,aura:6}},
  cloud_ear:    {id:'cloud_ear',name:'Cloud Ear Fungus',sci:'Auricularia cornea',r:3,type:'mushroom',mtype:'culinary',con:'asia',biome:'subtropical',e:'☁️',col:'#303028',flavor:"Ear-shaped. Blood anticoagulant. Standard in Chinese medicine.",stats:{atk:2,def:4,int:5,spd:3,heal:5,lore:4,toxic:0,aura:4}},
});

// MUSHROOM SUBCATEGORY E: PSYCHEDELIC
Object.assign(P, {
  psilocybe_cubensis:{id:'psilocybe_cubensis',name:'Golden Teacher',sci:'Psilocybe cubensis',r:5,type:'mushroom',mtype:'psychedelic',con:'global',biome:'tropical',e:'🌀',col:'#d0a040',flavor:"Psilocybin regrows neural connections. FDA breakthrough therapy.",stats:{atk:3,def:3,int:10,spd:3,heal:4,lore:8,toxic:2,aura:9}},
  amanita_muscaria_gold:{id:'amanita_muscaria_gold',name:'Golden Fly Agaric',sci:'Amanita muscaria var. formosa',r:6,type:'mushroom',mtype:'psychedelic',con:'north_america',biome:'pine_forest',e:'🟡',col:'#f0c020',flavor:"American subspecies. Muscimol dreams. Siberian shaman gold.",stats:{atk:8,def:3,int:8,spd:4,heal:0,lore:7,toxic:6,aura:8}},
  liberty_cap: {id:'liberty_cap',name:'Liberty Cap',sci:'Psilocybe semilanceata',r:5,type:'mushroom',mtype:'psychedelic',con:'europe',biome:'pasture',e:'🎩',col:'#c0a030',flavor:"Most common psilocybin mushroom. Britain\'s most consumed illegal substance.",stats:{atk:3,def:3,int:9,spd:3,heal:3,lore:7,toxic:2,aura:8}},
  blue_meanie:  {id:'blue_meanie',name:'Blue Meanie',sci:'Panaeolus cyanescens',r:5,type:'mushroom',mtype:'psychedelic',con:'global',biome:'tropical',e:'🔵',col:'#4060a0',flavor:"5x more psilocybin than cubensis. Turns deep blue when bruised.",stats:{atk:3,def:3,int:10,spd:3,heal:3,lore:7,toxic:2,aura:9}},
  wavy_cap:    {id:'wavy_cap',name:'Wavy Cap',sci:'Psilocybe cyanescens',r:5,type:'mushroom',mtype:'psychedelic',con:'europe',biome:'mulch',e:'🌊',col:'#c0a858',flavor:"Most potent temperate psilocybin species. Wood chip colonizer.",stats:{atk:3,def:3,int:10,spd:4,heal:3,lore:6,toxic:2,aura:9}},
});

// MUSHROOM SUBCATEGORY F: PARASITIC & EXTREME
Object.assign(P, {
  cordyceps:    {id:'cordyceps',name:'Cordyceps',sci:'Ophiocordyceps sinensis',r:7,type:'mushroom',mtype:'parasitic',con:'asia',biome:'high_altitude',e:'🐛',col:'#c89030',flavor:"$50,000/kg. Mind-controls insects. ATP and VO2max enhancer.",stats:{atk:7,def:5,int:8,spd:6,heal:3,lore:8,toxic:2,aura:8}},
  zombie_ant_fungus:{id:'zombie_ant_fungus',name:'Zombie Ant Fungus',sci:'Ophiocordyceps camponoti-floridani',r:7,type:'mushroom',mtype:'parasitic',con:'south_america',biome:'rainforest',e:'🧟',col:'#406020',flavor:"Controls ant brains with precision. Positions host for maximum spore dispersal.",stats:{atk:8,def:5,int:9,spd:5,heal:0,lore:9,toxic:4,aura:8}},
  caterpillar_fungus:{id:'caterpillar_fungus',name:'Caterpillar Fungus',sci:'Cordyceps militaris',r:6,type:'mushroom',mtype:'parasitic',con:'asia',biome:'mountain',e:'🦋',col:'#f08030',flavor:"Yartsa Gunbu. $600-800/lb. Olympic athletes use it legally.",stats:{atk:6,def:5,int:7,spd:7,heal:4,lore:7,toxic:1,aura:7}},
  beef_steak_fungus:{id:'beef_steak_fungus',name:'Beefsteak Polypore',sci:'Fistulina hepatica',r:4,type:'mushroom',mtype:'rare',con:'europe',biome:'oak_forest',e:'🥩',col:'#c04030',flavor:"Oozes red juice. Tastes sour. Literally looks like steak.",stats:{atk:5,def:4,int:4,spd:2,heal:3,lore:4,toxic:0,aura:4}},
  amadou:       {id:'amadou',name:'Amadou',sci:'Fomes fomentarius',r:6,type:'mushroom',mtype:'parasitic',con:'europe',biome:'beech',e:'🔥',col:'#d07030',flavor:"Ötzi the Iceman carried it. Sparks fire instantly. Wound dressing.",stats:{atk:6,def:4,int:5,spd:3,heal:2,lore:7,toxic:0,aura:5}},
  veiled_lady:  {id:'veiled_lady',name:'Veiled Lady',sci:'Phallus indusiatus',r:4,type:'mushroom',mtype:'rare',con:'asia',biome:'tropical',e:'👗',col:'#f8f0d0',flavor:"Wears a white lace veil. Grows to full size in 20 minutes.",stats:{atk:3,def:4,int:6,spd:5,heal:4,lore:6,toxic:0,aura:6}},
  corn_smut:    {id:'corn_smut',name:'Corn Smut (Huitlacoche)',sci:'Ustilago maydis',r:3,type:'mushroom',mtype:'culinary',con:'central_america',biome:'farmland',e:'🌽',col:'#404040',flavor:"Mexican delicacy. Aztec superfood. Corn parasite worth more than corn.",stats:{atk:3,def:3,int:4,spd:3,heal:4,lore:5,toxic:0,aura:3}},
  devil_cigar:  {id:'devil_cigar',name:"Devil's Cigar",sci:'Chorioactis geaster',r:7,type:'mushroom',mtype:'rare',con:'north_america',biome:'cedar_elm',e:'🚬',col:'#604030',flavor:"Only in Texas and Japan. 8000 miles apart. Opens with a hiss.",stats:{atk:5,def:5,int:8,spd:3,heal:3,lore:9,toxic:0,aura:8}},
  indigo_milk_cap:{id:'indigo_milk_cap',name:'Indigo Milk Cap',sci:'Lactarius indigo',r:4,type:'mushroom',mtype:'rare',con:'north_america',biome:'oak_forest',e:'💙',col:'#2040b0',flavor:"Bleeds vivid blue milk. Edible. Psychedelic looking but non-psychedelic.",stats:{atk:4,def:4,int:6,spd:3,heal:4,lore:6,toxic:0,aura:6}},
  porcini_black:{id:'porcini_black',name:'Satan\'s Bolete',sci:'Rubroboletus satanas',r:5,type:'mushroom',mtype:'toxic',con:'europe',biome:'limestone',e:'👿',col:'#c02020',flavor:"Turns bright blue in seconds when cut. Violent stomach toxins.",stats:{atk:8,def:4,int:4,spd:3,heal:0,lore:5,toxic:7,aura:5}},
  amanita_caesarea:{id:'amanita_caesarea',name:"Caesar's Mushroom",sci:'Amanita caesarea',r:5,type:'mushroom',mtype:'culinary',con:'europe',biome:'oak_forest',e:'🌅',col:'#f0a020',flavor:"Roman emperor\'s favorite. Claudius was allegedly poisoned via this genus.",stats:{atk:4,def:5,int:6,spd:4,heal:5,lore:7,toxic:0,aura:6}},
  chicken_woods:{id:'chicken_woods',name:'Chicken of the Woods',sci:'Laetiporus sulphureus',r:3,type:'mushroom',mtype:'culinary',con:'global',biome:'hardwood',e:'🐔',col:'#f07810',flavor:"Bright orange. Tastes and texture exactly like chicken breast.",stats:{atk:4,def:4,int:4,spd:3,heal:4,lore:3,toxic:0,aura:4}},
  hen_woods:    {id:'hen_woods',name:'Hen of the Woods',sci:'Grifola frondosa',r:4,type:'mushroom',mtype:'medicinal',con:'north_america',biome:'oak_forest',e:'🦆',col:'#808060',flavor:"Maitake in Japanese. Heavy medical research. Grows 50+ lbs.",stats:{atk:4,def:5,int:7,spd:3,heal:6,lore:5,toxic:0,aura:6}},
  wine_cap:     {id:'wine_cap',name:'Wine Cap',sci:'Stropharia rugosoannulata',r:3,type:'mushroom',mtype:'culinary',con:'north_america',biome:'wood_chips',e:'🍷',col:'#8020a0',flavor:"King Stropharia. Easy to grow. Eats dead wood and rebuilds soil.",stats:{atk:3,def:4,int:5,spd:3,heal:4,lore:4,toxic:0,aura:4}},
  black_chanterelle:{id:'black_chanterelle',name:'Black Trumpet',sci:'Craterellus cornucopioides',r:5,type:'mushroom',mtype:'culinary',con:'europe',biome:'deciduous',e:'🎺',col:'#202020',flavor:"Horn of plenty. Near impossible to spot on forest floor.",stats:{atk:4,def:5,int:6,spd:4,heal:5,lore:6,toxic:0,aura:6}},
  cauliflower_mush:{id:'cauliflower_mush',name:'Cauliflower Mushroom',sci:'Sparassis radicata',r:4,type:'mushroom',mtype:'medicinal',con:'north_america',biome:'pine_forest',e:'🥦',col:'#e0e0d0',flavor:"Looks like a cauliflower. Beta-glucans studied for chemo support.",stats:{atk:3,def:5,int:6,spd:2,heal:6,lore:4,toxic:0,aura:5}},
  hen_egg_fungus:{id:'hen_egg_fungus',name:"Caesar's Egg",sci:'Amanita caesarea (egg)',r:5,type:'mushroom',mtype:'culinary',con:'europe',biome:'oak_forest',e:'🥚',col:'#f8e040',flavor:"Egg form of Caesar\'s mushroom. Inside is golden perfection.",stats:{atk:4,def:5,int:7,spd:3,heal:5,lore:8,toxic:0,aura:7}},
  pioppino:     {id:'pioppino',name:'Pioppino',sci:'Agrocybe aegerita',r:3,type:'mushroom',mtype:'culinary',con:'europe',biome:'poplar',e:'🌰',col:'#a07840',flavor:"Black poplar mushroom. Italian kitchen staple. Great in pasta.",stats:{atk:3,def:3,int:4,spd:3,heal:4,lore:3,toxic:0,aura:3}},
  scarlet_elf_cup:{id:'scarlet_elf_cup',name:'Scarlet Elf Cup',sci:'Sarcoscypha coccinea',r:3,type:'mushroom',mtype:'rare',con:'europe',biome:'stream',e:'🥣',col:'#e01010',flavor:"First mushroom of late winter. Celtic legends say fairies drink dew from them.",stats:{atk:3,def:3,int:6,spd:3,heal:3,lore:7,toxic:0,aura:6}},
  earthstar:    {id:'earthstar',name:'Barometer Earthstar',sci:'Astraeus hygrometricus',r:4,type:'mushroom',mtype:'rare',con:'global',biome:'sandy',e:'⭐',col:'#c8a860',flavor:"Opens its arms in rain to release spores. Weather predictor.",stats:{atk:3,def:4,int:5,spd:2,heal:3,lore:5,toxic:0,aura:5}},
  stinkhorn:    {id:'stinkhorn',name:'Common Stinkhorn',sci:'Phallus impudicus',r:2,type:'mushroom',mtype:'rare',con:'global',biome:'forest',e:'💨',col:'#f0f040',flavor:"Emerges overnight. Smells like death. Attracts flies as spore dispersers.",stats:{atk:4,def:2,int:3,spd:5,heal:1,lore:3,toxic:1,aura:2}},
  matsutake_white:{id:'matsutake_white',name:'White Matsutake',sci:'Tricholoma magnivelare',r:6,type:'mushroom',mtype:'culinary',con:'north_america',biome:'pine_forest',e:'⬜',col:'#f0e8d0',flavor:"American matsutake. Japan imports it as Europe's stopped producing.",stats:{atk:5,def:5,int:7,spd:3,heal:5,lore:6,toxic:0,aura:6}},
  giant_puffball:{id:'giant_puffball',name:'Giant Puffball',sci:'Calvatia gigantea',r:3,type:'mushroom',mtype:'culinary',con:'global',biome:'meadow',e:'⚽',col:'#f8f8e0',flavor:"Can reach 150cm. Contains 7 trillion spores. Cauliflower when young.",stats:{atk:2,def:4,int:4,spd:2,heal:5,lore:3,toxic:0,aura:3}},
  sulphur_tuft: {id:'sulphur_tuft',name:'Sulphur Tuft',sci:'Hypholoma fasciculare',r:3,type:'mushroom',mtype:'toxic',con:'global',biome:'hardwood',e:'💛',col:'#e0d020',flavor:"Appears en masse. Bitter toxin. Common misidentification victim.",stats:{atk:6,def:3,int:4,spd:3,heal:0,lore:3,toxic:5,aura:3}},
  bleeding_mycena:{id:'bleeding_mycena',name:'Bleeding Mycena',sci:'Mycena haematopus',r:3,type:'mushroom',mtype:'rare',con:'global',biome:'deciduous',e:'🩸',col:'#e03060',flavor:"Bleeds dark red latex. Stunning. Grows in clusters on fallen logs.",stats:{atk:4,def:3,int:5,spd:3,heal:2,lore:5,toxic:0,aura:5}},
  golden_teacher_mush:{id:'golden_teacher_mush',name:'Golden Oyster',sci:'Pleurotus citrinopileatus',r:3,type:'mushroom',mtype:'culinary',con:'asia',biome:'elm_forest',e:'🌟',col:'#f0d020',flavor:"Bright yellow. Grows in beautiful clusters. Lemony fragrance.",stats:{atk:3,def:4,int:5,spd:3,heal:5,lore:4,toxic:0,aura:4}},
  pink_oyster:  {id:'pink_oyster',name:'Pink Oyster',sci:'Pleurotus djamor',r:3,type:'mushroom',mtype:'culinary',con:'asia',biome:'tropical',e:'🌸',col:'#f060a0',flavor:"Shocking flamingo pink. Tropical species. Bacon-like taste when fried.",stats:{atk:3,def:4,int:4,spd:3,heal:5,lore:4,toxic:0,aura:4}},
  blue_oyster:  {id:'blue_oyster',name:'Blue Oyster',sci:'Pleurotus columbinus',r:4,type:'mushroom',mtype:'medicinal',con:'europe',biome:'beech',e:'💙',col:'#4060a0',flavor:"Most cold-tolerant oyster. Strongest lovastatin content.",stats:{atk:3,def:5,int:6,spd:3,heal:6,lore:4,toxic:0,aura:5}},
  nameko:       {id:'nameko',name:'Nameko',sci:'Pholiota nameko',r:4,type:'mushroom',mtype:'culinary',con:'asia',biome:'beech',e:'🟠',col:'#e07020',flavor:"Gelatinous cap. Japans third most cultivated. Miso soup standard.",stats:{atk:3,def:4,int:5,spd:3,heal:4,lore:4,toxic:0,aura:4}},
  enoki:        {id:'enoki',name:'Enoki',sci:'Flammulina velutipes',r:3,type:'mushroom',mtype:'medicinal',con:'asia',biome:'deciduous',e:'🌾',col:'#f8f0d0',flavor:"Anti-tumor compounds. Immune boosting. 1000-year cultivation in Asia.",stats:{atk:2,def:4,int:6,spd:4,heal:5,lore:4,toxic:0,aura:4}},
  zhuling:      {id:'zhuling',name:'Zhu Ling',sci:'Polyporus umbellatus',r:5,type:'mushroom',mtype:'medicinal',con:'asia',biome:'deciduous',e:'☂️',col:'#d0b880',flavor:"Rare branched polypore. Anti-cancer research pioneer in China.",stats:{atk:3,def:6,int:7,spd:2,heal:6,lore:6,toxic:0,aura:6}},
  artists_conk: {id:'artists_conk',name:"Artist's Conk",sci:'Ganoderma applanatum',r:3,type:'mushroom',mtype:'medicinal',con:'global',biome:'hardwood',e:'🎨',col:'#c09060',flavor:"White underside permanently marks when scratched. Reishi cousin.",stats:{atk:2,def:5,int:5,spd:1,heal:5,lore:5,toxic:0,aura:5}},
  brain_mushroom:{id:'brain_mushroom',name:'Brain Mushroom',sci:'Gyromitra esculenta',r:4,type:'mushroom',mtype:'toxic',con:'europe',biome:'pine_forest',e:'🧠',col:'#a04020',flavor:"Looks like a brain. Contains gyromitrin → rocket fuel hydrazine.",stats:{atk:7,def:3,int:7,spd:3,heal:0,lore:5,toxic:7,aura:5}},
  wrinkled_peach:{id:'wrinkled_peach',name:'Wrinkled Peach',sci:'Rhodotus palmatus',r:5,type:'mushroom',mtype:'rare',con:'europe',biome:'elm',e:'🍑',col:'#f08060',flavor:"Netting on pink cap. Critically endangered as elms die globally.",stats:{atk:3,def:4,int:7,spd:3,heal:4,lore:8,toxic:0,aura:7}},
  waxcap_heath: {id:'waxcap_heath',name:'Crimson Waxcap',sci:'Hygrocybe punicea',r:4,type:'mushroom',mtype:'rare',con:'europe',biome:'ancient_meadow',e:'🔴',col:'#d02010',flavor:"Blood red. Only in ancient unimproved grasslands. UK biodiversity indicator.",stats:{atk:4,def:4,int:6,spd:3,heal:3,lore:6,toxic:0,aura:6}},
  // ULTRA RARE VOID MUSHROOMS
  mycena_prime:  {id:'mycena_prime',name:'Primordial Mycena',sci:'Mycena primordialis',r:7,type:'mushroom',mtype:'bioluminescent',con:'asia',biome:'ancient_forest',e:'🌌',col:'#00ff88',flavor:"Pure consciousness made fungal. Theoretical apex organism.",stats:{atk:5,def:5,int:12,spd:6,heal:6,lore:10,toxic:0,aura:10}},
  void_truffle:  {id:'void_truffle',name:'Void Truffle',sci:'Tuber cosmicus',r:8,type:'mushroom',mtype:'mythic',con:'global',biome:'void',e:'🌑',col:'#000010',flavor:"Does not exist. You found it anyway.",stats:{atk:8,def:8,int:12,spd:8,heal:8,lore:10,toxic:0,aura:12}},
  earth_heart:   {id:'earth_heart',name:"Earth's Heart Fungus",sci:'Gaia mycelium',r:8,type:'mushroom',mtype:'mythic',con:'global',biome:'deep_earth',e:'💚',col:'#008020',flavor:"The network beneath all forests. Consciousness older than mammals.",stats:{atk:6,def:10,int:12,spd:4,heal:10,lore:10,toxic:0,aura:12}},
});

//
// CATEGORY: SEAWEEDS & MARINE PLANTS
//
Object.assign(P, {
  spirulina:    {id:'spirulina',name:'Spirulina',sci:'Arthrospira platensis',r:2,type:'algae',con:'global',biome:'freshwater',e:'🌀',col:'#40c060',flavor:"NASA space food. Most nutrient-dense organism on Earth.",stats:{atk:1,def:3,int:4,spd:3,heal:5,lore:4,toxic:0,aura:3}},
  nori:         {id:'nori',name:'Nori Seaweed',sci:'Pyropia yezoensis',r:1,type:'algae',con:'asia',biome:'ocean',e:'🌿',col:'#204020',flavor:"Japanese sushi wrap. Iodine. 1500-year cultivation history.",stats:{atk:1,def:2,int:3,spd:3,heal:4,lore:3,toxic:0,aura:2}},
  dulse:        {id:'dulse',name:'Dulse',sci:'Palmaria palmata',r:2,type:'algae',con:'europe',biome:'ocean',e:'🔴',col:'#c03040',flavor:"Viking food. Sizzled like bacon. North Atlantic superfood.",stats:{atk:2,def:3,int:3,spd:3,heal:4,lore:3,toxic:0,aura:3}},
  sea_lettuce:  {id:'sea_lettuce',name:'Sea Lettuce',sci:'Ulva lactuca',r:1,type:'algae',con:'global',biome:'coastal',e:'💚',col:'#30c040',flavor:"Bright green. Edible. Indicates clean coastal water.",stats:{atk:1,def:2,int:2,spd:3,heal:4,lore:1,toxic:0,aura:2}},
  bladderwrack: {id:'bladderwrack',name:'Bladderwrack',sci:'Fucus vesiculosus',r:2,type:'algae',con:'europe',biome:'rocky_coast',e:'🫧',col:'#706030',flavor:"Iodine source. Thyroid hormone discovered through it.",stats:{atk:2,def:3,int:3,spd:2,heal:4,lore:3,toxic:0,aura:3}},
  wakame:       {id:'wakame',name:'Wakame',sci:'Undaria pinnatifida',r:2,type:'algae',con:'asia',biome:'ocean',e:'🍃',col:'#308050',flavor:"Miso soup standard. Fucoxanthin burns fat in lab studies.",stats:{atk:1,def:3,int:4,spd:3,heal:4,lore:3,toxic:0,aura:3}},
});

//
// COMBINATION KEYS -- for algorithmic fusion
// Any combo not in RECIPES gets auto-generated
// based on dominant stats
//

// Rarity multipliers for fusion stats
// mushroom_count → stat_multiplier
const FUSION_MULTS = [1.0, 1.5, 2.2, 3.0, 4.0];

// Type synergies (bonus when combined)
const TYPE_SYNERGY = {
  'mushroom+mushroom':   {mult:1.8, bonus:'spores', effect:'Mycelial consciousness emerges'},
  'flower+herb':         {mult:1.2, bonus:'heal',   effect:'Natural medicine manifests'},
  'toxic+mushroom':      {mult:1.6, bonus:'atk',    effect:'Venomous spore cloud'},
  'aquatic+mushroom':    {mult:1.4, bonus:'heal',   effect:'Deep tide regeneration'},
  'tree+mushroom':       {mult:1.5, bonus:'def',    effect:'Ancient bark hardening'},
  'toxic+toxic':         {mult:1.7, bonus:'toxic',  effect:'Compound venom synthesis'},
  'flower+flower':       {mult:1.3, bonus:'aura',   effect:'Bloom cascade'},
  'entheogen+mushroom':  {mult:2.0, bonus:'int',    effect:'Transcendence achieved'},
  'rare+rare':           {mult:1.6, bonus:'lore',   effect:'Lost knowledge recovered'},
  'bioluminescent+bioluminescent': {mult:2.2, bonus:'aura', effect:'Living light awakened'},
};

// Continental rarity modifiers
const CONTINENT_MULTIPLIERS = {
  asia: 1.3, oceania: 1.4, arctic: 1.5, middle_east: 1.2,
  africa: 1.2, south_america: 1.2, europe: 1.0, north_america: 1.0,
  global: 0.9, central_america: 1.1,
};

//
// HELPER FUNCTIONS
//

function getPlant(id) { return P[id] || null; }
function getAllPlants() { return Object.values(P); }
function getByType(type) { return Object.values(P).filter(p => p.type === type); }
function getMushrooms() { return Object.values(P).filter(p => p.type === 'mushroom'); }
function getByRarity(r) { return Object.values(P).filter(p => p.r === r); }
function getByContinent(con) { return Object.values(P).filter(p => p.con === con || p.con === 'global'); }

function calcDropChance(plantId, isMushHunt = false) {
  const p = P[plantId];
  if (!p) return 0;
  let base = RARITY_DROP_RATE[p.r] || 0;
  if (isMushHunt && p.type === 'mushroom') base *= 3;
  const contMult = CONTINENT_MULTIPLIERS[p.con] || 1.0;
  return Math.min(0.95, base / contMult);
}

// Get type synergy key for a pair
function getTypeSynergy(t1, t2) {
  const keys = [`${t1}+${t2}`, `${t2}+${t1}`];
  for (const k of keys) if (TYPE_SYNERGY[k]) return TYPE_SYNERGY[k];
  return null;
}

// Build combined stats for fusion
function calcFusionStats(ingredientIds) {
  const combined = {atk:0,def:0,int:0,spd:0,heal:0,lore:0,toxic:0,aura:0};
  const types = [];
  let mushCount = 0;
  
  for (const id of ingredientIds) {
    const p = P[id];
    if (!p) continue;
    for (const stat of Object.keys(combined)) combined[stat] += (p.stats[stat] || 0);
    types.push(p.type);
    if (p.type === 'mushroom') mushCount++;
  }
  
  // Mushroom multiplier
  const mushMult = FUSION_MULTS[Math.min(mushCount, FUSION_MULTS.length-1)];
  for (const stat of Object.keys(combined)) combined[stat] = Math.round(combined[stat] * mushMult);
  
  // Type synergies
  for (let i = 0; i < types.length; i++) {
    for (let j = i+1; j < types.length; j++) {
      const syn = getTypeSynergy(types[i], types[j]);
      if (syn && combined[syn.bonus] !== undefined) {
        combined[syn.bonus] = Math.round(combined[syn.bonus] * syn.mult);
      }
    }
  }
  
  return combined;
}

// Determine fusion rarity
function calcFusionRarity(ingredientIds) {
  const rarities = ingredientIds.map(id => P[id]?.r || 1);
  const maxR = Math.max(...rarities);
  const mushCount = ingredientIds.filter(id => P[id]?.type === 'mushroom').length;
  return Math.min(8, maxR + Math.floor(mushCount * 0.5));
}

// Generate creature name algorithmically
function genCreatureName(ingredientIds, cls) {
  const adjBank = {
    warrior: ['Iron','Crimson','Savage','War','Storm','Dark','Burning','Ancient'],
    healer:  ['Gentle','Sacred','Eternal','Healing','Blessed','Soft','Living'],
    researcher:['Brilliant','Deep','Arcane','Silent','Vast','Knowing','True'],
    explorer:['Swift','Wild','Far','Lost','Drifting','Free','New'],
    defender:['Stalwart','Unyielding','Stone','Deep-Root','Bastion','Iron-Bark'],
    apex:    ['Transcendent','Void','Primordial','Infinite','Cosmic','World'],
  };
  const nounBank = {
    warrior: ['Briar','Thorn','Fang','Striker','Crusher','Devastator'],
    healer:  ['Bloom','Mender','Keeper','Nurse','Renewer','Tender'],
    researcher:['Mind','Sage','Scholar','Oracle','Analyst','Seeker'],
    explorer:['Scout','Wanderer','Ranger','Pioneer','Pathfinder'],
    defender:['Wall','Guard','Sentinel','Fortress','Warden','Bastion'],
    apex:    ['Overmind','Sovereign','Entity','Ascendant','Colossus'],
  };
  const adj = (adjBank[cls]||adjBank.apex)[Math.floor(Math.random()*(adjBank[cls]||adjBank.apex).length)];
  const noun = (nounBank[cls]||nounBank.apex)[Math.floor(Math.random()*(nounBank[cls]||nounBank.apex).length)];
  // Add plant reference
  const mainPlant = P[ingredientIds[0]];
  const plantRef = mainPlant ? mainPlant.name.split(' ')[0] : '';
  return `${adj} ${plantRef} ${noun}`.trim();
}

// Stats for auto-classified creatures
function classFromStats(stats) {
  const best = Object.entries(stats).filter(([k])=>['atk','def','int','spd','heal'].includes(k)).sort((a,b)=>b[1]-a[1])[0];
  return {atk:'warrior',def:'defender',int:'researcher',spd:'explorer',heal:'healer'}[best[0]] || 'researcher';
}

// Total plant count
function totalSpecies() { return Object.keys(P).length; }
function totalMushrooms() { return getMushrooms().length; }

// Make available globally
if (typeof window !== 'undefined') {
  window.BOTANICA = P;
  window.RARITY_NAMES = RARITY_NAMES;
  window.RARITY_COLORS = RARITY_COLORS;
  window.RARITY_DROP_RATE = RARITY_DROP_RATE;
  window.TYPE_SYNERGY = TYPE_SYNERGY;
  window.FUSION_MULTS = FUSION_MULTS;
  window.calcFusionStats = calcFusionStats;
  window.calcFusionRarity = calcFusionRarity;
  window.calcDropChance = calcDropChance;
  window.classFromStats = classFromStats;
  window.genCreatureName = genCreatureName;
  window.getPlant = getPlant;
  window.getAllPlants = getAllPlants;
  window.getMushrooms = getMushrooms;
  window.getByType = getByType;
  window.getByContinent = getByContinent;
  window.totalSpecies = totalSpecies;
  window.totalMushrooms = totalMushrooms;
}
