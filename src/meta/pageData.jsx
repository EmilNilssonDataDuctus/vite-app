import { CardBig } from "../Pages/CardBig/CardBig";
import { Cards } from "../Pages/Cards/Cards";
import { CodeAlong } from "../Pages/CodeAlong/CodeAlong";
import { CodeAlongHome } from "../Pages/CodeAlong/Pages/index";
import { CodeAlongSpeakers } from "../Pages/CodeAlong/Pages/Speakers";
import { ColorTheory } from "../Pages/ColorTheory/ColorTheory";
import { GamePage } from "../Pages/Game/Game";
import { GeneratePage } from "../Pages/GeneratePage/GeneratePage";
import { HackerAnimation } from "../Pages/HackerAnimation/HackerAnimation";
import { Home } from "../Pages/Home/Home";
import { HoverCardsPage } from "../Pages/HoverCardsPage/HoverCardsPage";
import { HoverEffectsPage } from "../Pages/HoverEffectsPage/HoverEffectsPage";
import { HoverEffectsPage2 } from "../Pages/HoverEffectsPage2/HoverEffectsPage2";
import { KCSummerLeaguePage } from "../Pages/KCSummerLeaguePage/KCSummerLeaguePage";
import { MemoryGame } from "../Pages/MemoryGame/MemoryGame";
import { MyCanvas } from "../Pages/MyCanvas/MyCanvas";
import { MyChart } from "../Pages/MyChart/MyChart";
import { SpeedCalculator } from "../Pages/SpeedCalculator/SpeedCalculator";
import { TodoPage } from "../Pages/TodoPage/TodoPage";
import { TracerPage } from "../Pages/TracerPage/TracerPage";

const WIPPages = ["/canvas", "/game"];

export const pageRoutes = [
  {
    path: "/",
    element: <Home />,
    description: "Home",
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
