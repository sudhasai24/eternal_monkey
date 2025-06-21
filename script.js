// Poem data
const poems = {
    nature: [
        {
            id: 'mountain-path',
            title: 'Mountain Path',
            preview: [
                'Among the ancient pines I walk,',
                'Where shadows dance and eagles talk,',
                'The mountain speaks in silence deep,',
                'Of secrets that the valleys keep.'
            ],
            fullPoem: [
                'Among the ancient pines I walk,',
                'Where shadows dance and eagles talk,',
                'The mountain speaks in silence deep,',
                'Of secrets that the valleys keep.',
                '',
                'Each stone beneath my weathered feet',
                'Tells stories of the incomplete,',
                'Of pilgrims who have passed this way,',
                'Seeking truth in break of day.',
                '',
                'The wind carries their whispered prayers,',
                'Through morning mist and mountain airs,',
                'While I, a monk without a name,',
                'Walk on through sun and wind and rain.',
                '',
                'For in this path of earth and stone,',
                'I find I am not here alone—',
                'The mountain and the monk are one,',
                'Beneath the ever-rising sun.'
            ],
            likes: 12,
            comments: []
        },
        {
            id: 'forest-teacher',
            title: 'Forest Teacher',
            preview: [
                'The ancient oak with arms spread wide',
                'Has stood here long before my pride',
                'Was born into this world of pain,',
                'Of sunshine mixed with cold, hard rain.'
            ],
            fullPoem: [
                'The ancient oak with arms spread wide',
                'Has stood here long before my pride',
                'Was born into this world of pain,',
                'Of sunshine mixed with cold, hard rain.',
                '',
                'Its roots run deeper than my thoughts,',
                'Its wisdom cannot be bought',
                'With coin or prayer or sacrifice—',
                'It simply is, beyond all price.',
                '',
                'Each season brings its own sweet gift:',
                'The spring buds help the spirit lift,',
                'Summer shade cools burning hearts,',
                'Fall\'s colors heal what winter starts.',
                '',
                'I bow before this teacher true,',
                'Who shows me how to make it through',
                'The storms of life with grace intact,',
                'Rooted deep in sacred fact.'
            ],
            likes: 8,
            comments: [
                { author: 'Sarah M.', text: 'This poem speaks to my soul. The imagery of the oak as a teacher is beautiful.' }
            ]
        },
        {
            id: 'river-song',
            title: 'River Song',
            preview: [
                'The river sings its ancient tune,',
                'Beneath the crescent silver moon,',
                'Of journeys to the endless sea,',
                'And what it means to just be free.'
            ],
            fullPoem: [
                'The river sings its ancient tune,',
                'Beneath the crescent silver moon,',
                'Of journeys to the endless sea,',
                'And what it means to just be free.',
                '',
                'It carries leaves and carries stones,',
                'It carries prayers and carries bones',
                'Of fish that swam in waters clear',
                'Before my birth, before my fear.',
                '',
                'I sit beside its flowing grace',
                'And see reflected in its face',
                'The truth that all things pass away,',
                'Yet somehow always choose to stay.',
                '',
                'The river teaches without words',
                'The song that\'s heard by all the birds:',
                'To flow around what blocks the way,',
                'And trust the current every day.'
            ],
            likes: 15,
            comments: []
        },
        {
            id: 'desert-silence',
            title: 'Desert Silence',
            preview: [
                'In vastness where no green things grow,',
                'Where only wind and sand can go,',
                'I find a peace beyond all sound,',
                'In emptiness, I am found.'
            ],
            fullPoem: [
                'In vastness where no green things grow,',
                'Where only wind and sand can go,',
                'I find a peace beyond all sound,',
                'In emptiness, I am found.',
                '',
                'The desert strips away pretense,',
                'Reveals what\'s truly immense:',
                'Not monuments of human pride,',
                'But space where souls can truly hide.',
                '',
                'Each grain of sand a tiny prayer,',
                'Each dune a temple in the air,',
                'Where silence speaks more loud and clear',
                'Than any word the mind can hear.',
                '',
                'Here in this land of sun and stone,',
                'I learn to be completely alone,',
                'Yet never lonely, never lost—',
                'For solitude\'s the bridge I\'ve crossed.'
            ],
            likes: 6,
            comments: []
        },
        {
            id: 'ocean-meditation',
            title: 'Ocean Meditation',
            preview: [
                'Where waves meet shore in endless dance,',
                'I sit in meditative trance,',
                'The ocean\'s breath becomes my own,',
                'In rhythm with the great unknown.'
            ],
            fullPoem: [
                'Where waves meet shore in endless dance,',
                'I sit in meditative trance,',
                'The ocean\'s breath becomes my own,',
                'In rhythm with the great unknown.',
                '',
                'Each wave that crashes on the sand',
                'Reminds me I don\'t understand',
                'The vastness of this liquid prayer',
                'That connects all beings everywhere.',
                '',
                'The salt spray kisses weathered skin,',
                'Washing away the noise within,',
                'Until there\'s nothing left but this:',
                'The ocean\'s ancient, endless bliss.',
                '',
                'I am the wave, I am the shore,',
                'I am the depths and so much more—',
                'In ocean\'s mirror, clear and true,',
                'I see there\'s nothing I can\'t do.'
            ],
            likes: 9,
            comments: []
        },
        {
            id: 'garden-sanctuary',
            title: 'Garden Sanctuary',
            preview: [
                'Behind the temple\'s weathered wall,',
                'A garden grows through spring and fall,',
                'Where every flower, every stone',
                'Creates a world that\'s mine alone.'
            ],
            fullPoem: [
                'Behind the temple\'s weathered wall,',
                'A garden grows through spring and fall,',
                'Where every flower, every stone',
                'Creates a world that\'s mine alone.',
                '',
                'The lotus blooms in muddy pond,',
                'Teaching truths of which I\'m fond:',
                'That beauty rises from the mire,',
                'Like souls ascending ever higher.',
                '',
                'I tend each plant with gentle care,',
                'And find my prayers answered there',
                'In every bud that dares to bloom,',
                'Dispelling winter\'s lingering gloom.',
                '',
                'This garden is my teacher too,',
                'Showing me what I must do:',
                'Plant seeds of kindness, tend with love,',
                'And trust the wisdom from above.'
            ],
            likes: 11,
            comments: []
        }
    ],
    contemplation: [
        {
            id: 'stillness',
            title: 'In Stillness',
            preview: [
                'Beneath the temple bell\'s last ring,',
                'I sit in silence, listening',
                'To echoes of a deeper sound—',
                'The heartbeat of the sacred ground.'
            ],
            fullPoem: [
                'Beneath the temple bell\'s last ring,',
                'I sit in silence, listening',
                'To echoes of a deeper sound—',
                'The heartbeat of the sacred ground.',
                '',
                'My breath becomes the autumn breeze,',
                'My thoughts like falling autumn leaves,',
                'Each one released without a fight,',
                'Dissolving into morning light.',
                '',
                'In this cathedral made of air,',
                'Where presence meets with everywhere,',
                'I learn the art of letting go,',
                'Of all I thought I used to know.',
                '',
                'For in the space between each breath,',
                'Lives wisdom deeper than in death—',
                'The eternal now, forever still,',
                'Beyond the reach of mortal will.'
            ],
            likes: 18,
            comments: []
        },
        {
            id: 'empty-bowl',
            title: 'Empty Bowl',
            preview: [
                'My begging bowl sits empty still,',
                'Not from lack, but from my will',
                'To understand what fullness means',
                'Beyond the world of heard and seen.'
            ],
            fullPoem: [
                'My begging bowl sits empty still,',
                'Not from lack, but from my will',
                'To understand what fullness means',
                'Beyond the world of heard and seen.',
                '',
                'For in its hollow, polished space',
                'I see reflected my own face—',
                'Empty of the stories told,',
                'Of young desires growing old.',
                '',
                'This vessel holds what cannot break:',
                'The peace that comes when we forsake',
                'Our grasping at the things that pass,',
                'Like shadows on the temple grass.',
                '',
                'So let it be forever bare,',
                'This bowl that teaches me to care',
                'For nothing but the present breath,',
                'That bridges life and bridge with death.'
            ],
            likes: 7,
            comments: []
        },
        {
            id: 'dawn-meditation',
            title: 'Dawn Meditation',
            preview: [
                'Before the world begins to wake,',
                'I sit beside the mountain lake,',
                'Where stars still shimmer on the face',
                'Of water holding endless space.'
            ],
            fullPoem: [
                'Before the world begins to wake,',
                'I sit beside the mountain lake,',
                'Where stars still shimmer on the face',
                'Of water holding endless space.',
                '',
                'The darkness slowly yields to light,',
                'Like ignorance yielding to sight,',
                'And in this moment of between,',
                'Truth shows its face, serene, unseen.',
                '',
                'My meditation cushion worn',
                'From countless mornings, countless dawns,',
                'Bears witness to this daily rite',
                'Of greeting the eternal light.',
                '',
                'Each breath a prayer without words,',
                'Each heartbeat joins the song of birds',
                'Who wake to praise the breaking day,',
                'As I wake to the deathless way.'
            ],
            likes: 13,
            comments: []
        },
        {
            id: 'mirror-mind',
            title: 'Mirror Mind',
            preview: [
                'Like polished bronze that shows no stain,',
                'The mind reflects without refrain',
                'All that appears before its face,',
                'Yet holds to nothing in its space.'
            ],
            fullPoem: [
                'Like polished bronze that shows no stain,',
                'The mind reflects without refrain',
                'All that appears before its face,',
                'Yet holds to nothing in its space.',
                '',
                'Clouds pass across its surface clear,',
                'Birds fly through without any fear',
                'Of being trapped or held too tight—',
                'They simply pass from left to right.',
                '',
                'If I could learn this mirror\'s way,',
                'To let all thoughts just come and play',
                'Across the surface of my mind,',
                'What peace and freedom I would find.',
                '',
                'No judgment, grasping, push, or pull,',
                'Just awareness, bright and full,',
                'Reflecting all with perfect grace,',
                'While resting in its natural place.'
            ],
            likes: 10,
            comments: []
        },
        {
            id: 'candle-flame',
            title: 'Candle Flame',
            preview: [
                'A single flame burns through the night,',
                'Steady, warm, and burning bright,',
                'Teaching me the art of being',
                'Present, calm, and truly seeing.'
            ],
            fullPoem: [
                'A single flame burns through the night,',
                'Steady, warm, and burning bright,',
                'Teaching me the art of being',
                'Present, calm, and truly seeing.',
                '',
                'It neither hurries nor delays,',
                'But burns with focus all its days,',
                'Consuming only what it needs',
                'To light the path where darkness leads.',
                '',
                'When winds of worry try to blow',
                'And make my inner turmoil grow,',
                'I think upon this flame so small',
                'That lights the temple, lights us all.',
                '',
                'For in its simple, steady glow',
                'Lives all that I need to know:',
                'To burn with purpose, clear and true,',
                'And light the way for others too.'
            ],
            likes: 14,
            comments: []
        },
        {
            id: 'breath-prayer',
            title: 'Breath Prayer',
            preview: [
                'In breathing in, I gather peace,',
                'In breathing out, I find release',
                'From all the burdens that I bear,',
                'Dissolving into sacred air.'
            ],
            fullPoem: [
                'In breathing in, I gather peace,',
                'In breathing out, I find release',
                'From all the burdens that I bear,',
                'Dissolving into sacred air.',
                '',
                'Each inhalation brings me home',
                'To where I never need to roam,',
                'Each exhalation sets me free',
                'From who I thought I had to be.',
                '',
                'This rhythm older than my birth',
                'Connects me to the breathing earth,',
                'To every creature, every tree',
                'That shares this breath of life with me.',
                '',
                'No mantra needed, no complex prayer,',
                'Just this simple, sacred air',
                'That flows through lungs and flows through heart,',
                'Making me and all things part.'
            ],
            likes: 16,
            comments: []
        }
    ],
    journey: [
        {
            id: 'wandering-path',
            title: 'The Wandering Path',
            preview: [
                'No map can chart the way I go,',
                'Through valleys deep and peaks of snow,',
                'For every step creates the trail',
                'That leads beyond the mortal veil.'
            ],
            fullPoem: [
                'No map can chart the way I go,',
                'Through valleys deep and peaks of snow,',
                'For every step creates the trail',
                'That leads beyond the mortal veil.',
                '',
                'My sandals worn from years of quest',
                'For what cannot be possessed,',
                'Have carried me through joy and strife',
                'To glimpse the source of deathless life.',
                '',
                'Each stranger met along the way',
                'Has had some wisdom to convey,',
                'Each village, forest, stream, and stone',
                'Has helped me feel less alone.',
                '',
                'Yet now I know the secret true:',
                'The path was always leading through',
                'The labyrinths of my own heart,',
                'Where end and beginning never part.'
            ],
            likes: 20,
            comments: []
        },
        {
            id: 'inner-child',
            title: 'The Inner Child',
            preview: [
                'Within this weathered monk there lives',
                'A child who runs and laughs and gives',
                'His whole heart to each moment\'s play,',
                'Untouched by time\'s stern, solemn way.'
            ],
            fullPoem: [
                'Within this weathered monk there lives',
                'A child who runs and laughs and gives',
                'His whole heart to each moment\'s play,',
                'Untouched by time\'s stern, solemn way.',
                '',
                'He sees the Buddha in a stone,',
                'Finds magic in a flower grown',
                'Between the cracks of temple stairs,',
                'And talks with all the temple cats.',
                '',
                'When serious practice weighs me down',
                'With dharma\'s academic crown,',
                'This child reminds me how to be',
                'Enlightened through simplicity.',
                '',
                'For wisdom is not always grave—',
                'Sometimes it\'s just learning to wave',
                'At clouds that sail across the sky,',
                'And asking every raindrop "Why?"'
            ],
            likes: 22,
            comments: []
        },
        {
            id: 'shadow-work',
            title: 'Shadow Work',
            preview: [
                'In corners of my heart I find',
                'The parts I\'ve left so far behind,',
                'The anger, fear, and bitter shame',
                'I\'ve tried to banish from my name.'
            ],
            fullPoem: [
                'In corners of my heart I find',
                'The parts I\'ve left so far behind,',
                'The anger, fear, and bitter shame',
                'I\'ve tried to banish from my name.',
                '',
                'But shadows cast by morning light',
                'Are not the enemies of sight—',
                'They show the shape of what stands tall',
                'And help define the truth of all.',
                '',
                'So I embrace what I have spurned,',
                'And welcome back what I have burned',
                'With judgment harsh and critic\'s eye,',
                'Now seeing truth instead of lie.',
                '',
                'For wholeness comes not from the light',
                'Alone, but from the dark and bright',
                'United in one sacred dance',
                'Of full acceptance, not by chance.'
            ],
            likes: 5,
            comments: []
        },
        {
            id: 'crossroads',
            title: 'At the Crossroads',
            preview: [
                'Four paths diverge before my feet,',
                'Each one appears both bitter, sweet,',
                'And I must choose without a guide',
                'Which way to let my heart decide.'
            ],
            fullPoem: [
                'Four paths diverge before my feet,',
                'Each one appears both bitter, sweet,',
                'And I must choose without a guide',
                'Which way to let my heart decide.',
                '',
                'The first leads up to mountain heights',
                'Where eagles soar and spirit flights',
                'Can lift the soul beyond all care,',
                'But oxygen grows thin up there.',
                '',
                'The second winds through valley green',
                'Where gentle streams and peace serene',
                'Offer rest from life\'s demands,',
                'But growth requires more than gentle hands.',
                '',
                'The third cuts straight through desert sand',
                'Where few can walk and fewer stand',
                'The test of heat and thirst and pain,',
                'But those who do are not the same.',
                '',
                'The fourth turns back to where I\'ve been,',
                'To comfort zones and familiar din,',
                'But I have learned that going back',
                'Keeps souls forever off their track.',
                '',
                'So here I stand and here I pray',
                'For wisdom to choose the way',
                'That serves not just my own small need',
                'But plants tomorrow\'s sacred seed.'
            ],
            likes: 17,
            comments: []
        },
        {
            id: 'transformation',
            title: 'Transformation',
            preview: [
                'Like butterfly within cocoon,',
                'I\'ve wrapped myself in dark commune',
                'With all the parts that need to die',
                'Before my spirit learns to fly.'
            ],
            fullPoem: [
                'Like butterfly within cocoon,',
                'I\'ve wrapped myself in dark commune',
                'With all the parts that need to die',
                'Before my spirit learns to fly.',
                '',
                'The dissolution is not sweet—',
                'Old patterns fight before retreat,',
                'And ego screams its final song',
                'Before admitting it was wrong.',
                '',
                'But in this darkness, something new',
                'Is forming, though I cannot view',
                'Its shape or color, size or form,',
                'I trust the process of this storm.',
                '',
                'For caterpillars cannot know',
                'The wings on which they\'ll someday go',
                'Beyond the leaf on which they crawled',
                'To heights they never could have called.',
                '',
                'So I surrender to this change,',
                'Though it feels foreign, wild, and strange,',
                'Trusting that what emerges here',
                'Will be more beautiful and clear.'
            ],
            likes: 19,
            comments: []
        },
        {
            id: 'homecoming',
            title: 'Homecoming',
            preview: [
                'After years of searching far',
                'For some bright and distant star',
                'To guide me to my destined place,',
                'I find home in my own face.'
            ],
            fullPoem: [
                'After years of searching far',
                'For some bright and distant star',
                'To guide me to my destined place,',
                'I find home in my own face.',
                '',
                'The treasure that I sought outside',
                'Was always here, where I reside',
                'In this body, this breath, this heart',
                'That\'s been home right from the start.',
                '',
                'All the teachers, books, and prayers,',
                'All the climbing temple stairs',
                'Led me back to this simple truth:',
                'I am the seeker and the proof.',
                '',
                'Home is not a place to find',
                'But a state of peaceful mind',
                'That recognizes, clear and bright,',
                'I am the darkness and the light.',
                '',
                'So I bow to my own soul',
                'That has played the seeker\'s role',
                'So perfectly, so long, so well,',
                'To bring me to this truth to tell.'
            ],
            likes: 25,
            comments: []
        }
    ],
    wisdom: [
        {
            id: 'tea-ceremony',
            title: 'Tea Ceremony',
            preview: [
                'In the careful pouring of the tea,',
                'Lives all the wisdom there can be:',
                'To be present in each simple act,',
                'With grace and mindfulness intact.'
            ],
            fullPoem: [
                'In the careful pouring of the tea,',
                'Lives all the wisdom there can be:',
                'To be present in each simple act,',
                'With grace and mindfulness intact.',
                '',
                'The steam rises like incense prayer,',
                'Blessing the temple of the air,',
                'While warmth spreads through my cupped palms',
                'Like ancient, healing temple psalms.',
                '',
                'Each sip a moment of pure now,',
                'Each pause a meditation\'s vow',
                'To honor what is always here:',
                'This breath, this heartbeat, crystal clear.',
                '',
                'The empty cup when tea is done',
                'Reflects the truth of being one',
                'With all that was and all that\'s not—',
                'Perfect in this moment\'s spot.'
            ],
            likes: 21,
            comments: []
        },
        {
            id: 'ancient-bell',
            title: 'Ancient Bell',
            preview: [
                'Cast in bronze five hundred years',
                'Before my birth, this bell declares',
                'The truth that echoes through all time:',
                'All beings wake to the sublime.'
            ],
            fullPoem: [
                'Cast in bronze five hundred years',
                'Before my birth, this bell declares',
                'The truth that echoes through all time:',
                'All beings wake to the sublime.',
                '',
                'Its voice has called through wars and peace,',
                'Through famines, festivals, release',
                'Of countless souls from earthly care',
                'Into the boundless everywhere.',
                '',
                'I am the latest in the line',
                'Of those who\'ve heard this call divine,',
                'And I will pass, but still the bell',
                'Will sing what words can never tell.',
                '',
                'Each ring dissolves the sense of "me"',
                'Into the vast eternity',
                'Where past and future cease to be,',
                'And only truth rings clear and free.'
            ],
            likes: 8,
            comments: []
        },
        {
            id: 'masters-teaching',
            title: 'The Master\'s Teaching',
            preview: [
                'My teacher spoke in riddles deep,',
                'That made the other students weep',
                'With frustration at his cryptic way',
                'Of turning night into the day.'
            ],
            fullPoem: [
                'My teacher spoke in riddles deep,',
                'That made the other students weep',
                'With frustration at his cryptic way',
                'Of turning night into the day.',
                '',
                '"The finger pointing at the moon',
                'Is not the moon," he\'d say at noon,',
                '"And words that try to capture truth',
                'Are just the shadows of the proof."',
                '',
                'For years I pondered what he meant,',
                'Until one day my thinking bent',
                'And broke apart like morning mist',
                'When sunlight cannot be resisted.',
                '',
                'Now I see his wisdom clear:',
                'Truth cannot be captured here',
                'In concepts, words, or clever thought—',
                'It must be lived, it can\'t be taught.',
                '',
                'So when young seekers come to me',
                'And ask what they should do to see',
                'The truth that lies beyond all names,',
                'I point beyond their mental games.'
            ],
            likes: 12,
            comments: []
        },
        {
            id: 'scripture-study',
            title: 'Scripture Study',
            preview: [
                'These ancient texts with yellowed pages',
                'Hold wisdom gathered through the ages,',
                'But words alone cannot convey',
                'The truth that lives beyond the fray.'
            ],
            fullPoem: [
                'These ancient texts with yellowed pages',
                'Hold wisdom gathered through the ages,',
                'But words alone cannot convey',
                'The truth that lives beyond the fray.',
                '',
                'I read of sages long since gone',
                'Who found the light of early dawn',
                'Within their hearts, not in the sky,',
                'And learned to live before they die.',
                '',
                'Their words point like a weathered sign',
                'Toward something sacred and divine,',
                'But I must walk the path they walked',
                'To know the truth of which they talked.',
                '',
                'For scriptures are like maps that show',
                'The territory I need to know,',
                'But maps are not the land itself—',
                'I cannot live upon a shelf.',
                '',
                'So I close the book and close my eyes',
                'And seek the truth that never lies',
                'Within the temple of this heart',
                'Where wisdom\'s always been, from start.'
            ],
            likes: 9,
            comments: []
        },
        {
            id: 'zen-koan',
            title: 'Zen Koan',
            preview: [
                '"What is the sound of one hand clapping?"',
                'My master asked while I was napping',
                'In the garden by the old stone well,',
                'Where morning glories cast their spell.'
            ],
            fullPoem: [
                '"What is the sound of one hand clapping?"',
                'My master asked while I was napping',
                'In the garden by the old stone well,',
                'Where morning glories cast their spell.',
                '',
                'I pondered this for many days,',
                'Through meditation, work, and praise,',
                'I tried to solve this puzzle strange',
                'With logic\'s narrow, rigid range.',
                '',
                'I clapped with one hand in the air,',
                'I listened to the silence there,',
                'I thought of sounds that have no source,',
                'But still felt lost without recourse.',
                '',
                'Then sitting by that well one dawn,',
                'I heard a bird sing its sweet song,',
                'And suddenly I understood',
                'The koan\'s gift, profound and good.',
                '',
                'The sound of one hand clapping clear',
                'Is everything that I can hear',
                'When thinking stops and being starts—',
                'The sound of unified hearts.'
            ],
            likes: 15,
            comments: []
        },
        {
            id: 'prayer-beads',
            title: 'Prayer Beads',
            preview: [
                'One hundred eight beads smooth and worn',
                'From countless prayers since I was born',
                'Into this path of seeking truth',
                'Through age and wisdom, beyond youth.'
            ],
            fullPoem: [
                'One hundred eight beads smooth and worn',
                'From countless prayers since I was born',
                'Into this path of seeking truth',
                'Through age and wisdom, beyond youth.',
                '',
                'Each bead a prayer, each prayer a breath,',
                'Each breath a step beyond life, death,',
                'Into the space where all is one',
                'And separation comes undone.',
                '',
                'My fingers know each sacred sphere',
                'By touch alone, year after year',
                'Of morning prayers and evening chants',
                'That put the restless mind in trance.',
                '',
                'These beads have traveled many lands',
                'And passed through many seeking hands',
                'Before they came to rest in mine',
                'To help me walk the path divine.',
                '',
                'When words fail and the heart grows still,',
                'These beads remind me of the will',
                'To keep on praying, keep the faith',
                'That leads beyond the mortal wraith.'
            ],
            likes: 11,
            comments: []
        }
    ],
    seasons: [
        {
            id: 'autumn-letting-go',
            title: 'Autumn Letting Go',
            preview: [
                'The maple teaches without words',
                'How beautiful it is to fall,',
                'Releasing gold and crimson birds',
                'That answer nature\'s ancient call.'
            ],
            fullPoem: [
                'The maple teaches without words',
                'How beautiful it is to fall,',
                'Releasing gold and crimson birds',
                'That answer nature\'s ancient call.',
                '',
                'I rake the lessons at my feet—',
                'Each leaf a prayer now complete,',
                'A summer\'s growth transformed to mulch',
                'That feeds the soil with gentle touch.',
                '',
                'What must I too release this fall?',
                'What dreams no longer serve at all?',
                'What fears have I been holding tight',
                'That keep me from my truest flight?',
                '',
                'Like trees that trust the coming spring',
                'Will bring again the birds that sing,',
                'I let go all that I\'ve outgrown,',
                'To make space for the yet unknown.'
            ],
            likes: 18,
            comments: []
        },
        {
            id: 'winter-wisdom',
            title: 'Winter\'s Wisdom',
            preview: [
                'In winter\'s harsh and holy cold,',
                'The earth reveals her secrets old:',
                'That rest is not an empty space,',
                'But preparation\'s sacred grace.'
            ],
            fullPoem: [
                'In winter\'s harsh and holy cold,',
                'The earth reveals her secrets old:',
                'That rest is not an empty space,',
                'But preparation\'s sacred grace.',
                '',
                'Beneath the snow\'s white monastery,',
                'Life gathers strength for what will be,',
                'While I learn patience by the fire,',
                'As seasons change and storms retire.',
                '',
                'The bare trees stand in stark prayer,',
                'Their honesty laid clean and bare,',
                'No leaves to hide their true design—',
                'A lesson in the art divine.',
                '',
                'So let me too embrace this season',
                'Of stillness, beyond thought and reason,',
                'Where in the depths of winter\'s night,',
                'Seeds dream of spring\'s returning light.'
            ],
            likes: 14,
            comments: []
        },
        {
            id: 'spring-awakening',
            title: 'Spring Awakening',
            preview: [
                'After winter\'s long retreat,',
                'Life returns with joy complete,',
                'Each green shoot a prayer of praise',
                'For light returned and longer days.'
            ],
            fullPoem: [
                'After winter\'s long retreat,',
                'Life returns with joy complete,',
                'Each green shoot a prayer of praise',
                'For light returned and longer days.',
                '',
                'The cherry blossoms teach me how',
                'To be fully present now,',
                'Their beauty brief but burning bright,',
                'A fleeting glimpse of pure delight.',
                '',
                'I feel within my aging bones',
                'The same green fire, the same call home',
                'To what is always being born',
                'In every dewdrop, every dawn.',
                '',
                'Though seasons of the soul may change,',
                'And life may seem sometimes strange,',
                'Spring always comes to those who wait',
                'With open hearts at heaven\'s gate.'
            ],
            likes: 23,
            comments: []
        },
        {
            id: 'summer-abundance',
            title: 'Summer Abundance',
            preview: [
                'In summer\'s full and generous heart,',
                'All nature plays its vibrant part,',
                'The garden overflows with life,',
                'Beyond all struggle, beyond strife.'
            ],
            fullPoem: [
                'In summer\'s full and generous heart,',
                'All nature plays its vibrant part,',
                'The garden overflows with life,',
                'Beyond all struggle, beyond strife.',
                '',
                'The roses climb the temple wall',
                'In answer to the season\'s call',
                'To bloom with wild abandon here',
                'While summer\'s glory fills the year.',
                '',
                'I learn from this abundant time',
                'That life is meant to be sublime,',
                'Not hoarded, saved, or held too tight,',
                'But shared with generous delight.',
                '',
                'The fruit trees bend with heavy load',
                'Of gifts they freely have bestowed',
                'On any who would stop and taste',
                'The sweetness that should not be waste.',
                '',
                'So in this season of my soul',
                'When energy and purpose roll',
                'Like thunder through my very core,',
                'I give my all and then give more.'
            ],
            likes: 16,
            comments: []
        },
        {
            id: 'harvest-moon',
            title: 'Harvest Moon',
            preview: [
                'Beneath the harvest moon so bright,',
                'I gather wisdom in the night',
                'From all the seasons I have known,',
                'From seeds of truth that I have sown.'
            ],
            fullPoem: [
                'Beneath the harvest moon so bright,',
                'I gather wisdom in the night',
                'From all the seasons I have known,',
                'From seeds of truth that I have sown.',
                '',
                'The fields are golden, ripe, and full',
                'Of grain that time and weather pull',
                'From tiny seeds once planted deep',
                'In faith that earth would always keep.',
                '',
                'What harvest comes from years of prayer?',
                'What fruit from learning how to care',
                'For others\' pain as if my own,',
                'What wisdom from the seeds I\'ve grown?',
                '',
                'I see the answer in the moon',
                'That rises like a bright balloon',
                'Above the fields of golden grain:',
                'Love multiplied through joy and pain.',
                '',
                'The harvest of a life well-lived',
                'Is not what\'s taken but what\'s given,',
                'Not what we hoard but what we share',
                'With all who breathe this sacred air.'
            ],
            likes: 20,
            comments: []
        },
        {
            id: 'cycles-eternal',
            title: 'Cycles Eternal',
            preview: [
                'Round and round the seasons turn,',
                'Each one has lessons I must learn',
                'About the nature of all things:',
                'That death is what new life brings.'
            ],
            fullPoem: [
                'Round and round the seasons turn,',
                'Each one has lessons I must learn',
                'About the nature of all things:',
                'That death is what new life brings.',
                '',
                'Spring\'s hope follows winter\'s rest,',
                'Summer\'s growth puts faith to test,',
                'Autumn\'s harvest shows the fruit',
                'Of staying true to one\'s deep root.',
                '',
                'Then winter comes to clear the way',
                'For spring\'s return another day,',
                'And so the wheel keeps turning round',
                'Where endings and beginnings are found.',
                '',
                'I am part of this great dance',
                'Of seasons, given just one chance',
                'To play my part with grace and skill',
                'In harmony with nature\'s will.',
                '',
                'So let me flow with time\'s great river,',
                'Not fighting what I can\'t deliver',
                'From change, but learning how to be',
                'At peace with life\'s great mystery.'
            ],
            likes: 13,
            comments: []
        }
    ]
};

