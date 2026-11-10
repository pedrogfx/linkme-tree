declare module "*.css";

interface Home {
  theme: string;
}

interface ITheme {
  colors: {
    accent: string;
    accentSecondary: string;
    primary: string;
    surface: string;
    surfaceHover: string;
    card: {
      background: string;
      border: string;
    };
    text: {
      accent: string;
      primary: string;
      secondary: string;
      muted: string;
    };
  };
  common: {
    borderRadius: string;
    gap: string;
    borderSize: string;
    width: string;
  };
  typography: {
    titleFontSize: string;
    subtitleFontSize: string;
    subtitleLineHeight: string;
    textFontSize: string;
    textLineHeight: string;
    sectionTitleFontSize: string;
    sectionTitleLineHeight: string;
  };
}

interface IThemes {
  [key: string]: ITheme;
}

interface ICta {
  id: number;
  title: string;
  url: string;
  variant?: "primary" | "ghost";
}

interface IStat {
  id: number;
  value: string;
  label: string;
}

interface IExperience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
}

interface ISkillGroup {
  id: number;
  title: string;
  items: string[];
}

interface ICertification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

interface IData {
  meta: {
    title: string;
    description: string;
    tags: string;
    author: string;
  };
  theme: string;
  name: string;
  occupancy: string;
  about: string;
  avatar: string;
  location?: string;
  ctas?: ICta[];
  stats?: IStat[];
  experience?: IExperience[];
  skills?: ISkillGroup[];
  certifications?: ICertification[];
  links?: ILink[];
  cards?: ICard[];
}

interface ICard {
  id: number;
  title: string;
  items: ICardItem[];
}

interface ICardItem {
  id: number;
  title: string;
  url: string;
  banner?: string;
  description: string;
}

interface ILink {
  id: number;
  title: string;
  items: ILinkItem[];
}

interface ILinkItem {
  id: number;
  title: string;
  url: string;
  color?: string;
}

type IAbout = Pick<
  IData,
  "name" | "occupancy" | "about" | "avatar" | "location" | "ctas" | "stats"
>;
