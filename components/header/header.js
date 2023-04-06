import Image from "next/image";
import headerStyles from "./header.module.css";
import utilStyles from "../../styles/utils.module.css";
import {FaStar} from "react-icons/fa";

export default function Header() {
  // var myIndex = 0;
  // carousel();

  // function carousel() {
  //   var i;
  //   var x = document.querySelectorAll("#mySlides");
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";
  //   }
  //   myIndex++;
  //   if (myIndex > x.length) {
  //     myIndex = 1;
  //   }
  //   x[myIndex - 1].style.display = "block";
  //   setTimeout(carousel, 4000);
  // }
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
          <p><FaStar/> Your Style <FaStar/></p>
          <h1 className={headerStyles.display_container_jumbo}>DEFINES</h1>
          <div className={headerStyles.display_container_desc}>
            <div>
              <hr className={headerStyles.display_container_line} />
              <hr className={headerStyles.display_container_line} />
            </div>
            <b>WHO YOU ARE</b>
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
            <b>STATEMENT</b>
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
          <p><FaStar/> suited to <FaStar/></p>
          <h1 className={headerStyles.display_container_jumbo}>PERFECTION</h1>
          <div className={headerStyles.display_container_desc}>
            <div>
              <hr className={headerStyles.display_container_line} />
              <hr className={headerStyles.display_container_line} />
            </div>
            <b>TO THE FINEST DETAILS</b>
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
            <b>WHO YOU ARE</b>
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
