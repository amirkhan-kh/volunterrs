 interface NewsCardProps {
  id: number;
  img: string;
  titleNews: string;
  desc: string;
  dataCalendar: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, id: number) => void;
}