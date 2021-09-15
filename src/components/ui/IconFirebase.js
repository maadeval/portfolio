import { styles } from 'config/styles'

const IconFirebase = (props, { color = styles.hightAccent }) => {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M5.239 15.063L7.21 2.381a.453.453 0 01.847-.145l2.12 3.98-4.938 8.847zM19.24 18.14L17.363 6.47a.454.454 0 00-.766-.247L4.76 18.14l6.55 3.691c.411.23.912.23 1.323 0l6.607-3.69zM13.917 7.955L12.4 5.052a.452.452 0 00-.8 0L4.939 16.99l8.978-9.034z"
        fill={color}
      />
    </svg>
  )
}

export default IconFirebase
