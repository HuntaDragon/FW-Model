const freightWatch = document.querySelector(".freightWatch");
const body = document.querySelector(".body");
const tbody = document.querySelector("tbody");

class Load {
  constructor(
    freightBill,
    billOfLading,
    color,
    dispNotes,
    status,
    ETA,
    origin,
    PUdate,
    destination,
    DELdate,
    historyType
  ) {
    this.freightBill = freightBill;
    this.billOfLading = billOfLading;
    this.color = color;
    this.dispNotes = dispNotes;
    this.status = status;
    this.ETA = ETA;
    this.origin = origin;
    this.PUdate = PUdate;
    this.destination = destination;
    this.DELdate = DELdate;
    this.historyType = historyType;
  }
  createLoad() {
    const load = document.createElement("tr");
    load.classList.add("ng-star-inserted");
    load.classList.add(this.color);
    load.classList.add("load");

    load.setAttribute("_ngcontent-ng-c3288653432", "");
    load.addEventListener("click", function () {
      let openCard = new LoadCard(this.freightBill, this.billOfLading);
      openCard.createLoadCard();
      openCard.createHistory();
    });
    tbody.append(load);

    let emptyBlock = document.createElement("td");
    emptyBlock.classList.add("ng-star-inserted");
    emptyBlock.setAttribute("_ngcontent-ng-c3288653432", "");
    load.append(emptyBlock);

    let freightBillBlock = document.createElement("td");
    freightBillBlock.textContent = this.freightBill;
    freightBillBlock.setAttribute("_ngcontent-ng-c3288653432", "");
    load.append(freightBillBlock);

    let billOfLadingBlock = document.createElement("td");
    billOfLadingBlock.textContent = this.billOfLading;
    billOfLadingBlock.setAttribute("_ngcontent-ng-c3288653432", "");
    load.append(billOfLadingBlock);

    let dispatchNotesBlock = document.createElement("td");
    dispatchNotesBlock.textContent = this.dispNotes;
    dispatchNotesBlock.setAttribute("_ngcontent-ng-c3288653432", "");
    load.append(dispatchNotesBlock);

    let probel = document.createElement("td");
    probel.classList.add("ng-star-inserted");
    probel.setAttribute("_ngcontent-ng-c3288653432", "");
    load.append(probel);

    let statusBlock = document.createElement("td");
    statusBlock.classList.add("no-wrap");
    statusBlock.classList.add("status");
    statusBlock.textContent = this.status;
    statusBlock.setAttribute("_ngcontent-ng-c3288653432", "");
    load.append(statusBlock);

    let ETAblock = document.createElement("td");
    ETAblock.classList.add("no-wrap");
    ETAblock.classList.add("ng-star-inserted");
    ETAblock.setAttribute("_ngcontent-ng-c3288653432", "");
    ETAblock.textContent = this.ETA;
    load.append(ETAblock);

    let originBlock = document.createElement("td");
    originBlock.classList.add("no-wrap");
    originBlock.setAttribute("_ngcontent-ng-c3288653432", "");
    originBlock.textContent = this.origin;
    load.append(originBlock);

    let PUdateBlock = document.createElement("td");
    PUdateBlock.classList.add("no-wrap");
    PUdateBlock.setAttribute("_ngcontent-ng-c3288653432", "");
    PUdateBlock.textContent = this.PUdate;
    load.append(PUdateBlock);

    let textCenter = document.createElement("td");
    textCenter.classList.add("text-center");
    textCenter.setAttribute("_ngcontent-ng-c3288653432", "");
    load.append(textCenter);

    let destinationBlock = document.createElement("td");
    destinationBlock.classList.add("no-wrap");
    destinationBlock.setAttribute("_ngcontent-ng-c3288653432", "");
    destinationBlock.textContent = this.destination;
    load.append(destinationBlock);

    let DELdateBlock = document.createElement("td");
    DELdateBlock.classList.add("no-wrap");
    DELdateBlock.setAttribute("_ngcontent-ng-c3288653432", "");
    DELdateBlock.textContent = this.DELdate;
    load.append(DELdateBlock);
  }
  get Gethistory() {
    return this.historyType;
  }
}
class LoadCard extends Load {
  constructor(freightBill, billOfLading, historyType /*dispNotes*/) {
    super(freightBill, billOfLading, historyType);
    // this.freightBill = freightBill;
    // this.billOfLading = billOfLading;
    // this.history = history;
    // this.dispNotes = dispNotes;
  }
  createLoadCard() {
    let overlayContainer = document.createElement("div");
    overlayContainer.classList.add("cdk-overlay-container");
    body.append(overlayContainer);

    let overlay = document.createElement("div");
    overlay.classList.add("cdk-overlay-backdrop");
    overlay.classList.add("cdk-overlay-dark-backdrop");
    overlay.classList.add("cdk-overlay-backdrop-showing");
    overlayContainer.append(overlay);

    let globalOverlayWrapper = document.createElement("div");
    globalOverlayWrapper.classList.add("cdk-global-overlay-wrapper");
    globalOverlayWrapper.setAttribute("dir", "ltr");
    globalOverlayWrapper.setAttribute(
      "style",
      "justify-content: center; align-items: center;"
    );
    overlayContainer.append(globalOverlayWrapper);

    let loadContainer = document.createElement("div");
    loadContainer.classList.add("mdc-dialog__container");
    globalOverlayWrapper.append(loadContainer);

    let dialogContainer = document.createElement("div");
    dialogContainer.classList.add("mat-mdc-dialog-content");
    dialogContainer.classList.add("mdc-dialog__content");
    dialogContainer.classList.add("edit-dispatch-wrapper");
    dialogContainer.classList.add("d-flex");
    dialogContainer.setAttribute("_ngcontent-ng-c3682058330", "");
    dialogContainer.setAttribute("mat-dialog-content", "");
    loadContainer.append(dialogContainer);

    //колонта з інфой
    let column1 = document.createElement("div");
    column1.classList.add("column-item");
    column1.classList.add("info-wrapper");
    column1.classList.add("col-4");
    column1.setAttribute("_ngcontent-ng-c3682058330", "");
    dialogContainer.append(column1);

    //колонта з коментами
    let column2 = document.createElement("div");
    column2.classList.add("column-item");
    column2.classList.add("col-4");
    column2.setAttribute("_ngcontent-ng-c3682058330", "");
    dialogContainer.append(column2);

    //колонта з хісторі
    let column3 = document.createElement("div");
    column3.classList.add("column-item");
    column3.classList.add("col-3");
    column3.setAttribute("_ngcontent-ng-c3682058330", "");
    dialogContainer.append(column3);

    //Блок з фб та бол
    let column1InfoBlock = document.createElement("div");
    column1InfoBlock.classList.add("row-item");
    column1InfoBlock.classList.add("d-flex");
    column1InfoBlock.classList.add("m-b-4");
    column1InfoBlock.classList.add("broker-info-wrapper");
    column1InfoBlock.classList.add("justify-content-between");
    column1InfoBlock.setAttribute("_ngcontent-ng-c3682058330", "");
    column1.append(column1InfoBlock);

    let FBnumberBlock = document.createElement("div");
    FBnumberBlock.classList.add("broker-info-item");
    FBnumberBlock.setAttribute("_ngcontent-ng-c3682058330", "");
    column1InfoBlock.append(FBnumberBlock);

    let FBp = document.createElement("p");
    FBp.classList.add("label");
    FBp.setAttribute("_ngcontent-ng-c3682058330", "");
    FBp.textContent = "FB#";
    FBnumberBlock.append(FBp);

    let FBnumber = document.createElement("p");
    FBnumber.classList.add("m-r-1");
    FBnumber.setAttribute("_ngcontent-ng-c3682058330", "");
    FBnumber.textContent = this.freightBill;
    FBnumberBlock.append(FBnumber);

    let BOLnumberBlock = document.createElement("div");
    BOLnumberBlock.classList.add("broker-info-item");
    BOLnumberBlock.setAttribute("_ngcontent-ng-c3682058330", "");
    column1InfoBlock.append(BOLnumberBlock);

    let BOlp = document.createElement("p");
    BOlp.classList.add("label");
    BOlp.setAttribute("_ngcontent-ng-c3682058330", "");
    BOlp.textContent = "BOL#";
    BOLnumberBlock.append(BOlp);

    let BOLnumber = document.createElement("p");
    BOLnumber.setAttribute("_ngcontent-ng-c3682058330", "");
    BOLnumber.textContent = this.billOfLading;
    BOLnumberBlock.append(BOLnumber);

    //створює блок з кнопкой
    const buttonBlock = document.createElement("div");
    buttonBlock.classList.add("button_block");
    column1.append(buttonBlock);

    const modalButton = document.createElement("button");
    modalButton.classList.add("modal_button");
    modalButton.textContent = "EDIT";
    buttonBlock.append(modalButton);
    modalButton.addEventListener("click", this.openChangeModal);
  }
  openChangeModal() {
    const cangeModalBackground = document.createElement("div");
    cangeModalBackground.classList.add("cange_modal_background");
    body.append(cangeModalBackground);

    const changeModalWindow = document.createElement("div");
    changeModalWindow.classList.add("change_modal_window");
    cangeModalBackground.append(changeModalWindow);

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close_btn");
    closeBtn.textContent = "close";
    closeBtn.addEventListener("click", closeChangeModal);
    changeModalWindow.append(closeBtn);

    const saveBtn = document.createElement("button");
    saveBtn.classList.add("save_btn");
    saveBtn.textContent = "save";
    saveBtn.addEventListener("click", saveChangeModal);
    changeModalWindow.append(saveBtn);
  }
  createHistory() {
    //cтворює блок з хісторі
    let column3 = document.querySelector(".col-3");
    let history = document.createElement("div");
    history.classList.add("dispatch-history");
    column3.append(history);

    let historyContainer = document.createElement("div");
    historyContainer.classList.add("changes-history__container");
    history.append(historyContainer);

    //елемент хісторі з апдейтом
    let chanreRecordContainer = document.createElement("div");
    chanreRecordContainer.classList.add("change-record-container");
    historyContainer.append(chanreRecordContainer);

    let changesBody = document.createElement("div");
    changesBody.classList.add("changes-body");
    chanreRecordContainer.append(changesBody);

    //блок з імʼям діспа і датою апдейту
    let changesHeader = document.createElement("div");
    changesHeader.classList.add("change-header");
    changesHeader.classList.add("m-b-2");
    changesBody.append(changesHeader);

    let dispName = document.createElement("span");
    dispName.classList.add("changed-by");
    dispName.textContent = "George Mamtsev";
    changesHeader.append(dispName);

    let updatedWord = document.createElement("span");
    updatedWord.classList.add("change-type");
    updatedWord.textContent = " updated";
    changesHeader.append(updatedWord);

    let shipmentWord = document.createElement("span");
    shipmentWord.classList.add("change-entity");
    shipmentWord.textContent = " shipment";
    changesHeader.append(shipmentWord);

    let updateDate = document.createElement("span");
    updateDate.classList.add("change-date");
    updateDate.textContent = " 01/02";
    changesHeader.append(updateDate);

    //блок з інформацією апдету
    let changeList = document.createElement("div");
    changeList.classList.add("changes-list");
    changesBody.append(changeList);

    let changeItem = document.createElement("div");
    changeItem.classList.add("change-item");
    changeList.append(changeItem);

    let changeRow = document.createElement("div");
    changeRow.classList.add("row");
    changeRow.classList.add("w-100");
    changeItem.append(changeRow);

    //cтатус який треба відслідковувати !!!!!!
    let changeName = document.createElement("div");
    changeName.classList.add("changed-property-name");
    changeName.classList.add("col-4");
    changeName.textContent = "DispatchStatus"; //(or CheckIn/CheckOut/Eta)
    changeRow.append(changeName);

    let changeAudit = document.createElement("div");
    changeAudit.classList.add("change-audit");
    changeAudit.classList.add("col-8");
    changeRow.append(changeAudit);

    let changeOld = document.createElement("div");
    changeOld.classList.add("change-old");
    //changeOld.classList.add("ng-star-inserted");
    changeOld.textContent = "In Transit/Loaded"; // or At pickup/ At delivery ...
    changeAudit.append(changeOld);

    let changeNew = document.createElement("div");
    changeNew.classList.add("change-new");
    changeNew.textContent = "At delivery";
    changeAudit.append(changeNew);
  }
}

