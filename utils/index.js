/**
 * @param {function} func - callback
 * @param {number} ms - задержка
 * @param {boolean} [immediate] - вызвать сразу
 * @return {function} - функция
 */

export function debounce(func, ms, immediate) {
  let timeout

  return function executedFunction(...args) {
    const context = this

    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }

    const callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, ms)

    if (callNow) func.apply(context, args)
  }
}

/**
 * @return {Promise}
 */

export function flushPromises() {
  const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout
  return new Promise((resolve) => {
    scheduler(resolve)
  })
}
