
import React from 'react';

const JurusanGrid = ({ items, renderItem }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div key={index}>
          {renderItem ? <renderItem jurusan={item} /> : null}
        </div>
      ))}
    </div>
  );
};

export default JurusanGrid;
