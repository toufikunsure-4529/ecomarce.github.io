// GoogleLogin.js
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { toast } from "react-toastify";
import myContext from "../../context/data/myContext";
import { auth } from "../../firebase/FirebaseConfig";

function GoogleLogin() {
  const context = useContext(myContext);
  const { setLoading } = context;

  const handleGoogleLogin = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("user", JSON.stringify(result));
      toast.success("Signin with Google Successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      toast.error("Signin with Google Failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-red-500 text-white font-bold px-2 py-2 rounded-lg"
    >
      Sign in with Google
    </button>
  );
}

export default GoogleLogin;
