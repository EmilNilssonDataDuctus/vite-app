import { ArrayMethods } from "./ArrayMethods/ArrayMethods";
import { CardBig } from "./CardBig/CardBig";
import { Cards } from "./Cards/Cards";
import { CodeAlong } from "./CodeAlong/CodeAlong";
import { CodeAlongHome } from "./CodeAlong/Pages/index";
import { CodeAlongSpeakers } from "./CodeAlong/Pages/Speakers";
import { ColorTheory } from "./ColorTheory/ColorTheory";
import { DataStructures } from "./DataStructures/DataStructures";
import { ECommerceShirtPage } from "./ECommerceShirtPage/ECommerceShirtPage";
import { GamePage } from "./Game/Game";
import { GeneratePage } from "./GeneratePage/GeneratePage";
import { HackerAnimation } from "./HackerAnimation/HackerAnimation";
import { Home } from "./Home/Home";
import { HoverCardsPage } from "./HoverCardsPage/HoverCardsPage";
import { HoverEffectsPage } from "./HoverEffectsPage/HoverEffectsPage";
import { HoverEffectsPage2 } from "./HoverEffectsPage2/HoverEffectsPage2";
import { KCSummerLeaguePage } from "./KCSummerLeaguePage/KCSummerLeaguePage";
import { MemoryGame } from "./MemoryGame/MemoryGame";
import { MyCanvas } from "./MyCanvas/MyCanvas";
import { MyChart } from "./MyChart/MyChart";
import { PokedexVersionTwo } from "./Pokedex/PokedexVersionTwo";
import { SpeedCalculator } from "./SpeedCalculator/SpeedCalculator";
import { TodoPage } from "./TodoPage/TodoPage";
import { TracerPage } from "./TracerPage/TracerPage";

const WIPPages = ["/canvas", "/game"];

export const pageRoutes = [
  {
    path: "/",
    element: <Home />,
    description: "Home",
  },
  {
    path: "/array-methods",
    element: <ArrayMethods />,
    description: "Array methods",
  },
  {
    path: "/ECommerceShirtPage",
    element: <ECommerceShirtPage />,
    description: "ECommerceShirtPage",
  },
  {
    path: "/data-structures",
    element: <DataStructures />,
    description: "Data Structures",
  },
  {
    path: "/hackerAnimation",
    element: <HackerAnimation />,
    description: "Hacker animation",
  },
  {
    path: "/mix-blend-mode-demo",
    element: <ColorTheory />,
    description: "Color theory",
  },
  {
    path: "/PokedexVersionTwo",
    element: <PokedexVersionTwo />,
    description: "PokedexVersionTwo",
  },
  {
    path: "/cards",
    element: <Cards />,
    description: "Pokedex overview",
  },
  {
    path: "/memory-game",
    element: <MemoryGame />,
    description: "Memory Game",
  },
  {
    path: "/card",
    dynamicId: "name",
    element: <CardBig />,
    description: "Pokedex detail page",
  },
  {
    path: "/hover-cards",
    element: <HoverCardsPage />,
    description: "Hover cards showcase",
  },
  {
    path: "/game",
    element: <GamePage />,
    description: "A Game",
  },
  {
    path: "/kc-summerleague",
    element: <KCSummerLeaguePage />,
    description: "KC Summerleague table tracker",
  },
  {
    path: "/generate",
    element: <GeneratePage />,
    description: "The Generator",
  },
  {
    path: "/tracing",
    element: <TracerPage />,
    description: "Try tracing!",
  },
  {
    path: "/chart",
    element: <MyChart />,
    description: "Chart",
  },
  {
    path: "/todo-list",
    element: <TodoPage />,
    description: "Todo list",
  },
  {
    path: "/hover-move",
    element: <HoverEffectsPage />,
    description: "Cool hover effects",
  },
  {
    path: "/hover-move2",
    element: <HoverEffectsPage2 />,
    description: "Cooler hover effects!",
  },
  {
    path: "/code-along-old",
    element: <CodeAlong />,
    description: "Results from code along tutorial",
  },
  {
    path: "/code-along",
    element: <CodeAlongHome />,
    description: "Site on site, homepage",
  },
  {
    path: "/code-along/speakers",
    element: <CodeAlongSpeakers />,
    description: "Site on site, speakers page",
  },
  {
    path: "/speed-calculator",
    element: <SpeedCalculator />,
    description: "React Speed Calculator",
  },
  {
    path: "/canvas",
    element: <MyCanvas />,
    description: "HTML Canvas experiment",
  },
].map((obj) => {
  // temporarily WIP pages
  if (WIPPages.find((page) => page === obj.path))
    return { ...obj, active: false };
  return { ...obj, active: true };
});

export const hideInactivePages = ({ active }) => active;
export const hideDynamicRoutes = ({ dynamicId }) => !dynamicId;
