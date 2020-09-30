'use strict';

{
  const point = {
   x: 100,
   y: 180,
  };

  point.x = 80;
  point['x'] = 80;

  console.log(point.x);
  console.log(point['y']); 
}