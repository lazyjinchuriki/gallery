import { useUser } from "@supabase/auth-helpers-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const cdnUrl =
  "https://chjdddjpezbmgdjbfigk.supabase.co/storage/v1/object/public/images/";

const GalleryPage = () => {
  const user = useUser();
  const navigate = useNavigate();
  const supabase = useSupabaseClient();
  const [images, setImages] = useState([]);
  console.log(images);
  let photos = images.map((image) => {
    return { src: cdnUrl + user.id + "/" + image.name };
  });
  console.log(photos);

  const signout = async () => {
    const { error } = await supabase.auth.signOut();
    navigate("/gallery/");
    if (error) {
      alert(error.message);
      console.log(error);
      return;
    }
  };
  // const email = user.email.split("@")[0].toUpperCase();
  // const name = user.user_metadata.name;

  const uploadImage = async (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    if (!file) return;
    const { data, error } = await supabase.storage
      .from("images")
      .upload(user.id + "/" + uuidv4(), file);

    if (data) {
      getImages();
      return;
    }
    if (error) {
      alert(error.message);
      console.log(error);
      return;
    }
  };
  useEffect(() => {
    if (user) {
      getImages();
    }
  }, [user]);

  const getImages = async () => {
    const { data, error } = await supabase.storage
      .from("images")
      .list(user?.id + "/", {
        limit: 100,
        offset: 0,
        sortBy: {
          column: "created_at",
          order: "desc",
        },
      });
    if (data !== null) {
      setImages(data);
      return;
    }
    if (error) {
      alert(error.message);
      console.log(error);
      return;
    }
  };

  const deleteImage = async (name) => {
    const { data, error } = await supabase.storage
      .from("images")
      .remove([user.id + "/" + name]);
    if (data) {
      getImages();
      return;
    }
    if (error) {
      alert(error.message);
      console.log(error);
      return;
    }
  };
  return (
    <>
      <nav className="flex justify-between items-center p-2">
        <h3 className="text-xl text-gray-700">
          Hiya!! <b>{user?.name || user?.email.split("@")[0].toUpperCase()}</b>
        </h3>
        <button
          onClick={() => signout()}
          className="bg-black  text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
      </nav>
      <main>
        <h1 className="text-4xl font-bold text-center">Gallery</h1>
        <div className="flex justify-center pt-2">
          <input
            className="border-2 w-80 border-gray-300 bg-white text-gray-500 py-2 px-4 rounded-lg shadow-lg"
            type="file"
            required
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => uploadImage(e)}
          />
        </div>
        <div className="flex flex-wrap justify-center">
          {images.map((image, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col justify-center items-center p-1 relative hover:scale-105 transition transform duration-200 ease-in-out"
              >
                <img
                  src={cdnUrl + user.id + "/" + image.name}
                  alt="image"
                  className="m-1 w-64  h-64 object-cover rounded-lg shadow-lg "
                />
                <button
                  onClick={() => deleteImage(image.name)}
                  className="absolute top-3 right-3 text-white bg-red-500 p-2 rounded-3xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default GalleryPage;
