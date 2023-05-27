import React, { useState } from 'react';
import { Draggable } from 'react-draggable';
import { Resizable } from 'react-resizable';
import './index.css';

export const Canvas = () => {
  const Canvas = () => {
  const [objects, setObjects] = useState([
    { id: 1, x: 50, y: 50, width: 100, height: 100 },
    { id: 2, x: 200, y: 200, width: 150, height: 150 },
  ]);

  const handleDrag = (index, deltaX, deltaY) => {
    setObjects((prevObjects) =>
      prevObjects.map((object, i) =>
        i === index
          ? { ...object, x: object.x + deltaX, y: object.y + deltaY }
          : object
      )
    );
  };

  const handleResize = (index, event, { size }) => {
    setObjects((prevObjects) =>
      prevObjects.map((object, i) =>
        i === index ? { ...object, ...size } : object
      )
    );
  };

  const handleLogPositions = () => {
    console.log(objects);
  };

  return (
    <div className="canvas">
      {objects.map((object, index) => (
        <Draggable
          key={object.id}
          onDrag={(event, { deltaX, deltaY }) =>
            handleDrag(index, deltaX, deltaY)
          }
        >
          <Resizable
            width={object.width}
            height={object.height}
            onResize={(event, { size }) => handleResize(index, event, { size })}
            resizeHandles={['se']}
            handle={
              <div className="handle bottom-right">
                <div className="handle bottom-left">
                  <div className="handle top-right">
                    <div className="handle top-left" />
                  </div>
                </div>
              </div>
            }
          >
            <div className="object">{`Object ${object.id}`}</div>
          </Resizable>
        </Draggable>
      ))}
      <button onClick={handleLogPositions}>Log Positions</button>
    </div>
  );
};
};

const App = () => {
  return (
    <div className="App">
      <h1>Drag and Drop Canvas</h1>
      <Canvas />
    </div>
  );
};

export default App;
