import '../App/App.css';
import zapIcon from '../../assets/icons/zapper.svg';
import ethscanIcon from '../../assets/icons/etherscan.svg';
import coingeckoIcon from '../../assets/icons/coingecko.svg';
import twitterLogo from '../../assets/twitter-logo.svg';
import githubLogo from '../../assets/github-mark.svg';
import heartLogo from '../../assets/icons/heart.svg';

const ZAPPER_LINK = `https://docs.zapper.fi/zapper-api/api-getting-started`;
const ETHERSCAN_LINK = `https://etherscan.io/apis`;
const COINGECKO_LINK = `https://www.coingecko.com/en/api`;
const TWITTER_LINK = `https://twitter.com/0xmigi`;
const GITHUB_LINK = `https://github.com/0xmigi`;
const DONATE_LINK = `https://etherscan.io/address/0x2b3Ca2178e0dF323f413a8402eEF04Df8E5b8e3C`

export default function Footer() {

    

    return (
        <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-text">
                        <a
                        href={ZAPPER_LINK}
                        target={zapIcon}
                        rel="noreferrer"
                        >
                            {<img href={ZAPPER_LINK} alt="Zapper Logo" className="zapper-logo" src={zapIcon} />}
                        </a>
                    </div>
                    <div className="footer-text">
                        <a
                        href={ETHERSCAN_LINK}
                        target={ethscanIcon}
                        rel="noreferrer"
                        >
                            {<img alt="Etherscan Logo" className="zapper-logo" src={ethscanIcon} />}
                        </a>
                    </div>
                    <div className="footer-text">
                        <a
                        href={COINGECKO_LINK}
                        target={coingeckoIcon}
                        rel="noreferrer"
                        >
                            {<img alt="Coingecko Logo" className="zapper-logo" src={coingeckoIcon} />}
                        </a>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-text">
                        <div className="f-text">
                        any feedback pls DM 
                        </div>
                    </div>
                    <div className="footer-text">
                        <a
                        href={TWITTER_LINK}
                        target={twitterLogo}
                        rel="noreferrer"
                        >
                            {<img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />}
                        </a>
                    </div>
                    <div className="footer-text">
                        <a
                        href={GITHUB_LINK}
                        target={githubLogo}
                        rel="noreferrer"
                        >
                            {<img alt="Github Logo" className="github-logo" src={githubLogo} />} 
                        </a>
                    </div>
                    <div className="footer-text">
                        <a
                        href={DONATE_LINK}
                        target={heartLogo}
                        rel="noreferrer"
                        >
                            {<img alt="Donate Logo" className="twitter-logo" src={heartLogo} />}
                        </a>
                    </div>
                </div>
        </div>
    );
}
