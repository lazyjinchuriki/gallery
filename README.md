# Gallery App
[![Visit My Website](https://img.shields.io/badge/Visit%20My-Website-blue?style=for-the-badge&logo=arrow-right&logoColor=white)](https://lazyjinchuriki.github.io/gallery/)

This is a web-based gallery project built using React.js and Supabase as Backend. The project allows users to create accounts, log in securely, upload their images, and manage their gallery. It includes features for user authentication and authorization to ensure privacy and security, all powered by Supabase.

## Tech Stacks

![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![Supabase](https://img.shields.io/badge/-Supabase-4CAF50?style=for-the-badge&logo=supabase&logoColor=white) ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Features

- User registration and authentication with Supabase.
- Secure user login and logout functionality.
- User-specific image gallery.
- Image upload and deletion for authenticated users.
- Responsive design for mobile, tablet, and desktop.
- User-friendly interface for managing images.
- Supabase integration for backend services.

## Screenshots
Here are some screenshots of Gallery in action:

| Gallery                        |
|---------------------------------|
| ![Gallery screenshot](/screenshots/gallery.png) |

| Login Page               | Signup Page                |
|--------------------------------|--------------------------------|
| ![Login Page screenshot](/screenshots/login.png) | ![Signup screenshot](/screenshots/signup.png) |


## Installation

1. Clone the repository:

```bash
git clone https://github.com/lazyjinchuriki/gallery.git
```

2. Install dependencies:

```bash
cd gallery
npm install
```

3. Set up Supabase:

   - Create a Supabase project on the [Supabase Dashboard](https://app.supabase.io/).
   - Configure authentication and storage in your Supabase project settings.
   - Copy your Supabase API URL and public API key.

4. Create a `.env.local` file in the project root and add your Supabase configuration:

```env
VITE_Project_URL=your-supabase-api-url
VITE_Project_URL=your-supabase-public-api-key
```

5. Start the development server:

```bash
npm run dev
```


## Usage

After running the development server, you can view the app at http://localhost:3000/

## Customization

The app Pages can be customized by editing the `src/components/` folder. You will find all the components in that folder.

## Supabase Services

This project uses Supabase services for:

- Authentication: For user registration, login, and access control.
- Storage: For storing user-uploaded images securely.

## Contributions

Contributions to the project are welcome. Please create an issue or submit a pull request if you would like to contribute.

## Contact

If you have any questions or concerns, you can contact the author of this project at [rahulkhushalani@proton.me](mailto:rahulkhushalani@proton.me).

### Donations

If you found Gallery useful, consider buying me a coffee!

<a href="https://www.buymeacoffee.com/lazyjinchuriki">
  <img src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg" width="150" height="50">
</a>

## Social

If you're not coding right now, check out my socials:

[![Instagram](https://img.shields.io/badge/Instagram-%40amundaneguy-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/amundaneguy/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rahul%20Khushalani-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rahul-khushalani-77ab21201/)
