/**
 * Check screen size and return a boolean.
 *
 * @name isDesktopScreenWidth
 * @param {function} func - Do something on screen resize.
 */
export const isDesktopScreenWidth = (func: any) => {
  window.addEventListener('resize', func);

  return () => window.removeEventListener('resize', func);
};

/**
 * Fades target element out of view.
 *
 * @name fadeOut
 * @param {string} target - The element fading out.
 * @param {integer} duration - The duration of the animation,
 * with default value 500.
 */
export const fadeOut = (target: any, duration = 500) => {
  target.style.transitionProperty = 'opacity';
  target.style.transitionDuration = `${duration}ms`;
  target.style.opacity = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
  const body = document.getElementsByTagName('body')[0];
  body.classList.remove('no-overflow');
};

/**
 * Fades target element into view.
 *
 * @name fadeIn
 * @param {string} target - The element fading in.
 * @param {integer} duration - The duration of the animation,
 * with default value 500.
 */
export const fadeIn = (target: any, duration = 500) => {
  // target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none') {
    display = 'flex';
  }
  target.style.display = display;
  target.style.transitionProperty = 'opacity';
  target.style.transitionDuration = `${duration}ms`;
  window.setTimeout(() => {
    target.style.opacity = 1;
  }, 100);
  window.setTimeout(() => {
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
  const body = document.getElementsByTagName('body')[0];
  body.classList.add('no-overflow');
};

/**
 * Toggle element between fadeIn and fadeOut
 * @name fadeToggle
 * @param  target the element to toggle
 * @param  duration the duration of the animation
 */
export const fadeToggle = (target: any, duration: number = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return fadeIn(target, duration);
  } else {
    return fadeOut(target, duration);
  }
};

/**
 * Function: slideUp. Slide target element out view
 * @param  target the element sliding up
 * @param  duration the duration of the animation
 */
export const slideUp = (target: any, duration = 500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = `${duration}ms`;
  target.style.boxSizing = 'border-box';
  target.style.height = `${target.offsetHeight}px`;
  target.style.overflow = 'hidden';
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.height = 0;
  }, 10);
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};

/**
 * Function: slideDown. Slide target element into view
 * @param  target the element sliding down
 * @param  duration the duration of the animation
 */
export const slideDown = (target: any, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none') {
    display = 'block';
  }
  target.style.display = display;
  const height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = `${duration}ms`;
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.height = `${height}px`;
  }, 10);
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};

/**
 * Function: slideToggle. Toggle element between slideDonw
 * and slideDown
 * @param  target the element to toggle
 * @param  duration the duration of the animation
 */
export const slideToggle = (target: any, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};

/**
 * Util function to convert a ISO date into a string
 * @name formatDateString
 * @param date
 */
export const formatDateString = (date: string = '') => {
  return new Date(date).toLocaleDateString();
};

/**
 * Filter array of objects by field matching a string value
 *
 * @name filterObjectArrayByField
 * @param arr to be filtered
 * @param field used to filter the array
 * @param value the field should match
 * @return the filtered array
 */
export const filterObjectArrayByField = (arr: any[], field: string, value: any) => {
  return arr.filter((item: any) => {
    return item[field].toLowerCase().includes(value);
  });
};

/**
 * Given a string, convert its value to boolean
 *
 * @param str to convert
 * @return a boolean
 */
export const convertStringToBoolean = (str: string) => {
  switch (str) {
    case "true":
      return true;
    default:
      return false;
  }
};

/**
 * Flatten class name array
 */
export const flattenClassNames = (defaultClass: string, modifierClass: string) => {
  return [
    defaultClass,
    modifierClass
  ].join(' ').trim();
}