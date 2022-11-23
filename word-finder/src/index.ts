import TaskWordFinder from './taskWordFinder'

const main = (): string => {
    const taskWordFinder = new TaskWordFinder()
    taskWordFinder.longestWordFinder('optonoceari')

    return taskWordFinder.longest
}

console.log(main())