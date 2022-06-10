
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)

let descriptionHeader= document.createElement('h3')
descriptionHeader.append('Description:')

let descriptionParagraph= document.createElement('p')
descriptionParagraph.append(`
    This gentle dog is aloof toward her owner, and never comes when called.
    She always acts as though any stranger she meets will harm her,
    and dislikes other animals.
`)

let feedingTimesHeader = document.createElement('h3')
feedingTimesHeader.append('Feeding Times:')

let feedingTimeList = document.createElement('ul')

let feedingTime1 = document.createElement('li')
feedingTime1.append('9:00 am')

let feedingTime2 = document.createElement('li')
feedingTime2.append('12:00 pm')

let feedingTime3 = document.createElement('li')
feedingTime3.append('5:00 pm')

feedingTimeList.append(
    feedingTime1,
    feedingTime2,
    feedingTime3,
)

dogDetails.append(
    descriptionHeader,
    descriptionParagraph,
    feedingTimesHeader,
    feedingTimeList
)

dogContent.append(dogImage, dogDetails)

content.append(header, dogContent)

