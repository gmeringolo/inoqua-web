import {
  Mail,
  Phone,
  PartyPopper,
  FileText,
  ClipboardList,
  SprayCan,
  MapPin,
  GraduationCap,
  ShoppingCart,
  ShieldCheck,
  ClipboardCheck,
  TriangleAlert,
  Clock,
  CheckCircle2,
  Wrench,
  Calendar,
  XCircle,
  ArrowRight,
  Box,
  CircleDollarSign,
  UserPlus,
  IdCard,
  Truck,
  Utensils,
  Briefcase,
  Eye,
  Radio,
  Leaf,
  Pickaxe,
  Globe,
  Handshake,
  AlertCircle,
  Tractor,
  Share2,
  Wallet,
  TrendingUp,
  Package,
  Users,
  Ban,
  Lightbulb,
  Brain,
  PawPrint,
  Laptop,
  ListChecks,
  Snowflake,
  Bone,
  Tent,
  Star,
  Fish,
  Dog,
  ShoppingBag,
  Target,
  IceCream2,
  Heart,
  ChefHat,
  Wine,
  Sandwich,
  Compass,
  Hourglass,
  Shrimp,
  CookingPot,
  Coffee,
  Building2,
  Headphones,
  Ruler,
  UsersRound,
  Check,
  X,
  ShoppingBasket,
  Croissant,
  Ham,
  Balloon,
  Banana,
  Flame,
  FerrisWheel,
  Wheat,
  Hamburger,
  Milk,
  Apple,
  Pizza,
  Store,
  HandHeart,
  House,
  type LucideIcon,
} from "lucide-react";

/** LinkedIn y Instagram no vienen en Lucide (no incluye logos de marca), así que van dibujados a mano. */
function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4 0 4.8 2.6 4.8 6.1V21h-4v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z" />
    </svg>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Registro central de íconos del sitio. Todo lo que ves acá sale de Lucide
 * (lucide-react — https://lucide.dev/icons), la misma familia visual de
 * trazo fino que usábamos antes, pero con muchas más variantes disponibles.
 *
 * Para usar un ícono nuevo que no esté en esta lista: buscalo en
 * https://lucide.dev/icons, importalo arriba (ej: `import { Truck } from "lucide-react"`)
 * y agregalo acá con el nombre que quieras usar en el resto del código.
 */
const icons = {
  // --- ya en uso en el contenido del sitio (no tocar los nombres) ---
  clipboard: ClipboardList,
  clipboardCheck: ClipboardCheck,
  eye: Eye,
  rule: Ruler,
  clock: Clock,
  warning: TriangleAlert,
  close: XCircle,
  handshake: Handshake,
  fork: Utensils,
  shield: ShieldCheck,
  headset: Headphones,
  money: CircleDollarSign,
  building: Building2,
  package: Package,
  email: Mail,
  phone: Phone,
  social: InstagramGlyph,

  // --- del set de íconos que subiste (nombres nuevos, listos para usar) ---
  whatsapp: Phone,
  party: PartyPopper,
  document: FileText,
  spray: SprayCan,
  pin: MapPin,
  graduationCap: GraduationCap,
  linkedin: LinkedInGlyph,
  instagram: InstagramGlyph,
  cart: ShoppingCart,
  checkCircle: CheckCircle2,
  wrench: Wrench,
  calendar: Calendar,
  arrowRight: ArrowRight,
  box: Box,
  userPlus: UserPlus,
  idCard: IdCard,
  truck: Truck,
  briefcase: Briefcase,
  wave: Radio,
  leaf: Leaf,
  pickaxe: Pickaxe,
  globe: Globe,
  alertCircle: AlertCircle,
  tractor: Tractor,
  share: Share2,
  wallet: Wallet,
  trendingUp: TrendingUp,
  users: Users,
  ban: Ban,
  lightbulb: Lightbulb,
  brain: Brain,
  paw: PawPrint,
  laptop: Laptop,
  listChecks: ListChecks,
  snowflake: Snowflake,
  bone: Bone,
  tent: Tent,
  star: Star,
  fish: Fish,
  dog: Dog,
  shoppingBag: ShoppingBag,
  target: Target,
  iceCream: IceCream2,
  heart: Heart,
  chefHat: ChefHat,
  wine: Wine,
  sandwich: Sandwich,
  compass: Compass,
  hourglass: Hourglass,
  shrimp: Shrimp,
  cookingPot: CookingPot,
  coffee: Coffee,
  usersShield: UsersRound,
  check: Check,
  x: X,
  shoppingBasket: ShoppingBasket,
  croissant: Croissant,
  ham: Ham,
  balloon: Balloon,
  banana: Banana,
  flame: Flame,
  ferrisWheel: FerrisWheel,
  wheat: Wheat,
  hamburger: Hamburger,
  milk: Milk,
  apple: Apple,
  pizza: Pizza,
  store: Store,
  handHeart: HandHeart,
  house: House,
} satisfies Record<string, LucideIcon | ((props: { className?: string }) => React.JSX.Element)>;

export type IconName = keyof typeof icons;

/** Ícono del sitio. Usalo con: <Icon name="clock" className="h-6 w-6 text-naranja" /> */
export default function Icon({ name, className = "h-8 w-8" }: { name: IconName; className?: string }) {
  const IconComponent = icons[name];
  return <IconComponent className={className} />;
}