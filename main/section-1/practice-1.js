'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(elementA => collectionB.indexOf(elementA) >= 0);
}
