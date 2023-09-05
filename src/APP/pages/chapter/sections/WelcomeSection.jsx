import React from 'react'
import { useNavigate } from 'react-router-dom';
import { individualchapter } from '../../../../assets/images/community';

function WelcomeSection() {
  // content-between md:px-20
  React.useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="bg-cover bg-no-repeat py-24 text-center"
      style={{ 'background-image': `url(${individualchapter}` }}
    >
      <div className="flex items-center ml-4 pb-14 md:ml-12">
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.682812 7.44254L6.30781 13.0675C6.42509 13.1848 6.58415 13.2507 6.75 13.2507C6.91585 13.2507 7.07491 13.1848 7.19219 13.0675C7.30946 12.9503 7.37535 12.7912 7.37535 12.6253C7.37535 12.4595 7.30946 12.3004 7.19219 12.1832L2.63359 7.62535H14.875C15.0408 7.62535 15.1997 7.5595 15.3169 7.44229C15.4342 7.32508 15.5 7.16611 15.5 7.00035C15.5 6.83459 15.4342 6.67562 15.3169 6.55841C15.1997 6.4412 15.0408 6.37535 14.875 6.37535H2.63359L7.19219 1.81753C7.30946 1.70026 7.37535 1.5412 7.37535 1.37535C7.37535 1.2095 7.30946 1.05044 7.19219 0.93316C7.07491 0.815885 6.91585 0.75 6.75 0.75C6.58415 0.75 6.42509 0.815885 6.30781 0.93316L0.682812 6.55816C0.624701 6.61621 0.578603 6.68514 0.54715 6.76101C0.515697 6.83688 0.499509 6.91821 0.499509 7.00035C0.499509 7.08248 0.515697 7.16381 0.547150.682812 7.44254Z" fill="#FCFDFC" />
        </svg>
        <p className="text-sm md:font-normal text-white ml-2  font-medium" onClick={goBack}>BACK</p>
      </div>
      <div className="flex flex-col h-full items-center justify-center content-between md:px-20">
        <div className="text-white">

          <h2 className="mb-10 text-lg md:text-3xl font-medium">SpaceYaTech Nairobi Chapter</h2>
          <p className="mb-10 text-lg md:text-3xl font-medium ">1000 Members</p>
        </div>
        <div className="flex flex-row items-center justify-center ">
          <div className="mr-4">
            <svg width="36" height="36" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="29.7874" height="29.8235" rx="14.8937" fill="white" />
              <path d="M18.5371 15.8831L18.9615 13.1832H16.3471V11.4284C16.3471 10.6901 16.7121 9.96876 17.8792 9.96876H19.0846V7.66968C18.3826 7.55761 17.6734 7.49698 16.9625 7.48828C14.8107 7.48828 13.4059 8.78336 13.4059 11.1246V13.1832H11.0208V15.8831H13.4059V22.4133H16.3471V15.8831H18.5371Z" fill="#00664E" />
            </svg>
          </div>
          <div className="mr-4">
            <svg width="36" height="36" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.467651" width="29.7874" height="29.8235" rx="14.8937" fill="white" />
              <path d="M12.8818 14.9508C12.8818 13.577 13.9934 12.4631 15.3651 12.4631C16.7368 12.4631 17.8491 13.577 17.8491 14.9508C17.8491 16.3246 16.7368 17.4385 15.3651 17.4385C13.9934 17.4385 12.8818 16.3246 12.8818 14.9508ZM11.539 14.9508C11.539 17.0672 13.2519 18.7827 15.3651 18.7827C17.4783 18.7827 19.1913 17.0672 19.1913 14.9508C19.1913 12.8344 17.4783 11.1189 15.3651 11.1189C13.2519 11.1189 11.539 12.8344 11.539 14.9508ZM18.4486 10.9669C18.4485 11.1441 18.5009 11.3172 18.5991 11.4645C18.6973 11.6118 18.8369 11.7267 19.0003 11.7945C19.1636 11.8623 19.3434 11.8802 19.5169 11.8457C19.6903 11.8112 19.8497 11.726 19.9748 11.6008C20.0999 11.4756 20.1851 11.3161 20.2197 11.1424C20.2542 10.9687 20.2366 10.7886 20.169 10.6249C20.1014 10.4613 19.9868 10.3214 19.8398 10.2229C19.6928 10.1245 19.52 10.0719 19.3431 10.0718H19.3428C19.1057 10.0719 18.8784 10.1662 18.7108 10.3341C18.5431 10.5019 18.4488 10.7295 18.4486 10.9669ZM12.3548 21.0251C11.6283 20.992 11.2335 20.8708 10.9711 20.7684C10.6232 20.6328 10.375 20.4712 10.114 20.2102C9.85301 19.9492 9.69146 19.7008 9.55663 19.3524C9.45433 19.0897 9.33332 18.6942 9.3003 17.9666C9.26418 17.18 9.25696 16.9437 9.25696 14.9509C9.25696 12.958 9.26477 12.7224 9.3003 11.9351C9.33338 11.2075 9.45529 10.8127 9.55663 10.5493C9.69206 10.2009 9.85337 9.95228 10.114 9.69092C10.3746 9.42955 10.6226 9.26776 10.9711 9.13272C11.2334 9.03028 11.6283 8.90908 12.3548 8.87601C13.1402 8.83983 13.3762 8.83261 15.3651 8.83261C17.3541 8.83261 17.5903 8.84043 18.3764 8.87601C19.1028 8.90914 19.497 9.03123 19.7601 9.13272C20.108 9.26776 20.3562 9.42991 20.6172 9.69092C20.8782 9.95193 21.0391 10.2009 21.1745 10.5493C21.2768 10.812 21.3978 11.2075 21.4309 11.9351C21.467 12.7224 21.4742 12.958 21.4742 14.9509C21.4742 16.9437 21.467 17.1793 21.4309 17.9666C21.3978 18.6942 21.2762 19.0896 21.1745 19.3524C21.0391 19.7008 20.8778 19.9494 20.6172 20.2102C20.3566 20.471 20.108 20.6328 19.7601 20.7684C19.4978 20.8708 19.1028 20.992 18.3764 21.0251C17.5909 21.0613 17.355 21.0685 15.3651 21.0685C13.3753 21.0685 13.14 21.0613 12.3548 21.0251ZM12.2931 7.53347C11.4999 7.56965 10.9578 7.69562 10.4845 7.88009C9.99423 8.0706 9.57922 8.32617 9.16451 8.74085C8.7498 9.15553 8.49526 9.57182 8.30504 10.0628C8.12085 10.5372 7.99507 11.0797 7.95894 11.8742C7.92222 12.6698 7.91382 12.9242 7.91382 14.9508C7.91382 16.9774 7.92222 17.2318 7.95894 18.0274C7.99507 18.8219 8.12085 19.3644 8.30504 19.8388C8.49526 20.3295 8.74986 20.7462 9.16451 21.1607C9.57916 21.5752 9.99423 21.8305 10.4845 22.0215C10.9587 22.206 11.4999 22.3319 12.2931 22.3681C13.088 22.4043 13.3416 22.4133 15.3651 22.4133C17.3887 22.4133 17.6427 22.4049 18.4372 22.3681C19.2305 22.3319 19.7721 22.206 20.2458 22.0215C20.7357 21.8305 21.1511 21.5754 21.5658 21.1607C21.9805 20.7461 22.2345 20.3295 22.4252 19.8388C22.6094 19.3644 22.7358 18.8219 22.7713 18.0274C22.8075 17.2312 22.8159 16.9774 22.8159 14.9508C22.8159 12.9242 22.8075 12.6698 22.7713 11.8742C22.7352 11.0797 22.6094 10.5369 22.4252 10.0628C22.2345 9.57211 21.9798 9.15618 21.5658 8.74085C21.1517 8.32552 20.7357 8.0706 20.2464 7.88009C19.7721 7.69562 19.2304 7.56906 18.4378 7.53347C17.6433 7.4973 17.3893 7.48828 15.3657 7.48828C13.3422 7.48828 13.088 7.4967 12.2931 7.53347Z" fill="#00664E" />
            </svg>
          </div>
          <div className="mr-4">
            <svg width="36" height="36" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.936035" width="29.7874" height="29.8235" rx="14.8937" fill="white" />
              <path d="M23.2223 10.1904C22.7304 10.4026 22.2134 10.5503 21.6838 10.6299C21.9314 10.5874 22.2957 10.1408 22.4407 9.96008C22.661 9.68744 22.8288 9.37621 22.9358 9.04218C22.9358 9.01737 22.9605 8.98193 22.9358 8.96421C22.9233 8.95738 22.9093 8.95381 22.8951 8.95381C22.8809 8.95381 22.8669 8.95738 22.8544 8.96421C22.2795 9.27623 21.6675 9.51438 21.0331 9.67301C21.011 9.67978 20.9875 9.68039 20.965 9.67477C20.9426 9.66915 20.9221 9.65752 20.9058 9.64112C20.8564 9.58219 20.8032 9.52655 20.7466 9.47455C20.4879 9.24222 20.1943 9.05207 19.8766 8.91105C19.4478 8.73476 18.9847 8.65841 18.5221 8.68777C18.0733 8.71618 17.6351 8.83681 17.2348 9.04218C16.8406 9.25869 16.4941 9.55283 16.2163 9.90692C15.9239 10.2714 15.7129 10.6943 15.5974 11.1473C15.5021 11.5782 15.4912 12.0236 15.5655 12.4586C15.5655 12.5331 15.5655 12.5437 15.5019 12.5331C12.9803 12.1609 10.9114 11.2643 9.22087 9.33988C9.1466 9.25482 9.1077 9.25482 9.04757 9.33988C8.31196 10.4598 8.66916 12.2318 9.58867 13.1072C9.71245 13.2241 9.83977 13.3375 9.97416 13.4439C9.55257 13.4139 9.14128 13.2994 8.76465 13.1072C8.69391 13.0611 8.65501 13.0859 8.65148 13.171C8.64145 13.2889 8.64145 13.4075 8.65148 13.5254C8.72527 14.0905 8.94752 14.6259 9.29549 15.0767C9.64346 15.5275 10.1047 15.8776 10.632 16.0913C10.7605 16.1464 10.8944 16.188 11.0316 16.2153C10.6413 16.2923 10.241 16.3043 9.84685 16.2507C9.76197 16.233 9.73014 16.2791 9.76197 16.3606C10.2818 17.7782 11.41 18.2106 12.2376 18.4516C12.3508 18.4693 12.4639 18.4693 12.5912 18.4977C12.5912 18.4977 12.5912 18.4977 12.57 18.5189C12.326 18.9655 11.3393 19.2667 10.8866 19.4227C10.0603 19.7201 9.17939 19.8338 8.30489 19.7558C8.16696 19.7345 8.13513 19.7381 8.09977 19.7558C8.0644 19.7735 8.09977 19.8125 8.13867 19.8479C8.3155 19.9649 8.49233 20.0677 8.67623 20.1669C9.22371 20.4662 9.80251 20.7039 10.4021 20.8757C13.5072 21.7334 17.0014 21.1025 19.332 18.7812C21.164 16.9596 21.8076 14.4468 21.8076 11.9306C21.8076 11.8349 21.9243 11.7782 21.9915 11.7286C22.455 11.3667 22.8636 10.9393 23.2046 10.4598C23.2636 10.3883 23.2939 10.2973 23.2894 10.2046C23.2894 10.1515 23.2894 10.1621 23.2223 10.1904Z" fill="#00664E" />
            </svg>
          </div>
          <div>
            <svg width="36" height="36" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.212524" width="29.7874" height="29.8235" rx="14.8937" fill="white" />
              <path d="M12.8705 20.9554V12.8992H10.1984V20.9554H12.8708H12.8705ZM11.535 11.7994C12.4667 11.7994 13.0467 11.1808 13.0467 10.4077C13.0292 9.61698 12.4667 9.01562 11.5527 9.01562C10.6382 9.01562 10.0409 9.61698 10.0409 10.4076C10.0409 11.1807 10.6207 11.7994 11.5175 11.7994H11.5348L11.535 11.7994ZM14.3496 20.9554H17.0215V16.4569C17.0215 16.2164 17.039 15.9754 17.1096 15.8036C17.3026 15.3223 17.7423 14.8242 18.4806 14.8242C19.4473 14.8242 19.8342 15.5629 19.8342 16.646V20.9554H22.5061V16.3362C22.5061 13.8618 21.188 12.7103 19.43 12.7103C17.9887 12.7103 17.3556 13.5176 17.0039 14.0674H17.0217V12.8994H14.3497C14.3846 13.6552 14.3495 20.9556 14.3495 20.9556L14.3496 20.9554Z" fill="#00664E" />
            </svg>
          </div>
        </div>
        <div>
          <button type="button" className="text-[#323433] bg-white  font-medium rounded-lg text-base px-5 md:px-14  py-3.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mt-8">
            Join Chapter
          </button>
        </div>
      </div>
    </div>
  )
}
export default WelcomeSection;
