export type TSlideContent = {
  image: string;
  title: string;
  subtitle: string;
};

import { useTranslation } from 'react-i18next';
import intro1 from '../../public/images/intro1 14.png';
import intro3 from '../../public/voluntermedia/volunter-images/slider-1.jpg';
import intro4 from '../../public/voluntermedia/volunter-images/slider-4.jpg'

export const SliderContent = () => {
  const { t } = useTranslation("Intro"); 
  
  return [
    {
      image: intro1,
      title: t("title1"),
      subtitle: t("subtitle1"),
    },
    {
      image: intro4,
      title: t("title2"),
      subtitle: t("subtitle2"),
    },
    {
      image: intro3,
      title: t("title3"),
      subtitle: t("subtitle3"),
    },
  ];
};
