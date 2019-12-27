import firebase from "./components/Config/fbConfig"
const db = firebase.firestore();

const signUp = data => {
  console.log("worked")
  db.collection("users")
    .doc(data.user.uid)
    .set({
      uid: data.user.uid,
      name: data.additionalUserInfo.profile.name,
      email: data.additionalUserInfo.profile.email,
      imageURL: data.additionalUserInfo.profile.picture
    });
};

export default { signUp };
