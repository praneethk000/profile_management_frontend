
'use client'
import Link from "next/link";

export default function ProfileCard({ profile }) {
    return (
        <Link href={`/profiles/${profile.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{
                background: "linear-gradient(to bottom right, #f5a623, #ff9800)",
                borderRadius: "15px",
                padding: "16px",
                margin: "0 10px 20px 10px",
                cursor: "pointer",
                transition: "0.2s",
                display: "inline-block",
                width: "250px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}
                onMouseOver={e => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
            >
                <img src={profile.profilePic} alt={profile.name} style={{ borderRadius: "50%", width: "100px", height: "100px", display: "block", margin: "0 auto" }} />
                <h2 style={{ color: "#333", textAlign: "center" }}>{profile.name}</h2>
                <p style={{ color: "#666", textAlign: "center" }}>{profile.sex} | {profile.age} | {profile.pronouns}</p>
                {profile.isFeatured && <span style={{ background: "#e91e63", color: "white", padding: "2px 8px", borderRadius: "10px", display: "inline-block", marginTop: "5px" }}>TD</span>}
            </div>
        </Link>
    );
}