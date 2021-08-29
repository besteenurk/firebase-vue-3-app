import { ref } from 'vue';
import { firebaseAuth } from '../firebase/config'

const error = ref(null)

const signup = async (email, password, displayName) => {
    error.value = null;

    try {

        const res = await firebaseAuth.createUserWithEmailAndPassword(email, password);
        if (!res) {
            throw new Error('couldnt complete signup')
        }
        await res.user.updateProfile({
            displayName
        })
        error.value = null

        return res
    } catch (e) {
        error.value = e.message;
    }
}

const SignUp = () => {

    return {
        error, signup
    }
}

export default SignUp