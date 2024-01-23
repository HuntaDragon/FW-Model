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
    DELdate
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
  }
  createLoad() {
    const load = document.createElement("tr");
    load.classList.add("ng-star-inserted");
    load.classList.add(this.color);
    load.classList.add("load");

    load.setAttribute("_ngcontent-ng-c3288653432", "");
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
}
class LoadCard {
  // constructor(FB, BOL, dispNotes) {
  //   this.FB = FB;
  //   this.BOL = BOL;
  //   this.dispNotes = dispNotes;
  // }
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

    let column1 = document.createElement("div");
    column1.classList.add("column-item");
    column1.classList.add("info-wrapper");
    column1.classList.add("col-4");
    column1.setAttribute("_ngcontent-ng-c3682058330", "");
    dialogContainer.append(column1);

    let column2 = document.createElement("div");
    column2.classList.add("column-item");
    column2.classList.add("col-4");
    column2.setAttribute("_ngcontent-ng-c3682058330", "");
    dialogContainer.append(column2);

    let column3 = document.createElement("div");
    column3.classList.add("column-item");
    column3.classList.add("col-4");
    column3.setAttribute("_ngcontent-ng-c3682058330", "");
    dialogContainer.append(column3);

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
    FBnumber.textContent = "this.FB";
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
    BOLnumber.textContent = "this.BOL";
    BOLnumberBlock.append(BOLnumber);
  }
}

load1 = new Load(
  1234,
  5678,
  "white",
  "PUPA AND LUPA jsdf sdfn s as awm dwlka ;dsf kalsmd ",
  "In transit",
  "12:00",
  "SHEPHERD, TX",
  "01/21",
  "LAREDO, TX",
  "01/22"
);
load1.createLoad();
load2 = new Load(
  1234,
  5678,
  "white",
  "PUPA AND LUPA",
  "In transit",
  "12:00",
  "SHEPHERD, TX",
  "01/21",
  "LAREDO, TX",
  "01/22"
);
load2.createLoad();

card = new LoadCard();
card.createLoadCard();
