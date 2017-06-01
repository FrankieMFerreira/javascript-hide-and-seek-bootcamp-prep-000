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
  let x = document.querySelector('div#grand-node')
  let temp = x.children[0]
  let final = x.children[0]

  while(final.children[0]!=undefined){
    final = temp.children[0]
    if(final.children[0]!=undefined){
    temp = final.children[0]}
  }
  return final

}
