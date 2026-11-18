import brandLogo from "./assets/brand-logo.png";
import paperTearTop from "./assets/paper-tear-top.svg";
import paperTearBottom from "./assets/paper-tear-bottom.svg";
import Footer from "./components/Footer";
import LinkButton from "./components/LinkButton";
import { linkItems } from "./config/links";

export default function App() {
    return (
        <div className="bio-page">
            <img
                className="paper-tear paper-tear--top"
                src={paperTearTop}
                alt=""
                aria-hidden="true"
            />
            <img
                className="paper-tear paper-tear--bottom"
                src={paperTearBottom}
                alt=""
                aria-hidden="true"
            />

            <header className="brand-space mt-2">
                <h1 className="sr-only">
                    Sate Taichan Bang H3R — Official Links
                </h1>
                <img className="brand-logo" src={brandLogo} alt="" />
            </header>

            <div className="bio-page__content">
                <main
                    className="links gap-2.5"
                    aria-label="Link resmi Sate Taichan Bang H3R"
                >
                    {linkItems.map((item) => (
                        <LinkButton key={item.label} {...item} />
                    ))}
                </main>
                <p className="tagline">#TaichanTerbaikNo.2</p>

                <Footer />
            </div>
        </div>
    );
}
