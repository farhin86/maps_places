export class Modal {
  constructor(contentEl, fallbackMsg) {
    this.fallbackMsg = fallbackMsg;
    this.contentTemplateId = document.getElementById(contentEl);
    this.modalTemplateId = document.getElementById("modal-template");
  }
  show() {
    if ("content" in document.createElement("template")) {
      const modalElements = document.importNode(
        this.modalTemplateId.content,
        true
      );
      this.modalEl = modalElements.querySelector(".modal");
      this.backdropEl = modalElements.querySelector(".backdrop");
      const contentElement = document.importNode(
        this.contentTemplateId.content,
        true
      );

      this.modalEl.append(contentElement);
      document.body.insertAdjacentElement("afterbegin", this.modalEl);
      document.body.insertAdjacentElement("afterbegin", this.backdropEl);
    } else {
      alert("template not supported");
    }
  }
  hide() {
    if (this.modalEl) {
      this.modalEl.remove();
      this.backdropEl.remove();
      this.modalEl = null;
      this.backdropEl = null;
    }
  }
}
