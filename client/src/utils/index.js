// export const loadBingMap = () => {
//   const existingScript = document.getElementById("bingMaps");
//   if (!existingScript) {
//     const script = document.createElement("script");
//     script.src =
//       "http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=" +
//       import.meta.env.VITE_MAPS_API;
//     script.id = "bingMaps";
//     script.type = "text/javascript";
//     document.body.appendChild(script);
//     script.onload = () => {
//       console.log("Script loaded");
//     };
//   }
// };

export const publicNavLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "#features",
    title: "Features",
  },
  {
    id: "login",
    title: "Login",
  },
  {
    id: "signup",
    title: "Signup",
  },
];

export const protectedNavLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "research",
    title: "Research",
  },
  {
    id: "map",
    title: "Nearby Doctors",
  },
  {
    id: "profile",
    title: "Profile",
  },
  {
    id: "logout",
    title: "Logout",
  },
];

export const mapCategoryOptions = [
  {
    value: "healthcare.hospital",
    id: "healthcare.hospital",
    label: "Hospitals",
  },
  {
    value: "healthcare.clinic_or_praxis",
    id: "healthcare.clinic_or_praxis",
    label: "Cardiologists",
  },
];

export const backendUrl = "http://127.0.0.1:8000";
