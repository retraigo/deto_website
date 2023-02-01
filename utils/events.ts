export enum EVENT_TYPE {
  TECH,
  NONTECH,
  ONLINE,
}

export enum EVENT_MODE {
  OFFLINE,
  ONLINE,
}

export enum EVENT_COUNT {
  PER_HEAD,
  PER_TEAM,
}

export enum EVENT_ID {
  SHERLOCK_CODE,
  SCHEMER,
  BLIND_PRESENTATION,
  THAT_ESCALATED_QUICKLY,
  PAPER_PRESENTATION,
  SIGMA,
  THE_WEB_SLASHER,
  ADAPT_TUNES,
  QUIZ_IN_KOLLYWOOD,
  BOX_CRICKET,
  IMPROV,
  FUTSAL,
  TUG_OF_WAR,
  SOLO_SINGING,
  VALORANT,
  REELS,
  VIDEO_EDITING,
  ART_OF_APERTURE,
}

export enum UPI_ID {
  ASVIN = "asvinbaskar@okhdfcbank",
  JENNIFER = "jennifersharon07@oksbi",
  DEEPAK = "deepakat274@okhdfcbank",
  NAVEEN = "snaveenkumar343@okhdfcbank",
  SABETHA = "aisabetha05@okaxis",
}

export const EVENTS = [
  {
    name: "Sherlock Code",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.JENNIFER,
    fee: 60,
    minTeam: 1,
    maxTeam: 2,
    whatsapp: "https://wa.me/9840860012",
  },
  {
    name: "Schemer",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.ASVIN,
    fee: 120,
    minTeam: 1,
    maxTeam: 3,
    whatsapp: "https://wa.me/7358652205",
  },
  {
    name: "Blind Presentation",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.DEEPAK,
    fee: 90,
    minTeam: 2,
    maxTeam: 3,
    whatsapp: "https://wa.me/9500163095",
  },
  {
    name: "That Escalated Quickly",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.NAVEEN,
    fee: 90,
    minTeam: 2,
    maxTeam: 3,
    whatsapp: "https://wa.me/7904302894",
  },
  {
    name: "Paper Presentation",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.JENNIFER,
    fee: 180,
    minTeam: 2,
    maxTeam: 3,
    whatsapp: "https://wa.me/9840860012",
  },
  {
    name: "Sigma",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.DEEPAK,
    fee: 50,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/9500163095",
  },
  {
    name: "The Web Slasher",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.ONLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.NAVEEN,
    fee: 50,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/7904302894",
  },
  {
    name: "Adapt Tunes",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.ASVIN,
    fee: 50,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/7358652205",
  },
  {
    name: "Quiz in Kollywood",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.ASVIN,
    fee: 100,
    minTeam: 3,
    maxTeam: 4,
    whatsapp: "https://wa.me/7358652205",
  },
  {
    name: "Murder Mystery",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.NAVEEN,
    fee: 120,
    minTeam: 2,
    maxTeam: 4,
    whatsapp: "https://wa.me/7904302894",
  },
  {
    name: "Box Cricket",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.JENNIFER,
    fee: 200,
    minTeam: 5,
    maxTeam: 5,
    whatsapp: "https://wa.me/9840860012",
  },
  {
    name: "Improv",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.SABETHA,
    fee: 50,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/9345225837",
  },
  {
    name: "Futsal",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.DEEPAK,
    fee: 300,
    minTeam: 4,
    maxTeam: 6,
    whatsapp: "https://wa.me/9500163095",
  },
  {
    name: "Solo Singing",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.JENNIFER,
    fee: 50,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/9840860012",
  },
  {
    name: "Valorant",
    type: EVENT_TYPE.ONLINE,
    mode: EVENT_MODE.ONLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.ASVIN,
    fee: 200,
    minTeam: 5,
    maxTeam: 5,
    whatsapp: "https://wa.me/7358652205",
  },
  {
    name: "Reels",
    type: EVENT_TYPE.ONLINE,
    mode: EVENT_MODE.ONLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.DEEPAK,
    fee: 30,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/9500163095",
  },
  {
    name: "Video Editing",
    type: EVENT_TYPE.ONLINE,
    mode: EVENT_MODE.ONLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.NAVEEN,
    fee: 30,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/7904302894",
  },
  {
    name: "Art of Aperture",
    type: EVENT_TYPE.ONLINE,
    mode: EVENT_MODE.ONLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.SABETHA,
    fee: 30,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/9345225837",
  },
];
