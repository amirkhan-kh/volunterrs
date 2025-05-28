export type TSlideContent = {
  image: string;
  title: string;
  subtitle: string;
};

import intro1 from '../../public/images/intro1 14.png';
import intro2 from '../../public/voluntermedia/icons/homeIcon/activ7.png';

export const sliderContent: TSlideContent [] = [
  {
    image: intro1 ,
    title: 'Kuchlilik nazariyasi',
    subtitle: 'BILIM, AMALIYOT VA TAJRIBA UCHUN BIRLASHDIK!',
  },
  {
    image: intro2,
    title: 'Ishonch va Harakat',
    subtitle: 'Yoshlar harakati orqali ijtimoiy o‘zgarishlar sari!',
  },
  {
    image:intro1 ,
    title: 'O‘sish sari yo‘l',
    subtitle: 'Intilish, bilim va birlik — kelajakka yo‘l!',
  },
];