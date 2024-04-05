import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const script = `
 
<script>
window.fbAsyncInit = function() {
  FB.init({
    appId      : '390554293943956',
    cookie     : true,
    xfbml      : true,
    version    : 'v19.0'
  });
    
  FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
</script> 
  
  `;
  return (
    <html lang="en">
      <body className={inter.className}>
        <meta
          name="google-signin-client_id"
          content="182460454773-57gavjd9r4neebg4io9f6e0rm4715tsd.apps.googleusercontent.com"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window["google_cbk"] = function () {
              console.log(arguments);
            };
        `,
          }}
        ></script>
        <script src="https://accounts.google.com/gsi/client" async></script>
        <div dangerouslySetInnerHTML={{ __html: script }} />
        <div data-test="data-test">{children}</div>
      </body>
    </html>
  );
}
