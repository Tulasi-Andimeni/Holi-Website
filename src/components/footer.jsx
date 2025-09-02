import style from './compo.module.css';

const Footer = () => {
    return (
        <>
          
             <footer className={style.footer}>
                <div className= {style.footercontainer}>
                    <div className={style.footerlogo}>
                       <h2>COLORS</h2>
                       <div className={style.footercontact}>
                       <p>Contact Information</p>
                       <a href="#">Privacy Policy</a>
                    </div>
                    </div>

                    {/* <div className={style.footercontact}>
                       <p>Contact Information</p>
                       <a href="#">Privacy Policy</a>
                    </div> */}
                    <div className={style.footersitemap}>
                        <h3>Site Map</h3>
                        <ul>
                            <li><a href="#">My Business</a></li>
                            <li><a href="#">My Products</a></li>
                            <li><a href="#">My Services</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                    <div className={style.left}>
                        <div className={style.footersubscribe}>
                            <input type="email" placeholder="Email address" />
                            <button>Subscribe</button>
                        </div>
                        <div className={style.icon}>
                            <i className="fa-brands fa-instagram" ></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>
              
            </footer>         
        </>
    )
}
export default Footer;