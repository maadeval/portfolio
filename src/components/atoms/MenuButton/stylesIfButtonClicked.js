export const handleChangeStylesIfClicked = (isClicked) => {
  const IS_CLICKED = `
  background-color: transparent;

  ::before {
    transform: translateY(0) rotate(45deg);
  }
  ::after {
    transform: translateY(0) rotate(-45deg);
  }
  `

  return isClicked && IS_CLICKED
}
