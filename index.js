function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const rlist = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < rlist.length; i++) {
    rlist[i].innerHTML = parseInt(rlist[i].innerHTML) + n
  }
}

function deepestChild() {
  const deepList = document.getElementById("grand-node").querySelectorAll('div');
  var shiftList = deepList;
  for (var i = 0; i < shiftList.length; i++) {
    if (shiftList[i].children[0] === undefined) {
      return shiftList[i];
    }
  }
}