// Application state
let currentSection = 'nature';
let expandedPoems = new Set();
let likedPoems = new Set();
let currentCommentPoemId = null;

// DOM elements
const navButtons = document.querySelectorAll('.nav-button');
const sections = document.querySelectorAll('.poem-section');
const navigation = document.getElementById('navigation');
const mainContent = document.getElementById('mainContent');
const navToggle = document.getElementById('navToggle');
const navCollapseBtn = document.getElementById('navCollapseBtn');
const commentModal = document.getElementById('commentModal');
const closeCommentModal = document.getElementById('closeCommentModal');
const cancelComment = document.getElementById('cancelComment');
const submitComment = document.getElementById('submitComment');
const commenterName = document.getElementById('commenterName');
const commentText = document.getElementById('commentText');

// Initialize the application
function init() {
    setupNavigation();
    setupModals();
    renderPoems();
    showSection(currentSection);
    loadUserData();
}

// Load user data from localStorage
function loadUserData() {
    const savedLikes = localStorage.getItem('likedPoems');
    if (savedLikes) {
        likedPoems = new Set(JSON.parse(savedLikes));
    }
    
    const savedComments = localStorage.getItem('poemComments');
    if (savedComments) {
        const comments = JSON.parse(savedComments);
        Object.keys(comments).forEach(sectionId => {
            if (poems[sectionId]) {
                poems[sectionId].forEach(poem => {
                    if (comments[sectionId][poem.id]) {
                        poem.comments = comments[sectionId][poem.id];
                    }
                });
            }
        });
    }
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('likedPoems', JSON.stringify([...likedPoems]));
    
    const comments = {};
    Object.keys(poems).forEach(sectionId => {
        comments[sectionId] = {};
        poems[sectionId].forEach(poem => {
            if (poem.comments && poem.comments.length > 0) {
                comments[sectionId][poem.id] = poem.comments;
            }
        });
    });
    localStorage.setItem('poemComments', JSON.stringify(comments));
}

