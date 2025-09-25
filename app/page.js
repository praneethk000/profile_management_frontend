// import ProfileCard from "./components/ProfileCard";
// import { getAllProfiles } from "./services/profileService";

// export default async function Home() {
//   const profiles = await getAllProfiles();

//   return (
//     <div style={{ padding: "32px" }} className="bg-white text-black">
//       <h1 className="text-2xl font-semibold mb-5">All Profiles</h1>
//       {profiles.length === 0 ? (
//         <p>No profiles found.</p>
//       ) : (
//         profiles.map((profile) => (
//           <ProfileCard key={profile.id} profile={profile} />
//         ))
//       )}
//     </div>
//   );
// }

import ProfileCard from "./components/ProfileCard";
import { getAllProfiles } from "./services/profileService";

export default async function Home() {
  let profiles = [];
  try {
    profiles = await getAllProfiles();
  } catch (error) {
    console.error("SSR fetch failed:", error.message);
  }

  return (
    <div style={{ padding: "32px" }} className="bg-white text-black">
      <h1 className="text-2xl font-semibold mb-5">All Profiles</h1>
      {profiles.length === 0 ? (
        <p>No profiles found.</p>
      ) : (
        profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))
      )}
    </div>
  );
}
