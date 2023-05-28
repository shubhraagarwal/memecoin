import { FunctionComponent } from "react";
import styles from "./Home.module.css";
const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <div className={styles.nav}>
        <img className={styles.logoIcon} alt="" src="/Logo.png" />

        <div className={styles.buttonContainer}>
          <a
            style={{
              textDecoration: "none",
              color: "black",
            }}
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x0f53dd5ed8eb4d2f58cfe6f81ab5815392b283c3"
          >
            <div className={styles.button}>
              <b className={styles.viewDextools}>View Dextools</b>
            </div>
          </a>
          <a
            href="https://t.me/looneyportal"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div className={styles.button}>
              <b className={styles.joinTelegram}>JOIN TELEGRAM</b>
            </div>
          </a>
          <a
            href="https://twitter.com/golooneygo"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div className={styles.button}>
              <b className={styles.joinTelegram}>TWITTER</b>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <img className={styles.logoImage} alt="" src="/image.png" />
      </div>
      <div className={styles.ratingContainer}>
        <div className={styles.one}>
          <div className={styles.paragraphContainer}>
            <div className={styles.cryptoTwitter}>CRYPTO TWITTER</div>
            <div className={styles.iRunIt}>I RUN IT</div>
          </div>
          <div className={styles.buttonContainer1}>
            <div className={styles.button2}>
              <b className={styles.bestOfTheContainer}>
                <span className={styles.bestOfTheContainer1}>
                  <p className={styles.bestOf}>BEST OF</p>
                  <p className={styles.bestOf}>THE BEST</p>
                </span>
              </b>
              <div className={styles.buyBottomsContainer}>
                <span className={styles.bestOfTheContainer1}>
                  <p className={styles.bestOf}>BUY BOTTOMS , SELL TOPS</p>
                  <p className={styles.bestOf}>DEVS ARE MASTERCLASS</p>
                </span>
              </div>
            </div>
            <div className={styles.textInput}>
              <img className={styles.buttonIcon} alt="" src="/Button.png" />
            </div>
          </div>
        </div>

        <div className={styles.three}>
          <div className={styles.horizontalContainer}>
            <div className={styles.paragraphContainer4}>
              <b>
                NEW <span className={styles.richestMan}>RICHEST MAN</span> IN
                THE WORLD
              </b>
            </div>
            <div className={styles.paragraphContainer5}>
              <b className={styles.hare}>
                <span className={styles.looney}>LOONEY</span> HARE
              </b>
            </div>
            <b className={styles.founderOfLooney}>FOUNDER OF $LOONEY</b>
          </div>
          <div className={styles.tooltip}>
            <span className={styles.tooltiptext} id="myTooltip">
              Click to copy
            </span>
            <div
              onClick={() =>
                navigator.clipboard.writeText(
                  "0x3d714060eC329700D1bE724036040537c565eA08"
                )
              }
              className={styles.contractAddress0x638af6905Wrapper}
            >
              <div className={styles.contractAddress}>
                Contract Address : 0x3d714060eC329700D1bE724036040537c565eA08
              </div>
            </div>
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.paragraphContainer1}>
            <div className={styles.dontWasteMyContainer}>
              <span className={styles.bestOfTheContainer1}>
                <p className={styles.bestOf}>DON'T WASTE</p>
                <p className={styles.bestOf}>MY TIME</p>
              </span>
            </div>
            <div className={styles.whalesOnly}>WHALES ONLY</div>
          </div>
          <div className={styles.paragraphContainer2}>
            <div className={styles.priceNotA}>PRICE NOT A</div>
            <div className={styles.factor}>FACTOR</div>
            <div className={styles.iMakePrice}>I MAKE PRICE</div>
          </div>
          <div className={styles.paragraphContainer3}>
            <b className={styles.goLooneyGo}>GO LOONEY GO</b>
            <div className={styles.x20x50x}>10x 20x 50x 100x 1000x</div>
          </div>
        </div>
      </div>
      <div className={styles.hello}>
        <b>
          NEW <span className={styles.richestMan}>RICHEST MAN</span> IN THE
          WORLD
        </b>
        <div className={styles.hello1}>
          <b className={styles.hare1}>
            <span className={styles.richestMan}>LOONEY</span> HARE
          </b>
          <p className={styles.richestMan}>FOUNDER OF $LOONEY</p>
          <div className={styles.tooltip}>
            <span className={styles.tooltiptext} id="myTooltip">
              Click to copy
            </span>
            <div
              onClick={() =>
                navigator.clipboard.writeText(
                  "0x3d714060eC329700D1bE724036040537c565eA08"
                )
              }
              className={styles.wrapper}
            >
              <div className={styles.contractAddress1}>
                Contract Address : <br />{" "}
                0x3d714060eC329700D1bE724036040537c565eA08
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
