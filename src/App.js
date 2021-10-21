import { useState, useEffect } from "react";
import MobileHome from "./pages/MobileHome";
import DesktopHome from "./pages/DesktopHome";

const App = () => {
  const [dimensions, setDimensions] = useState({ 
    width: window.innerWidth
  })
  console.log(dimensions)

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize)
    }

  })

  return (
    <div textAlign='justified' className="wrapper">
      {
        dimensions.width > 992 ? <DesktopHome /> : <MobileHome width={dimensions.width} />
      }
    </div>
  );
}

export default App;

