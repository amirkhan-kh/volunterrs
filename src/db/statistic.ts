import eyes from '../../public/voluntermedia/icons/homeIcon/eyes 1.png';
import unitedHands from '../../public/voluntermedia/icons/homeIcon/hands.png';
import twoHands from '../../public/voluntermedia/icons/homeIcon/twoHands.png';
import shablon from '../../public/voluntermedia/icons/homeIcon/shablon.png'
import { useTranslation } from 'react-i18next';
export const useStatisticCard = () => {
  const { t } = useTranslation("HomeSection2");

  return [
    {
      title: t("card1"),
      img: eyes,
      valueNumber: "2,345"
    },
    {
      title: t("card2"),
      img: unitedHands,
      valueNumber: "2,345"
    },
    {
      title: t("card3"),
      img: twoHands,
      valueNumber: "2,345"
    },
    {
      title: t("card4"),
      img: shablon,
      valueNumber: "2,345"
    },
  ];
};