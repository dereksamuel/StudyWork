import { fb } from "./firebase"

class Post {
    constructor() {
        this.db = fb.firestore()
    }
    crearPost(uid, autor, page) {
        return this.db.collection('posts').add({
            uid,
            autor,
            Page: page
        })
        .then(docRef => {
            console.log(`soy: ${docRef.uid}`)
        })
        .catch(error => {
            console.log(`Soy un error: ${error}`)
        })
    }
}

export default Post;