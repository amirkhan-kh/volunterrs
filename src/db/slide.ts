export type TSlideContent = {
  image: string;
  title: string;
  subtitle: string;
};

import { useTranslation } from 'react-i18next';
import intro1 from '../../public/images/intro1 14.png';
import intro2 from '../../public/voluntermedia/icons/homeIcon/activ7.png';


export const SliderContent = () => {
  const { t } = useTranslation("Intro"); // yoki umumiy namespace bo‘lsa: t('slider.key')
  
  return [
    {
      image: intro1,
      title: t("title1"),
      subtitle: t("subtitle1"),
    },
    {
      image: intro2,
      title: t("title2"),
      subtitle: t("subtitle2"),
    },
    {
      image: intro1,
      title: t("title3"),
      subtitle: t("subtitle3"),
    },
  ];
};
