import Profile from "@/app/components/Profile";
import { getProfileById } from "../../services/profileService";;


export default async function ProfileDetailPage({ params }) {
    const profile = await getProfileById(params.id);

    if (!profile) {
        return <p>Profile not found</p>;
    }

    return (
        <div className="p-8">
            <Profile profile={profile} />
        </div>
    );
}
