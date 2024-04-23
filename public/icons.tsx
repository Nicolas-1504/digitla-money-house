import React from "react";

export type IconProps = {
  height: number;
  width: number;
};

export const CardIcon = ({ height, width }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 36 34"
    >
      <path
        fill="#C1FD35"
        d="M29.345 2.165V8.99l.762-.762H7.092c-.804 0-1.577.381-1.973 1.1-.267.48-.278.98-.278 1.502v10.256l.761-.762H2.175c-.012 0-.16 0-.16-.007l.103.011-.1-.023a.898.898 0 01-.095-.03c-.076-.03-.06-.023.042.023 0 .004-.122-.065-.13-.069-.155-.091 0 .004-.007.008a1.31 1.31 0 01-.206-.206c.02-.019.092.141.035.034l-.073-.13c-.083-.144.042.16 0 0-.003-.014-.057-.193-.05-.193l.012.102c-.004-.034-.007-.068-.007-.102-.004-.065 0-.035 0-.054v-.045c-.008-1.318 0-2.64 0-3.958V2.115c0-.019.003-.034.003-.053.008-.084.008-.068-.007.05-.004 0 .046-.18.05-.195.041-.163-.084.141 0 0 .026-.041.049-.083.072-.13.08-.144-.118.119 0-.003.034-.034.064-.072.103-.107.13-.121 0 0-.004-.003-.004-.004.114-.073.125-.08.16-.088-.003-.004-.003-.008 0-.008.122-.042.144-.046l.05-.011c.084-.015.065-.015-.053.004 0-.008.144-.008.156-.008h23.933c.868 0 1.737-.011 2.605 0 .019 0 .16-.004.16.008.004.019-.183-.05-.027.004l.122.034c.164.042-.14-.084 0 0 .042.026.084.05.13.072.144.08-.118-.118.004 0 .034.034.072.065.106.103.122.13 0 0 .004-.004s.072.114.08.126c.087.16.004-.004.007-.004.008 0 .042.133.046.145l.012.05c.015.083.015.064-.004-.054-.008.004-.008.149-.008.16.008.4.347.78.762.762.408-.02.77-.335.762-.762A2.197 2.197 0 0028.705.002H2.952c-.263 0-.522-.004-.785 0A2.203 2.203 0 00.103 1.51C.01 1.773 0 2.05 0 2.325v17.348a2.198 2.198 0 001.459 2.053c.438.16.929.118 1.386.118h2.75c.411 0 .762-.35.762-.762v-7.46c0-1.056-.004-2.107 0-3.162v-.099c0-.034.003-.069.007-.103.004-.103-.042.145-.004.05.023-.057.042-.134.054-.194.019-.096-.073.125-.02.045.023-.034.039-.072.058-.106l.053-.084c.015.007-.11.122-.03.038l.137-.137c.103-.1-.035.034-.038.03l.083-.053c.027-.015.058-.03.088-.05.137-.08-.152.042 0 0 .011-.003.194-.057.194-.05 0 .012-.202.012-.05.008.035 0 .07-.003.104-.003H7c.149-.004.297 0 .446 0h22.657c.412 0 .762-.35.762-.762V2.165c0-.4-.35-.78-.762-.762-.407.02-.758.335-.758.762z"
      ></path>
      <path
        fill="#C1FD35"
        d="M.765 6.224h28.15c.38 0 .765.008 1.146 0h.05c.4 0 .78-.35.761-.762-.019-.411-.335-.761-.762-.761H1.961c-.38 0-.765-.008-1.146 0h-.05c-.4 0-.78.35-.761.761.019.416.335.762.761.762zm33.417 4.167v16.754c0 .019 0 .16-.008.163-.015.004.046-.198.004-.053-.015.046-.026.095-.042.145-.042.152.069-.095.012-.023-.03.042-.061.103-.084.149-.076.137.091-.08.015-.016-.03.027-.053.061-.084.092-.007.007-.102.103-.11.099-.02-.02.14-.092.034-.035l-.13.073c-.14.084.16-.042 0 0a.948.948 0 00-.095.03c-.034.008-.064.016-.099.023.119-.015.134-.015.05-.008-.674.008-1.348.004-2.022.004H9.04c-.681 0-1.363.012-2.041 0h-.053c-.02 0-.035-.003-.054-.003-.083-.008-.068-.008.05.007 0 .004-.137-.034-.149-.034l-.095-.03c0-.004.16.08.004-.008l-.084-.05c-.068-.045-.053-.034.034.035a.586.586 0 01-.072-.065c-.03-.027-.057-.057-.084-.088-.11-.11.027.012.012.02a1.472 1.472 0 01-.122-.214c.007-.004.057.171.007-.004a1.596 1.596 0 01-.034-.148c.012 0 .012.201.008.05 0-.043-.004-.062-.004-.108V13.472c0-1.025-.015-2.053 0-3.077v-.004c0-.02-.004.03 0-.054 0-.019.004-.034.004-.053.007-.084.007-.069-.008.05.004 0 .05-.244.069-.24.004 0-.08.16.007.003.004-.003.073-.125.08-.125.004.004-.118.133.004.004a.91.91 0 01.088-.084c.11-.11-.012.026-.02.011-.003-.004.115-.072.126-.08l.088-.045c.004.007-.171.057.004.007.038-.011.087-.015.122-.03.057-.012.034-.008-.077.007a.933.933 0 01.103-.007c.061-.004.122 0 .18 0h26.465c.02 0 .035.003.054.003.068.008.068.008 0 0-.016-.003-.035-.003-.05-.007l.1.023c.01.004.144.038.144.045-.004.023-.149-.076-.046-.015.042.027.084.05.13.073.144.08-.115-.119.003 0 .02.019.18.163.172.175-.016.015-.092-.156-.02-.015l.062.106c.083.141-.042-.16 0 0 .007.03.019.065.03.095l.012.05c.015.084.015.065-.004-.053-.004 0-.004.144-.004.156.008.4.346.78.762.761.407-.019.769-.335.761-.761-.019-.994-.72-1.935-1.729-2.114a2.88 2.88 0 00-.54-.046H7.098a2.68 2.68 0 00-.606.061c-.967.217-1.637 1.127-1.652 2.103-.004.277 0 .552 0 .83v15.733c0 .1-.004.198.003.297a2.188 2.188 0 001.95 2.042c.229.026.465.015.694.015H33.1c.335 0 .67.015 1.002-.073.945-.247 1.588-1.127 1.603-2.09V10.39c0-.4-.35-.781-.761-.762-.412.019-.762.335-.762.762z"
      ></path>
      <path
        fill="#C1FD35"
        d="M9.792 24.057h2.64c.399 0 .78-.35.76-.762-.018-.411-.334-.762-.76-.762h-2.64c-.4 0-.781.35-.762.762.019.411.335.762.762.762zm4.43-6.334h-3.55c-.084.004-.05.027-.008.008.046-.023.065.015 0-.004.008 0-.095-.023-.1-.03 0-.031.15.083.046.01-.117-.083.031.035.035.035-.004.004-.076-.072-.072-.068-.092-.08.057.026.026.038a.363.363 0 01-.038-.065c-.038-.084.042.156.008.019 0 .008-.027-.1-.023-.1.023-.01.007.172.011.047v-3.39c0-.053.004-.11 0-.164 0-.011.008-.05 0-.057.034.042-.034.152-.004.05a.412.412 0 01.03-.1c-.003 0-.072.18-.01.046.053-.11-.016.061-.035.035-.004-.004.072-.077.069-.073.084-.091-.034.034-.038.027.003.004.083-.057.087-.05.02.03-.164.046-.042.02.02-.004.092-.016.1-.024-.02.016-.183.008-.046.012h3.313c.072 0 .149.004.221 0 .02 0 .065.008.076 0-.053.042-.148-.038-.05-.004.02.008.085.03.1.03-.023.004-.156-.08-.046-.01.103.064-.03-.035-.034-.035.004-.004.06.06.072.069.11.099-.038-.031-.027-.039-.003 0 .058.084.05.088-.011.008-.053-.19-.02-.042.005.02.016.088.024.1-.008-.012-.004-.153-.015-.073v.034c-.004.061 0 .126 0 .187v3.363c0 .019-.008.05 0 .057-.016-.016.05-.183.003-.05-.004.015-.007.034-.015.05-.023.064-.023.064 0 .004.027-.012.034-.065-.008 0-.076.125.031-.035.035-.035.004.004-.061.061-.069.073-.08.091.027-.058.038-.027.004.008-.091.046-.087.05-.008-.012.186-.054.042-.02-.023.008-.05.012-.077.02-.099.026.202-.02.027-.012-.396.012-.78.343-.762.762.02.404.335.773.762.762a1.661 1.661 0 001.634-1.634c.004-.183 0-.366 0-.549v-2.373c0-.209.004-.418 0-.628-.015-.758-.549-1.49-1.325-1.611-.252-.038-.495-.034-.747-.034h-1.131c-.651 0-1.303-.004-1.954 0a1.67 1.67 0 00-1.577 1.104c-.099.278-.091.568-.091.86v3.15c0 .599.267 1.159.788 1.478.34.206.709.236 1.09.236h3.313c.4 0 .78-.35.762-.761-.02-.415-.335-.762-.762-.762zm1.104 6.334h2.639c.4 0 .78-.35.762-.762-.02-.411-.335-.762-.762-.762h-2.64c-.4 0-.78.35-.761.762.019.411.335.762.762.762zm5.534.038h2.639c.4 0 .78-.35.762-.762-.02-.411-.336-.762-.762-.762h-2.64c-.4 0-.78.35-.761.762.019.412.335.762.762.762zm5.533 0h2.64c.4 0 .78-.35.761-.762-.019-.411-.335-.762-.761-.762h-2.64c-.4 0-.78.35-.761.762.019.412.335.762.761.762z"
      ></path>
    </svg>
  );
};

