// Tech stack assets module - consolidates all tech stack icons
import Bootstrap from './Bootstrap.svg';
import CSS from './CSS.svg';
import Docker from './Docker.svg';
import GithubLight from './Github-Light.svg';
import HTML from './HTML.svg';
import JavaScript from './JavaScript.svg';
import Postman from './Postman.svg';
import ReactLight from './React-Light.svg';
import StackOverflowLight from './StackOverflow-Light.svg';
import TailwindCSSLight from './TailwindCSS-Light.svg';
import TypeScript from './TypeScript.svg';
import VercelLight from './Vercel-Light.svg';
import ViteLight from './Vite-Light.svg';

export const techStackIcons = {
  Bootstrap,
  CSS,
  Docker,
  GithubLight,
  HTML,
  JavaScript,
  Postman,
  ReactLight,
  StackOverflowLight,
  TailwindCSSLight,
  TypeScript,
  VercelLight,
  ViteLight,
};

// Export as array for easier iteration if needed
export const techStackArray = Object.entries(techStackIcons).map(([name, icon]) => ({
  name,
  icon,
}));

export default techStackIcons;