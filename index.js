function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target");
}

function deepestChild(){
  return document.getElementById("grand-node").querySelector("div div div div");
}

function increaseRankBy(n){
  document.querySelectorAll(".ranked-list li").forEach(function(item){
    item.innerHTML = parseInt(item.innerHTML) + n;
  })
}