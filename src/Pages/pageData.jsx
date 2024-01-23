import { KCSummerLeaguePageSimplified } from "../Pages/KCSummerLeaguePageSimplified/KCSummerLeaguePageSimplified";
import { ArrayMethods } from "./ArrayMethods/ArrayMethods";
import { CanvasAnimation } from "./CanvasAnimation/CanvasAnimation";
import { CanvasGame } from "./CanvasGame/CanvasGame";
import { CanvasTestOktober } from "./CanvasTestOktober/CanvasTestOktober";
import { CardBig } from "./CardBig/CardBig";
import { Cards } from "./Cards/Cards";
import { CodeAlong } from "./CodeAlong/CodeAlong";
import { CodeAlongSpeakers } from "./CodeAlong/Pages/Speakers";
import { CodeAlongHome } from "./CodeAlong/Pages/index";
import { ColorTheory } from "./ColorTheory/ColorTheory";
import { ColorTheory2 } from "./ColorTheory2/ColorTheory2";
import { DataStructures } from "./DataStructures/DataStructures";
import { ECommerceShirtPage } from "./ECommerceShirtPage/ECommerceShirtPage";
import { FlexBoxTest } from "./FlexBoxTest/FlexBoxTest";
import { GamePage } from "./Game/Game";
import { GeneratePage } from "./GeneratePage/GeneratePage";
import { GridAnimation } from "./GridAnimation/GridAnimation";
import { HackerAnimation } from "./HackerAnimation/HackerAnimation";
import { Home } from "./Home/Home";
import { HoverCardsPage } from "./HoverCardsPage/HoverCardsPage";
import { HoverEffectsPage } from "./HoverEffectsPage/HoverEffectsPage";
import { HoverEffectsPage2 } from "./HoverEffectsPage2/HoverEffectsPage2";
import { InputElementTest } from "./InputElementTest/InputElementTest";
import { KCLocalLegendsFinal } from "./KCLocalLegendsFinal/KCLocalLegendsFinal";
import { KCSummerLeaguePage } from "./KCSummerLeaguePage/KCSummerLeaguePage";
import { MemoryGame } from "./MemoryGame/MemoryGame";
import { MyCanvas } from "./MyCanvas/MyCanvas";
import { MyChart } from "./MyChart/MyChart";
import { PersonnummerCalc } from "./PersonnummerCalc/PersonnummerCalc";
import { PokedexVersionTwo } from "./Pokedex/PokedexVersionTwo";
import { SpeedCalculator } from "./SpeedCalculator/SpeedCalculator";
import { TodoPage } from "./TodoPage/TodoPage";
import { TracerPage } from "./TracerPage/TracerPage";

const WIPPages = [
  "/canvas",
  "/game",
  "/canvas-test-oktober",
  "/flexbox-test",
  "/mix-blend-mode-demo",
  "/cards",
  "/memory-game",
  "/hover-cards",
  "/code-along-old",
  "/code-along",
  "/code-along/speakers",
];

const obsoletePages = ["/kc-summerleague"];

const featuredPages = [
  "/kc-summer-league-simplified",
  "/ecommerce-shirt",
  "/hackerAnimation",
  "/todo-list",
];

export const pageRoutes = [
  {
    path: "/",
    element: <Home />,
    description: "Home",
  },
  {
    path: "/personnummer-calc",
    element: <PersonnummerCalc />,
    description: "Personnummer Calculator",
  },
  {
    path: "/grid-experiment-animation",
    element: <GridAnimation />,
    description: "Grid Animations",
  },
  {
    path: "/canvas-game",
    element: <CanvasGame />,
    description: "Canvas Game",
  },
  {
    path: "/canvas-animation",
    element: <CanvasAnimation />,
    description: "Canvas Animation",
  },
  {
    path: "/input-tests",
    element: <InputElementTest />,
    description: "InputElementTest",
  },
  {
    path: "/canvas-test-oktober",
    element: <CanvasTestOktober />,
    description: "canvas-test-oktober",
  },
  {
    path: "/flexbox-test",
    element: <FlexBoxTest />,
    description: "FlexBoxTest",
  },
  {
    path: "/array-methods",
    element: <ArrayMethods />,
    description: "Array methods",
  },
  {
    path: "/ecommerce-shirt",
    element: <ECommerceShirtPage />,
    description: "ECommerceShirtPage",
  },
  {
    path: "/kc-summer-league-simplified",
    element: <KCSummerLeaguePageSimplified />,
    description: "KCSummerLeaguePageSimplified",
  },
  {
    path: "/kc-local-legends-final",
    element: <KCLocalLegendsFinal />,
    description: "KCLocalLegendsFinal",
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
    path: "/color-theory-difference",
    element: <ColorTheory2 />,
    description: "Color theory mix-blend-mode difference",
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
  return {
    ...obj,
    active:
      !obsoletePages.find((page) => page === obj.page) &&
      !WIPPages.find((page) => page === obj.path),
    featured: !!featuredPages.find((page) => page === obj.path),
  };
});

export const hideInactivePages = ({ active }) => active;
export const hideDynamicRoutes = ({ dynamicId }) => !dynamicId;
export const hideNonFeaturedPages = ({ featured }) => featured;
export const hideFeaturedPages = ({ featured }) => !featured;
