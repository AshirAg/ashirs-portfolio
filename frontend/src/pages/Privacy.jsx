import styles from "./css/Privacy.module.css";
import { Link } from 'react-router-dom';


function Privacy(){

    const lastUpdated = "Aug 2025";

    return(
        <div className="section">
            <div className={`container ${styles.container}`}>
                <h1>Privacy Policy</h1>

                <p className={styles.date}>Last Updated: {lastUpdated}</p>

                <p className={styles.normal}>Hey! Thanks for visiting my portfolio. Since you’re trusting me with some of your details, here’s how I handle them (feel free to skim, scroll, or just pretend you read it).</p>
                <h2>What I Collect</h2>
                <ul>
                    <li>Name, email & your message (only if you use my <Link to="/contact">contact form</Link>).</li>
                    <li>Basic page analytics from Vercel (things like page views, not what you had for lunch).</li>
                </ul>
                <h2>Why I Collect It</h2>
                <ul>
                    <li>To actually reply to you (because ghosting isn’t my style).</li>
                    <li>To respond to your questions, feedback, or random thoughts you decide to drop in.</li>
                    <li>To keep an eye on how my portfolio is doing (page analytics help me figure out if anyone’s actually visiting).</li>
                </ul>
                <h2>What I Don’t</h2>
                <ul>
                    <li>Sell your info to random strangers on the internet.</li>
                    <li>Use your email to spam you with “crypto investment opportunities”.</li>
                    <li>Stalk you across the web. (I’m more focused on code than on spying.)</li>
                </ul>
                <h2>Cookies & Tracking</h2>
                <ul>
                    <li>I don’t personally plant cookies or track you like a spy (promise!).</li>
                    <li>Vercel may collect general analytics (like page views), which helps me see if people are actually visiting — not counting how many coffee cups you’ve had.</li>
                    <li>No personal info from the contact form is included in these analytics.</li>
                </ul>
                <h2>Third-Party Services</h2>
                <ul>
                    <li>The portfolio may use services like Vercel to host and monitor the site.</li>
                    <li>These services may collect limited data for analytics or performance purposes — nothing personally identifiable unless you fill the contact form.</li>
                    <li>Basically, they’re like friendly neighbors keeping an eye on the site — not crawling the entire web.</li>
                </ul>
                <h2>Data Retention</h2>
                <ul>
                    <li>Your info stays with me — forever and ever, like a loyal sidekick.</li>
                    <li>But if you ask me to delete your info, I’ll happily do it — no grumbling, promise.</li>
                </ul>
                <h2>Respect & Responsibility</h2>
                <ul>
                    <li>I take your details seriously. They’re only used for the purposes above.</li>
                    <li>Please don’t misuse this website or the contact form — no spamming, hacking, or sending me anything illegal or sketchy. Basically, play nice.</li>
                    <li>I won’t misuse your info either — your data is safe, private, and won’t be shared with anyone.</li>
                </ul>
                <h2>Updates To This Policy</h2>
                <ul>
                    <li>I might tweak this policy from time to time (like improving the page or humor itself).</li>
                    <li>Any major changes will be reflected here, so you can always check back — because who doesn’t love reading privacy policies for fun?</li>
                    <li>Policy last updated: <b>{lastUpdated}</b>.</li>
                </ul>
                <h2>Got Questions?</h2>
                <p>If you’ve got questions about this privacy policy, or if you want me to delete your info (totally fair), just reach out via the same <Link to="/contact">contact form</Link>. Ironically, yes, you’ll need to give me your email so I can reply.</p>
            </div>
        </div>
    )
}

export default Privacy;