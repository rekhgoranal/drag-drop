import React, { useRef } from 'react';
import './App.css';

const DragAndDrop = () => {
  const fillRef = useRef(null);

  const dragStart = () => {
    fillRef.current.classList.add('hold');
    setTimeout(() => (fillRef.current.classList = 'invisible'), 0);
  };

  const dragEnd = () => {
    fillRef.current.classList = 'fill';
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = () => {
    fillRef.current.classList.add('hovered');
  };

  const dragLeave = () => {
    fillRef.current.classList = 'empty';
  };

  const dragDrop = () => {
    fillRef.current.classList = 'empty';
    fillRef.current.parentNode.appendChild(fillRef.current);
  };

  return (
    <div>
      <div
        className="fill"
        draggable="true"
        ref={fillRef}
        onDragStart={dragStart}
        onDragEnd={dragEnd}
      >
      
      </div>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="empty"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={dragDrop}
        >
        
        </div>
      ))}
    </div>
  );
};

export default DragAndDrop;
