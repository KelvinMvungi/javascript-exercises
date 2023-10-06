const fibonacci = function(index) {
  if( (typeof index !== 'number' && typeof index !== 'string') || (typeof index === 'string' && !/^\d+$/.test(index)) || index < 0 || !Number.isInteger(Number(index))) {
    return "OOPS";
  }
  if (index === 0) {
    return 0;
  } else if (index === 1) {
    return 1;
  } else {
    let prev = 0;
    let current = 1;
    for (let i = 2; i <= index; i++) {
      const next = prev + current;
      prev = current;
      current = next;
    }
    return current;
  }
};

// Do not edit below this line
module.exports = fibonacci;
