import AppNavigation from './src/navigation';
import "./src/styles/global.css";
import { ThemeProvider } from "./src/Context/ThemeContext";
import { TextProvider } from "./src/Context/TextContext";

export default function App() {
  return (
     <ThemeProvider>
      <TextProvider>
       <AppNavigation/>
      </TextProvider>
     </ThemeProvider>
  );
}