export const UserIcon = ({ height, width }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 34 34"
    >
      <path
        fill="#C1FD35"
        d="M16.907 0A16.925 16.925 0 000 16.907c0 4.518 1.758 8.763 4.95 11.956a16.795 16.795 0 0011.957 4.952 16.925 16.925 0 0016.908-16.907A16.925 16.925 0 0016.908 0zM6.687 28.753a12.735 12.735 0 019.895-4.973c.06.002.118.017.178.017h.057c.055 0 .105-.015.16-.017a12.716 12.716 0 019.98 5.115 15.565 15.565 0 01-10.05 3.67 15.53 15.53 0 01-10.22-3.812zm10.08-6.236c-.062 0-.122.01-.184.013a5.607 5.607 0 01-5.418-5.638 5.614 5.614 0 015.655-5.595 5.614 5.614 0 015.595 5.655c0 3.03-2.425 5.493-5.435 5.58-.07-.002-.14-.015-.213-.015zm11.118 5.538a13.985 13.985 0 00-7.79-5.13 6.873 6.873 0 003.57-6.03 6.866 6.866 0 00-6.905-6.845 6.867 6.867 0 00-5.883 10.373 6.825 6.825 0 002.593 2.497 14.005 14.005 0 00-7.703 4.987 15.55 15.55 0 01-4.515-10.994A15.675 15.675 0 0116.91 1.255a15.675 15.675 0 0115.658 15.658 15.618 15.618 0 01-4.683 11.142z"
      ></path>
    </svg>
  );
};

