export const redirectTo = (history, to) => {
    return setTimeout(() => {
        history.push(to)
    }, 1000)
}
