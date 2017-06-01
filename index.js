function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested div div div div')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n
  }
}

function deepestChild(){
  const temp2 = document.querySelector('div#grand-node')
  let temp = temp2.children[0]
  let final = temp2.children[0]
  while(final.children[0]!=undefined){
    final = temp.children[0]
    temp = final.children[0]
  }
  return final
}
