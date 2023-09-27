interface Facility {
  id: number;
  title: string;
  img: string;
}

interface Params {
  id: number;
  title: string;
  desc: string;
}



export const facilitiesTop: Facility[] = [
  { id: 1, title: 'Ресторан', img: '/Restourant.png' },
  { id: 2, title: 'Спа на территории', img: '/leaf.png' },
  { id: 3, title: 'Тренажерный зал', img: '/Vessel.png' },
];
export const facilitiesBottom: Facility[] = [
  { id: 1, title: 'Парковка для авто', img: '/Coin.png' },
  { id: 2, title: 'Общий бассейн', img: '/Pool.png' },
  { id: 3, title: 'Клуб на территории', img: '/Glass.png' },
];



export const paramsFirst: Params[] = [
  {id: 1, title: "Площадь участка", desc: "1 234 м²"},
  {id: 2, title: "Этаж", desc: "10 из 20"},
  {id: 3, title: "Балкон", desc: "2 лоджии"},
]
export const paramsSecond: Params[] = [
  {id: 1, title: "Площадь квартиры", desc: "234 м²"},
  {id: 2, title: "Комнаты", desc: "3"},
  {id: 3, title: "Ориентир", desc: "Пляж Камала: 0.5 км"},
]
export const paramsThird: Params[] = [
  {id: 1, title: "Площадь кухни", desc: "28 м²"},
  {id: 2, title: "Санузел", desc: "2"},
  {id: 3, title: "Тип дома", desc: "кирпичный"},
]

