import Image from "next/image";
import Link from "next/link";
import Logo_white from "../public/assets/logo-white.png";

const Footer = () => {
  return (
    <div className="font-openSans px-5 md:px-16 bg-black lg:px-18">
    <section className=" grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:grid-cols-4 text-white pt-10 px-6 gap-6 w-full">
      <div className=" h-28 w-28 object-cover lg:row-span-3">
        <Image
          src={Logo_white}
          width={500}
          height={500}
          alt="Vijona-logo-white"
        />
      </div>

      <div className="flex flex-col font-light w-72">
        <div className="font-bold py-3">Engagement Channels</div>
        <Link href="/">
          <a className=" my-1">Ignite Experience</a>
        </Link>
        <Link href="/">
          <a className=" my-1">Incubator Hubs</a>
        </Link>
        <Link href="/">
          <a className=" my-1">Pathway Programs</a>
        </Link>
      </div>

      <div className="flex flex-col font-light w-72">
        <div className="font-bold py-3">Sitemap</div>
        <Link href="/">
          <a className=" my-1">Home</a>
        </Link>
        <Link href="/what-we-do">
          <a className=" my-1">What we do</a>
        </Link>
        <Link href="/events">
          <a className=" my-1">Events&amp;Stories</a>
        </Link>
        <Link href="/alunmi">
          <a className=" my-1">Alumni Community</a>
        </Link>
      </div>
      <div className="flex flex-col font-light w-72 h-auto">
        <div className="font-bold py-3">You can help shape the future</div>
        <div>
          through your donations and or your partnerships we can bring the
          dreams of every child to life
        </div>
        <div className=" flex flex-row mt-5">
          <div className="flex flex-row align-center justi">
            <Link href="/ask-how">
              <a className="w-max bg-vijyellow px-4 py-2 font-medium rounded-sm">
                Ask How
              </a>
            </Link>
          </div>

          <div className=" w-max bg-white px-5 py-2 ml-6 font-medium text-gray-900 rounded-sm">
            <Link href="/donate">
              <a>Donate</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col font-light w-72">
        <div className="font-bold py-3">Contacts</div>
        <div className=" my-1">info@vijona.com</div>
      </div>

      <div className="w-60 py-3 flex flex-row justify-between lg:justify-evenly lg:-mx-5">
        <div className="font-bold">follow me</div>
        <div className=" pt-1.5">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9736 1.64679C18.3461 1.91749 17.6632 2.11231 16.9598 2.18819C17.6901 1.75432 18.237 1.06887 18.4979 0.260458C17.8125 0.668131 17.0618 0.953998 16.2789 1.10538C15.9517 0.75557 15.5559 0.476897 15.1163 0.286723C14.6767 0.0965492 14.2026 -0.00104956 13.7236 8.51157e-06C11.7856 8.51157e-06 10.2271 1.57091 10.2271 3.49864C10.2271 3.76934 10.2599 4.04005 10.3132 4.3005C7.41133 4.14874 4.82325 2.76241 3.10264 0.639852C2.78913 1.17534 2.62484 1.78506 2.62686 2.40557C2.62686 3.61964 3.24415 4.69015 4.18545 5.31974C3.63073 5.29789 3.08899 5.14542 2.6043 4.87472V4.91778C2.6043 6.61788 3.80606 8.02677 5.40772 8.35079C5.10699 8.42891 4.79763 8.46887 4.48692 8.46974C4.25928 8.46974 4.04395 8.44718 3.82657 8.41642C4.26954 9.80274 5.55948 10.8097 7.09551 10.8425C5.89375 11.7838 4.38848 12.3375 2.75401 12.3375C2.46075 12.3375 2.19005 12.3273 1.90909 12.2944C3.45948 13.2891 5.29903 13.8633 7.28008 13.8633C13.7113 13.8633 17.2305 8.53536 17.2305 3.91085C17.2305 3.75909 17.2305 3.60733 17.2202 3.45558C17.9011 2.95724 18.4979 2.33995 18.9736 1.64679Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="pt-1">
          <svg
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="20px"
            height="20px"
          >
            <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
          </svg>
        </div>
        <div className="pt-1.5">
          <svg
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33333 5.33333V3.73333C5.33333 3.04 5.49333 2.66667 6.61333 2.66667H8V0H5.86667C3.2 0 2.13333 1.76 2.13333 3.73333V5.33333H0V8H2.13333V16H5.33333V8H7.68L8 5.33333H5.33333Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="">
          <svg
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="30px"
            height="30px"
          >
            <path d="M 23.857422 8.5 C 17.504717 8.5 11.602344 8.9526234 8.234375 9.65625 A 1.50015 1.50015 0 0 0 8.2128906 9.6621094 C 5.6754768 10.230693 3.2861897 12.048234 2.7832031 14.894531 A 1.50015 1.50015 0 0 0 2.78125 14.90625 C 2.394836 17.200265 2 20.190694 2 24.5 C 2 28.801151 2.3961903 31.712324 2.8847656 34.126953 C 3.4000756 36.889296 5.7342165 38.761817 8.3105469 39.337891 A 1.50015 1.50015 0 0 0 8.3476562 39.347656 C 11.86271 40.040284 17.598467 40.5 23.951172 40.5 C 30.303877 40.5 36.042686 40.04028 39.558594 39.347656 A 1.50015 1.50015 0 0 0 39.595703 39.337891 C 42.133117 38.769306 44.522404 36.951766 45.025391 34.105469 A 1.50015 1.50015 0 0 0 45.029297 34.083984 C 45.409789 31.743169 45.902812 28.755621 46 24.439453 A 1.50015 1.50015 0 0 0 46 24.40625 C 46 20.087697 45.50571 17.078675 45.023438 14.695312 C 44.512192 11.927074 42.175378 10.049478 39.595703 9.4726562 A 1.50015 1.50015 0 0 0 39.476562 9.4511719 C 36.0464 8.9689502 30.211115 8.5 23.857422 8.5 z M 23.857422 11.5 C 30.017774 11.5 35.726167 11.961361 38.966797 12.412109 C 40.559483 12.778239 41.824973 13.890643 42.074219 15.240234 A 1.50015 1.50015 0 0 0 42.078125 15.265625 C 42.543492 17.56209 42.996187 20.292628 42.998047 24.384766 C 42.904597 28.49001 42.450899 31.244675 42.070312 33.585938 C 41.810413 35.044446 40.592 36.034419 38.953125 36.40625 C 35.805209 37.023818 30.142051 37.5 23.951172 37.5 C 17.759247 37.5 12.097629 37.021978 8.9511719 36.404297 C 7.3525116 36.041193 6.081938 34.925434 5.8320312 33.572266 A 1.50015 1.50015 0 0 0 5.8261719 33.546875 C 5.3660305 31.276194 5 28.628694 5 24.5 C 5 20.378688 5.3654221 17.62199 5.7363281 15.417969 C 5.9947549 13.955585 7.2164425 12.963194 8.859375 12.591797 C 11.774266 11.984227 17.659955 11.5 23.857422 11.5 z M 20.460938 16.023438 C 18.668395 16.081606 17 17.525347 17 19.486328 L 17 28.515625 C 17 31.130266 19.966455 32.825862 22.238281 31.542969 A 1.50015 1.50015 0 0 0 22.238281 31.541016 L 30.228516 27.027344 C 32.516764 25.734577 32.516764 22.265423 30.228516 20.972656 L 22.238281 16.458984 C 21.670325 16.138261 21.058451 16.004047 20.460938 16.023438 z M 20.472656 18.980469 C 20.562791 18.985356 20.661175 19.013538 20.761719 19.070312 L 28.751953 23.585938 C 29.157705 23.815171 29.157705 24.186783 28.751953 24.416016 L 20.761719 28.929688 C 20.359545 29.156793 20 28.944984 20 28.515625 L 20 19.486328 C 20 19.271649 20.09013 19.111638 20.230469 19.033203 C 20.300636 18.993988 20.382521 18.975581 20.472656 18.980469 z" />
          </svg>
        </div>
      </div>

      <div className="hidden lg:block"></div>

      <div className="flex flex-row justify-center md:col-span-2 lg:justify-start">
        &copy;2021, Vijona Africa
      </div>
    </section>
    </div>
  );
};

export default Footer;
