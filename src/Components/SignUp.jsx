import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const user = useUser();
  const supabase = useSupabaseClient();
  const signUp = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      user_metadata: { name: name },
    });
    navigate("/gallery/");
    if (error) {
      alert(error.message);
      console.log(error);
      return;
    } else {
      alert("Please check your email for the confirmation link.");
      console.log(data);
      return;
    }
  };
  return (
    <>
      <div className="flex items-center flex-col justify-center min-h-screen bg-gradient-to-r from-pink-500 to-blue-600">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 w-full max-w-md">
            <form
              onSubmit={signUp}
              className="flex flex-col items-center justify-center gap-2 "
            >
              <h3 className="text-lg font-bold mb-2">Enter your Email</h3>
              <input
                className="py-2 mb-2 px-4 bg-transparent border-b-2 border-black placeholder-black placeholder-opacity-70 focus:outline-none focus:scale-105 transition transform duration-100 ease-in-out"
                type="email"
                placeholder="rahulk@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3 className="text-lg font-bold mb-2">Enter your Password</h3>
              <input
                className="py-2 mb-2 px-4 bg-transparent border-b-2 border-black placeholder-black placeholder-opacity-70 focus:outline-none focus:scale-105 transition transform duration-100 ease-in-out"
                type="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
              <h3 className="text-lg font-bold mb-2">
                What should we call you.
              </h3>
              <input
                className="py-2 mb-2 px-4 bg-transparent border-b-2 border-black placeholder-black placeholder-opacity-70 focus:outline-none focus:scale-105 transition transform duration-100 ease-in-out"
                type="text"
                placeholder="Rahul Khushalani"
                onChange={(e) => setName(e.target.value)}
              />
              <p>
                Already have an account,{" "}
                <Link to={"gallery"}>
                  <b>
                    <u>LOG IN</u>
                  </b>
                </Link>
              </p>
              <button
                className="bg-black mt-2 text-white font-bold py-2 px-4 rounded-lg shadow-lg w-full"
                type="submit"
                {...(user && {
                  onClick: () => navigate("/gallery/gallerypage"),
                })}
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

export default SignUp;
