self.addEventListener('push', event => {
  const data = event.data.json()
  const options = {
    ...data,
    image: "http://192.168.0.38:9000/still-image.jpg"
  }
  console.log('New notification', options)
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
})