// Setup navigation event listeners
function setupNavigation() {
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.dataset.section;
            switchSection(section);
        });
    });
    
    // Mobile navigation toggle
    navToggle.addEventListener('click', () => {
        navigation.classList.toggle('open');
        navToggle.classList.toggle('active');
    });
    
    // Navigation collapse/expand
    navCollapseBtn.addEventListener('click', () => {
        navigation.classList.toggle('collapsed');
        mainContent.classList.toggle('nav-collapsed');
    });
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024 && 
            !navigation.contains(e.target) && 
            !navToggle.contains(e.target) && 
            navigation.classList.contains('open')) {
            navigation.classList.remove('open');
            navToggle.classList.remove('active');
        }
    });
}

// Setup modal event listeners
function setupModals() {
    closeCommentModal.addEventListener('click', closeCommentModalHandler);
    cancelComment.addEventListener('click', closeCommentModalHandler);
    submitComment.addEventListener('click', submitCommentHandler);
    
    commentModal.addEventListener('click', (e) => {
        if (e.target === commentModal) {
            closeCommentModalHandler();
        }
    });
}

// Switch to a different section
function switchSection(sectionId) {
    if (currentSection === sectionId) return;
    
    currentSection = sectionId;
    
    // Update navigation
    navButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === sectionId);
    });
    
    // Update sections
    sections.forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });
    
    // Clear expanded poems when switching sections
    expandedPoems.clear();
    renderPoems();
    
    // Close mobile nav after selection
    if (window.innerWidth <= 1024) {
        navigation.classList.remove('open');
        navToggle.classList.remove('active');
    }
}

