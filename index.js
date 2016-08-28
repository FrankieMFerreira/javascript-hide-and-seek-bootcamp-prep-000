function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = list.length; i < l; i++) {
     let children = list[i].children

     for (let j = 0, k = children.length; j < k; j++) {
       children[j].innerHTML = parseInt(children[j].innerHTML) + n
     }
   }
 }

function deepestChild() {
  let list1 = document.querySelector('div#grand-node')
  let list2 = list1.children[0]

    while (list2) {
      list1 = list2
      list2 = list1.children[0]
    }

    return list1
  }
