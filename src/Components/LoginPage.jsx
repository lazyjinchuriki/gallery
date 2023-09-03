import { useState } from "react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const user = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = useSupabaseClient();

  if (user) {
    navigate("/gallery/gallerypage/");
  }
  const getMagicLink = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: "https://example.com/welcome",
      },
    });

    if (error) {
      alert(error.message);
      console.log(error);
      return;
    } else {
      alert("Check your email for the magic link!");
      {
        user && navigate("/gallery/gallerypage/");
      }
      console.log(data);
      return;
    }
  };
  const loginWithPass = async (e) => {
    e.preventDefault();
    {
      user && navigate("/gallery/gallerypage/");
    }
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      alert(error.message);
      console.log(error);
      return;
    }
  };

  return (
    <>
      <div className="flex items-center flex-col justify-center min-h-screen bg-gradient-to-r from-pink-500 to-blue-600">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 w-full max-w-md">
            <form
              onSubmit={getMagicLink}
              className="flex flex-col items-center justify-center gap-2 "
            >
              <h3 className="text-xl font-bold mb-2">Login with Redirect</h3>
              <input
                type="email"
                className="py-2 mb-2 px-4 bg-transparent border-b-2 border-black placeholder-black placeholder-opacity-70 focus:outline-none focus:scale-105 transition transform duration-100 ease-in-out w-full"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rahul_k@gmail.com"
              />
              <button
                type="submit"
                className="bg-black mt-2 text-white font-bold py-2 px-4 rounded-lg shadow-lg w-full"
              >
                Submit
              </button>
            </form>
          </div>
          <b className="text-lg my-4">Or</b>
          <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-4 w-full max-w-md">
            <form
              onSubmit={loginWithPass}
              className="flex flex-col justify-center items-center gap-2"
            >
              <h3 className="font-bold text-lg mb-2">Enter your Email</h3>
              <input
                className="py-2 mb-2 px-4 bg-transparent border-b-2 border-black placeholder-black placeholder-opacity-70 focus:outline-none focus:scale-105 transition transform duration-100 ease-in-out w-full"
                type="email"
                placeholder="rahulk@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3 className="font-bold text-lg mb-2">Enter your Password</h3>
              <input
                className="py-2 mb-2 px-4 bg-transparent border-b-2 border-black placeholder-black placeholder-opacity-70 focus:outline-none focus:scale-105 transition transform duration-100 ease-in-out w-full"
                type="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>
                Don&apos;t have an account,{" "}
                <Link to={"gallery/signuppage/"}>
                  <b>
                    <u>SIGN UP</u>
                  </b>
                </Link>
              </p>
              <button
                className="bg-black mt-2 text-white font-bold py-2 px-4 rounded-lg shadow-lg w-full"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
