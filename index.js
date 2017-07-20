 function getFirstSelector(selector){
   return document.querySelector(selector)
 }

 function nestedTarget(){
   return document.querySelector('#nested .target')
 }


 function increaseRankBy(n){
   const ranks = document.querySelectorAll('ul.ranked-list li')
   ranks.forEach(function(rank) {
     rank.innerHTML = parseInt(rank.innerHTML) + n
   });
 }

 function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
