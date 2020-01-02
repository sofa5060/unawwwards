import firebase from "./components/Config/fbConfig";
const db = firebase.firestore();

const signUp = data => {
  db.collection("users")
    .doc(data.user.uid)
    .set({
      uid: data.user.uid,
      name: data.additionalUserInfo.profile.name,
      email: data.additionalUserInfo.profile.email,
      imageURL: data.additionalUserInfo.profile.picture
    });
};

const upVote = siteId => {
  const uid = firebase.auth().currentUser.uid
  db.collection("sites")
    .doc(siteId)
    .update({
      upVotes: firebase.firestore.FieldValue.arrayUnion(uid)
    });
};

const downVote = siteId => {
  const uid = firebase.auth().currentUser.uid
  db.collection("sites")
    .doc(siteId)
    .update({
      upVotes: firebase.firestore.FieldValue.arrayRemove(uid)
    });
};

const addSite = (name,url,description) => {
  db.collection("sites").add({
    name,
    url,
    description,
    isApproved:false,
    uploadDate: new Date(),
    authorId: firebase.auth().currentUser.uid,
    img:"",
    upVotes:[]
})
}

export default { signUp , upVote , downVote  , addSite};
