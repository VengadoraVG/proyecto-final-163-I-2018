import firebase from 'firebase';

const db = {
  dbRef: firebase.database(),

  professors () {
    return this.dbRef.ref('/2018/professors')
      .once('value');
  },

  setAssignature (professorID, assignature, assignatureName) {
    return this.dbRef.ref('/2018/professors/' + professorID +
                          '/assignatures/' + assignatureName)
      .set(assignature);
  }
};

export default db;
