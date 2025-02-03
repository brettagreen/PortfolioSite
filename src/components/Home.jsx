import '../css/Home.css';
import '../css/Footer.css';

function Home() {

	return (
		<div id="homeid">

        <div id="desktop">
            <aside id="menu">
                <span>Work</span><br />
                <a href="https://thetigerlilly.online" target="_blank">The Tigerlilly Online</a><br />
                <a href="https://copiarts-frontend.onrender.com" target="_blank">Cornucopia</a>
                <hr />
                <a href="/resume">view resume</a><br />
                <a id="download" href="/public/docs/resume.odt" >download resume</a>
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
                <span>Work</span><br />
                <a href="https://thetigerlilly.online" target="_blank">The Tigerlilly Online</a><br />
                <a href="https://copiarts-frontend.onrender.com" target="_blank">Cornucopia</a>
                <hr />
                <a href="/resume">view resume</a><br />
                <a id="download" href="/public/docs/resume.odt" >download resume</a>
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