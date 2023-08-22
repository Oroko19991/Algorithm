// flash cards functions
  let step = 0;

  function backward() {
    step -= 1
    if (step <= 0) {
      step = 0
      }
    if (step > 2) {
      step = 2
      }
    else if (step === 1) {
      document.getElementById("test1").innerHTML = ` <img class="image-test" src="/Algoritm/thumbnails/Group 11.svg" alt="algorithm-logo-faw"><p><b> زیر 200 میلیون تومان </b></p>   `
      document.getElementById("test2").innerHTML = ` <img class="image-test" src="/Algoritm/thumbnails/Group 12.svg" alt="algorithm-logo-faw"><p><b> بین 200 میلیون تا 1 میلیارد تومان</b></p> `
      document.getElementById("test3").innerHTML = ` <img class="image-test" src="/Algoritm/thumbnails/Group 13.svg" alt="algorithm-logo-faw"><p><b>  بالای 1 میلیارد تومان </b></p> `
      document.getElementById("img-border-3").innerHTML = ` <p>ثبت نهایی</p>
      <img  src="/Algoritm/thumbnails/clickable.png">`
      document.getElementById("text-below-image").style.visibility = "hidden";
      document.getElementById("test-button").style.visibility = "hidden";
      document.getElementById("planParent").style.display = "inline";
      document.getElementById("forms").style.display = "none";
      }
    else if(step == 0) {
      document.getElementById("test1").innerHTML = ` <img class="first-column-image" src="/Algoritm/thumbnails/algorithm-logo-faw 5.png" alt="algorithm-logo-faw"><p><b>سبدگردانی اختصاصی </b></p>  `
      document.getElementById("test2").innerHTML = `  <img class="first-column-image" src="/Algoritm/thumbnails/mana (5).svg" alt="algorithm-logo-faw"><p><b> صندوق در سهام </b> مانا الگوریتم</p> `
      document.getElementById("test3").innerHTML = ` <img class="first-column-image" src="/Algoritm/thumbnails/dara (5).svg" alt="algorithm-logo-faw"><p><b>صندوق درآمد ثابت </b> دارا الگوریتم </p> `

      document.getElementById("img-border-2").innerHTML = ` <p>میزان سرمایه</p>
      <img  src="/Algoritm/thumbnails/clickable.png">`
      document.getElementById("test-button").style.visibility = "visible";
      }
      console.log(step);
    }


    function doubleBackward() {
      step -= 2
      if (step <= 0) {
        step = 0
        }
      if (step > 2) {
        step = 2
        }
      if(step == 0) {
        document.getElementById("test1").innerHTML = ` <img class="first-column-image" src="/Algoritm/thumbnails/algorithm-logo-faw 5.png" alt="algorithm-logo-faw"><p><b>سبدگردانی اختصاصی </b></p>  `
        document.getElementById("test2").innerHTML = `  <img class="first-column-image" src="/Algoritm/thumbnails/mana (5).svg" alt="algorithm-logo-faw"><p><b> صندوق در سهام </b> مانا الگوریتم</p> `
        document.getElementById("test3").innerHTML = ` <img class="first-column-image" src="/Algoritm/thumbnails/dara (5).svg" alt="algorithm-logo-faw"><p><b>صندوق درآمد ثابت </b> دارا الگوریتم </p> `

        document.getElementById("img-border-2").innerHTML = ` <p>میزان سرمایه</p>
        <img  src="/Algoritm/thumbnails/clickable.png">`
        document.getElementById("test-button").style.visibility = "visible";
        document.getElementById("img-border-3").innerHTML=` <p>ثبت نهایی</p>
        <img src="/Algoritm/thumbnails/clickable.png" alt="down-border" style="cursor: pointer;">`
        document.getElementById("planParent").style.display = "inline";
        document.getElementById("forms").style.display = "none";
      }
      console.log(step);
      }

    

  function clickHandle() {
      if (step < 0) {
        step === 0
      }
      if (step > 2) {
        step === 2
      }
      step += 2
      if (step === 2) {
        document.getElementById("text-below-image").style.visibility = "hidden";
        document.getElementById("img-border-3").innerHTML = ` <p>ثبت نهایی</p>
    <img  src="/Algoritm/thumbnails/Rectangle 202020.png">`

        document.getElementById("planParent").style.display = "none";
        document.getElementById("forms").style.display = "flex";
        document.getElementById("img-border-2").innerHTML = ` <p>میزان سرمایه</p>
    <img  src="/Algoritm/thumbnails/Rectangle 202020.png">`
      };
    }

  function handleClick() {
      if (step < 0) {
      step = 0
      }
      if (step > 3) {
      step = 3
      }
      step += 1;
      if (step === 1) {
      document.getElementById("test1").innerHTML = ` <img class="image-test" src="/Algoritm/thumbnails/Group 11.svg" alt="algorithm-logo-faw"><p><b> زیر 200 میلیون تومان </b></p>   `
      document.getElementById("test2").innerHTML = ` <img class="image-test" src="/Algoritm/thumbnails/Group 12.svg" alt="algorithm-logo-faw"><p><b> بین 200 میلیون تا 1 میلیارد تومان</b></p> `
      document.getElementById("test3").innerHTML = ` <img class="image-test" src="/Algoritm/thumbnails/Group 13.svg" alt="algorithm-logo-faw"><p><b>  بالای 1 میلیارد تومان </b></p> `
      document.getElementById("img-border-2").innerHTML = ` <p>میزان سرمایه</p>
      <img src="/Algoritm/thumbnails/Rectangle 202020.png">`
      document.getElementById("text-below-image").style.visibility = "hidden";
      document.getElementById("test-button").style.visibility = "hidden";
      }
      else if (step === 2) {
      document.getElementById("text-below-image").style.visibility = "hidden";
      document.getElementById("img-border-3").innerHTML = ` <p>ثبت نهایی</p>
      <img  src="/Algoritm/thumbnails/Rectangle 202020.png">`

      document.getElementById("planParent").style.display = "none";
      document.getElementById("forms").style.display = "flex";
      }
      console.log(step);

      };


      //accordion function

      const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
      //event-listener => add a active to the accordionItemHeader element class
      accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", () => {
          accordionItemHeader.classList.toggle("active");
        });
      });

    //   document.querySelectorAll('.accordion-item-header').forEach(item => {
    //     item.addEventListener('click', () => {
    //         // close all items
    //         document.querySelectorAll('.accordion-item-body').forEach(body => {
    //             body.style.maxHeight = null;
    //         });
    
    //         // open this item
    //         let panel = item.nextElementSibling;
    //         if (panel.style.maxHeight) {
    //             panel.style.maxHeight = null;
    //         } else {
    //             panel.style.maxHeight = panel.scrollHeight + "px";
    //         } 
    //     });
    // });