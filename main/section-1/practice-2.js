'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(elementA => collectionB[0].indexOf(elementA) >= 0);
}