function saveChangeModal() {
  let closemodal = document.querySelector(".cange_modal_background");
  closemodal.remove();
}
function closeChangeModal() {
  let closemodal = document.querySelector(".cange_modal_background");
  closemodal.remove();
}
//відкриває модальне вікно зі збереженням інформації
// function openModalWindow() {
//   freightWatch.onclick = function (e) {
//     let loads = e.target.closest(".load");
//     if (!loads) return;

//     let freightBill = Number(loads.children[1].textContent);
//     let billOfLading = Number(loads.children[2].textContent);
//     let openCard = new LoadCard(
//       freightBill,
//       billOfLading
//       // historyType
//       // dispNotes.textContent
//     );
//     openCard.createLoadCard();
//     openCard.createHistory();
//     // console.log(openCard);
//   };
// }
// openModalWindow();
//закриває модальне вікно при натисканні поза його межами
window.onclick = function (e) {
  let modals = document.querySelector(".mdc-dialog__container");
  let modalWindow = document.querySelector(".cdk-overlay-container");
  if (e.target == modals) {
    modalWindow.remove();
  }
};
let historySrore = [
  {
    id: 0,
    name: "no my update",
    update1: {
      dispName: "Ksenia Rizkhova",
      updType: "DispatchStatus",
      old: "ETA",
      new: "At pickup",
    },
    update2: {
      dispName: "Ethan Flover",
      updType: "DispatchStatus",
      old: "At pickup",
      new: "In Transit/Loaded",
    },
    update3: {
      dispName: "Ethan Flover",
      updType: "DispatchStatus",
      old: "In Transit/Loaded",
      new: "ETA",
    },
  },
  {
    id: 1,
    name: "invalid update",
    update1: {
      dispName: "Ksenia Rizkhova",
      updType: "DispatchStatus",
      old: "Need to check",
      new: "ETA",
    },
    update2: {
      dispName: "George Mamtsev",
      updType: "ETA",
      old: "12:00",
      new: "13:00",
    },
    update2: {
      dispName: "Ksenia Rizkhova",
      updType: "DispatchStatus",
      old: "ETA",
      new: "At pickup",
    },
  },
  {
    id: 2,
    name: "my update",
    update1: {
      dispName: "George Mamtsev",
      updType: "DispatchStatus",
      old: "Need to check",
      new: "ETA",
    },
    update2: {
      dispName: "Ksenia Rizkhova",
      updType: "DispatchStatus",
      old: "ETA",
      new: "At pickup",
    },
    update3: {
      dispName: "Ksenia Rizkhova",
      updType: "DispatchStatus",
      old: "At pickup",
      new: "In Transit/Loaded",
    },
  },
];

load1 = new Load(
  235543,
  "870345",
  "pink",
  "PUPA AND LUPA",
  "In transit",
  "12:00",
  "SHEPHERD, TX",
  "01/21",
  "LAREDO, TX",
  "01/22",
  historySrore[0]
);
load1.createLoad();
load2 = new Load(
  8546345,
  2344399,
  "yellow",
  "PUPA AND LUPA",
  "In transit",
  "",
  "SHEPHERD, TX",
  "01/21",
  "LAREDO, TX",
  "01/22",
  historySrore[1]
);
load2.createLoad();
load3 = new Load(
  345345,
  6342342,
  "green",
  "PUPA AND LUPA",
  "In transit",
  "",
  "SHEPHERD, TX",
  "01/21",
  "LAREDO, TX",
  "01/22",
  historySrore[2]
);
load3.createLoad();

// console.log(load1.Gethistory);
// console.log(load2.Gethistory);
// console.log(load3.Gethistory);

// console.log(load2.historyType);
// console.log(load3.historyType);
// console.log(load1.historyType.update1.dispName);
