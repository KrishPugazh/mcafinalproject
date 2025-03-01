import "../styles/home.css";
import TcsLogo from "../assets/logo/TcsLogo.png"
import ctsLogo from "../assets/logo/ctsLogo.png"
import infosys from "../assets/logo/infosysLogo.png"
import wipro from "../assets/logo/wiproLogo.png"
import capegemini from "../assets/logo/capgeminiLogo.png"


const mncCompanies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "TCS", logo: TcsLogo }, // :contentReference[oaicite:0]{index=0}
    { name: "Infosys", logo: infosys }, // :contentReference[oaicite:1]{index=1}
    { name: "Cognizant", logo: ctsLogo },
    { name: "Wipro", logo: wipro }, // :contentReference[oaicite:2]{index=2}
    { name: "Capgemini", logo: capegemini }
];


const Home = () => {
    return (
        <div className="home-container">
            {/* Header Section */}
            <header className="home-header">
                <h1>KUMARAGURU</h1>
                <p>CHARACTER IS LIFE</p>
            </header>

            {/* MNC Logos Section */}
            <div className="mnc-logos">
                {mncCompanies.map((company, index) => (
                    <div key={index} className="mnc-logo">
                        <img src={company.logo} alt={company.name} />
                    </div>
                ))}
            </div>
           

            <div className="home-content">
                <div className="home-content-a">
                    <h1>College of Technology</h1>
                    <p>Kumaraguru College of Technology (KCT), Coimbatore is a private Engineering College started in 1984 under the auspices of Ramanandha Adigalar Foundation, a charitable educational trust of Sakthi Group. Situated in a sprawling 156-acre campus in the IT corridor of Coimbatore, KCT is an autonomous institution affiliated to the Anna University, Chennai and approved by All India Council for Technical Education (AICTE). KCT was granted Five Year Accreditation status in its first cycle of accreditation. Later, in the second cycle, with a CGPA of 3.21 on 4.0 scale, A Grade was awarded which was valid till 02 December 2021. In July 2022, following the NAAC Peer Team visit for third cycle of accreditation, KCT has been awarded A++ Grade, the highest grade awarded to institutions by NAAC with KCT securing a CGPA of 3.62 on a 4 – point scale. And all the eligible UG programs have also been accredited by National Board of Accreditation (NBA).
The able guidance and patronage of Arutselvar Dr. N.Mahalingam, Founder, Sakthi Group along with the efficient administration of Dr.B.K.Krishnaraj Vanavarayar, Chairman, the resourcefulness of Sri. M.Balasubramaniam, Correspondent and the foresightedness of Sri. Shankar Vanavarayar, Joint Correspondent have equipped the college with excellent facilities such as spacious classrooms, seminar halls, well-equipped laboratories, excellent sporting amenities, dedicated high-speed internet connectivity (broadband) and well-qualified faculty.</p>
                </div>
                <div className="home-content-b">
                    {/* Announcements Section */}
                    <section className="announcements">
                        <h2>Latest Announcements</h2>
                        <ul>
                            <li>📢 Semester exams start next week.</li>
                            <li>🎉 Workshop on AI & ML - Register now!</li>
                            <li>📌 Placement drive for final-year students.</li>
                        </ul>
                    </section>
                </div>
            </div>


            
            <div className="home-content">
                <div className="home-content-a">
                    <h1>College of Liberal Arts and Science</h1>
                    <p>
                    A Liberal Arts Education is a pathway to broaden the mind to think critically and analyze information effectively. This educational design trains the mind how to think, rather than what to think, and collaborate within and across all disciplines that the individual may encounter during the lifetime.
                    </p>
                </div>
                <div className="home-content-b">
                    {/* Announcements Section */}
                    <section className="announcements">
                        <h2>Latest Announcements</h2>
                        <ul>
                            <li>📢 Semester exams start next week.</li>
                            <li>🎉 Workshop on AI & ML - Register now!</li>
                            <li>📌 Placement drive for final-year students.</li>
                        </ul>
                    </section>
                </div>
            </div>

            

            <footer className="footer">
                <div className="footer-container">
                   
                    {/* <div className="footer-logo">
                        <h2>Footer Logo</h2>
                    </div> */}

                  
                    <div className="footer-section">
                        <h3>Enquiries</h3>
                        <p><strong>Admissions</strong></p>
                        <p>📞 Mobile: <a href="tel:+919994300600">+91 99 9430 0600</a></p>
                        <p>✉ E-mail: <a href="mailto:admissions@kumaraguru.edu.in">admissions@kumaraguru.edu.in</a></p>
                    </div>

                    <div className="footer-section">
                        <h3>General</h3>
                        <p>✉ E-mail: <a href="mailto:info@kct.ac.in">info@kct.ac.in</a></p>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Details</h3>
                        <p>🏛 College: 0422-2661100</p>
                        <p>📠 Fax: 0422-2669406</p>
                        <p>📞 Placement: 0422-2661515</p>
                        <p>🎓 Principal: 0422-2661121</p>
                    </div>

                    <div className="footer-section">
                        <h3>Address</h3>
                        <p>Kumaraguru Campus, Saravanampatti,</p>
                        <p>Chinnavedampatti (Post),</p>
                        <p>Coimbatore-641049, Tamil Nadu.</p>
                    </div>
                </div>
            </footer>



        </div>
    );
};

export default Home;
