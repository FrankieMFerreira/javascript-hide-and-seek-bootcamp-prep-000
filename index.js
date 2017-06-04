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
  for (var i = 0; i < deepList.length; i++) {
    if (deepList[i].children[0] === undefined) {
      return deepList[i];
    }
  }
}
