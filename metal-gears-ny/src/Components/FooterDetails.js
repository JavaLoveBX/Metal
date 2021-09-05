import "./FooterDetails.css";
import Logo from "./Images/PV_Logo.png"
function FooterDetails() {
  return (
    <div>
      <footer className="footer">
        {/* <div className="footer-brand" > <img src={Logo} alt="logo"></img></div> */}
        <div className="footer-links">
       
            <a className="link-name" href="https://metalgearny.com" target="_blank" rel="noreferrer" >Nigel Franklin</a>
            Address

        </div>
        <div>
          <span> &copy; {new Date().getFullYear()} MetalGearNY.com </span>
        </div>
      </footer>
    </div>
  );
}
export default FooterDetails;