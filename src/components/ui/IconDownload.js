import { styles } from 'config/styles'

const IconDownload = (props, { color = styles.mediumAccent }) => {
  return (
    <svg fill="none" width={20} height={19} viewBox="0 0 20 19" {...props}>
      <path
        d="M10.323 17.513l2.083-1.667m-2.083 1.667v-7.5 7.5zm0 0l-2.084-1.667 2.084 1.667zM4.518 6.777a3.335 3.335 0 00.805 6.57h.833"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.514 5.128a4.584 4.584 0 00-8.996 1.65s.127.735.388 1.151"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.49 13.346a4.166 4.166 0 10-.975-8.218l-1.109.301"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconDownload
