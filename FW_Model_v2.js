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
    historyType,
    originETA,
    originIn,
    originOut,
    destETA,
    destIn,
    destOut
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
    this.originETA = originETA;
    this.originIn = originIn;
    this.originOut = originOut;
    this.destETA = destETA;
    this.destIn = destIn;
    this.destOut = destOut;
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

    let historyType = this.historyType;
    //
    let originETA = this.originETA;
    let originIn = this.originIn;
    let originOut = this.originOut;
    let destETA = this.destETA;
    let destIn = this.destIn;
    let destOut = this.destOut;

    load.addEventListener("click", function () {
      let openCard = new LoadCard(
        freightBillBlock.textContent,
        billOfLadingBlock.textContent,
        historyType,
        originETA,
        originIn,
        originOut,
        destETA,
        destIn,
        destOut
      );
      openCard.createLoadCard();
      openCard.createHistory();
      openCard.createTimesBar();
    });
  }
}
class LoadCard {
  constructor(
    freightBill,
    billOfLading,
    historyType,
    originETA,
    originIn,
    originOut,
    destETA,
    destIn,
    destOut
  ) {
    this.freightBill = freightBill;
    this.billOfLading = billOfLading;
    this.historyType = historyType;
    this.originETA = originETA;
    this.originIn = originIn;
    this.originOut = originOut;
    this.destETA = destETA;
    this.destIn = destIn;
    this.destOut = destOut;
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
    modalButton.addEventListener(
      "click",
      this.openChangeModal(
        this.originETA,
        this.originIn,
        this.originOut,
        this.destETA,
        this.destIn,
        this.destOut
      )
    );
  }

  openChangeModal(originETA, originIn, originOut, destETA, destIn, destOut) {
    let btn = document.querySelector(".modal_button");
    btn.addEventListener("click", open);
    function open() {
      const cangeModalBackground = document.createElement("div");
      cangeModalBackground.classList.add("cange_modal_background");
      body.append(cangeModalBackground);

      const changeModalWindow = document.createElement("div");
      changeModalWindow.classList.add("change_modal_window");
      cangeModalBackground.append(changeModalWindow);

      let scrollContent = document.createElement("div");
      scrollContent.classList.add("ng-scroll-content");
      changeModalWindow.append(scrollContent);

      let inlineFlex = document.createElement("div");
      inlineFlex.classList.add("d-inline-flex");
      inlineFlex.classList.add("stop-row");
      inlineFlex.classList.add("w-100");
      inlineFlex.classList.add("stop-row-even");
      inlineFlex.classList.add("ng-untouched");
      inlineFlex.classList.add("ng-valid");
      scrollContent.append(inlineFlex);

      let stopTitleOrigin = document.createElement("div");
      stopTitleOrigin.classList.add("stop-title-row");
      inlineFlex.append(stopTitleOrigin);

      let originTitle = document.createElement("span");
      originTitle.classList.add("stop-title");
      originTitle.textContent = "Origin City";
      stopTitleOrigin.append(originTitle);

      let originEtaBlock = document.createElement("div");
      originEtaBlock.classList.add("mat-mdc-text-field-wrapper");
      originEtaBlock.classList.add("mdc-text-field");
      originEtaBlock.classList.add("ng-tns-c1205077789-14");
      originEtaBlock.classList.add("mdc-text-field--outlined");
      inlineFlex.append(originEtaBlock);

      let originEtaDateInput = document.createElement("input");
      originEtaDateInput.classList.add("mdc-text-field__input");
      originEtaDateInput.setAttribute("id", "mat-input-3");
      originEtaDateInput.setAttribute("type", "date");
      originEtaBlock.append(originEtaDateInput);

      let origitTimeBlock = document.createElement("div");
      origitTimeBlock.classList.add("ng-tns-c1205077789-15");
      inlineFlex.append(origitTimeBlock);

      let originEtaTimeInput = document.createElement("input");
      originEtaTimeInput.classList.add("mdc-text-field__input");
      originEtaTimeInput.setAttribute("type", "time");
      originEtaTimeInput.setAttribute("value", originETA);

      origitTimeBlock.append(originEtaTimeInput);
      //скопіюй 2 блоки вище ще 10 разів і модеть буде завершена

      let originCheckInBlock = document.createElement("div");
      originCheckInBlock.classList.add("mat-mdc-text-field-wrapper");
      inlineFlex.append(originCheckInBlock);

      let originCheckInDateInput = document.createElement("input");
      originCheckInDateInput.classList.add("mdc-text-field__input");
      originCheckInDateInput.setAttribute("id", "mat-input-3");
      originCheckInDateInput.setAttribute("type", "date");
      originCheckInBlock.append(originCheckInDateInput);

      let origitCheckInBlock = document.createElement("div");
      origitCheckInBlock.classList.add("ng-tns-c1205077789-15");
      inlineFlex.append(origitCheckInBlock);

      let originCheckinTimeInput = document.createElement("input");
      originCheckinTimeInput.classList.add("mdc-text-field__input");
      originCheckinTimeInput.setAttribute("type", "time");
      originCheckinTimeInput.setAttribute("value", originIn);

      origitCheckInBlock.append(originCheckinTimeInput);

      let originCheckOutBlock = document.createElement("div");
      originCheckOutBlock.classList.add("mat-mdc-text-field-wrapper");
      inlineFlex.append(originCheckOutBlock);

      let originCheckOutDateInput = document.createElement("input");
      originCheckOutDateInput.classList.add("mdc-text-field__input");
      originCheckOutDateInput.setAttribute("id", "mat-input-3");
      originCheckOutDateInput.setAttribute("type", "date");
      originCheckOutBlock.append(originCheckOutDateInput);

      let origitCheckOutBlock = document.createElement("div");
      origitCheckOutBlock.classList.add("ng-tns-c1205077789-15");
      inlineFlex.append(origitCheckOutBlock);

      let originCheckOutTimeInput = document.createElement("input");
      originCheckOutTimeInput.classList.add("mdc-text-field__input");
      originCheckOutTimeInput.setAttribute("type", "time");
      originCheckOutTimeInput.setAttribute("value", originOut);
      origitCheckOutBlock.append(originCheckOutTimeInput);

      // destination block

      let inlineFlexDest = document.createElement("div");
      inlineFlexDest.classList.add("d-inline-flex");
      inlineFlexDest.classList.add("stop-row");
      inlineFlexDest.classList.add("w-100");
      inlineFlexDest.classList.add("stop-row-even");
      inlineFlexDest.classList.add("ng-untouched");
      inlineFlexDest.classList.add("ng-valid");
      scrollContent.append(inlineFlexDest);

      let stopTitleDestination = document.createElement("div");
      stopTitleDestination.classList.add("stop-title-row");
      inlineFlexDest.append(stopTitleDestination);

      let destinationTitle = document.createElement("span");
      destinationTitle.classList.add("stop-title");
      destinationTitle.textContent = "Destination City";
      stopTitleDestination.append(destinationTitle);

      let destinationEtaBlock = document.createElement("div");
      destinationEtaBlock.classList.add("mat-mdc-text-field-wrapper");
      destinationEtaBlock.classList.add("mdc-text-field");
      destinationEtaBlock.classList.add("ng-tns-c1205077789-14");
      destinationEtaBlock.classList.add("mdc-text-field--outlined");
      inlineFlexDest.append(destinationEtaBlock);

      let destinationEtaDateInput = document.createElement("input");
      destinationEtaDateInput.classList.add("mdc-text-field__input");
      destinationEtaDateInput.setAttribute("id", "mat-input-3");
      destinationEtaDateInput.setAttribute("type", "date");
      destinationEtaBlock.append(destinationEtaDateInput);

      let destinationTimeBlock = document.createElement("div");
      destinationTimeBlock.classList.add("ng-tns-c1205077789-15");
      inlineFlexDest.append(destinationTimeBlock);

      let destinationEtaTimeInput = document.createElement("input");
      destinationEtaTimeInput.classList.add("mdc-text-field__input");
      destinationEtaTimeInput.setAttribute("type", "time");
      destinationEtaTimeInput.setAttribute("value", destETA);
      destinationTimeBlock.append(destinationEtaTimeInput);

      let destinationCheckInBlock = document.createElement("div");
      destinationCheckInBlock.classList.add("mat-mdc-text-field-wrapper");
      inlineFlexDest.append(destinationCheckInBlock);

      let destinationCheckInDateInput = document.createElement("input");
      destinationCheckInDateInput.classList.add("mdc-text-field__input");
      destinationCheckInDateInput.setAttribute("id", "mat-input-3");
      destinationCheckInDateInput.setAttribute("type", "date");
      destinationCheckInBlock.append(destinationCheckInDateInput);

      let destinationCheckInTimeBlock = document.createElement("div");
      destinationCheckInTimeBlock.classList.add("ng-tns-c1205077789-15");
      inlineFlexDest.append(destinationCheckInTimeBlock);

      let destinationCheckinTimeInput = document.createElement("input");
      destinationCheckinTimeInput.classList.add("mdc-text-field__input");
      destinationCheckinTimeInput.setAttribute("type", "time");
      destinationCheckinTimeInput.setAttribute("value", destIn);

      destinationCheckInTimeBlock.append(destinationCheckinTimeInput);

      let destinationCheckOutBlock = document.createElement("div");
      destinationCheckOutBlock.classList.add("mat-mdc-text-field-wrapper");
      inlineFlexDest.append(destinationCheckOutBlock);

      let destinationCheckOutDateInput = document.createElement("input");
      destinationCheckOutDateInput.classList.add("mdc-text-field__input");
      destinationCheckOutDateInput.setAttribute("id", "mat-input-3");
      destinationCheckOutDateInput.setAttribute("type", "date");
      destinationCheckOutBlock.append(destinationCheckOutDateInput);

      let destinationCheckOuTimetBlock = document.createElement("div");
      destinationCheckOuTimetBlock.classList.add("ng-tns-c1205077789-15");
      inlineFlexDest.append(destinationCheckOuTimetBlock);

      let destinationCheckOutTimeInput = document.createElement("input");
      destinationCheckOutTimeInput.classList.add("mdc-text-field__input");
      destinationCheckOutTimeInput.setAttribute("type", "time");
      destinationCheckOutTimeInput.setAttribute("value", destOut);

      destinationCheckOuTimetBlock.append(destinationCheckOutTimeInput);

      let buttonBlock = document.createElement("div");
      buttonBlock.classList.add("buttons_block");
      changeModalWindow.append(buttonBlock);

      const closeBtn = document.createElement("button");
      closeBtn.classList.add("close_btn");
      closeBtn.textContent = "close";
      closeBtn.addEventListener("click", closeChangeModal);
      buttonBlock.append(closeBtn);

      const saveBtn = document.createElement("button");
      saveBtn.classList.add("m-l-4");
      saveBtn.textContent = "save";
      saveBtn.addEventListener("click", saveChangeModal);
      buttonBlock.append(saveBtn);
    }
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
    //==========================================================================
    for (let i = 0; i < this.historyType.updates.length; i += 1) {
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
      dispName.textContent = this.historyType.updates[i].dispName;
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
      changeName.textContent = this.historyType.updates[i].updType; //(or CheckIn/CheckOut/Eta)
      changeRow.append(changeName);

      let changeAudit = document.createElement("div");
      changeAudit.classList.add("change-audit");
      changeAudit.classList.add("col-8");
      changeRow.append(changeAudit);

      let changeOld = document.createElement("div");
      changeOld.classList.add("change-old");
      //changeOld.classList.add("ng-star-inserted");
      changeOld.textContent = this.historyType.updates[i].old; // or At pickup/ At delivery ...
      changeAudit.append(changeOld);

      let changeNew = document.createElement("div");
      changeNew.classList.add("change-new");
      changeNew.textContent = this.historyType.updates[i].new;
      changeAudit.append(changeNew);
    }
  }
  createTimesBar() {
    let column1 = document.querySelector(".column-item");
    let scrollBarWrapper = document.createElement("div");
    scrollBarWrapper.classList.add("ng-scrollbar-wrapper");
    column1.append(scrollBarWrapper);

    let scrollViewportWrapper = document.createElement("div");
    scrollViewportWrapper.classList.add("ng-scroll-viewport-wrapper");
    scrollBarWrapper.append(scrollViewportWrapper);

    let scrollContent = document.createElement("div");
    scrollContent.classList.add("ng-scroll-content");
    scrollViewportWrapper.append(scrollContent);

    let stopItem = document.createElement("div");
    stopItem.classList.add("stop-item");
    stopItem.classList.add("ng-star-inserted");
    scrollContent.append(stopItem);

    //блок з датою та орігін, поки залишу пустим так як задача інша
    let itemHeader = document.createElement("div");
    itemHeader.classList.add("itemheader");
    itemHeader.classList.add("d-flex");
    itemHeader.classList.add("m-b-1");
    stopItem.append(itemHeader);
    /*
      код для блоку міста і дати орігін
    */

    let times = document.createElement("div");
    times.classList.add("d-flex");
    stopItem.append(times);

    let stopCounter = document.createElement("div");
    stopCounter.classList.add("stop-type-wrapper");
    stopCounter.classList.add("stop-counter");
    stopCounter.textContent = 1;
    times.append(stopCounter);

    //блок з чекін аут ита часом
    let justifyContentBetween = document.createElement("div");
    justifyContentBetween.classList.add("d-flex");
    justifyContentBetween.classList.add("justify-content-between");
    justifyContentBetween.classList.add("w-100");
    times.append(justifyContentBetween);

    let blockEta = document.createElement("div");
    blockEta.classList.add("date-item");
    justifyContentBetween.append(blockEta);

    let labelEta = document.createElement("p");
    labelEta.classList.add("label");
    labelEta.textContent = "ETA";
    blockEta.append(labelEta);
    //11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    let dateEta = document.createElement("p");
    dateEta.textContent = this.originETA;
    dateEta.classList.add("date");
    blockEta.append(dateEta);

    let separator1 = document.createElement("div");
    separator1.classList.add("separator");
    justifyContentBetween.append(separator1);

    let blockInTime = document.createElement("div");
    blockInTime.classList.add("date-item");
    justifyContentBetween.append(blockInTime);

    let labelInttime = document.createElement("p");
    labelInttime.classList.add("label");
    labelInttime.textContent = "Check in";
    blockInTime.append(labelInttime);

    let dateIntime = document.createElement("p");
    dateIntime.textContent = this.originIn;
    dateIntime.classList.add("date");
    blockInTime.append(dateIntime);

    let separator2 = document.createElement("div");
    separator2.classList.add("separator");
    justifyContentBetween.append(separator2);

    let blockOuttime = document.createElement("div");
    blockOuttime.classList.add("date-item");
    justifyContentBetween.append(blockOuttime);

    let labelOutTime = document.createElement("p");
    labelOutTime.classList.add("label");
    labelOutTime.textContent = "Check out";
    blockOuttime.append(labelOutTime);

    let dateOuttime = document.createElement("p");
    dateOuttime.textContent = this.originOut;
    dateOuttime.classList.add("date");
    blockOuttime.append(dateOuttime);

    let stopItem2 = document.createElement("div");
    stopItem2.classList.add("stop-item");
    stopItem2.classList.add("ng-star-inserted");
    scrollContent.append(stopItem2);

    let stopItem2Header = document.createElement("div");
    stopItem2Header.classList.add("item-header");
    stopItem2Header.classList.add("d-flex");
    stopItem2Header.classList.add("m-b-1");
    stopItem2.append(stopItem2Header);

    /*
      код для блоку міста і дати орігін
    */
    let dFlex = document.createElement("div");
    dFlex.classList.add("d-flex");
    stopItem2.append(dFlex);

    let wrapper2 = document.createElement("div");
    wrapper2.classList.add("stop-type-wrapper");
    wrapper2.classList.add("stop-counter");
    wrapper2.textContent = 2;
    dFlex.append(wrapper2);

    let justifyContentBetween2 = document.createElement("div");
    justifyContentBetween2.classList.add("d-flex");
    justifyContentBetween2.classList.add("justify-content-between");
    justifyContentBetween2.classList.add("w-100");
    dFlex.append(justifyContentBetween2);

    let delEtaItem = document.createElement("div");
    delEtaItem.classList.add("date-item");
    justifyContentBetween2.append(delEtaItem);

    let delEtaLabel = document.createElement("p");
    delEtaLabel.classList.add("label");
    delEtaLabel.textContent = "ETA";
    delEtaItem.append(delEtaLabel);

    let delEtaDate = document.createElement("p");
    delEtaDate.textContent = this.destETA;
    delEtaDate.classList.add("date");
    delEtaItem.append(delEtaDate);

    let delSeparator = document.createElement("div");
    delSeparator.classList.add("separator");
    justifyContentBetween2.append(delSeparator);

    let delIntime = document.createElement("div");
    delIntime.classList.add("date-item");
    justifyContentBetween2.append(delIntime);

    let delInLabel = document.createElement("p");
    delInLabel.classList.add("label");
    delInLabel.textContent = "Check in";
    delIntime.append(delInLabel);

    let delInDate = document.createElement("p");
    delInDate.textContent = this.destIn;
    delInDate.classList.add("date");
    delIntime.append(delInDate);

    let delSeparator2 = document.createElement("div");
    delSeparator2.classList.add("separator");
    justifyContentBetween2.append(delSeparator);

    let delOutime = document.createElement("div");
    delOutime.classList.add("date-item");
    justifyContentBetween2.append(delOutime);

    let delOutLabel = document.createElement("p");
    delOutLabel.classList.add("label");
    delOutLabel.textContent = "Check out";
    delOutime.append(delOutLabel);

    let delOutDate = document.createElement("p");
    delOutDate.textContent = this.destOut;
    delOutDate.classList.add("date");
    delOutime.append(delOutDate);
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

//закриває модальне вікно при натисканні поза його межами/ закоментовано для нормальної роботи маркеру
// такий же код у скріпті маркеру, для роботи без нього розкоментуй цей
// window.onclick = function (e) {
//   let modals = document.querySelector(".mdc-dialog__container");
//   let modalWindow = document.querySelector(".cdk-overlay-container");
//   if (e.target == modals) {
//     modalWindow.remove();
//   }
// };
let historySrore = [
  {
    id: 0,
    name: "no my update",
    updates: [
      {
        updateNumber: 1,
        dispName: "Ksenia Rizkhova",
        updType: "DispatchStatus",
        old: "ETA",
        new: "At pickup",
      },
      {
        updateNumber: 2,
        dispName: "Ethan Flover",
        updType: "DispatchStatus",
        old: "At pickup",
        new: "In Transit/Loaded",
      },
      {
        updateNumber: 3,
        dispName: "Ethan Flover",
        updType: "DispatchStatus",
        old: "In Transit/Loaded",
        new: "ETA",
      },
    ],
  },
  {
    id: 1,
    name: "invalid update",
    updates: [
      {
        updateNumber: 1,
        dispName: "Ksenia Rizkhova",
        updType: "DispatchStatus",
        old: "Need to check",
        new: "ETA",
      },
      {
        updateNumber: 2,
        dispName: "George Mamtsev",
        updType: "ETA",
        old: "12:00",
        new: "13:00",
      },
      {
        updateNumber: 3,
        dispName: "Ksenia Rizkhova",
        updType: "DispatchStatus",
        old: "ETA",
        new: "At pickup",
      },
    ],
  },
  {
    id: 2,
    name: "my update",
    updates: [
      {
        updateNumber: 1,
        dispName: "George Mamtsev",
        updType: "DispatchStatus",
        old: "Need to check",
        new: "ETA",
      },
      {
        updateNumber: 2,
        dispName: "Ksenia Rizkhova",
        updType: "DispatchStatus",
        old: "ETA",
        new: "At pickup",
      },
      {
        updateNumber: 3,
        dispName: "Ksenia Rizkhova",
        updType: "DispatchStatus",
        old: "At pickup",
        new: "In Transit/Loaded",
      },
    ],
  },
];

setTimeout(createLoads, 1000);
function createLoads() {
  load1 = new Load(
    2345543,
    "870345",
    "pink",
    "PUPA AND LUPA",
    "In transit",
    "12:00",
    "SHEPHERD, TX",
    "01/21",
    "LAREDO, TX",
    "01/22",
    historySrore[0],
    "08:00"
  );
  load1.createLoad();
  load2 = new Load(
    8546345,
    2344399,
    "pink",
    "PUPA AND LUPA",
    "In transit",
    "",
    "SHEPHERD, TX",
    "01/21",
    "LAREDO, TX",
    "01/22",
    historySrore[0],
    "09:00",
    "08:15",
    "09:00",
    "12:00",
    "13:00"
  );
  load2.createLoad();
  load3 = new Load(
    345345,
    6342342,
    "pink",
    "PUPA AND LUPA",
    "In transit",
    "",
    "SHEPHERD, TX",
    "01/21",
    "LAREDO, TX",
    "01/22",
    historySrore[0]
  );
  load3.createLoad();
  load4 = new Load(
    4357345,
    9923423,
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
  load4.createLoad();
  load5 = new Load(
    1235211,
    634527,
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
  load5.createLoad();
  load6 = new Load(
    34563743,
    3684333,
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
  load6.createLoad();
  load7 = new Load(
    32466622,
    12364321,
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
  load7.createLoad();
}
