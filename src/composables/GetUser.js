import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { firebaseAuth } from '../firebase/config'

const user = ref(firebaseAuth.currentUser)

firebaseAuth.onAuthStateChanged(_user => {
    console.log("current user : ", _user);
    user.value = _user
})

const GetUser = () => {
    return { user }
}

export default GetUser