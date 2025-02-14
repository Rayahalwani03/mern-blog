import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Button } from "flowbite-react";
import { AiFillFacebook } from "react-icons/ai";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/useSlice";
import { useNavigate } from "react-router-dom"; 


const FAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleFacebookClick = async () => {
    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" }); // مشان دائما يعطيني خيار انو اعمل سيليكت اككونت

    try {
      const resultsFromFacebook = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/facebook',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            name: resultsFromFacebook.user.displayName,
            email: resultsFromFacebook.user.email,
            facebookPhotoUrl: resultsFromFacebook.user.photoURL,
        }),
    })
    const data = await res.json()
    if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/')

    }
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <Button type="button"  gradientDuoTone="pinkToOrange" outline onClick={handleFacebookClick}
    >
      <div className="flex items-center">
        <AiFillFacebook  size={21} className= "mr-3" />
        <span>Continue With Facebook   </span>
      </div>
    </Button>


  );
};

export default FAuth;
