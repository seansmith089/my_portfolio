import "./certifications.css";

import ccna from "../../../images/cert_logos/cisco-png-logo-3779.png";
import security from "../../../images/cert_logos/SecurityPlus Logo Certified CE.png";
import server from "../../../images/cert_logos/microsoft.png";

function Certifications() {
    
  return (
    
    <div className="cert_wrapper">
      <h2>Certifications</h2>
      <div className="cert_card">
        <div className="certs_container">
          <p>
            I have always been driven to develop my technical skills, and as a
            result have attained a number of industry recognised certifications.
          </p>
          <div className="cert_skill_wrapper">
            <img src={ccna} alt="ccna logo" className="cert_logo" />
            <div className="cert_text_wrapper">
              <h3>Computer Networking</h3>
              <p className="cert_description">Cisco Certified Networking Assiciate.</p>
            </div>
          </div>
          <div className="cert_skill_wrapper">
            <img src={security} alt="ccna logo" className="cert_logo" />
            <div className="cert_text_wrapper">
              <h3>Cyber Security</h3>
              <p className="cert_description">CompTIA Cyber Security+ Certified </p>
            </div>
          </div>

          <div className="cert_skill_wrapper">
            <img src={server} alt="ccna logo" className="cert_logo" />
            <div className="cert_text_wrapper">
              <h3>Server Administration</h3>
              <p className="cert_description">Certified Windows Server 2016 Administrator.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
