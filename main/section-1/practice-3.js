'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(elementA => collectionB.value.indexOf(elementA) >= 0);
}
