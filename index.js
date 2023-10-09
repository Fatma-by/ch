let item1 = {
  price: parseFloat(document.getElementById("1").textContent),
  quatity: 0,
  input: document.getElementById("form1"),
  total: 0,
};

item1.input.addEventListener("change", (e) => {
  item1.quatity = e.target.value;
  item1.total = item1.price * item1.quatity;
});

let item2 = {
  price: parseFloat(document.getElementById("2").textContent),
  quatity: 0,
  input: document.getElementById("form2"),
  total: 0,
};

item2.input.addEventListener("change", (e) => {
  item2.quatity = e.target.value;
  item2.total = item2.price * item2.quatity;
});

let item3 = {
  price: parseFloat(document.getElementById("3").textContent),
  quatity: 0,
  input: document.getElementById("form3"),
  total: 0,
};

item3.input.addEventListener("change", (e) => {
  item3.quatity = e.target.value;
  item3.total = item3.price * item3.quatity;
});

let btn = document.getElementById("total-price");
btn.addEventListener("click", () => {
  if (item1.quatity === 0) {
    let element = document.getElementById("remove-1");
    element.remove();
  } else if (item2.quatity === 0) {
    let element2 = document.getElementById("delete2");
    element2.remove();
  } else if (item3.quatity === 0) {
    let element3 = document.getElementById("delete3");
    element3.remove();
  }
  let result = document.getElementById("total");
  result.textContent = item1.total + item2.total + item3.total;
});

function removeItem(id) {
  const element = document.getElementById(id);
  element.remove();
}

const btn2 = document.getElementById("remove2");
btn2.addEventListener("click", () => {
  const element = document.getElementById("delete2");
  element.remove();
});

const btn3 = document.getElementById("remove3");
btn3.addEventListener("click", () => {
  const element = document.getElementById("delete3");
  element.remove();
});

function like(id){
document.getElementById(id).style = 'color:red';

}


