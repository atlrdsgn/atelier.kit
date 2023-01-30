import type {FirstTouchProps} from '../types.icon'

export const ButterflyIcon = ({color = 'currentColor', ...props}: FirstTouchProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M15.6411 11.6714C15.6922 11.5995 15.765 11.577 15.8312 11.5471C16.1151 11.4186 16.4125 11.418 16.7109 11.4472C17.0811 11.4838 17.4484 11.5575 17.823 11.5404C17.9303 11.5356 17.9553 11.5898 17.8952 11.6921C17.6785 12.0638 17.3795 12.327 17.006 12.489C16.6665 12.6364 16.3108 12.6974 15.949 12.7138C15.4677 12.7357 14.9869 12.7181 14.5057 12.701C14.11 12.6864 13.7165 12.6986 13.3224 12.7473C13.0901 12.776 12.9484 12.899 12.8995 13.1409C12.8428 13.4211 12.69 13.6197 12.4938 13.7958C12.1765 14.0803 11.8252 14.3009 11.454 14.4861C11.1466 14.639 10.8371 14.7864 10.5281 14.9363C10.4808 14.9588 10.4353 14.9814 10.3808 14.9795C10.2285 14.9734 10.104 15.0502 9.99344 15.155C9.88506 15.258 9.78225 15.367 9.67443 15.4706C9.57773 15.5632 9.46824 15.6296 9.33541 15.6326C9.27206 15.6345 9.22315 15.6229 9.22871 15.5303C9.23371 15.4468 9.19814 15.3719 9.1698 15.2963C9.12311 15.1714 9.11756 15.0618 9.21593 14.9527C9.31541 14.8431 9.35987 14.6981 9.36265 14.5409C9.36487 14.4197 9.33319 14.3831 9.22426 14.377C9.17702 14.3746 9.13312 14.3874 9.09088 14.4075C8.93916 14.4794 8.78632 14.5494 8.63682 14.6268C8.51567 14.6895 8.3934 14.734 8.25668 14.72C8.16443 14.7103 8.09607 14.667 8.04438 14.5817C7.96602 14.4519 7.93545 14.3063 7.921 14.1553C7.90377 13.9725 7.93379 13.7915 7.95879 13.6124C7.97436 13.5015 8.04549 13.4242 8.11719 13.3505C8.18443 13.2822 8.25613 13.2183 8.30392 13.1305C8.38895 12.9746 8.36005 12.8868 8.20277 12.8363C8.10329 12.804 8.00159 12.7997 7.89655 12.8113C7.75705 12.8265 7.62145 12.8844 7.46639 12.8655C7.49084 12.7747 7.55087 12.7345 7.60144 12.6882C7.71315 12.5859 7.7715 12.472 7.75872 12.2977C7.74038 12.0461 7.80485 11.8006 7.8632 11.5569C7.89044 11.443 7.91989 11.3364 7.83097 11.2249C7.76761 11.1457 7.78929 11.078 7.87432 10.9994C8.01604 10.8679 8.10663 10.7082 8.13386 10.506C8.1472 10.4079 8.14553 10.3202 8.05605 10.2586C7.98992 10.2123 7.98825 10.1575 8.04605 10.0917C8.12552 10.0015 8.20166 9.90771 8.26002 9.79805C8.32838 9.6695 8.34116 9.53974 8.27669 9.40388C8.18777 9.21746 8.05772 9.15349 7.8771 9.23025C7.61645 9.34174 7.35968 9.46359 7.16517 9.69875C7.10737 9.76881 7.04568 9.834 7.00678 9.9199C6.92119 10.1069 6.93731 10.205 7.07625 10.3506C7.17962 10.4585 7.18129 10.4938 7.06569 10.5815C6.98121 10.6455 6.89007 10.6991 6.79948 10.7527C6.69388 10.8155 6.58551 10.8733 6.48992 10.9538C6.406 11.0244 6.34097 11.1103 6.31319 11.2243C6.28373 11.3449 6.28484 11.4558 6.37877 11.5526C6.45435 11.6306 6.45157 11.6623 6.3771 11.7311C6.32486 11.7793 6.26595 11.8207 6.20426 11.8524C6.01863 11.9492 5.93305 12.1131 5.92471 12.3324C5.92137 12.4263 5.9186 12.5207 5.91526 12.6145C5.91137 12.7156 5.89414 12.8137 5.85691 12.9069C5.808 13.0288 5.72741 13.1275 5.60681 13.1421C5.4123 13.1659 5.22667 13.2329 5.03494 13.267C4.96602 13.2792 4.89822 13.2737 4.83097 13.2524C4.70759 13.2128 4.62089 13.1342 4.57754 12.9965C4.50029 12.751 4.4964 12.5055 4.56365 12.2569C4.61978 12.051 4.70759 11.8609 4.79151 11.6684C4.87543 11.4759 4.96046 11.284 4.99992 11.0726C5.00882 11.0232 5.0266 10.9726 5.0216 10.9245C5.0027 10.7417 5.07995 10.6071 5.17332 10.4652C5.59681 9.81877 5.82801 9.10414 5.78021 8.29691C5.7741 8.19639 5.77132 8.09648 5.72686 8.00448C5.69907 7.94661 5.69351 7.87959 5.71296 7.82111C5.7691 7.65052 5.81078 7.47263 5.90526 7.32032C6.02808 7.12232 6.19926 7.01083 6.41711 6.98159C6.64831 6.95052 6.87284 7.01327 7.1007 7.02667C7.54975 7.05348 7.96602 7.1869 8.35283 7.43729C8.49622 7.5305 8.63127 7.63651 8.75409 7.75957C8.79966 7.80527 8.85524 7.84243 8.88025 7.91676C8.78132 7.98316 8.66572 8.00083 8.56235 8.05139C8.46231 8.10013 8.3645 8.15314 8.30003 8.2561C8.2389 8.35357 8.2539 8.39317 8.36172 8.42546C8.4562 8.45409 8.54457 8.43399 8.6246 8.37794C8.69685 8.32737 8.7652 8.2695 8.83523 8.21589C9.0492 8.052 9.19092 8.0715 9.35264 8.29387C9.62274 8.6655 9.8167 9.08343 9.97621 9.52329C10.1774 10.0783 10.3147 10.6558 10.4847 11.2212C10.5297 11.3699 10.5736 11.5191 10.6242 11.6659C10.712 11.9224 10.8699 12.0083 11.1133 11.9334C11.2011 11.9066 11.2867 11.8694 11.3723 11.8347C11.5012 11.7829 11.6296 11.7275 11.7713 11.7378C11.8391 11.7427 11.8908 11.6988 11.9458 11.6678C12.5183 11.3449 13.0418 10.9397 13.5525 10.5133C14.1266 10.0344 14.6668 9.50501 15.2632 9.05967C16.6303 8.03982 17.9758 6.98098 19.4419 6.12989C19.7604 5.94468 20.0888 5.7808 20.4128 5.609C20.7485 5.4311 21.1153 5.38907 21.4705 5.29768C21.7044 5.23737 21.9412 5.19046 22.1757 5.13441C22.2363 5.11979 22.2952 5.1009 22.3519 5.06496C22.5258 4.95408 22.8171 4.99124 22.966 5.13015C23.011 5.17218 23.0016 5.2197 22.9921 5.26722C22.9638 5.40917 22.9177 5.54381 22.8515 5.66992C22.7626 5.8399 22.6548 5.99464 22.527 6.1305C22.2513 6.42415 21.9612 6.69769 21.6233 6.90544C21.3965 7.04495 21.2031 7.23137 21.0181 7.42937C20.8085 7.65296 20.6168 7.89482 20.4201 8.1312C20.1844 8.41449 19.9388 8.68438 19.6592 8.91894C19.5058 9.04809 19.3758 9.21136 19.2419 9.36611C19.1779 9.43983 19.1074 9.46907 19.0162 9.47882C18.6038 9.52329 18.2009 9.60736 17.8358 9.84192C17.723 9.91441 17.6557 9.88152 17.6207 9.74017C17.594 9.63173 17.584 9.52207 17.5173 9.42581C17.4768 9.36733 17.5068 9.29544 17.5562 9.24061C17.6413 9.14557 17.7374 9.06759 17.8369 8.99326C17.9786 8.88726 18.1231 8.7843 18.2598 8.67098C18.3804 8.57107 18.4743 8.44435 18.5216 8.2829C18.5549 8.16776 18.5344 8.13486 18.4266 8.11963C18.3126 8.10318 18.2092 8.13851 18.1159 8.20431C17.933 8.33408 17.7391 8.43886 17.5418 8.5406C17.1922 8.72094 16.8932 8.98778 16.5953 9.25279C16.4975 9.33991 16.4019 9.43008 16.3041 9.5172C16.193 9.61589 16.0862 9.71215 16.0196 9.86141C15.9556 10.0034 15.8328 10.0972 15.715 10.188C15.5933 10.2818 15.4677 10.3701 15.3476 10.4664C15.2026 10.5833 15.0775 10.7204 15.0247 10.9172C14.997 11.0196 14.9203 11.061 14.8452 11.1073C14.7307 11.178 14.6035 11.223 14.4968 11.3102C14.3845 11.4015 14.3867 11.4539 14.509 11.527C14.564 11.5599 14.6257 11.5794 14.6802 11.6129C14.7652 11.6653 14.7669 11.7019 14.6891 11.7598C14.6029 11.8237 14.5045 11.8591 14.4056 11.8907C14.285 11.9297 14.1633 11.9651 14.0449 12.0126C13.9238 12.0613 13.8226 12.1424 13.7648 12.2758C13.7154 12.3903 13.7209 12.411 13.8276 12.4543C13.9844 12.517 14.1461 12.5554 14.3128 12.5694C14.6874 12.6011 15.0559 12.5451 15.4232 12.4762C15.5249 12.4573 15.6255 12.4275 15.7278 12.4214C15.9117 12.4104 16.0662 12.3142 16.2285 12.2386C16.2713 12.2185 16.3074 12.1881 16.333 12.1442C16.388 12.0504 16.3736 11.9827 16.2824 11.9297C16.1746 11.8676 16.0551 11.8469 15.939 11.814C15.8356 11.7841 15.7267 11.7677 15.6389 11.6739L15.6411 11.6714ZM18.5977 7.49639C18.9367 7.49212 19.2091 7.31727 19.4597 7.09003C19.1318 7.1211 18.8395 7.24051 18.5977 7.49639ZM19.0962 6.8104C18.805 6.83538 18.5605 6.97062 18.3393 7.16436C18.6333 7.15156 18.8795 7.01693 19.0962 6.8104Z"
        fill={color}
      />
      <path
        d="M9.18314 17.6839C9.18814 17.5048 9.22871 17.3549 9.27929 17.2075C9.35153 16.9961 9.44713 16.795 9.49937 16.5751C9.50604 16.5459 9.5216 16.516 9.54049 16.4941C9.63608 16.3832 9.70055 16.2498 9.77447 16.1231C9.8206 16.0432 9.87062 15.9671 9.93786 15.9068C9.99399 15.8562 10.0479 15.8325 10.1257 15.8629C10.4008 15.9695 10.6681 15.9208 10.9238 15.7831C11.0827 15.6972 11.2372 15.6016 11.3923 15.5077C11.6568 15.3481 11.9308 15.2293 12.242 15.2701C12.2837 15.2756 12.3204 15.2622 12.3571 15.2427C12.6205 15.1032 12.8995 15.0094 13.1735 14.8991C13.4864 14.773 13.7965 14.6335 14.0372 14.3734C14.1967 14.2009 14.3545 14.0505 14.574 13.9694C14.7596 13.9012 14.8986 13.7404 15.027 13.5765C15.0948 13.49 15.1109 13.3858 15.1314 13.2828C15.1481 13.2 15.1831 13.1683 15.2637 13.1823C15.4416 13.2134 15.6061 13.2804 15.7595 13.3815C15.7895 13.4016 15.8156 13.4248 15.8323 13.4589C15.9579 13.7123 16.0985 13.9591 16.1413 14.2503C16.1796 14.511 16.1463 14.7468 15.9445 14.9302C15.8161 15.0472 15.7228 15.1995 15.6372 15.3566C15.6111 15.4054 15.5811 15.4523 15.5611 15.5041C15.4027 15.9117 15.1665 16.2339 14.8141 16.4728C14.5535 16.6494 14.3339 16.8974 14.0938 17.1112C13.8754 17.3056 13.6448 17.4792 13.3864 17.6053C13.3436 17.626 13.3052 17.651 13.2724 17.6869C13.0901 17.8868 12.8662 18.0098 12.6272 18.1037C12.466 18.167 12.3026 18.2249 12.1398 18.2846C11.9386 18.3583 11.7441 18.4473 11.569 18.5825C11.4523 18.6727 11.3106 18.6782 11.1767 18.7037C11.036 18.7306 10.8938 18.7476 10.7521 18.7683C10.5581 18.797 10.3691 18.8445 10.1991 18.9566C10.144 18.9925 10.0907 18.987 10.034 18.9712C9.91508 18.9383 9.81004 18.8749 9.71889 18.7866C9.45324 18.5289 9.29485 18.1993 9.19814 17.8313C9.18425 17.7783 9.18592 17.7198 9.18258 17.6839H9.18314Z"
        fill={color}
      />
      <path
        d="M7.74483 16.7999C7.70092 16.9291 7.63201 17.018 7.55031 17.0984C7.06402 17.5779 6.50993 17.9148 5.86802 18.0677C5.76521 18.0921 5.67573 18.1469 5.5857 18.2017C5.24946 18.4058 4.93601 18.6501 4.62701 18.8975C4.45528 19.0352 4.30856 19.0285 4.14072 18.9115C4.01567 18.8244 3.89007 18.7342 3.73279 18.7269C3.67444 18.7245 3.64832 18.6672 3.61719 18.6233C3.52105 18.4911 3.43768 18.3461 3.32542 18.2292C3.25928 18.1609 3.16369 18.1177 3.11812 18.0379C3.07088 17.9544 3.14313 17.8453 3.1259 17.7448C3.10145 17.6029 3.07755 17.4615 3.0531 17.3196C3.03809 17.2331 3.01919 17.1478 3.00752 17.0613C2.99196 16.9467 2.99641 16.8237 3.06088 16.7353C3.16202 16.5964 3.1937 16.4386 3.22483 16.2729C3.26039 16.0859 3.35098 15.9226 3.45713 15.7734C3.63998 15.5157 3.82449 15.2604 4.04568 15.0392C4.26188 14.8224 4.43861 14.5659 4.62479 14.3197C4.77095 14.1266 4.91934 13.9353 5.09218 13.7684C5.26169 13.6045 5.44843 13.4735 5.66462 13.3974C5.78299 13.3559 5.808 13.3736 5.8558 13.5028C5.8847 13.5807 5.88414 13.6624 5.89248 13.7428C5.91082 13.917 5.91582 14.0949 6.0731 14.2082C6.12201 14.2436 6.11867 14.3197 6.12312 14.3825C6.13535 14.5543 6.10478 14.72 6.06421 14.8839C6.02253 15.0532 6.01641 15.2116 6.11589 15.3658C6.1748 15.4572 6.20759 15.5674 6.25872 15.6655C6.4199 15.975 6.59163 16.0676 6.91119 16.0213C6.97899 16.0116 7.04568 15.9933 7.11515 16.014C7.2302 16.0481 7.24909 16.0871 7.19407 16.1992C7.16962 16.2486 7.13683 16.293 7.10848 16.3399C7.08347 16.382 7.05513 16.4222 7.03679 16.4679C6.97955 16.6117 7.014 16.6762 7.15739 16.6969C7.28244 16.7146 7.40748 16.7298 7.53253 16.7445C7.60089 16.753 7.66813 16.7646 7.74427 16.7975L7.74483 16.7999Z"
        fill={color}
      />
      <path
        d="M19.0273 9.75662C18.9418 10.0752 18.7828 10.2994 18.5394 10.4524C18.3482 10.573 18.137 10.6303 17.9236 10.6753C17.6318 10.7369 17.3367 10.7777 17.0522 10.8764C17.0155 10.8892 16.9732 10.891 16.9338 10.8873C16.7232 10.8685 16.5175 10.8222 16.3141 10.7393C16.3275 10.7192 16.3336 10.6985 16.3463 10.6906C16.6904 10.4913 17.0427 10.3147 17.4145 10.1837C17.5023 10.1526 17.5696 10.1581 17.629 10.2336C17.733 10.3652 17.8486 10.3573 17.982 10.286C18.1681 10.1873 18.3382 10.0606 18.5155 9.9467C18.6633 9.85166 18.8134 9.76271 19.0268 9.7554L19.0273 9.75662Z"
        fill={color}
      />
    </svg>
  )
}