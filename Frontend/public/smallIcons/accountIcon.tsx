const AccountIcon = ({ width, height }: { width: any; height: any }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.4444 36L20 40L15.5556 36H4.43353C1.98496 36 0 34.2148 0 32.0098V3.99018C0 1.78646 1.9836 0 4.43353 0H35.5664C38.0151 0 40 1.78524 40 3.99018V32.0098C40 34.2136 38.0164 36 35.5664 36H24.4444ZM7.45971 30H32.9944C30.1833 26.373 25.5131 24 20.2271 24C14.941 24 10.2707 26.373 7.45971 30ZM20 20C24.2956 20 27.7778 16.866 27.7778 13C27.7778 9.134 24.2956 6 20 6C15.7044 6 12.2222 9.134 12.2222 13C12.2222 16.866 15.7044 20 20 20Z"
        fill="black"
      />
    </svg>
  );
};
export default AccountIcon;