// Show specific section
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });
    
    navButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === sectionId);
    });
}

// Render poems for all sections
function renderPoems() {
    Object.keys(poems).forEach(sectionId => {
        const container = document.getElementById(`${sectionId}-poems`);
        if (container) {
            container.innerHTML = '';
            poems[sectionId].forEach(poem => {
                const poemElement = createPoemTile(poem);
                container.appendChild(poemElement);
            });
        }
    });
}

// Create a poem tile element
function createPoemTile(poem) {
    const isExpanded = expandedPoems.has(poem.id);
    const isLiked = likedPoems.has(poem.id);
    const lines = isExpanded ? poem.fullPoem : poem.preview;
    
    const tile = document.createElement('div');
    tile.className = `poem-tile ${isExpanded ? 'expanded' : ''}`;
    
    tile.innerHTML = `
        <div class="poem-header">
            <h3 class="poem-title">${poem.title}</h3>
            <span class="expand-icon">${isExpanded ? '⊖' : '⊕'}</span>
        </div>
        <div class="poem-content">
            ${lines.map((line, index) => 
                `<p class="poem-line ${line === '' ? 'empty' : ''} ${isExpanded ? 'fade-in' : ''}" 
                   style="${isExpanded ? `animation-delay: ${index * 50}ms` : ''}">${line}</p>`
            ).join('')}
        </div>
        <div class="poem-actions">
            <button class="action-btn like-btn ${isLiked ? 'liked' : ''}" data-poem-id="${poem.id}">
                <span>${isLiked ? '❤️' : '🤍'}</span>
                <span class="like-count">${poem.likes + (isLiked ? 1 : 0)}</span>
            </button>
            <button class="action-btn comment-btn" data-poem-id="${poem.id}">
                <span>💬</span>
                <span class="comment-count">${poem.comments.length}</span>
            </button>
            <button class="action-btn download-btn" data-poem-id="${poem.id}">
                <span>📥</span>
                <span>Download</span>
            </button>
        </div>
        ${poem.comments.length > 0 ? `
            <div class="comments-section">
                <div class="comments-header">Comments (${poem.comments.length})</div>
                ${poem.comments.map(comment => `
                    <div class="comment">
                        <div class="comment-author">${comment.author}</div>
                        <div class="comment-text">${comment.text}</div>
                    </div>
                `).join('')}
            </div>
        ` : ''}
        <div class="poem-footer">
            ${isExpanded ? 'Click to collapse' : 'Click to read full poem'}
        </div>
    `;
    
    // Add event listeners
    const poemContentArea = tile.querySelector('.poem-content, .poem-footer');
    poemContentArea.addEventListener('click', () => togglePoem(poem.id));
    
    const expandIcon = tile.querySelector('.expand-icon');
    expandIcon.addEventListener('click', () => togglePoem(poem.id));
    
    const likeBtn = tile.querySelector('.like-btn');
    likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLike(poem.id);
    });
    
    const commentBtn = tile.querySelector('.comment-btn');
    commentBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openCommentModal(poem.id);
    });
    
    const downloadBtn = tile.querySelector('.download-btn');
    downloadBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        downloadPoemAsImage(poem);
    });
    
    return tile;
}

