import { useEffect } from '@storybook/addons'

// Method to replace img src to use relative path
export const replaceImgPath = (StoryFn, context) => {
  // this is not a react hook but a storybook hook
  // so we can use it in stories
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const imgs = document.querySelectorAll('img')

    if (imgs.length) {
      imgs.forEach((img) => {
        const src = img.getAttribute('src')
        img.setAttribute('src', `.${src}`)
      })
    }
  }, [context.id])

  return StoryFn()
}
