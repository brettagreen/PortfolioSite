import '../css/Home.css';
import '../css/Footer.css';
import { useNavigate } from 'react-router-dom';

function Home() {

    const nav = useNavigate();

    function showResume() {
        nav('/resume');
    }

	return (
		<div id="homeid">

            <div id="desktop">
                <aside id="menu">
                    <a href="https://tigerlilly-frontend.onrender.com" target="_blank">The Tigerlilly Online</a><br />
                    <a href="https://copiarts-frontend.onrender.com" target="_blank">Cornucopia</a>
                    <hr />
                    <div id="show" onClick={showResume}>view resume</div>
                    <a id="download" href="/docs/resume.odt" >download resume</a><br />
                    <a href="https://github.com/brettagreen">github</a>
                </aside>

                <section>
                    <img id="picture" src="/images/me.jpg" alt="your glorious admin" />
                </section>
            </div>

            <div id="mobile">
                <section>
                    <img id="picture" src="/images/me.jpg" alt="your glorious admin" />
                </section>

                <aside id="menu">
                    <a href="https://thetigerlilly.online" target="_blank">The Tigerlilly Online</a><br />
                    <a href="https://copiarts-frontend.onrender.com" target="_blank">Cornucopia</a>
                    <hr />
                    <div id="show" onClick={showResume}>view resume</div>
                    <a id="download" href="/docs/resume.odt" >download resume</a><br />
                    <a href="https://github.com/brettagreen">github</a>
                </aside>
            </div>

            <footer id="footer">
                <div>
                    <address className="FooterAddress">
                        Brett Green © 2025<br />
                        email: <a id="email" href="mailto:contact@brettalangreen@proton.me">brettalangreen (at) proton (dot) me</a><br />
                    </address>
                </div>
            </footer>

		</div>
	)
}

export default Home;