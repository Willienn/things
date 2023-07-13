import { useState } from "react";
import { Box } from "@chakra-ui/react";

export default function FancyDiv() {
  const [translation, setTranslation] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const rect = event.target.getBoundingClientRect();
    const divX = rect.left + rect.width / 2;
    const divY = rect.top + rect.height / 2;

    const offsetX = divX - mouseX;
    const offsetY = divY - mouseY;

    const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);

    if (distance < 200) {
      const moveX = (offsetX / distance) * 14;
      const moveY = (offsetY / distance) * 14;

      setTranslation({ x: moveX, y: moveY });
    } else {
      setTranslation({ x: 0, y: 0 });
    }
  };
  return (
    <Box
      onMouseMove={handleMouseMove}
      width="150px"
      height="150px"
      position="absolute"
    >
      <Box
        width="100px"
        height="100px"
        backgroundColor="red"
        transition="all 0.3s"
        transform={`translate(${translation.x}px, ${translation.y}px)`}
      />
    </Box>
  );
}
