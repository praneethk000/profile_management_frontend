// import ProfileCard from "./components/ProfileCard";
// import { getAllProfiles } from "./services/profileService";

// export default async function Home() {
//   const profiles = await getAllProfiles();
//   console.log(profiles);

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
"use client";

import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import { getAllProfiles } from "./services/profileService";

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const data = await getAllProfiles();
        console.log("Profiles:", data);
        setProfiles(data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "32px" }} className="bg-white text-black">
        <h1 className="text-2xl font-semibold mb-5">All Profiles</h1>
        <p>Loading profiles...</p>
      </div>
    );
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
