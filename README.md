# Location-Based-Refunding-Smart-Contract

[![Contributors][contributors-shield]][contributors-url][![Forks][forks-shield]][forks-url][![Stargazers][stars-shield]][stars-url][![Issues][issues-shield]][issues-url][![MIT License][license-shield]][license-url][![LinkedIn][linkedin-shield]][linkedin-url]

This project is aimed to be used when one party, *for example an **employer***, agrees to pay another party, for *example an **employee***, for being present in a certain geographic area for a certain duration. The employee’s phone sends its GPS location to a smart contract at a certain interval. Based on the pre-agreed contract codified in an Ethereum smart contract, a cryptocurrency payment is executed **when all the agreed conditions are met**.  

If, at any point, the GPS sensor indicates that an employee is outside the range of the agreed GPS area, the contract state will be updated to indicate that it is out of compliance. The GPS data will be gathered from the participant's phone sensor through a companion mobile app. The app will not require much interaction once it is installed. It will send out geo-location data at random hours throughout the day.

## Components

### Smart-Contract

located at [smart-contract][smart-contract-folder]
This is a smart contract built using [Truffle][truffle-github]

### Mobile-App

located at [mobile-app][mobile-folder]
The mobile app is built using [React-Native][react-native]. It is heavily based on [this log-rock-blog][log-rock-blog] about accessing geo location data from a phone.

### Web/Mobile-App (Admin portal)

located at [admin-portal][web-folder]
This is the  dashboard where the ***employer*** would be able to add new coordinates or employees. It is built with [React][react].

## Contributors

![Contributors list](https://contrib.rocks/image?repo=Hen0k/Location-Based-Refunding-Smart-Contract)

Made with [contrib.rocks](https://contrib.rocks).
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Hen0k/Location-Based-Refunding-Smart-Contract.svg?style=for-the-badge
[contributors-url]: https://github.com/Hen0k/Location-Based-Refunding-Smart-Contract/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Hen0k/Location-Based-Refunding-Smart-Contract.svg?style=for-the-badge
[forks-url]: https://github.com/Hen0k/Location-Based-Refunding-Smart-Contract/network/members
[stars-shield]: https://img.shields.io/github/stars/Hen0k/Location-Based-Refunding-Smart-Contract.svg?style=for-the-badge
[stars-url]: https://github.com/Hen0k/Location-Based-Refunding-Smart-Contract/stargazers
[issues-shield]: https://img.shields.io/github/issues/Hen0k/Location-Based-Refunding-Smart-Contract.svg?style=for-the-badge
[issues-url]: https://github.com/Hen0k/Location-Based-Refunding-Smart-Contract/issues
[license-shield]: https://img.shields.io/github/license/Hen0k/Location-Based-Refunding-Smart-Contract.svg?style=for-the-badge
[license-url]: https://github.com/Hen0k/Location-Based-Refunding-Smart-Contract/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/henok-tilaye-b18840151/
[smart-contract-folder]: https://github.com/Hen0k/Location-Based-Refunding-Smart-Contract/tree/main/smart-contract
[mobile-folder]: https://github.com/Hen0k/Location-Based-Refunding-Smart-Contract/tree/main/payment-mobile-app/PaymentMobiledApp
[web-folder]: https://github.com/Hen0k/Location-Based-Refunding-Smart-Contract/tree/main/admin-portal
[truffle-github]: https://github.com/trufflesuite/truffle
[react-native]: https://reactnative.dev
[react]: https://reactjs.org/
[log-rock-blog]: https://blog.logrocket.com/react-native-geolocation-a-complete-tutorial