// Toggle poem expansion
function togglePoem(poemId) {
    if (expandedPoems.has(poemId)) {
        expandedPoems.delete(poemId);
    } else {
        expandedPoems.add(poemId);
    }
    renderPoems();
}

// Toggle like status
function toggleLike(poemId) {
    if (likedPoems.has(poemId)) {
        likedPoems.delete(poemId);
    } else {
        likedPoems.add(poemId);
    }
    saveUserData();
    renderPoems();
}

// Open comment modal
function openCommentModal(poemId) {
    currentCommentPoemId = poemId;
    commenterName.value = '';
    commentText.value = '';
    commentModal.classList.add('active');
}

// Close comment modal
function closeCommentModalHandler() {
    commentModal.classList.remove('active');
    currentCommentPoemId = null;
}

// Submit comment
function submitCommentHandler() {
    const name = commenterName.value.trim();
    const text = commentText.value.trim();
    
    if (!name || !text) {
        alert('Please enter both your name and comment.');
        return;
    }
    
    // Find the poem and add comment
    Object.keys(poems).forEach(sectionId => {
        const poem = poems[sectionId].find(p => p.id === currentCommentPoemId);
        if (poem) {
            poem.comments.push({ author: name, text: text });
        }
    });
    
    saveUserData();
    renderPoems();
    closeCommentModalHandler();
}

