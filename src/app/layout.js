import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "../utils/BootstrapClient";
import "../styles/globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        {children}
      
      <BootstrapClient />
      </body>
    </html>
  );
}
