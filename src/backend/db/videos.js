import { v4 as uuid } from "uuid";
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
// <iframe width="560" height="315" src="https://www.youtube.com/embed/wkHjOTFv60g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

export const videos = [
  {
    _id: uuid(),
    title: "Happiness",
    description:
      "With her long-time friend and fellow officer, Detective Jung Yi Hyun (Park Hyung Sik) moving in as well, Sae Bom is convinced this new home will bring her all the happiness she desires. Unfortunately, that happiness doesn’t last long. As a new type of infectious disease slowly begins to spread throughout the building, the residents soon find themselves the object of terror and a source of city-wide panic. Set in the not-so-distant future, “Happiness” is a 2021 fantasy action thriller drama directed by Ahn Gil Ho.",
    category: "Drama",
    episode: "20",
    season: "1",
    trending: true,
    lang: "korean",
    subtitle: "english",
    year: "2022",
    rating: 5,
    poster: "https://www.justwatch.com/images/poster/255365196/s332",
    banner:
      "https://otakukart.com/wp-content/uploads/2021/12/Han-Hyo-Joo-and-Park-Hyung-Sik.jpg",
    trailer: "https://www.youtube.com/embed/uaHq2ImPrHs",
  },
  {
    _id: uuid(),
    title: "Squid Game",
    description: "Survive or die! Who will live to see 45.6 billion won?",
    category: "Drama",
    episode: "16",
    season: "1",
    trending: true,
    lang: "korean",
    subtitle: "english",
    dubbed: false,
    year: "2022",
    rating: 5,
    poster:
      "https://d2jnu6hkti1tqv.cloudfront.net/upload/0154a0a0-d5ec-4deb-ac25-89425d11bb5e.jpg",
    banner: "https://static.dw.com/image/59472921_303.jpg",
    trailer: "https://www.youtube.com/embed/oqxAJKy0ii4",
  },
  {
    _id: uuid(),
    title: "Vincenzo",
    episode: "20",
    season: "1",
    description:
      "Bringing his mafia past back with him to South Korea, Song Joong-ki stars as notorious Italian lawyer Vincenzo who isn't afraid to lend his bloodstained hands to beat the untouchable conglomerates in their own game.",
    category: "Drama",
    trending: true,
    lang: "korean",
    subtitle: "english",
    year: "2021",
    rating: 5,
    poster: "https://i.mydramalist.com/vAnBe_4f.jpg",
    banner:
      "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/2stekqli98kqbbw3_1619897824.jpeg",
    trailer: "https://www.youtube.com/embed/S12-4mXCNj4",
  },
  {
    _id: uuid(),
    title: "StartUp",
    episode: "16",
    season: "1",
    description:
      "Finding success in Korea's Silicon Valley is no small feat for a young entrepreneur to take on alone, but with her genius first love, a wealthy investor, and a confident industry insider by her side? Her lofty dream might be closer to her reach than she thought.",
    category: "Drama",
    trending: true,
    lang: "korean",
    subtitle: "english",
    year: "2020",
    rating: 4,
    poster:
      "https://i.pinimg.com/originals/f2/32/7c/f2327cbc8bb012cc6f6b9397f4da3540.jpg",
    banner:
      "https://www.pinkvilla.com/files/styles/fbimagesection/public/start_up_ep_16_recap_social_media_image.jpg?itok=eKT6SyZB",
    trailer: "https://www.youtube.com/embed/BemKyzbLDDc",
  },
  {
    _id: uuid(),
    title: "Let's BTS",
    description:
      "The global artists who swept the American Billboard charts, BTS are back on the air! On this special talk show, all seven members are here to converse with the viewers and deliver a message of consolation and hope to those who are struggling due to COVID-19. Also, the members plan to divulge their honest thoughts and stories, which they have yet to reveal.",
    category: "Variety",
    trending: true,
    lang: "korean",
    subtitle: "english",
    year: "2021",
    rating: 5,
    poster: "https://b2kplus.xyz/wp-content/uploads/2021/04/lets-bts-2021.jpg",
    banner:
      "https://6.viki.io/image/33a3fcecad5b4495bc92721b89e17930.jpeg?s=900x600&e=t",
    trailer: "https://www.youtube.com/embed/B2lqiC6T7-4",
  },
  {
    _id: uuid(),
    title: "Descendants Of The Sun",
    description:
      "Captain Yoo Shi-jin's proactive nature lands him in a hospital, where he meets Dr. Kang Mo-yeon and falls in love. But problems arise when duty calls.",
    category: "Drama",
    episode: "20",
    season: "1",
    trending: true,
    lang: "korean",
    subtitle: "english",
    year: "2016",
    rating: 5,
    poster: "https://picfiles.alphacoders.com/361/361043.jpg",
    banner:
      "https://6.vikiplatform.com/image/647f70f7bc2a413bb7371e3093f37bda.jpeg?x=b",
    trailer: "https://www.youtube.com/embed/wkHjOTFv60g",
  },
  {
    _id: uuid(),
    title: "Parasite",
    description:
      "Bong Joon Ho brings his singular mastery home to Korea in this pitch-black modern fairytale. Meet the Park Family: the picture of aspirational wealth. And the Kim Family, rich in street smarts but not much else. Be it chance or fate, these two houses are brought together. When a parasitic interloper threatens the Kims' newfound comfort, a savage, underhanded battle for dominance breaks out, threatening to destroy the fragile ecosystem between the Kims and the Parks.",
    category: "Movies",
    trending: true,
    lang: "korean",
    subtitle: "english",
    year: "2019",
    rating: 5,
    poster:
      "https://images.squarespace-cdn.com/content/v1/5a4488a6ace864a5558b6738/1575653762434-4HIFKWKBP8W893A50I95/p16965677_v_v8_aa.jpg",
    banner:
      "https://media.newyorker.com/photos/5da4a5c756dcd400082a63ba/master/pass/Brody-Parasite.jpg",
    trailer: "https://www.youtube.com/embed/isOGD_7hNIY",
  },
  {
    _id: uuid(),
    title: "Train To Busan",
    description:
      "A father with not much time for his daughter are boarding the KTX, a fast train that shall bring them from Seoul to Busan. But during their journey, the apocalypse begins, and most of the earth's population become flesh craving zombies. While the KTX is shooting towards Busan, the passenger's fight for their families and lives against the zombies - and each other.",
    category: "Movies",
    trending: true,
    lang: "korean",
    subtitle: "english",
    year: "2016",
    rating: 4,
    poster:
      "https://images.squarespace-cdn.com/content/v1/571e7cc14c2f859b347c0167/1491437447134-AAXO5734Q5QRTB6TARGR/poster+-+TrainToBusan.jpg?format=750w",
    banner:
      "https://www.indiewire.com/wp-content/uploads/2016/07/fullsizephoto719196-750x400.jpg",
    trailer: "https://www.youtube.com/embed/pyWuHv2-Abk",
  },
  {
    _id: uuid(),
    title: "It's OK to Not be OK",
    description:
      "Desperate to escape from his emotional baggage and the heavy responsibility he’s had all his life, a psychiatric ward worker begins to heal with help from the unexpected—a woman who writes fairy tales but doesn't believe in them.",
    category: "Drama",
    episode: "20",
    season: "1",
    trending: true,
    lang: "korean",
    subtitle: "english",
    year: "2020",
    rating: 5,
    poster:
      "https://i.pinimg.com/474x/68/63/76/6863766d63c8b1072ebe8973ce74dedc.jpg",
    banner:
      "https://i0.wp.com/annyeongoppa.com/wp-content/uploads/2020/08/IMG_20200812_082741.jpg?resize=780%2C439&ssl=1",
    trailer: "https://www.youtube.com/embed/89i-Fn2CqQg",
  },
  {
    _id: uuid(),
    title: "Midnight Runners",
    description:
      "Two friends who are students at Korean National Police University, find themselves in an endless race against time after they witness a kidnapping and decide to use their knowledge.    ",
    category: "Movies",
    trending: true,
    lang: "korean",
    subtitle: "english",
    year: "2017",
    rating: 4,
    poster:
      "https://m.media-amazon.com/images/M/MV5BZDE5Zjc3NjUtNmYwYS00M2IxLWFjMGMtYmI3ZWNkOTZmNWExXkEyXkFqcGdeQXVyNTAwNzc3ODg@._V1_.jpg",
    banner: "https://data.ibtimes.sg/en/full/12606/midnight-runners.jpg",
    trailer: "https://www.youtube.com/embed/cyVk51ksx4o",
  },
  {
    _id: uuid(),
    title: "One Fine Week",
    description:
      "What if I date a really cool guy? What if I become someone else?” This story shows these kinds of imaginations before our eyes. Da Eun, a college student who is still finding her career path, becomes Byul, who has been a singer since she was young. Da Eun spends time with a celebrity named Jung Woo and experiences the dreamy life of luxury, while also seeing its dark side. Byul also experiences the preciousness of everyday life, something she hasn’t felt in a while as she became a clumsy part timer at a café with Ji Han and Ari",
    category: "Drama",
    episode: "10",
    season: "2",
    trending: true,
    lang: "korean",
    subtitle: "english",
    year: "2019",
    rating: 3,
    poster: "https://i.mydramalist.com/ByEAq_4f.jpg",
    banner:
      "https://dramacream.files.wordpress.com/2020/03/da-eun-jung-woo.jpg?w=640",
    trailer: "https://www.youtube.com/embed/d1BaLp_a4UY",
  },
  {
    _id: uuid(),
    title: "Be My Boyfriend",
    description:
      "At Hwayang High School, no student's popularity eclipses that of the third-year senior Oh Ji Na (Lee Shi Woo).Lee Seung Min (Shin Hyun Seung) is a junior student at the same school. And like many others, he is smitten with the many charms of Oh Ji Na.He is sure that he does not stand a chance at winning her heart.But he is in for a surprise when Oh Ji Na comes up with a plan to begin a bogus “contract” relationship with him, in order to further her career.Spending time together softens her heart, though - could she end up falling for this unassuming younger student for real?",
    category: "Drama",
    episode: "10",
    season: "1",
    trending: true,
    lang: "korean",
    subtitle: "english",
    dubbed: false,
    year: "2020",
    rating: 3,
    poster:
      "https://i0.wp.com/www.noregret.com.ng/wp-content/uploads/2021/05/images-12.jpeg?fit=554%2C554&ssl=1",
    banner:
      "https://6.vikiplatform.com/image/6260c45112584b2aaf9d35f58b41db6f.jpg?x=b&a=0x0&s=480x270&e=t&q=g",
    trailer: "https://www.youtube.com/embed/aB7biDbZVbQ?start=2",
  },

  {
    _id: uuid(),
    title: "Yet to come",
    description:
      "BTS (방탄소년단) 'Yet To Come (The Most Beautiful Moment)' Official MV",
    category: "Songs",
    trending: true,
    lang: "korean",
    subtitle: "english",
    dubbed: false,
    year: "2021",
    rating: 5,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgraf_ltcRcSJ07ZaqjqRnUgnnyuBUWmPSAxZH0byWhMXd-eZFlLrUQLH2Lns4MVKM9v4&usqp=CAU",
    banner:
      "https://www.allkpop.com/upload/2022/06/content/100114/1654838051-inbound9154688772762926178.jpg",
    trailer:"https://www.youtube.com/embed/kXpOEzNZ8hQ",
  },

  {
    _id: uuid(),
    title: "Love Scenario",
    description:
      "iKON - ‘사랑을 했다(LOVE SCENARIO)’ M/V",
    category: "Songs",
    trending: true,
    lang: "korean",
    subtitle: "english",
    dubbed: false,
    year: "2018",
    rating: 5,
    poster:
      "https://wallpapers.com/images/high/ikon-love-scenario-rfe1uuixk9ttrsnj.jpg",
    banner:
      "https://www.allkpop.com/upload/2018/02/af_org/03112311/ikon.jpg",
    trailer:"https://www.youtube.com/embed/vecSVX1QYbQ",
  },

];