export const EditIcon = ({ height, width }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 30 30"
    >
      <g fill="#C1FD35" clipPath="url(#clip0_1500_4136)">
        <path d="M23.334 25H5.001V6.667h11.016L17.684 5H5.001a1.667 1.667 0 00-1.667 1.667V25a1.667 1.667 0 001.667 1.667h18.333A1.667 1.667 0 0025.001 25V12.5l-1.667 1.667V25z"></path>
        <path d="M27.942 4.867l-2.808-2.809a1.341 1.341 0 00-1.9 0L11.81 13.55l-.925 4.008a1.342 1.342 0 001.309 1.609c.102.01.205.01.308 0l4.042-.892 11.4-11.508a1.34 1.34 0 000-1.9zM15.676 16.733l-3.05.675.708-3.025 8.6-8.658 2.35 2.35-8.608 8.658zm9.55-9.6l-2.35-2.35 1.291-1.316 2.367 2.366-1.308 1.3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1500_4136">
          <path fill="#fff" d="M0 0H30V30H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export const CheckIcon = ({ height, width }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 66 68"
    >
      <g clipPath="url(#clip0_1500_4013)">
        <path
          fill="#000"
          d="M35.078 4.275a30.068 30.068 0 00-11.844 2.412 30.81 30.81 0 00-10.039 6.909C1.13 26.026 1.13 46.249 13.2 58.68c12.066 12.427 31.693 12.427 43.758 0 12.062-12.431 12.062-32.653 0-45.084a30.79 30.79 0 00-10.035-6.91 30.048 30.048 0 00-11.84-2.41h-.004zm0 4.225c6.856 0 13.712 2.699 18.959 8.1a27.669 27.669 0 015.822 8.962 28.327 28.327 0 012.045 10.576c0 3.63-.695 7.223-2.045 10.576a27.669 27.669 0 01-5.822 8.961 26.752 26.752 0 01-8.698 5.998 26.105 26.105 0 01-10.265 2.107c-3.523 0-7.01-.716-10.265-2.107a26.752 26.752 0 01-8.697-5.998 27.667 27.667 0 01-5.822-8.961 28.327 28.327 0 01-2.045-10.576c0-3.63.695-7.224 2.045-10.576a27.667 27.667 0 015.822-8.962 26.7 26.7 0 018.698-6 26.057 26.057 0 0110.268-2.1zm12.21 19.133c-.39.038-.762.19-1.072.438L31.143 39.716l-6.984-7.19a2.061 2.061 0 00-.669-.477 2.012 2.012 0 00-2.272.45 2.13 2.13 0 00-.451.698 2.181 2.181 0 00.014 1.643c.108.26.265.494.462.69l8.25 8.5a2.02 2.02 0 002.694.2l16.5-12.75c.35-.263.61-.632.745-1.056.134-.423.137-.88.006-1.305a2.125 2.125 0 00-.736-1.062 2.023 2.023 0 00-1.2-.42 1.995 1.995 0 00-.21 0l-.004-.004z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1500_4013">
          <path fill="#fff" d="M0 0H66V68H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export const FailIcon = ({ height, width }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 65 65"
    >
      <path
        stroke="#E91010"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M23 23l19 19M23 42l19-19"
      ></path>
      <circle
        cx="32.5"
        cy="32.5"
        r="30.5"
        stroke="#E91010"
        strokeWidth="4"
      ></circle>
    </svg>
  );
};
