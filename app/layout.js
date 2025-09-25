import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <div className="bg-gradient-to-r from-yellow-500 to-red-500 h-20 p-5 text-white">
          <div>
            <img src="https://d30mzt1bxg5llt.cloudfront.net/public/uploads/images/_signatoryLogo/TAPMI-LOGO.jpg" alt="Logo" className="h-10 float-left" />
          </div>
          <span>
            <div className="justify-between">
              <img src="https://www.pikpng.com/pngl/b/404-4044029_aacsb-logo-accredite-aacsb-accreditation-png-clipart.png" alt="Logo" className="h-10 float-right ml-5" />
              <img src="https://wp.logos-download.com/wp-content/uploads/2024/09/Principles_for_Responsible_Management_Education_PRME_Logo.png" alt="Logo" className="h-10 float-right" />
            </div>
          </span>
        </div>
        {children}
      </body>
    </html>
  );
}
