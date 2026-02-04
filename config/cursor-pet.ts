export function startCursorPet() {
  if (typeof window === "undefined") return;

  if (window.catExtensionActive) {
    return;
  }

  window.catExtensionActive = true;

  const SPEED = 1.5;
  const REACH_THRESHOLD = 10;
  const SPRITE_URL = "/Frames/Frames.png";

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let catX = mouseX;
  let catY = mouseY;
  let frameIndex = 0;
  let lastFrameTime = 0;

  const cat = document.createElement("div");
  cat.classList.add("cat-container");
  cat.style.width = "100px";
  cat.style.height = "100px";
  document.body.appendChild(cat);

  window.catMouseMoveHandler = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };
  window.addEventListener("mousemove", window.catMouseMoveHandler);

  function update(timestamp: number) {
    if (!window.catExtensionActive) return;

    const dx = mouseX - catX;
    const dy = mouseY - catY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > REACH_THRESHOLD) {
      const angle = Math.atan2(dy, dx);
      const moveX = Math.cos(angle) * SPEED;
      const moveY = Math.sin(angle) * SPEED;

      catX += moveX;
      catY += moveY;
    }

    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    if (!window.catDirection) window.catDirection = "Right";

    if (distance > REACH_THRESHOLD) {
      if (angle > -22.5 && angle <= 22.5) window.catDirection = "Right";
      else if (angle > 22.5 && angle <= 67.5) window.catDirection = "BottomRight";
      else if (angle > 67.5 && angle <= 112.5) window.catDirection = "Down";
      else if (angle > 112.5 && angle <= 157.5) window.catDirection = "BottomLeft";
      else if (angle > 157.5 || angle <= -157.5) window.catDirection = "Left";
      else if (angle > -157.5 && angle <= -112.5) window.catDirection = "TopLeft";
      else if (angle > -112.5 && angle <= -67.5) window.catDirection = "UP";
      else if (angle > -67.5 && angle <= -22.5) window.catDirection = "TopRight";
    }

    const direction = window.catDirection;

    const SPRITE_DATA: Record<string, { size: [number, number]; frames: [number, number][] }> = {
      Left: { size: [32, 28], frames: [[129, 64], [128, 99]] },
      Right: { size: [32, 28], frames: [[95, 0], [96, 33]] },
      UP: { size: [32, 32], frames: [[32, 64], [32, 96]] },
      Down: { size: [32, 32], frames: [[193, 96], [224, 63]] },
      TopLeft: { size: [32, 32], frames: [[34, 0], [33, 30]] },
      TopRight: { size: [32, 32], frames: [[0, 64], [0, 96]] },
      BottomLeft: { size: [32, 32], frames: [[160, 96], [128, 96]] },
      BottomRight: { size: [32, 32], frames: [[160, 33], [162, 62]] },
    };

    if (timestamp - lastFrameTime > 1000 / 20) {
      lastFrameTime = timestamp;

      let posX = 0;
      let posY = 0;
      let frameWidth = 32;
      let frameHeight = 32;

      if (distance > REACH_THRESHOLD) {
        window.catIsIdle = false;
        const data = SPRITE_DATA[direction];
        const frameNum = frameIndex % 2;
        frameIndex += 1;
        [posX, posY] = data.frames[frameNum];

        frameWidth = data.size[0];
        frameHeight = data.size[1];
      } else {
        if (!window.catIsIdle) {
          window.catIsIdle = true;
          window.catReachTime = timestamp;
          frameIndex = 0;
        }

        const timeSinceReach = timestamp - (window.catReachTime ?? 0);

        if (timeSinceReach < 2000) {
          posX = 96;
          posY = 96;
        } else {
          const idleTime = timeSinceReach - 2000;

          if (idleTime < 200) {
            posX = 96;
            posY = 63;
          } else {
            const loopFrame = Math.floor((idleTime - 200) / 200) % 2;
            if (loopFrame === 0) {
              posX = 64;
              posY = 0;
            } else {
              posX = 64;
              posY = 32;
            }
          }
        }
      }

      window.catRenderWidth = frameWidth;
      window.catRenderHeight = frameHeight;

      cat.style.backgroundImage = `url("${SPRITE_URL}")`;
      cat.style.width = `${frameWidth}px`;
      cat.style.height = `${frameHeight}px`;
      cat.style.backgroundPosition = `-${posX}px -${posY}px`;
      cat.style.backgroundSize = "256px 128px";
      cat.style.transform = "scale(1.25)";
      cat.style.transformOrigin = "center center";
      cat.style.imageRendering = "pixelated";
    }

    const rW = window.catRenderWidth || 32;
    const rH = window.catRenderHeight || 32;
    cat.style.left = `${catX - rW * 0.625}px`;
    cat.style.top = `${catY - rH * 0.625}px`;

    window.catAnimFrame = requestAnimationFrame(update);
  }

  window.catAnimFrame = requestAnimationFrame(update);
}

declare global {
  interface Window {
    catExtensionActive?: boolean;
    catMouseMoveHandler?: (e: MouseEvent) => void;
    catAnimFrame?: number;
    catDirection?: string;
    catIsIdle?: boolean;
    catReachTime?: number;
    catRenderWidth?: number;
    catRenderHeight?: number;
  }
}

export { };
