import { Map } from "./SharedUI/Map";
import { Modal } from "./SharedUI/Modal";
class PlaceFinder {
  constructor() {
    this.shareLocationLink = document.getElementById("share-link");
    this.shareLocationLinkBtn = document.getElementById("share-btn");
    const locateUserLocation = document.getElementById("locate-btn");
    this.shareLocationLinkBtn.addEventListener(
      "click",
      this.shareLocation.bind(this)
    );
    locateUserLocation.addEventListener(
      "click",
      this.getUserLocationHandler.bind(this)
    );
  }
  shareLocation() {
    if (!navigator.clipboard) {
      this.shareLocationLink.select();
      return;
    }
    navigator.clipboard
      .writeText(this.shareLocationLink.value)
      .then(() => alert("Location copied"))
      .catch((err) => {
        console.log(err);
        this.shareLocationLink.select();
      });
  }
  showOnMap(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
    this.shareLocationLinkBtn.disabled = false;
    this.shareLocationLink.value = `${
      location.origin
    }/my-place?address=${encodeURI(address)}&lat=${coordinates.lat}&lng=${
      coordinates.lng
    }`;
  }
  getUserLocationHandler() {
    const modal = new Modal("loading-modal-content", "Something went wrong");
    modal.show();
    navigator.geolocation.getCurrentPosition((successResult) => {
      const coordinates = {
        lat: successResult.coords.latitude,
        lng: successResult.coords.longitude,
      };
      this.showOnMap(coordinates);
      setTimeout(function () {
        modal.hide();
      }, 3000);
    }),
      (err) => {
        modal.hide();
        alert("Something went wrong");
      };
  }
}
const placeFinder = new PlaceFinder();
