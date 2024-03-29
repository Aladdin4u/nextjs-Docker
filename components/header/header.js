import Image from "next/image";
import headerStyles from "./header.module.css";
import utilStyles from "../../styles/utils.module.css";
import {FaStar} from "react-icons/fa";

export default function Header() {
  return (
    <div className={headerStyles.container} id="mySlides">
      <div className={headerStyles.slider}>
      <div className={headerStyles.display_container}>
        <Image
          priority
          src="/images/osarugue-igbinoba-nlfOuHQlO7c-unsplash.jpg"
          className={headerStyles.img}
          height={400}
          width={340}
          alt=""
        />
        <div className={headerStyles.display_container_center}>
          <p className={headerStyles.animateTop}><FaStar/> Your Style <FaStar/></p>
          <h1 className={headerStyles.display_container_jumbo}>DEFINES</h1>
          <div className={headerStyles.display_container_desc}>
            <div>
              <hr className={headerStyles.display_container_line} />
              <hr className={headerStyles.display_container_line} />
            </div>
            <b className={headerStyles.b}>WHO YOU ARE</b>
            <div>
              <hr className={headerStyles.display_container_line} />
              <hr className={headerStyles.display_container_line} />
            </div>
          </div>
        </div>
      </div>
      <div className={headerStyles.display_container} id="mySlides">
        <Image
          priority
          src="/images/alexander-andrews-jNKv4QohAk0-unsplash.jpg"
          className={headerStyles.img}
          height={400}
          width={340}
          alt=""
        />
        <div className={headerStyles.display_container_center}>
          <p><FaStar/> Real Elegance is a <FaStar/></p>
          <h1 className={headerStyles.display_container_jumbo}>FASHION</h1>
          <div className={headerStyles.display_container_desc}>
            <div>
              <hr className={headerStyles.display_container_line} />
              <hr className={headerStyles.display_container_line} />
            </div>
            <b className={headerStyles.b}>STATEMENT</b>
            <div>
              <hr className={headerStyles.display_container_line} />
              <hr className={headerStyles.display_container_line} />
            </div>
          </div>
        </div>
      </div>
      <div className={headerStyles.display_container} id="mySlides">
        <Image
          priority
          src="/images/darling-arias-0tBvf_HJ34c-unsplash.jpg"
          className={headerStyles.img}
          height={400}
          width={340}
          alt=""
        />
        <div className={headerStyles.display_container_center}>
          <p className={headerStyles.animateTop}><FaStar/> suited to <FaStar/></p>
          <h1 className={headerStyles.display_container_jumbo}>PERFECTION</h1>
          <div className={headerStyles.display_container_desc}>
            <div>
              <hr className={headerStyles.display_container_line} />
              <hr className={headerStyles.display_container_line} />
            </div>
            <b className={headerStyles.b}>TO THE FINEST DETAILS</b>
            <div>
              <hr className={headerStyles.display_container_line} />
              <hr className={headerStyles.display_container_line} />
            </div>
          </div>
        </div>
      </div>
      <div className={headerStyles.display_container}>
        <Image
          priority
          src="/images/osarugue-igbinoba-nlfOuHQlO7c-unsplash.jpg"
          className={headerStyles.img}
          height={400}
          width={340}
          alt=""
        />
        <div className={headerStyles.display_container_center}>
          <p><FaStar/> Your Style <FaStar/></p>
          <h1 className={headerStyles.display_container_jumbo}>DEFINES</h1>
          <div className={headerStyles.display_container_desc}>
            <div>
              <hr className={headerStyles.display_container_line} />
              <hr className={headerStyles.display_container_line} />
            </div>
            <b className={headerStyles.b}>WHO YOU ARE</b>
            <div>
              <hr className={headerStyles.display_container_line} />
              <hr className={headerStyles.display_container_line} />
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}
