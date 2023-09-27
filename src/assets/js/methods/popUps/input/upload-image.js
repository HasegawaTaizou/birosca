import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHXcSqQFgrPkPsMj79WStHWIvUsATR8EI",
  authDomain: "birosca-3aac5.firebaseapp.com",
  projectId: "birosca-3aac5",
  storageBucket: "birosca-3aac5.appspot.com",
  messagingSenderId: "324197127722",
  appId: "1:324197127722:web:c3c6737f123576a8dd9553",
  measurementId: "G-TPV57FXHZ9"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default async function uploadImage(event) {
  this.isSelectedImage = false;
  this.$store.commit("SET_IS_SELECTED_IMAGE", false);

  const file = event.target.files[0];
  const storageRef = ref(storage, "images/" + file.name);

  await uploadBytes(storageRef, file);

  this.downloadURL = await getDownloadURL(storageRef);

  this.isSelectedImage = true;
  this.$store.commit("SET_IS_SELECTED_IMAGE", true);
}