// Download poem as image
function downloadPoemAsImage(poem) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 800;
    canvas.height = 1000;
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#0f172a');
    gradient.addColorStop(0.5, '#1e293b');
    gradient.addColorStop(1, '#0f172a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set text properties
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    
    // Title
    ctx.font = 'bold 32px serif';
    ctx.fillText(poem.title, canvas.width / 2, 80);
    
    // Poem content
    ctx.font = '20px serif';
    ctx.fillStyle = '#cbd5e1';
    
    let y = 140;
    const lineHeight = 30;
    const maxWidth = canvas.width - 100;
    
    poem.fullPoem.forEach(line => {
        if (line === '') {
            y += lineHeight / 2;
        } else {
            // Word wrap for long lines
            const words = line.split(' ');
            let currentLine = '';
            
            words.forEach(word => {
                const testLine = currentLine + word + ' ';
                const metrics = ctx.measureText(testLine);
                
                if (metrics.width > maxWidth && currentLine !== '') {
                    ctx.fillText(currentLine.trim(), canvas.width / 2, y);
                    currentLine = word + ' ';
                    y += lineHeight;
                } else {
                    currentLine = testLine;
                }
            });
            
            if (currentLine.trim() !== '') {
                ctx.fillText(currentLine.trim(), canvas.width / 2, y);
                y += lineHeight;
            }
        }
    });
    
    // Attribution
    ctx.font = 'italic 18px serif';
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('- by Eternal Monkey', canvas.width / 2, canvas.height - 50);
    
    // Download the image
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${poem.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_eternal_monkey.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);