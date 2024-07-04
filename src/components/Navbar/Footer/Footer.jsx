 
 import logo_dark from'../../../assets/Media/logo_light.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#020043] text-white p-10">
  <aside>
    <img src={logo_dark} alt="" />
    <p>
    123 Main Street Anytown, USA <br />Postal Code: 12345 <br /> <br />

Support: support@oyolloo.com <br />
(Available : 10:00am to 07:00pm)

     
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Home
    </h6>
    <a className="link link-hover">About us

    </a>
    <a className="link link-hover">Success Page
    <a className="link link-hover">Terms and condition</a>
    </a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;