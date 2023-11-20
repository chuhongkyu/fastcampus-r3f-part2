import { useBounds } from "@react-three/drei"

export function FocusWeather({ children }) {
    const api = useBounds()
    const handleClick = (e) => {
        e.stopPropagation();
        // console.log(e.delta)
        if (e.delta <= 2) {
          api.refresh(e.object).fit();
        }
      };
    return (
      <group 
        onClick={handleClick} 
        onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}>
        {children}
      </group>
    )
  }
  