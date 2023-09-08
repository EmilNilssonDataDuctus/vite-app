export const myQueue = () => {
  const queue = []

  const isEmpty = () => {
    return queue.length === 0;
  }

  return {
    // isEmpty() {
    //   return queue.length === 0;
    // },
    enqueue(item) {
      queue.push(item)
    },
    dequeue() {
      if(isEmpty()) {
        return "Queue is empty"
      }
      return queue.shift()
    },
    front() {
      if (isEmpty()){
        return "Queue is empty"
      }
      return queue[0]
    },
    size() {
      return queue.length
    },
    queue() {
      return queue
    }
  }
}