import Image from "next/image";
import headerStyles from "./header.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function Header() {
  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.header}>
        <div className={headerStyles.desc}>
          <h1 className={utilStyles.heading2Xl}>Perfection</h1>
          <h6 className={utilStyles.headingLg}>to the finest details</h6>
          <div className={headerStyles.cards}>
            <button>explore more</button>
            <button>Book now</button>
          </div>
        </div>
        <div className={headerStyles.image}>
          <Image
            priority
            src="/images/prince-akachi-6NhEFn3aqjc-unsplash.jpg"
            className={headerStyles.img}
            height={400}
            width={340}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
