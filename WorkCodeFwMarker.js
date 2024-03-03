"use strict";

let prom = new Promise((resolve, reject) => {
  let interval = setInterval(() => {
    const find = document.querySelector(".green");
    if (find !== null) {
      clearInterval(interval);
      let updatedLoads = localStorage.getItem("updated");
      updatedLoads = JSON.parse(updatedLoads);
      if (updatedLoads == null) {
        let updatedLoads = {
          updates: 0,
          loads: 0,
          updated: [0],
        };

        // let updatedLoads = [1];
        localStorage.setItem("updated", JSON.stringify(updatedLoads));
      }
      function removeLoads() {
        let findBody = document.querySelector("tbody"); // блок з FB# на діспаче
        let arr = [];
        let findFB = findBody.children;
        for (let elem of findFB) {
          let FB = Number(elem.children[1].textContent);
          arr.push(FB);
        }
        updatedLoads.updated = updatedLoads.updated.filter((i) =>
          arr.includes(i)
        );
        localStorage.setItem("updated", JSON.stringify(updatedLoads));
      }
      removeLoads();
      resolve(updatedLoads);
    }
  }, 1000);
});

//перевіряє чи є у локал стораже масив з номерами, якщо не має то створює його, якщо є то updatedLoads приймає дані з локала\
prom.then((updatedLoads) => {
  window.addEventListener("storage", function (e) {
    updatedLoads = localStorage.getItem("updated");
    updatedLoads = JSON.parse(updatedLoads);
  });

  //отримуэмо масив усіх фб
  function getUpdatedLoads() {
    let findBody = document.querySelector("tbody");
    let int = setInterval(() => {
      let findFB = findBody.children;
      for (let el of findFB) {
        let FB = Number(el.children[1].textContent); // блок з FB# на діспаче
        if (updatedLoads.updated.includes(FB)) {
          el.children[1].classList.add("updated");
        }
      }
    }, 1000);
  }
  getUpdatedLoads();
  //зберігає оновлений вантаж у массив updatedLoads та у локал сторадж
  function saveLoad() {
    let savedFB = document.querySelector(".m-r-1"); // блок з FB# у картці вантажу
    if (updatedLoads.updated.includes(Number(savedFB.textContent))) {
      return;
    }
    updatedLoads.updated.push(Number(savedFB.textContent));
    updatedLoads.loads += 1;
    updatedLoads.updates += 1;

    localStorage.setItem("updated", JSON.stringify(updatedLoads));

    return updatedLoads;
  }

  function saveUpdate() {
    updatedLoads.updates += 1;
    localStorage.setItem("updated", JSON.stringify(updatedLoads));
  }

  let setListenerForAll = new Promise((resolve) => {
    window.onclick = function (e) {
      let modals = document.querySelector(".mdc-dialog__container");
      let modalWindow = document.querySelector(".cdk-overlay-container");
      if (e.target == modals) {
        modalWindow.remove();
      }
      if ((e = e.target.closest(".load"))) {
        findEditButton();
      }
    };
  });

  function findEditButton() {
    let findEditButtonInt = setInterval(() => {
      let editBnt = document.querySelector(".modal_button"); //кнопка едіт
      if (editBnt !== null) {
        console.log("works");
        clearInterval(findEditButtonInt);
        editBnt.addEventListener("click", function () {
          findSaveButton();
          // console.log("edit click");
        });
      }
    }, 500);
  }

  function findSaveButton() {
    let findSaveButtonInt = setInterval(() => {
      let saveBtn = document.querySelector("button.m-l-4"); //кнопка сейв
      if (saveBtn !== null) {
        clearInterval(findSaveButtonInt);
        let inputs = document.querySelectorAll("input.mdc-text-field__input");
        let times = [];
        for (let i = 0; i < inputs.length; i += 1) {
          //отримуємо масив усіх знаень часу
          if (inputs[i].hasAttribute("value") && inputs[i].value != "") {
            times.push(inputs[i].value);
          }
        }
        //console.log(times);
        saveBtn.addEventListener("click", function () {
          let timesChanged = [];
          for (let i = 0; i < inputs.length; i += 1) {
            //отримуємо масив усіх знаень часу
            if (inputs[i].hasAttribute("value") && inputs[i].value != "") {
              timesChanged.push(inputs[i].value);
            }
          }
          if (times.length < timesChanged.length) {
            saveLoad();
            console.log("load saved");
          } else {
            saveUpdate();
            console.log("update saved");
          }
        });
      }
    }, 500);
  }

  /*
  //================== works for fw 

  let setListenerForAll = new Promise((resolve) => {
   window.onclick = function (e) {
      if ((e = e.target.closest("tr.ng-star-inserted"))) {
        findEditButton();
      }
    };
  });

  function findEditButton() {
    let findEditButtonInt = setInterval(() => {
      let editBnt = document.querySelectorAll("button.lgt-button-white"); //кнопка едіт need to find
      if (editBnt[1] !== null) {
        clearInterval(findEditButtonInt);
        editBnt[1].addEventListener("click", findSaveButton)

      }
    }, 500);
  }
 function findSaveButton() {
    let findSaveButtonInt = setInterval(() => {
      let saveBtn = document.querySelector("button.m-l-4"); //кнопка сейв
      let inputs = document.querySelectorAll("input.mat-mdc-input-element");

      if (saveBtn !== null && inputs!== null) {
        clearInterval(findSaveButtonInt);
        let times = [];
        for (let i = 0; i < inputs.length; i += 1) {
          //отримуємо масив усіх знаень часу
          if (inputs[i].value != "") {
            times.push(inputs[i].value);
          }
        }
        
        saveBtn.addEventListener("click", function () {
          let timesChanged = [];
          for (let i = 0; i < inputs.length; i += 1) {
            //отримуємо масив усіх знаень часу
            if (inputs[i].value != "") {
              timesChanged.push(inputs[i].value);
            }
          }
          if (times.length < timesChanged.length) {
            saveLoad();
						console.log("load saved");

          } else {
            console.log("update saved");
          }
        });
      }
    }, 500);
  }
 

  //==================
*/
});
