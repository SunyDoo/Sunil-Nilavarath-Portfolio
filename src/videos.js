const youtube = {
  videos: [
    {
      id: 1,
      name: "RUMC Patient Portal",
      link: "https://www.youtube.com/embed/s11rA9Hou4s",
      github:
        "https://github.com/SunyDoo/flatiron-capstone-rumc-patient-portal",
      site: "https://rumc-patient-portal.herokuapp.com/",
      bullets: [
        `Implemented authentication/authorization, including password protection, to allow users to log in to the site with a secure password and stay logged in via user ID in the session hash`,
        `Following REST conventions, ran full CRUD on appointments being created`,
        `Utilized the Mapbox GL API to display an interactive map of all 12 doctor’s offices affiliated with the hospital`,
      ],
    },
    {
      id: 2,
      name: "Sunil's BlogSpot",
      link: "https://www.youtube.com/embed/W7XaT3JDzz0",
      github: "https://github.com/SunyDoo/phase-4-final-project",
      site: "https://sunils-blogspot.herokuapp.com/",
      bullets: [
        `Implemented password protection and authentication along with validations and error handling when signing up for an account`,
        `Used a Rails API backend running full CRUD with a React frontend to create a fully functioning web application `,
        `Implemented React Router to run three different client-side routes using a nav bar to allow users to navigate between routes`,
      ],
    },
    {
      id: 3,
      name: "Sunil's Movie Reviews",
      link: "https://www.youtube.com/embed/0ruEEsFAD3c",
      github: "https://github.com/SunyDoo/phase-3-frontend",
      bullets: [
        `Used a Sinatra-based backend running full CRUD with a React frontend to create a fully functioning web application `,
        `Implemented React Router to run four client-side routes using a nav bar to allow users to navigate between routes`,
      ],
    },
    {
      id: 4,
      name: "Sunil's Gym",
      link: "https://www.youtube.com/embed/hErkcaaHIC8",
      github: "https://github.com/SunyDoo/Phase2-Final-Project",
      bullets: [
        `Simple gym application where users can select exercises to add to their workout routine for the day`,
        `Users can sort through available exercises based on body part`,
      ],
    },
  ],
};
export default youtube;
